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

import { Gs2RestSession } from "@/gs2/core/model";
import { Gs2RankingRestClient } from "@/gs2/ranking";
import { RankingDomain } from "@/gs2/ranking/domain/Ranking";
import { RankingAccessTokenDomain } from "@/gs2/ranking/domain/RankingAccessToken";
import { ScoreDomain } from "@/gs2/ranking/domain/Score";
import { ScoreAccessTokenDomain } from "@/gs2/ranking/domain/ScoreAccessToken";
import { SubscribeDomain } from "@/gs2/ranking/domain/Subscribe";
import { SubscribeAccessTokenDomain } from "@/gs2/ranking/domain/SubscribeAccessToken";
import { NamespaceDomainCache } from "@/gs2/ranking/domain/cache/NamespaceDomainCache";
import { CategoryModelDomainCache } from "@/gs2/ranking/domain/cache/CategoryModelDomainCache";
import { CategoryModelMasterDomainCache } from "@/gs2/ranking/domain/cache/CategoryModelMasterDomainCache";
import { SubscribeUserDomainCache } from "@/gs2/ranking/domain/cache/SubscribeUserDomainCache";
import { ScoreDomainCache } from "@/gs2/ranking/domain/cache/ScoreDomainCache";
import { RankingDomainCache } from "@/gs2/ranking/domain/cache/RankingDomainCache";
import { PutScoreRequest } from "@/gs2/ranking/request";
import { PutScoreResult } from "@/gs2/ranking/result";
import { PutScoreByUserIdRequest } from "@/gs2/ranking/request";
import { PutScoreByUserIdResult } from "@/gs2/ranking/result";
import { DescribeSubscribesByCategoryNameIterator } from "@/gs2/ranking/domain/iterator/SubscribesByCategoryNameDomainIterator";
import { DescribeSubscribesByCategoryNameAndUserIdIterator } from "@/gs2/ranking/domain/iterator/SubscribesByCategoryNameAndUserIdDomainIterator";
import { DescribeScoresIterator } from "@/gs2/ranking/domain/iterator/ScoresDomainIterator";
import { DescribeScoresByUserIdIterator } from "@/gs2/ranking/domain/iterator/ScoresByUserIdDomainIterator";
import { DescribeRankingsIterator } from "@/gs2/ranking/domain/iterator/RankingsDomainIterator";
import { DescribeRankingsByUserIdIterator } from "@/gs2/ranking/domain/iterator/RankingsByUserIdDomainIterator";
import { DescribeNearRankingsIterator } from "@/gs2/ranking/domain/iterator/NearRankingsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2RankingRestClient;
    namespaceName: string;
    userId: string;
    scoreCache: ScoreDomainCache;
    rankingCache: RankingDomainCache;
    subscribeUserCache: SubscribeUserDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2RankingRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.scoreCache = new ScoreDomainCache();
        this.rankingCache = new RankingDomainCache();
        this.subscribeUserCache = new SubscribeUserDomainCache();
    }

    public async putScore(
        request: PutScoreByUserIdRequest
    ): Promise<PutScoreByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: PutScoreByUserIdResult = await this.client.putScoreByUserId(
            request
        );
        return r;
    }

    public subscribeUsers(
        categoryName: string
    ): DescribeSubscribesByCategoryNameAndUserIdIterator {
        return new DescribeSubscribesByCategoryNameAndUserIdIterator(
            this.subscribeUserCache,
            this.client,
            this.namespaceName,
            categoryName,
            this.userId
        );
    }

    public scores(
        categoryName: string,
        scorerUserId: string
    ): DescribeScoresByUserIdIterator {
        return new DescribeScoresByUserIdIterator(
            this.scoreCache,
            this.client,
            this.namespaceName,
            categoryName,
            this.userId,
            scorerUserId
        );
    }

    public rankings(
        categoryName: string
    ): DescribeRankingsByUserIdIterator {
        return new DescribeRankingsByUserIdIterator(
            this.rankingCache,
            this.client,
            this.namespaceName,
            categoryName,
            this.userId
        );
    }

    public nearRankings(
        categoryName: string,
        score: number
    ): DescribeNearRankingsIterator {
        return new DescribeNearRankingsIterator(
            this.rankingCache,
            this.client,
            this.namespaceName,
            categoryName,
            score
        );
    }

    public ranking(
        categoryName: string|null
    ): RankingDomain {
        return new RankingDomain(
            this.session,
            this.rankingCache,
            this.namespaceName,
            this.userId,
            categoryName
        );
    }

    public score(
        categoryName: string,
        scorerUserId: string,
        uniqueId: string
    ): ScoreDomain {
        return new ScoreDomain(
            this.session,
            this.scoreCache,
            this.namespaceName,
            this.userId,
            categoryName,
            scorerUserId,
            uniqueId
        );
    }

    public subscribe(
        categoryName: string
    ): SubscribeDomain {
        return new SubscribeDomain(
            this.session,
            this.namespaceName,
            this.userId,
            categoryName
        );
    }

}
