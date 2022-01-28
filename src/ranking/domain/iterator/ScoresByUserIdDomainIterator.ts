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
import { Score } from "@/gs2/ranking/model";
import { ScoreDomainCache } from "@/gs2/ranking/domain/cache/ScoreDomainCache";
import { Gs2RankingRestClient } from "@/gs2/ranking";
import { DescribeScoresByUserIdRequest } from "@/gs2/ranking/request";
import { DescribeScoresByUserIdResult } from "@/gs2/ranking/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeScoresByUserIdIterator {
    private scoreCache: ScoreDomainCache;
    private client: Gs2RankingRestClient;
    private namespaceName: string;
    private categoryName: string;
    private userId: string;
    private scorerUserId: string;
    private pageToken: string|null;
    private last: boolean;
    private result: Score[]|null;

    private fetchSize: number|null;

    public constructor(
        scoreCache: ScoreDomainCache,
        client: Gs2RankingRestClient,
        namespaceName: string,
        categoryName: string,
        userId: string,
        scorerUserId: string
    ) {
        this.scoreCache = scoreCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.categoryName = categoryName;
        this.userId = userId;
        this.scorerUserId = scorerUserId;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeScoresByUserIdResult = await this.client.describeScoresByUserId(
            new DescribeScoresByUserIdRequest()
                .withNamespaceName(this.namespaceName)
                .withCategoryName(this.categoryName)
                .withUserId(this.userId)
                .withScorerUserId(this.scorerUserId)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.scoreCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Score> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Score>(() => {});
        }
        let ret: Score = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
