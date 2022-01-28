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
import { NamespaceDomainCache } from "@/gs2/ranking/domain/cache/NamespaceDomainCache";
import { CategoryModelDomainCache } from "@/gs2/ranking/domain/cache/CategoryModelDomainCache";
import { CategoryModelMasterDomainCache } from "@/gs2/ranking/domain/cache/CategoryModelMasterDomainCache";
import { SubscribeUserDomainCache } from "@/gs2/ranking/domain/cache/SubscribeUserDomainCache";
import { ScoreDomainCache } from "@/gs2/ranking/domain/cache/ScoreDomainCache";
import { RankingDomainCache } from "@/gs2/ranking/domain/cache/RankingDomainCache";
import { GetScoreRequest } from "@/gs2/ranking/request";
import { GetScoreResult } from "@/gs2/ranking/result";
import { GetScoreByUserIdRequest } from "@/gs2/ranking/request";
import { GetScoreByUserIdResult } from "@/gs2/ranking/result";
import { AccessToken } from "@/gs2/auth/model";

export class ScoreAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2RankingRestClient;
    scoreCache: ScoreDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    categoryName: string;
    scorerUserId: string;
    uniqueId: string;

    public constructor(
        session: Gs2RestSession,
        scoreCache: ScoreDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        categoryName: string,
        scorerUserId: string,
        uniqueId: string
    ) {
        this.session = session;
        this.client = new Gs2RankingRestClient(
            session
        );
        this.scoreCache = scoreCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.categoryName = categoryName;
        this.scorerUserId = scorerUserId;
        this.uniqueId = uniqueId;
    }

    public async load(
        request: GetScoreRequest
    ): Promise<GetScoreResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setCategoryName(this.categoryName);
        request.setScorerUserId(this.scorerUserId);
        request.setUniqueId(this.uniqueId);
        let r: GetScoreResult = await this.client.getScore(
            request
        );
        this.scoreCache.update(r.getItem()!);
        return r;
    }

}
