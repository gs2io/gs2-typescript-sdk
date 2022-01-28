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
import { Gs2ExperienceRestClient } from "@/gs2/experience";
import { NamespaceDomainCache } from "@/gs2/experience/domain/cache/NamespaceDomainCache";
import { ExperienceModelMasterDomainCache } from "@/gs2/experience/domain/cache/ExperienceModelMasterDomainCache";
import { ExperienceModelDomainCache } from "@/gs2/experience/domain/cache/ExperienceModelDomainCache";
import { ThresholdMasterDomainCache } from "@/gs2/experience/domain/cache/ThresholdMasterDomainCache";
import { StatusDomainCache } from "@/gs2/experience/domain/cache/StatusDomainCache";
import { ExportMasterRequest } from "@/gs2/experience/request";
import { ExportMasterResult } from "@/gs2/experience/result";
import { GetCurrentExperienceMasterRequest } from "@/gs2/experience/request";
import { GetCurrentExperienceMasterResult } from "@/gs2/experience/result";
import { UpdateCurrentExperienceMasterRequest } from "@/gs2/experience/request";
import { UpdateCurrentExperienceMasterResult } from "@/gs2/experience/result";
import { UpdateCurrentExperienceMasterFromGitHubRequest } from "@/gs2/experience/request";
import { UpdateCurrentExperienceMasterFromGitHubResult } from "@/gs2/experience/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentExperienceMasterDomain {
    session: Gs2RestSession;
    client: Gs2ExperienceRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2ExperienceRestClient(
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
        request: GetCurrentExperienceMasterRequest
    ): Promise<GetCurrentExperienceMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentExperienceMasterResult = await this.client.getCurrentExperienceMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentExperienceMasterRequest
    ): Promise<UpdateCurrentExperienceMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentExperienceMasterResult = await this.client.updateCurrentExperienceMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentExperienceMasterFromGitHubRequest
    ): Promise<UpdateCurrentExperienceMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentExperienceMasterFromGitHubResult = await this.client.updateCurrentExperienceMasterFromGitHub(
            request
        );
        return r;
    }

}
