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
import { Gs2InventoryRestClient } from "@/gs2/inventory";
import { DescribeReferenceOfRequest } from "@/gs2/inventory/request";
import { DescribeReferenceOfResult } from "@/gs2/inventory/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeReferenceOfIterator {
    private client: Gs2InventoryRestClient;
    private namespaceName: string;
    private inventoryName: string;
    private accessToken: AccessToken|null;
    private itemName: string;
    private itemSetName: string;
    private last: boolean;
    private result: string[]|null;

    private fetchSize: number|null;

    public constructor(
        client: Gs2InventoryRestClient,
        namespaceName: string,
        inventoryName: string,
        accessToken: AccessToken|null,
        itemName: string,
        itemSetName: string
    ) {
        this.client = client;
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
        this.accessToken = accessToken;
        this.itemName = itemName;
        this.itemSetName = itemSetName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeReferenceOfResult = await this.client.describeReferenceOf(
            new DescribeReferenceOfRequest()
                .withNamespaceName(this.namespaceName)
                .withInventoryName(this.inventoryName)
                .withAccessToken(this.accessToken != null ? this.accessToken.getToken() : null)
                .withItemName(this.itemName)
                .withItemSetName(this.itemSetName)
        );
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<string> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<string>(() => {});
        }
        let ret: string = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
