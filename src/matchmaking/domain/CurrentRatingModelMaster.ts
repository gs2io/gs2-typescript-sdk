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
import { ExportMasterRequest } from "@/gs2/matchmaking/request";
import { ExportMasterResult } from "@/gs2/matchmaking/result";
import { GetCurrentRatingModelMasterRequest } from "@/gs2/matchmaking/request";
import { GetCurrentRatingModelMasterResult } from "@/gs2/matchmaking/result";
import { UpdateCurrentRatingModelMasterRequest } from "@/gs2/matchmaking/request";
import { UpdateCurrentRatingModelMasterResult } from "@/gs2/matchmaking/result";
import { UpdateCurrentRatingModelMasterFromGitHubRequest } from "@/gs2/matchmaking/request";
import { UpdateCurrentRatingModelMasterFromGitHubResult } from "@/gs2/matchmaking/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentRatingModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2MatchmakingRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2MatchmakingRestClient(
            session
        );
        this.namespaceName = namespaceName;
    }

    public async exportMaster(
        request: ExportMasterRequest
    ): Promise<ExportMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: ExportMasterResult = await this.client.exportMaster(
            request
        );
        return r;
    }

    public async load(
        request: GetCurrentRatingModelMasterRequest
    ): Promise<GetCurrentRatingModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentRatingModelMasterResult = await this.client.getCurrentRatingModelMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentRatingModelMasterRequest
    ): Promise<UpdateCurrentRatingModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentRatingModelMasterResult = await this.client.updateCurrentRatingModelMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentRatingModelMasterFromGitHubRequest
    ): Promise<UpdateCurrentRatingModelMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentRatingModelMasterFromGitHubResult = await this.client.updateCurrentRatingModelMasterFromGitHub(
            request
        );
        return r;
    }

}
