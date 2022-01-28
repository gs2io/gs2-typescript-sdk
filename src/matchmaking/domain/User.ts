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

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2MatchmakingRestClient;
    namespaceName: string;
    userId: string;
    gatheringCache: GatheringDomainCache;
    ratingCache: RatingDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2MatchmakingRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.gatheringCache = new GatheringDomainCache();
        this.ratingCache = new RatingDomainCache();
    }

    public async createGathering(
        request: CreateGatheringByUserIdRequest
    ): Promise<CreateGatheringByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: CreateGatheringByUserIdResult = await this.client.createGatheringByUserId(
            request
        );
        return r;
    }

    public async doMatchmaking(
        request: DoMatchmakingByUserIdRequest
    ): Promise<DoMatchmakingByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: DoMatchmakingByUserIdResult = await this.client.doMatchmakingByUserId(
            request
        );
        return r;
    }

    public gatherings(
    ): DescribeGatheringsIterator {
        return new DescribeGatheringsIterator(
            this.gatheringCache,
            this.client,
            this.namespaceName
        );
    }

    public ratings(
    ): DescribeRatingsByUserIdIterator {
        return new DescribeRatingsByUserIdIterator(
            this.ratingCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

    public rating(
        ratingName: string
    ): RatingDomain {
        return new RatingDomain(
            this.session,
            this.ratingCache,
            this.namespaceName,
            this.userId,
            ratingName
        );
    }

    public gathering(
        gatheringName: string
    ): GatheringDomain {
        return new GatheringDomain(
            this.session,
            this.gatheringCache,
            this.namespaceName,
            this.userId,
            gatheringName
        );
    }

    public vote(
        ratingName: string,
        gatheringName: string
    ): VoteDomain {
        return new VoteDomain(
            this.session,
            this.namespaceName,
            this.userId,
            ratingName,
            gatheringName
        );
    }

}
