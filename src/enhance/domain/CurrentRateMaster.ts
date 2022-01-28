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
import { Gs2EnhanceRestClient } from "@/gs2/enhance";
import { NamespaceDomainCache } from "@/gs2/enhance/domain/cache/NamespaceDomainCache";
import { RateModelDomainCache } from "@/gs2/enhance/domain/cache/RateModelDomainCache";
import { RateModelMasterDomainCache } from "@/gs2/enhance/domain/cache/RateModelMasterDomainCache";
import { ProgressDomainCache } from "@/gs2/enhance/domain/cache/ProgressDomainCache";
import { ExportMasterRequest } from "@/gs2/enhance/request";
import { ExportMasterResult } from "@/gs2/enhance/result";
import { GetCurrentRateMasterRequest } from "@/gs2/enhance/request";
import { GetCurrentRateMasterResult } from "@/gs2/enhance/result";
import { UpdateCurrentRateMasterRequest } from "@/gs2/enhance/request";
import { UpdateCurrentRateMasterResult } from "@/gs2/enhance/result";
import { UpdateCurrentRateMasterFromGitHubRequest } from "@/gs2/enhance/request";
import { UpdateCurrentRateMasterFromGitHubResult } from "@/gs2/enhance/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentRateMasterDomain {
    session: Gs2RestSession;
    client: Gs2EnhanceRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2EnhanceRestClient(
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
        request: GetCurrentRateMasterRequest
    ): Promise<GetCurrentRateMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentRateMasterResult = await this.client.getCurrentRateMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentRateMasterRequest
    ): Promise<UpdateCurrentRateMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentRateMasterResult = await this.client.updateCurrentRateMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentRateMasterFromGitHubRequest
    ): Promise<UpdateCurrentRateMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentRateMasterFromGitHubResult = await this.client.updateCurrentRateMasterFromGitHub(
            request
        );
        return r;
    }

}
