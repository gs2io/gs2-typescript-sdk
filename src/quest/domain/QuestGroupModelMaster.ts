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
import { QuestModelMasterDomain } from "@/gs2/quest/domain/QuestModelMaster";
import { NamespaceDomainCache } from "@/gs2/quest/domain/cache/NamespaceDomainCache";
import { QuestGroupModelMasterDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelMasterDomainCache";
import { QuestModelMasterDomainCache } from "@/gs2/quest/domain/cache/QuestModelMasterDomainCache";
import { ProgressDomainCache } from "@/gs2/quest/domain/cache/ProgressDomainCache";
import { CompletedQuestListDomainCache } from "@/gs2/quest/domain/cache/CompletedQuestListDomainCache";
import { QuestGroupModelDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelDomainCache";
import { QuestModelDomainCache } from "@/gs2/quest/domain/cache/QuestModelDomainCache";
import { GetQuestGroupModelMasterRequest } from "@/gs2/quest/request";
import { GetQuestGroupModelMasterResult } from "@/gs2/quest/result";
import { UpdateQuestGroupModelMasterRequest } from "@/gs2/quest/request";
import { UpdateQuestGroupModelMasterResult } from "@/gs2/quest/result";
import { DeleteQuestGroupModelMasterRequest } from "@/gs2/quest/request";
import { DeleteQuestGroupModelMasterResult } from "@/gs2/quest/result";
import { CreateQuestModelMasterRequest } from "@/gs2/quest/request";
import { CreateQuestModelMasterResult } from "@/gs2/quest/result";
import { DescribeQuestModelMastersIterator } from "@/gs2/quest/domain/iterator/QuestModelMastersDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class QuestGroupModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2QuestRestClient;
    questGroupModelMasterCache: QuestGroupModelMasterDomainCache;
    namespaceName: string;
    questGroupName: string;
    questModelMasterCache: QuestModelMasterDomainCache;

    public constructor(
        session: Gs2RestSession,
        questGroupModelMasterCache: QuestGroupModelMasterDomainCache,
        namespaceName: string,
        questGroupName: string
    ) {
        this.session = session;
        this.client = new Gs2QuestRestClient(
            session
        );
        this.questGroupModelMasterCache = questGroupModelMasterCache;
        this.namespaceName = namespaceName;
        this.questGroupName = questGroupName;
        this.questModelMasterCache = new QuestModelMasterDomainCache();
    }

    public async load(
        request: GetQuestGroupModelMasterRequest
    ): Promise<GetQuestGroupModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setQuestGroupName(this.questGroupName);
        let r: GetQuestGroupModelMasterResult = await this.client.getQuestGroupModelMaster(
            request
        );
        this.questGroupModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateQuestGroupModelMasterRequest
    ): Promise<UpdateQuestGroupModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setQuestGroupName(this.questGroupName);
        let r: UpdateQuestGroupModelMasterResult = await this.client.updateQuestGroupModelMaster(
            request
        );
        this.questGroupModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteQuestGroupModelMasterRequest
    ): Promise<DeleteQuestGroupModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setQuestGroupName(this.questGroupName);
        let r: DeleteQuestGroupModelMasterResult = await this.client.deleteQuestGroupModelMaster(
            request
        );
        this.questGroupModelMasterCache.delete(r.getItem()!);
        return r;
    }

    public async createQuestModelMaster(
        request: CreateQuestModelMasterRequest
    ): Promise<CreateQuestModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setQuestGroupName(this.questGroupName);
        let r: CreateQuestModelMasterResult = await this.client.createQuestModelMaster(
            request
        );
        return r;
    }

    public questModelMasters(
    ): DescribeQuestModelMastersIterator {
        return new DescribeQuestModelMastersIterator(
            this.questModelMasterCache,
            this.client,
            this.namespaceName,
            this.questGroupName
        );
    }

    public questModelMaster(
        questName: string
    ): QuestModelMasterDomain {
        return new QuestModelMasterDomain(
            this.session,
            this.questModelMasterCache,
            this.namespaceName,
            this.questGroupName,
            questName
        );
    }

}
