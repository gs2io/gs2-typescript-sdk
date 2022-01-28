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
import { MaxStaminaTableMaster } from "@/gs2/stamina/model";
import { MaxStaminaTableMasterDomainCache } from "@/gs2/stamina/domain/cache/MaxStaminaTableMasterDomainCache";
import { Gs2StaminaRestClient } from "@/gs2/stamina";
import { DescribeMaxStaminaTableMastersRequest } from "@/gs2/stamina/request";
import { DescribeMaxStaminaTableMastersResult } from "@/gs2/stamina/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeMaxStaminaTableMastersIterator {
    private maxStaminaTableMasterCache: MaxStaminaTableMasterDomainCache;
    private client: Gs2StaminaRestClient;
    private namespaceName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: MaxStaminaTableMaster[]|null;

    private fetchSize: number|null;

    public constructor(
        maxStaminaTableMasterCache: MaxStaminaTableMasterDomainCache,
        client: Gs2StaminaRestClient,
        namespaceName: string
    ) {
        this.maxStaminaTableMasterCache = maxStaminaTableMasterCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeMaxStaminaTableMastersResult = await this.client.describeMaxStaminaTableMasters(
            new DescribeMaxStaminaTableMastersRequest()
                .withNamespaceName(this.namespaceName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.maxStaminaTableMasterCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<MaxStaminaTableMaster> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<MaxStaminaTableMaster>(() => {});
        }
        let ret: MaxStaminaTableMaster = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
