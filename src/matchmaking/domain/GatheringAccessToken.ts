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
import { UpdateGatheringRequest } from "@/gs2/matchmaking/request";
import { UpdateGatheringResult } from "@/gs2/matchmaking/result";
import { UpdateGatheringByUserIdRequest } from "@/gs2/matchmaking/request";
import { UpdateGatheringByUserIdResult } from "@/gs2/matchmaking/result";
import { GetGatheringRequest } from "@/gs2/matchmaking/request";
import { GetGatheringResult } from "@/gs2/matchmaking/result";
import { CancelMatchmakingRequest } from "@/gs2/matchmaking/request";
import { CancelMatchmakingResult } from "@/gs2/matchmaking/result";
import { CancelMatchmakingByUserIdRequest } from "@/gs2/matchmaking/request";
import { CancelMatchmakingByUserIdResult } from "@/gs2/matchmaking/result";
import { AccessToken } from "@/gs2/auth/model";

export class GatheringAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2MatchmakingRestClient;
    gatheringCache: GatheringDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    gatheringName: string;

    public constructor(
        session: Gs2RestSession,
        gatheringCache: GatheringDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        gatheringName: string
    ) {
        this.session = session;
        this.client = new Gs2MatchmakingRestClient(
            session
        );
        this.gatheringCache = gatheringCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.gatheringName = gatheringName;
    }

    public async update(
        request: UpdateGatheringRequest
    ): Promise<UpdateGatheringResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setGatheringName(this.gatheringName);
        let r: UpdateGatheringResult = await this.client.updateGathering(
            request
        );
        this.gatheringCache.update(r.getItem()!);
        return r;
    }

    public async cancelMatchmaking(
        request: CancelMatchmakingRequest
    ): Promise<CancelMatchmakingResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setGatheringName(this.gatheringName);
        let r: CancelMatchmakingResult = await this.client.cancelMatchmaking(
            request
        );
        this.gatheringCache.update(r.getItem()!);
        return r;
    }

}
