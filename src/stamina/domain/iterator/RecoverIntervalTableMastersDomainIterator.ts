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
import { RecoverIntervalTableMaster } from "@/gs2/stamina/model";
import { RecoverIntervalTableMasterDomainCache } from "@/gs2/stamina/domain/cache/RecoverIntervalTableMasterDomainCache";
import { Gs2StaminaRestClient } from "@/gs2/stamina";
import { DescribeRecoverIntervalTableMastersRequest } from "@/gs2/stamina/request";
import { DescribeRecoverIntervalTableMastersResult } from "@/gs2/stamina/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeRecoverIntervalTableMastersIterator {
    private recoverIntervalTableMasterCache: RecoverIntervalTableMasterDomainCache;
    private client: Gs2StaminaRestClient;
    private namespaceName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: RecoverIntervalTableMaster[]|null;

    private fetchSize: number|null;

    public constructor(
        recoverIntervalTableMasterCache: RecoverIntervalTableMasterDomainCache,
        client: Gs2StaminaRestClient,
        namespaceName: string
    ) {
        this.recoverIntervalTableMasterCache = recoverIntervalTableMasterCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeRecoverIntervalTableMastersResult = await this.client.describeRecoverIntervalTableMasters(
            new DescribeRecoverIntervalTableMastersRequest()
                .withNamespaceName(this.namespaceName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.recoverIntervalTableMasterCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<RecoverIntervalTableMaster> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<RecoverIntervalTableMaster>(() => {});
        }
        let ret: RecoverIntervalTableMaster = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
