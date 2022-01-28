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
import { GetRankingRequest } from "@/gs2/ranking/request";
import { GetRankingResult } from "@/gs2/ranking/result";
import { GetRankingByUserIdRequest } from "@/gs2/ranking/request";
import { GetRankingByUserIdResult } from "@/gs2/ranking/result";
import { AccessToken } from "@/gs2/auth/model";

export class RankingDomain {
    session: Gs2RestSession;
    client: Gs2RankingRestClient;
    rankingCache: RankingDomainCache;
    namespaceName: string;
    userId: string;
    categoryName: string|null;

    public constructor(
        session: Gs2RestSession,
        rankingCache: RankingDomainCache,
        namespaceName: string,
        userId: string,
        categoryName: string|null
    ) {
        this.session = session;
        this.client = new Gs2RankingRestClient(
            session
        );
        this.rankingCache = rankingCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.categoryName = categoryName;
    }

    public async load(
        request: GetRankingByUserIdRequest
    ): Promise<GetRankingByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setCategoryName(this.categoryName);
        let r: GetRankingByUserIdResult = await this.client.getRankingByUserId(
            request
        );
        this.rankingCache.update(r.getItem()!);
        return r;
    }

}
