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

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2RankingRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    scoreCache: ScoreDomainCache;
    rankingCache: RankingDomainCache;
    subscribeUserCache: SubscribeUserDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2RankingRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.scoreCache = new ScoreDomainCache();
        this.rankingCache = new RankingDomainCache();
        this.subscribeUserCache = new SubscribeUserDomainCache();
    }

    public async putScore(
        request: PutScoreRequest
    ): Promise<PutScoreResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: PutScoreResult = await this.client.putScore(
            request
        );
        return r;
    }

    public subscribeUsers(
        categoryName: string
    ): DescribeSubscribesByCategoryNameIterator {
        return new DescribeSubscribesByCategoryNameIterator(
            this.subscribeUserCache,
            this.client,
            this.namespaceName,
            categoryName,
            this.accessToken
        );
    }

    public scores(
        categoryName: string,
        scorerUserId: string
    ): DescribeScoresIterator {
        return new DescribeScoresIterator(
            this.scoreCache,
            this.client,
            this.namespaceName,
            categoryName,
            this.accessToken,
            scorerUserId
        );
    }

    public rankings(
        categoryName: string
    ): DescribeRankingsIterator {
        return new DescribeRankingsIterator(
            this.rankingCache,
            this.client,
            this.namespaceName,
            categoryName,
            this.accessToken
        );
    }

    public ranking(
        categoryName: string|null
    ): RankingAccessTokenDomain {
        return new RankingAccessTokenDomain(
            this.session,
            this.rankingCache,
            this.namespaceName,
            this.accessToken,
            categoryName
        );
    }

    public score(
        categoryName: string,
        scorerUserId: string,
        uniqueId: string
    ): ScoreAccessTokenDomain {
        return new ScoreAccessTokenDomain(
            this.session,
            this.scoreCache,
            this.namespaceName,
            this.accessToken,
            categoryName,
            scorerUserId,
            uniqueId
        );
    }

    public subscribe(
        categoryName: string
    ): SubscribeAccessTokenDomain {
        return new SubscribeAccessTokenDomain(
            this.session,
            this.namespaceName,
            this.accessToken,
            categoryName
        );
    }

}
