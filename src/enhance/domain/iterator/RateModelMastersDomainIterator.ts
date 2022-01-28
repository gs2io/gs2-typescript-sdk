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
import { RateModelMaster } from "@/gs2/enhance/model";
import { RateModelMasterDomainCache } from "@/gs2/enhance/domain/cache/RateModelMasterDomainCache";
import { Gs2EnhanceRestClient } from "@/gs2/enhance";
import { DescribeRateModelMastersRequest } from "@/gs2/enhance/request";
import { DescribeRateModelMastersResult } from "@/gs2/enhance/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeRateModelMastersIterator {
    private rateModelMasterCache: RateModelMasterDomainCache;
    private client: Gs2EnhanceRestClient;
    private namespaceName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: RateModelMaster[]|null;

    private fetchSize: number|null;

    public constructor(
        rateModelMasterCache: RateModelMasterDomainCache,
        client: Gs2EnhanceRestClient,
        namespaceName: string
    ) {
        this.rateModelMasterCache = rateModelMasterCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeRateModelMastersResult = await this.client.describeRateModelMasters(
            new DescribeRateModelMastersRequest()
                .withNamespaceName(this.namespaceName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.rateModelMasterCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<RateModelMaster> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<RateModelMaster>(() => {});
        }
        let ret: RateModelMaster = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
