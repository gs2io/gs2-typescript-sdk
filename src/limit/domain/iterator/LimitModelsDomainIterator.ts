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
import { LimitModel } from "@/gs2/limit/model";
import { LimitModelDomainCache } from "@/gs2/limit/domain/cache/LimitModelDomainCache";
import { Gs2LimitRestClient } from "@/gs2/limit";
import { DescribeLimitModelsRequest } from "@/gs2/limit/request";
import { DescribeLimitModelsResult } from "@/gs2/limit/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeLimitModelsIterator {
    private limitModelCache: LimitModelDomainCache;
    private client: Gs2LimitRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: LimitModel[]|null;

    private fetchSize: number|null;

    public constructor(
        limitModelCache: LimitModelDomainCache,
        client: Gs2LimitRestClient,
        namespaceName: string
    ) {
        this.limitModelCache = limitModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeLimitModelsResult = await this.client.describeLimitModels(
            new DescribeLimitModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.limitModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<LimitModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<LimitModel>(() => {});
        }
        let ret: LimitModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
