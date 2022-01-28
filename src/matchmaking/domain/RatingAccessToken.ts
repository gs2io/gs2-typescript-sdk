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
import { Gs2MatchmakingRestClient } from "@/gs2/matchmaking";
import { NamespaceDomainCache } from "@/gs2/matchmaking/domain/cache/NamespaceDomainCache";
import { GatheringDomainCache } from "@/gs2/matchmaking/domain/cache/GatheringDomainCache";
import { RatingModelMasterDomainCache } from "@/gs2/matchmaking/domain/cache/RatingModelMasterDomainCache";
import { RatingModelDomainCache } from "@/gs2/matchmaking/domain/cache/RatingModelDomainCache";
import { RatingDomainCache } from "@/gs2/matchmaking/domain/cache/RatingDomainCache";
import { GetRatingRequest } from "@/gs2/matchmaking/request";
import { GetRatingResult } from "@/gs2/matchmaking/result";
import { GetRatingByUserIdRequest } from "@/gs2/matchmaking/request";
import { GetRatingByUserIdResult } from "@/gs2/matchmaking/result";
import { DeleteRatingRequest } from "@/gs2/matchmaking/request";
import { DeleteRatingResult } from "@/gs2/matchmaking/result";
import { AccessToken } from "@/gs2/auth/model";

export class RatingAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2MatchmakingRestClient;
    ratingCache: RatingDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    ratingName: string;

    public constructor(
        session: Gs2RestSession,
        ratingCache: RatingDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        ratingName: string
    ) {
        this.session = session;
        this.client = new Gs2MatchmakingRestClient(
            session
        );
        this.ratingCache = ratingCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.ratingName = ratingName;
    }

    public async load(
        request: GetRatingRequest
    ): Promise<GetRatingResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setRatingName(this.ratingName);
        let r: GetRatingResult = await this.client.getRating(
            request
        );
        this.ratingCache.update(r.getItem()!);
        return r;
    }

}
