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
import { InventoryModel } from "@/gs2/inventory/model";
import { InventoryModelDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelDomainCache";
import { Gs2InventoryRestClient } from "@/gs2/inventory";
import { DescribeInventoryModelsRequest } from "@/gs2/inventory/request";
import { DescribeInventoryModelsResult } from "@/gs2/inventory/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeInventoryModelsIterator {
    private inventoryModelCache: InventoryModelDomainCache;
    private client: Gs2InventoryRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: InventoryModel[]|null;

    private fetchSize: number|null;

    public constructor(
        inventoryModelCache: InventoryModelDomainCache,
        client: Gs2InventoryRestClient,
        namespaceName: string
    ) {
        this.inventoryModelCache = inventoryModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeInventoryModelsResult = await this.client.describeInventoryModels(
            new DescribeInventoryModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.inventoryModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<InventoryModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<InventoryModel>(() => {});
        }
        let ret: InventoryModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
