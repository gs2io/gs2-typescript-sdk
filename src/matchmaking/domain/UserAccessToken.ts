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
import { RatingDomain } from "@/gs2/matchmaking/domain/Rating";
import { RatingAccessTokenDomain } from "@/gs2/matchmaking/domain/RatingAccessToken";
import { GatheringDomain } from "@/gs2/matchmaking/domain/Gathering";
import { GatheringAccessTokenDomain } from "@/gs2/matchmaking/domain/GatheringAccessToken";
import { VoteDomain } from "@/gs2/matchmaking/domain/Vote";
import { VoteAccessTokenDomain } from "@/gs2/matchmaking/domain/VoteAccessToken";
import { NamespaceDomainCache } from "@/gs2/matchmaking/domain/cache/NamespaceDomainCache";
import { GatheringDomainCache } from "@/gs2/matchmaking/domain/cache/GatheringDomainCache";
import { RatingModelMasterDomainCache } from "@/gs2/matchmaking/domain/cache/RatingModelMasterDomainCache";
import { RatingModelDomainCache } from "@/gs2/matchmaking/domain/cache/RatingModelDomainCache";
import { RatingDomainCache } from "@/gs2/matchmaking/domain/cache/RatingDomainCache";
import { CreateGatheringRequest } from "@/gs2/matchmaking/request";
import { CreateGatheringResult } from "@/gs2/matchmaking/result";
import { CreateGatheringByUserIdRequest } from "@/gs2/matchmaking/request";
import { CreateGatheringByUserIdResult } from "@/gs2/matchmaking/result";
import { DoMatchmakingRequest } from "@/gs2/matchmaking/request";
import { DoMatchmakingResult } from "@/gs2/matchmaking/result";
import { DoMatchmakingByUserIdRequest } from "@/gs2/matchmaking/request";
import { DoMatchmakingByUserIdResult } from "@/gs2/matchmaking/result";
import { DescribeGatheringsIterator } from "@/gs2/matchmaking/domain/iterator/GatheringsDomainIterator";
import { DescribeRatingsIterator } from "@/gs2/matchmaking/domain/iterator/RatingsDomainIterator";
import { DescribeRatingsByUserIdIterator } from "@/gs2/matchmaking/domain/iterator/RatingsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2MatchmakingRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    gatheringCache: GatheringDomainCache;
    ratingCache: RatingDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2MatchmakingRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.gatheringCache = new GatheringDomainCache();
        this.ratingCache = new RatingDomainCache();
    }

    public async createGathering(
        request: CreateGatheringRequest
    ): Promise<CreateGatheringResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: CreateGatheringResult = await this.client.createGathering(
            request
        );
        return r;
    }

    public async doMatchmaking(
        request: DoMatchmakingRequest
    ): Promise<DoMatchmakingResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: DoMatchmakingResult = await this.client.doMatchmaking(
            request
        );
        return r;
    }

    public ratings(
    ): DescribeRatingsIterator {
        return new DescribeRatingsIterator(
            this.ratingCache,
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

    public rating(
        ratingName: string
    ): RatingAccessTokenDomain {
        return new RatingAccessTokenDomain(
            this.session,
            this.ratingCache,
            this.namespaceName,
            this.accessToken,
            ratingName
        );
    }

    public gathering(
        gatheringName: string
    ): GatheringAccessTokenDomain {
        return new GatheringAccessTokenDomain(
            this.session,
            this.gatheringCache,
            this.namespaceName,
            this.accessToken,
            gatheringName
        );
    }

    public vote(
        ratingName: string,
        gatheringName: string
    ): VoteAccessTokenDomain {
        return new VoteAccessTokenDomain(
            this.session,
            this.namespaceName,
            this.accessToken,
            ratingName,
            gatheringName
        );
    }

}
