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
import { Gs2VersionRestClient } from "@/gs2/version";
import { NamespaceDomainCache } from "@/gs2/version/domain/cache/NamespaceDomainCache";
import { VersionModelMasterDomainCache } from "@/gs2/version/domain/cache/VersionModelMasterDomainCache";
import { VersionModelDomainCache } from "@/gs2/version/domain/cache/VersionModelDomainCache";
import { AcceptVersionDomainCache } from "@/gs2/version/domain/cache/AcceptVersionDomainCache";
import { ExportMasterRequest } from "@/gs2/version/request";
import { ExportMasterResult } from "@/gs2/version/result";
import { GetCurrentVersionMasterRequest } from "@/gs2/version/request";
import { GetCurrentVersionMasterResult } from "@/gs2/version/result";
import { UpdateCurrentVersionMasterRequest } from "@/gs2/version/request";
import { UpdateCurrentVersionMasterResult } from "@/gs2/version/result";
import { UpdateCurrentVersionMasterFromGitHubRequest } from "@/gs2/version/request";
import { UpdateCurrentVersionMasterFromGitHubResult } from "@/gs2/version/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentVersionMasterDomain {
    session: Gs2RestSession;
    client: Gs2VersionRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2VersionRestClient(
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
        request: GetCurrentVersionMasterRequest
    ): Promise<GetCurrentVersionMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentVersionMasterResult = await this.client.getCurrentVersionMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentVersionMasterRequest
    ): Promise<UpdateCurrentVersionMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentVersionMasterResult = await this.client.updateCurrentVersionMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentVersionMasterFromGitHubRequest
    ): Promise<UpdateCurrentVersionMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentVersionMasterFromGitHubResult = await this.client.updateCurrentVersionMasterFromGitHub(
            request
        );
        return r;
    }

}
