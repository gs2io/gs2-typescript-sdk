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
import { GetBallotRequest } from "@/gs2/matchmaking/request";
import { GetBallotResult } from "@/gs2/matchmaking/result";
import { GetBallotByUserIdRequest } from "@/gs2/matchmaking/request";
import { GetBallotByUserIdResult } from "@/gs2/matchmaking/result";
import { AccessToken } from "@/gs2/auth/model";

export class VoteAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2MatchmakingRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    ratingName: string;
    gatheringName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken,
        ratingName: string,
        gatheringName: string
    ) {
        this.session = session;
        this.client = new Gs2MatchmakingRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.ratingName = ratingName;
        this.gatheringName = gatheringName;
    }

    public async getBallot(
        request: GetBallotRequest
    ): Promise<GetBallotResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setRatingName(this.ratingName);
        request.setGatheringName(this.gatheringName);
        let r: GetBallotResult = await this.client.getBallot(
            request
        );
        return r;
    }

}
