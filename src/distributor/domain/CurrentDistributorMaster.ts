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
import { Gs2DistributorRestClient } from "@/gs2/distributor";
import { NamespaceDomainCache } from "@/gs2/distributor/domain/cache/NamespaceDomainCache";
import { DistributorModelMasterDomainCache } from "@/gs2/distributor/domain/cache/DistributorModelMasterDomainCache";
import { DistributorModelDomainCache } from "@/gs2/distributor/domain/cache/DistributorModelDomainCache";
import { ExportMasterRequest } from "@/gs2/distributor/request";
import { ExportMasterResult } from "@/gs2/distributor/result";
import { GetCurrentDistributorMasterRequest } from "@/gs2/distributor/request";
import { GetCurrentDistributorMasterResult } from "@/gs2/distributor/result";
import { UpdateCurrentDistributorMasterRequest } from "@/gs2/distributor/request";
import { UpdateCurrentDistributorMasterResult } from "@/gs2/distributor/result";
import { UpdateCurrentDistributorMasterFromGitHubRequest } from "@/gs2/distributor/request";
import { UpdateCurrentDistributorMasterFromGitHubResult } from "@/gs2/distributor/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentDistributorMasterDomain {
    session: Gs2RestSession;
    client: Gs2DistributorRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2DistributorRestClient(
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
        request: GetCurrentDistributorMasterRequest
    ): Promise<GetCurrentDistributorMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentDistributorMasterResult = await this.client.getCurrentDistributorMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentDistributorMasterRequest
    ): Promise<UpdateCurrentDistributorMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentDistributorMasterResult = await this.client.updateCurrentDistributorMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentDistributorMasterFromGitHubRequest
    ): Promise<UpdateCurrentDistributorMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentDistributorMasterFromGitHubResult = await this.client.updateCurrentDistributorMasterFromGitHub(
            request
        );
        return r;
    }

}
