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
import { QuestModelDomain } from "@/gs2/quest/domain/QuestModel";
import { NamespaceDomainCache } from "@/gs2/quest/domain/cache/NamespaceDomainCache";
import { QuestGroupModelMasterDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelMasterDomainCache";
import { QuestModelMasterDomainCache } from "@/gs2/quest/domain/cache/QuestModelMasterDomainCache";
import { ProgressDomainCache } from "@/gs2/quest/domain/cache/ProgressDomainCache";
import { CompletedQuestListDomainCache } from "@/gs2/quest/domain/cache/CompletedQuestListDomainCache";
import { QuestGroupModelDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelDomainCache";
import { QuestModelDomainCache } from "@/gs2/quest/domain/cache/QuestModelDomainCache";
import { GetQuestGroupModelRequest } from "@/gs2/quest/request";
import { GetQuestGroupModelResult } from "@/gs2/quest/result";
import { DescribeQuestModelsIterator } from "@/gs2/quest/domain/iterator/QuestModelsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class QuestGroupModelDomain {
    session: Gs2RestSession;
    client: Gs2QuestRestClient;
    questGroupModelCache: QuestGroupModelDomainCache;
    namespaceName: string;
    questGroupName: string;
    questModelCache: QuestModelDomainCache;

    public constructor(
        session: Gs2RestSession,
        questGroupModelCache: QuestGroupModelDomainCache,
        namespaceName: string,
        questGroupName: string
    ) {
        this.session = session;
        this.client = new Gs2QuestRestClient(
            session
        );
        this.questGroupModelCache = questGroupModelCache;
        this.namespaceName = namespaceName;
        this.questGroupName = questGroupName;
        this.questModelCache = new QuestModelDomainCache();
    }

    public async load(
        request: GetQuestGroupModelRequest
    ): Promise<GetQuestGroupModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setQuestGroupName(this.questGroupName);
        let r: GetQuestGroupModelResult = await this.client.getQuestGroupModel(
            request
        );
        this.questGroupModelCache.update(r.getItem()!);
        return r;
    }

    public questModels(
    ): DescribeQuestModelsIterator {
        return new DescribeQuestModelsIterator(
            this.questModelCache,
            this.client,
            this.namespaceName,
            this.questGroupName
        );
    }

    public questModel(
        questName: string
    ): QuestModelDomain {
        return new QuestModelDomain(
            this.session,
            this.questModelCache,
            this.namespaceName,
            this.questGroupName,
            questName
        );
    }

}
