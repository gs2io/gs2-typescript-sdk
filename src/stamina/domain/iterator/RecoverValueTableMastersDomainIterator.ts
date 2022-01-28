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
import { RecoverValueTableMaster } from "@/gs2/stamina/model";
import { RecoverValueTableMasterDomainCache } from "@/gs2/stamina/domain/cache/RecoverValueTableMasterDomainCache";
import { Gs2StaminaRestClient } from "@/gs2/stamina";
import { DescribeRecoverValueTableMastersRequest } from "@/gs2/stamina/request";
import { DescribeRecoverValueTableMastersResult } from "@/gs2/stamina/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeRecoverValueTableMastersIterator {
    private recoverValueTableMasterCache: RecoverValueTableMasterDomainCache;
    private client: Gs2StaminaRestClient;
    private namespaceName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: RecoverValueTableMaster[]|null;

    private fetchSize: number|null;

    public constructor(
        recoverValueTableMasterCache: RecoverValueTableMasterDomainCache,
        client: Gs2StaminaRestClient,
        namespaceName: string
    ) {
        this.recoverValueTableMasterCache = recoverValueTableMasterCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeRecoverValueTableMastersResult = await this.client.describeRecoverValueTableMasters(
            new DescribeRecoverValueTableMastersRequest()
                .withNamespaceName(this.namespaceName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.recoverValueTableMasterCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<RecoverValueTableMaster> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<RecoverValueTableMaster>(() => {});
        }
        let ret: RecoverValueTableMaster = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
