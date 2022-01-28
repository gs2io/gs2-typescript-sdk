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
import { GetQuestModelMasterRequest } from "@/gs2/quest/request";
import { GetQuestModelMasterResult } from "@/gs2/quest/result";
import { UpdateQuestModelMasterRequest } from "@/gs2/quest/request";
import { UpdateQuestModelMasterResult } from "@/gs2/quest/result";
import { DeleteQuestModelMasterRequest } from "@/gs2/quest/request";
import { DeleteQuestModelMasterResult } from "@/gs2/quest/result";
import { AccessToken } from "@/gs2/auth/model";

export class QuestModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2QuestRestClient;
    questModelMasterCache: QuestModelMasterDomainCache;
    namespaceName: string;
    questGroupName: string;
    questName: string;

    public constructor(
        session: Gs2RestSession,
        questModelMasterCache: QuestModelMasterDomainCache,
        namespaceName: string,
        questGroupName: string,
        questName: string
    ) {
        this.session = session;
        this.client = new Gs2QuestRestClient(
            session
        );
        this.questModelMasterCache = questModelMasterCache;
        this.namespaceName = namespaceName;
        this.questGroupName = questGroupName;
        this.questName = questName;
    }

    public async load(
        request: GetQuestModelMasterRequest
    ): Promise<GetQuestModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setQuestGroupName(this.questGroupName);
        request.setQuestName(this.questName);
        let r: GetQuestModelMasterResult = await this.client.getQuestModelMaster(
            request
        );
        this.questModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateQuestModelMasterRequest
    ): Promise<UpdateQuestModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setQuestGroupName(this.questGroupName);
        request.setQuestName(this.questName);
        let r: UpdateQuestModelMasterResult = await this.client.updateQuestModelMaster(
            request
        );
        this.questModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteQuestModelMasterRequest
    ): Promise<DeleteQuestModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setQuestGroupName(this.questGroupName);
        request.setQuestName(this.questName);
        let r: DeleteQuestModelMasterResult = await this.client.deleteQuestModelMaster(
            request
        );
        this.questModelMasterCache.delete(r.getItem()!);
        return r;
    }

}
