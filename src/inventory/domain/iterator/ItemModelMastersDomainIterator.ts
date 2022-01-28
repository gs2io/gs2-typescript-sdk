/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
 * Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import { ItemModelMaster } from "@/gs2/inventory/model";
import { ItemModelMasterDomainCache } from "@/gs2/inventory/domain/cache/ItemModelMasterDomainCache";
import { Gs2InventoryRestClient } from "@/gs2/inventory";
import { DescribeItemModelMastersRequest } from "@/gs2/inventory/request";
import { DescribeItemModelMastersResult } from "@/gs2/inventory/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeItemModelMastersIterator {
    private itemModelMasterCache: ItemModelMasterDomainCache;
    private client: Gs2InventoryRestClient;
    private namespaceName: string;
    private inventoryName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: ItemModelMaster[]|null;

    private fetchSize: number|null;

    public constructor(
        itemModelMasterCache: ItemModelMasterDomainCache,
        client: Gs2InventoryRestClient,
        namespaceName: string,
        inventoryName: string
    ) {
        this.itemModelMasterCache = itemModelMasterCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeItemModelMastersResult = await this.client.describeItemModelMasters(
            new DescribeItemModelMastersRequest()
                .withNamespaceName(this.namespaceName)
                .withInventoryName(this.inventoryName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.itemModelMasterCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<ItemModelMaster> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<ItemModelMaster>(() => {});
        }
        let ret: ItemModelMaster = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
