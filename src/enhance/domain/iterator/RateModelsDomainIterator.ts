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
import { RateModel } from "@/gs2/enhance/model";
import { RateModelDomainCache } from "@/gs2/enhance/domain/cache/RateModelDomainCache";
import { Gs2EnhanceRestClient } from "@/gs2/enhance";
import { DescribeRateModelsRequest } from "@/gs2/enhance/request";
import { DescribeRateModelsResult } from "@/gs2/enhance/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeRateModelsIterator {
    private rateModelCache: RateModelDomainCache;
    private client: Gs2EnhanceRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: RateModel[]|null;

    private fetchSize: number|null;

    public constructor(
        rateModelCache: RateModelDomainCache,
        client: Gs2EnhanceRestClient,
        namespaceName: string
    ) {
        this.rateModelCache = rateModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeRateModelsResult = await this.client.describeRateModels(
            new DescribeRateModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.rateModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<RateModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<RateModel>(() => {});
        }
        let ret: RateModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
