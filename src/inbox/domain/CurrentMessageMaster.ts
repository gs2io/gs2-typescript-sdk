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
import { Gs2InboxRestClient } from "@/gs2/inbox";
import { NamespaceDomainCache } from "@/gs2/inbox/domain/cache/NamespaceDomainCache";
import { MessageDomainCache } from "@/gs2/inbox/domain/cache/MessageDomainCache";
import { GlobalMessageMasterDomainCache } from "@/gs2/inbox/domain/cache/GlobalMessageMasterDomainCache";
import { GlobalMessageDomainCache } from "@/gs2/inbox/domain/cache/GlobalMessageDomainCache";
import { ExportMasterRequest } from "@/gs2/inbox/request";
import { ExportMasterResult } from "@/gs2/inbox/result";
import { GetCurrentMessageMasterRequest } from "@/gs2/inbox/request";
import { GetCurrentMessageMasterResult } from "@/gs2/inbox/result";
import { UpdateCurrentMessageMasterRequest } from "@/gs2/inbox/request";
import { UpdateCurrentMessageMasterResult } from "@/gs2/inbox/result";
import { UpdateCurrentMessageMasterFromGitHubRequest } from "@/gs2/inbox/request";
import { UpdateCurrentMessageMasterFromGitHubResult } from "@/gs2/inbox/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentMessageMasterDomain {
    session: Gs2RestSession;
    client: Gs2InboxRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2InboxRestClient(
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
        request: GetCurrentMessageMasterRequest
    ): Promise<GetCurrentMessageMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentMessageMasterResult = await this.client.getCurrentMessageMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentMessageMasterRequest
    ): Promise<UpdateCurrentMessageMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentMessageMasterResult = await this.client.updateCurrentMessageMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentMessageMasterFromGitHubRequest
    ): Promise<UpdateCurrentMessageMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentMessageMasterFromGitHubResult = await this.client.updateCurrentMessageMasterFromGitHub(
            request
        );
        return r;
    }

}
