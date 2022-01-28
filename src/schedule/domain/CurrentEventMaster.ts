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
import { Gs2ScheduleRestClient } from "@/gs2/schedule";
import { NamespaceDomainCache } from "@/gs2/schedule/domain/cache/NamespaceDomainCache";
import { EventMasterDomainCache } from "@/gs2/schedule/domain/cache/EventMasterDomainCache";
import { TriggerDomainCache } from "@/gs2/schedule/domain/cache/TriggerDomainCache";
import { EventDomainCache } from "@/gs2/schedule/domain/cache/EventDomainCache";
import { ExportMasterRequest } from "@/gs2/schedule/request";
import { ExportMasterResult } from "@/gs2/schedule/result";
import { GetCurrentEventMasterRequest } from "@/gs2/schedule/request";
import { GetCurrentEventMasterResult } from "@/gs2/schedule/result";
import { UpdateCurrentEventMasterRequest } from "@/gs2/schedule/request";
import { UpdateCurrentEventMasterResult } from "@/gs2/schedule/result";
import { UpdateCurrentEventMasterFromGitHubRequest } from "@/gs2/schedule/request";
import { UpdateCurrentEventMasterFromGitHubResult } from "@/gs2/schedule/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentEventMasterDomain {
    session: Gs2RestSession;
    client: Gs2ScheduleRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2ScheduleRestClient(
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
        request: GetCurrentEventMasterRequest
    ): Promise<GetCurrentEventMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentEventMasterResult = await this.client.getCurrentEventMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentEventMasterRequest
    ): Promise<UpdateCurrentEventMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentEventMasterResult = await this.client.updateCurrentEventMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentEventMasterFromGitHubRequest
    ): Promise<UpdateCurrentEventMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentEventMasterFromGitHubResult = await this.client.updateCurrentEventMasterFromGitHub(
            request
        );
        return r;
    }

}
