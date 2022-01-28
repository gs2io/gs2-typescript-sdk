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
import { ExportMasterRequest } from "@/gs2/ranking/request";
import { ExportMasterResult } from "@/gs2/ranking/result";
import { GetCurrentRankingMasterRequest } from "@/gs2/ranking/request";
import { GetCurrentRankingMasterResult } from "@/gs2/ranking/result";
import { UpdateCurrentRankingMasterRequest } from "@/gs2/ranking/request";
import { UpdateCurrentRankingMasterResult } from "@/gs2/ranking/result";
import { UpdateCurrentRankingMasterFromGitHubRequest } from "@/gs2/ranking/request";
import { UpdateCurrentRankingMasterFromGitHubResult } from "@/gs2/ranking/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentRankingMasterDomain {
    session: Gs2RestSession;
    client: Gs2RankingRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2RankingRestClient(
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
        request: GetCurrentRankingMasterRequest
    ): Promise<GetCurrentRankingMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentRankingMasterResult = await this.client.getCurrentRankingMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentRankingMasterRequest
    ): Promise<UpdateCurrentRankingMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentRankingMasterResult = await this.client.updateCurrentRankingMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentRankingMasterFromGitHubRequest
    ): Promise<UpdateCurrentRankingMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentRankingMasterFromGitHubResult = await this.client.updateCurrentRankingMasterFromGitHub(
            request
        );
        return r;
    }

}
