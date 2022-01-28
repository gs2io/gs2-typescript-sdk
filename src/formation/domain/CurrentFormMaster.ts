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
import { Gs2FormationRestClient } from "@/gs2/formation";
import { NamespaceDomainCache } from "@/gs2/formation/domain/cache/NamespaceDomainCache";
import { FormModelMasterDomainCache } from "@/gs2/formation/domain/cache/FormModelMasterDomainCache";
import { MoldModelDomainCache } from "@/gs2/formation/domain/cache/MoldModelDomainCache";
import { MoldModelMasterDomainCache } from "@/gs2/formation/domain/cache/MoldModelMasterDomainCache";
import { MoldDomainCache } from "@/gs2/formation/domain/cache/MoldDomainCache";
import { FormDomainCache } from "@/gs2/formation/domain/cache/FormDomainCache";
import { ExportMasterRequest } from "@/gs2/formation/request";
import { ExportMasterResult } from "@/gs2/formation/result";
import { GetCurrentFormMasterRequest } from "@/gs2/formation/request";
import { GetCurrentFormMasterResult } from "@/gs2/formation/result";
import { UpdateCurrentFormMasterRequest } from "@/gs2/formation/request";
import { UpdateCurrentFormMasterResult } from "@/gs2/formation/result";
import { UpdateCurrentFormMasterFromGitHubRequest } from "@/gs2/formation/request";
import { UpdateCurrentFormMasterFromGitHubResult } from "@/gs2/formation/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentFormMasterDomain {
    session: Gs2RestSession;
    client: Gs2FormationRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2FormationRestClient(
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
        request: GetCurrentFormMasterRequest
    ): Promise<GetCurrentFormMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentFormMasterResult = await this.client.getCurrentFormMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentFormMasterRequest
    ): Promise<UpdateCurrentFormMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentFormMasterResult = await this.client.updateCurrentFormMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentFormMasterFromGitHubRequest
    ): Promise<UpdateCurrentFormMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentFormMasterFromGitHubResult = await this.client.updateCurrentFormMasterFromGitHub(
            request
        );
        return r;
    }

}
