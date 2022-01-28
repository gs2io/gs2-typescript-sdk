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
import { GetRatingModelMasterRequest } from "@/gs2/matchmaking/request";
import { GetRatingModelMasterResult } from "@/gs2/matchmaking/result";
import { UpdateRatingModelMasterRequest } from "@/gs2/matchmaking/request";
import { UpdateRatingModelMasterResult } from "@/gs2/matchmaking/result";
import { DeleteRatingModelMasterRequest } from "@/gs2/matchmaking/request";
import { DeleteRatingModelMasterResult } from "@/gs2/matchmaking/result";
import { AccessToken } from "@/gs2/auth/model";

export class RatingModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2MatchmakingRestClient;
    ratingModelMasterCache: RatingModelMasterDomainCache;
    namespaceName: string;
    ratingName: string;

    public constructor(
        session: Gs2RestSession,
        ratingModelMasterCache: RatingModelMasterDomainCache,
        namespaceName: string,
        ratingName: string
    ) {
        this.session = session;
        this.client = new Gs2MatchmakingRestClient(
            session
        );
        this.ratingModelMasterCache = ratingModelMasterCache;
        this.namespaceName = namespaceName;
        this.ratingName = ratingName;
    }

    public async load(
        request: GetRatingModelMasterRequest
    ): Promise<GetRatingModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRatingName(this.ratingName);
        let r: GetRatingModelMasterResult = await this.client.getRatingModelMaster(
            request
        );
        this.ratingModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateRatingModelMasterRequest
    ): Promise<UpdateRatingModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRatingName(this.ratingName);
        let r: UpdateRatingModelMasterResult = await this.client.updateRatingModelMaster(
            request
        );
        this.ratingModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteRatingModelMasterRequest
    ): Promise<DeleteRatingModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRatingName(this.ratingName);
        let r: DeleteRatingModelMasterResult = await this.client.deleteRatingModelMaster(
            request
        );
        this.ratingModelMasterCache.delete(r.getItem()!);
        return r;
    }

}
