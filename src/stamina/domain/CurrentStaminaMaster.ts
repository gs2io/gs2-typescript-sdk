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
import { Gs2StaminaRestClient } from "@/gs2/stamina";
import { NamespaceDomainCache } from "@/gs2/stamina/domain/cache/NamespaceDomainCache";
import { StaminaModelMasterDomainCache } from "@/gs2/stamina/domain/cache/StaminaModelMasterDomainCache";
import { MaxStaminaTableMasterDomainCache } from "@/gs2/stamina/domain/cache/MaxStaminaTableMasterDomainCache";
import { RecoverIntervalTableMasterDomainCache } from "@/gs2/stamina/domain/cache/RecoverIntervalTableMasterDomainCache";
import { RecoverValueTableMasterDomainCache } from "@/gs2/stamina/domain/cache/RecoverValueTableMasterDomainCache";
import { StaminaModelDomainCache } from "@/gs2/stamina/domain/cache/StaminaModelDomainCache";
import { StaminaDomainCache } from "@/gs2/stamina/domain/cache/StaminaDomainCache";
import { ExportMasterRequest } from "@/gs2/stamina/request";
import { ExportMasterResult } from "@/gs2/stamina/result";
import { GetCurrentStaminaMasterRequest } from "@/gs2/stamina/request";
import { GetCurrentStaminaMasterResult } from "@/gs2/stamina/result";
import { UpdateCurrentStaminaMasterRequest } from "@/gs2/stamina/request";
import { UpdateCurrentStaminaMasterResult } from "@/gs2/stamina/result";
import { UpdateCurrentStaminaMasterFromGitHubRequest } from "@/gs2/stamina/request";
import { UpdateCurrentStaminaMasterFromGitHubResult } from "@/gs2/stamina/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentStaminaMasterDomain {
    session: Gs2RestSession;
    client: Gs2StaminaRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2StaminaRestClient(
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
        request: GetCurrentStaminaMasterRequest
    ): Promise<GetCurrentStaminaMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentStaminaMasterResult = await this.client.getCurrentStaminaMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentStaminaMasterRequest
    ): Promise<UpdateCurrentStaminaMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentStaminaMasterResult = await this.client.updateCurrentStaminaMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentStaminaMasterFromGitHubRequest
    ): Promise<UpdateCurrentStaminaMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentStaminaMasterFromGitHubResult = await this.client.updateCurrentStaminaMasterFromGitHub(
            request
        );
        return r;
    }

}
