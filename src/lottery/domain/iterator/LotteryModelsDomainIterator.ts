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
import { LotteryModel } from "@/gs2/lottery/model";
import { LotteryModelDomainCache } from "@/gs2/lottery/domain/cache/LotteryModelDomainCache";
import { Gs2LotteryRestClient } from "@/gs2/lottery";
import { DescribeLotteryModelsRequest } from "@/gs2/lottery/request";
import { DescribeLotteryModelsResult } from "@/gs2/lottery/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeLotteryModelsIterator {
    private lotteryModelCache: LotteryModelDomainCache;
    private client: Gs2LotteryRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: LotteryModel[]|null;

    private fetchSize: number|null;

    public constructor(
        lotteryModelCache: LotteryModelDomainCache,
        client: Gs2LotteryRestClient,
        namespaceName: string
    ) {
        this.lotteryModelCache = lotteryModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeLotteryModelsResult = await this.client.describeLotteryModels(
            new DescribeLotteryModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.lotteryModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<LotteryModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<LotteryModel>(() => {});
        }
        let ret: LotteryModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
