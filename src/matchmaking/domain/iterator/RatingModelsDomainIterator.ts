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
import { RatingModel } from "@/gs2/matchmaking/model";
import { RatingModelDomainCache } from "@/gs2/matchmaking/domain/cache/RatingModelDomainCache";
import { Gs2MatchmakingRestClient } from "@/gs2/matchmaking";
import { DescribeRatingModelsRequest } from "@/gs2/matchmaking/request";
import { DescribeRatingModelsResult } from "@/gs2/matchmaking/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeRatingModelsIterator {
    private ratingModelCache: RatingModelDomainCache;
    private client: Gs2MatchmakingRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: RatingModel[]|null;

    private fetchSize: number|null;

    public constructor(
        ratingModelCache: RatingModelDomainCache,
        client: Gs2MatchmakingRestClient,
        namespaceName: string
    ) {
        this.ratingModelCache = ratingModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeRatingModelsResult = await this.client.describeRatingModels(
            new DescribeRatingModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.ratingModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<RatingModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<RatingModel>(() => {});
        }
        let ret: RatingModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
