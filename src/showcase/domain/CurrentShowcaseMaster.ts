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
import { Gs2ShowcaseRestClient } from "@/gs2/showcase";
import { NamespaceDomainCache } from "@/gs2/showcase/domain/cache/NamespaceDomainCache";
import { SalesItemMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemMasterDomainCache";
import { SalesItemGroupMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemGroupMasterDomainCache";
import { ShowcaseMasterDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseMasterDomainCache";
import { ShowcaseDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseDomainCache";
import { ExportMasterRequest } from "@/gs2/showcase/request";
import { ExportMasterResult } from "@/gs2/showcase/result";
import { GetCurrentShowcaseMasterRequest } from "@/gs2/showcase/request";
import { GetCurrentShowcaseMasterResult } from "@/gs2/showcase/result";
import { UpdateCurrentShowcaseMasterRequest } from "@/gs2/showcase/request";
import { UpdateCurrentShowcaseMasterResult } from "@/gs2/showcase/result";
import { UpdateCurrentShowcaseMasterFromGitHubRequest } from "@/gs2/showcase/request";
import { UpdateCurrentShowcaseMasterFromGitHubResult } from "@/gs2/showcase/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentShowcaseMasterDomain {
    session: Gs2RestSession;
    client: Gs2ShowcaseRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2ShowcaseRestClient(
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
        request: GetCurrentShowcaseMasterRequest
    ): Promise<GetCurrentShowcaseMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentShowcaseMasterResult = await this.client.getCurrentShowcaseMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentShowcaseMasterRequest
    ): Promise<UpdateCurrentShowcaseMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentShowcaseMasterResult = await this.client.updateCurrentShowcaseMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentShowcaseMasterFromGitHubRequest
    ): Promise<UpdateCurrentShowcaseMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentShowcaseMasterFromGitHubResult = await this.client.updateCurrentShowcaseMasterFromGitHub(
            request
        );
        return r;
    }

}
