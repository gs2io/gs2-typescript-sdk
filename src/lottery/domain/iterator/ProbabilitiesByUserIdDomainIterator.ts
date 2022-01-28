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
import { Probability } from "@/gs2/lottery/model";
import { ProbabilityDomainCache } from "@/gs2/lottery/domain/cache/ProbabilityDomainCache";
import { Gs2LotteryRestClient } from "@/gs2/lottery";
import { DescribeProbabilitiesByUserIdRequest } from "@/gs2/lottery/request";
import { DescribeProbabilitiesByUserIdResult } from "@/gs2/lottery/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeProbabilitiesByUserIdIterator {
    private probabilityCache: ProbabilityDomainCache;
    private client: Gs2LotteryRestClient;
    private namespaceName: string;
    private lotteryName: string;
    private userId: string;
    private last: boolean;
    private result: Probability[]|null;

    private fetchSize: number|null;

    public constructor(
        probabilityCache: ProbabilityDomainCache,
        client: Gs2LotteryRestClient,
        namespaceName: string,
        lotteryName: string,
        userId: string
    ) {
        this.probabilityCache = probabilityCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.lotteryName = lotteryName;
        this.userId = userId;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeProbabilitiesByUserIdResult = await this.client.describeProbabilitiesByUserId(
            new DescribeProbabilitiesByUserIdRequest()
                .withNamespaceName(this.namespaceName)
                .withLotteryName(this.lotteryName)
                .withUserId(this.userId)
        );
        this.probabilityCache.update(r.getItems()!);
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Probability> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Probability>(() => {});
        }
        let ret: Probability = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
