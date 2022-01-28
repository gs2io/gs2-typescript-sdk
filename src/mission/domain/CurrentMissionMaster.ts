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
import { Gs2MissionRestClient } from "@/gs2/mission";
import { CompleteDomainCache } from "@/gs2/mission/domain/cache/CompleteDomainCache";
import { CounterModelMasterDomainCache } from "@/gs2/mission/domain/cache/CounterModelMasterDomainCache";
import { MissionGroupModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelMasterDomainCache";
import { NamespaceDomainCache } from "@/gs2/mission/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/mission/domain/cache/CounterDomainCache";
import { CounterModelDomainCache } from "@/gs2/mission/domain/cache/CounterModelDomainCache";
import { MissionGroupModelDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelDomainCache";
import { MissionTaskModelDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelDomainCache";
import { MissionTaskModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelMasterDomainCache";
import { ExportMasterRequest } from "@/gs2/mission/request";
import { ExportMasterResult } from "@/gs2/mission/result";
import { GetCurrentMissionMasterRequest } from "@/gs2/mission/request";
import { GetCurrentMissionMasterResult } from "@/gs2/mission/result";
import { UpdateCurrentMissionMasterRequest } from "@/gs2/mission/request";
import { UpdateCurrentMissionMasterResult } from "@/gs2/mission/result";
import { UpdateCurrentMissionMasterFromGitHubRequest } from "@/gs2/mission/request";
import { UpdateCurrentMissionMasterFromGitHubResult } from "@/gs2/mission/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentMissionMasterDomain {
    session: Gs2RestSession;
    client: Gs2MissionRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2MissionRestClient(
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
        request: GetCurrentMissionMasterRequest
    ): Promise<GetCurrentMissionMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentMissionMasterResult = await this.client.getCurrentMissionMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentMissionMasterRequest
    ): Promise<UpdateCurrentMissionMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentMissionMasterResult = await this.client.updateCurrentMissionMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentMissionMasterFromGitHubRequest
    ): Promise<UpdateCurrentMissionMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentMissionMasterFromGitHubResult = await this.client.updateCurrentMissionMasterFromGitHub(
            request
        );
        return r;
    }

}
