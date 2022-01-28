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
import { Gs2LimitRestClient } from "@/gs2/limit";
import { NamespaceDomainCache } from "@/gs2/limit/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/limit/domain/cache/CounterDomainCache";
import { LimitModelMasterDomainCache } from "@/gs2/limit/domain/cache/LimitModelMasterDomainCache";
import { LimitModelDomainCache } from "@/gs2/limit/domain/cache/LimitModelDomainCache";
import { ExportMasterRequest } from "@/gs2/limit/request";
import { ExportMasterResult } from "@/gs2/limit/result";
import { GetCurrentLimitMasterRequest } from "@/gs2/limit/request";
import { GetCurrentLimitMasterResult } from "@/gs2/limit/result";
import { UpdateCurrentLimitMasterRequest } from "@/gs2/limit/request";
import { UpdateCurrentLimitMasterResult } from "@/gs2/limit/result";
import { UpdateCurrentLimitMasterFromGitHubRequest } from "@/gs2/limit/request";
import { UpdateCurrentLimitMasterFromGitHubResult } from "@/gs2/limit/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentLimitMasterDomain {
    session: Gs2RestSession;
    client: Gs2LimitRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2LimitRestClient(
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
        request: GetCurrentLimitMasterRequest
    ): Promise<GetCurrentLimitMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentLimitMasterResult = await this.client.getCurrentLimitMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentLimitMasterRequest
    ): Promise<UpdateCurrentLimitMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentLimitMasterResult = await this.client.updateCurrentLimitMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentLimitMasterFromGitHubRequest
    ): Promise<UpdateCurrentLimitMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentLimitMasterFromGitHubResult = await this.client.updateCurrentLimitMasterFromGitHub(
            request
        );
        return r;
    }

}
