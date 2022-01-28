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
import { Gs2QuestRestClient } from "@/gs2/quest";
import { NamespaceDomainCache } from "@/gs2/quest/domain/cache/NamespaceDomainCache";
import { QuestGroupModelMasterDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelMasterDomainCache";
import { QuestModelMasterDomainCache } from "@/gs2/quest/domain/cache/QuestModelMasterDomainCache";
import { ProgressDomainCache } from "@/gs2/quest/domain/cache/ProgressDomainCache";
import { CompletedQuestListDomainCache } from "@/gs2/quest/domain/cache/CompletedQuestListDomainCache";
import { QuestGroupModelDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelDomainCache";
import { QuestModelDomainCache } from "@/gs2/quest/domain/cache/QuestModelDomainCache";
import { ExportMasterRequest } from "@/gs2/quest/request";
import { ExportMasterResult } from "@/gs2/quest/result";
import { GetCurrentQuestMasterRequest } from "@/gs2/quest/request";
import { GetCurrentQuestMasterResult } from "@/gs2/quest/result";
import { UpdateCurrentQuestMasterRequest } from "@/gs2/quest/request";
import { UpdateCurrentQuestMasterResult } from "@/gs2/quest/result";
import { UpdateCurrentQuestMasterFromGitHubRequest } from "@/gs2/quest/request";
import { UpdateCurrentQuestMasterFromGitHubResult } from "@/gs2/quest/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentQuestMasterDomain {
    session: Gs2RestSession;
    client: Gs2QuestRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2QuestRestClient(
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
        request: GetCurrentQuestMasterRequest
    ): Promise<GetCurrentQuestMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentQuestMasterResult = await this.client.getCurrentQuestMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentQuestMasterRequest
    ): Promise<UpdateCurrentQuestMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentQuestMasterResult = await this.client.updateCurrentQuestMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentQuestMasterFromGitHubRequest
    ): Promise<UpdateCurrentQuestMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentQuestMasterFromGitHubResult = await this.client.updateCurrentQuestMasterFromGitHub(
            request
        );
        return r;
    }

}
