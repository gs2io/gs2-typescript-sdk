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
import { GetQuestModelRequest } from "@/gs2/quest/request";
import { GetQuestModelResult } from "@/gs2/quest/result";
import { AccessToken } from "@/gs2/auth/model";

export class QuestModelDomain {
    session: Gs2RestSession;
    client: Gs2QuestRestClient;
    questModelCache: QuestModelDomainCache;
    namespaceName: string;
    questGroupName: string;
    questName: string;

    public constructor(
        session: Gs2RestSession,
        questModelCache: QuestModelDomainCache,
        namespaceName: string,
        questGroupName: string,
        questName: string
    ) {
        this.session = session;
        this.client = new Gs2QuestRestClient(
            session
        );
        this.questModelCache = questModelCache;
        this.namespaceName = namespaceName;
        this.questGroupName = questGroupName;
        this.questName = questName;
    }

    public async load(
        request: GetQuestModelRequest
    ): Promise<GetQuestModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setQuestGroupName(this.questGroupName);
        request.setQuestName(this.questName);
        let r: GetQuestModelResult = await this.client.getQuestModel(
            request
        );
        this.questModelCache.update(r.getItem()!);
        return r;
    }

}
