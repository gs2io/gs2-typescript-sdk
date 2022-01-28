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
import { UserDomain } from "@/gs2/quest/domain/User";
import { UserAccessTokenDomain } from "@/gs2/quest/domain/UserAccessToken";
import { CurrentQuestMasterDomain } from "@/gs2/quest/domain/CurrentQuestMaster";
import { QuestGroupModelDomain } from "@/gs2/quest/domain/QuestGroupModel";
import { QuestGroupModelMasterDomain } from "@/gs2/quest/domain/QuestGroupModelMaster";
import { NamespaceDomainCache } from "@/gs2/quest/domain/cache/NamespaceDomainCache";
import { QuestGroupModelMasterDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelMasterDomainCache";
import { QuestModelMasterDomainCache } from "@/gs2/quest/domain/cache/QuestModelMasterDomainCache";
import { ProgressDomainCache } from "@/gs2/quest/domain/cache/ProgressDomainCache";
import { CompletedQuestListDomainCache } from "@/gs2/quest/domain/cache/CompletedQuestListDomainCache";
import { QuestGroupModelDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelDomainCache";
import { QuestModelDomainCache } from "@/gs2/quest/domain/cache/QuestModelDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/quest/request";
import { GetNamespaceStatusResult } from "@/gs2/quest/result";
import { GetNamespaceRequest } from "@/gs2/quest/request";
import { GetNamespaceResult } from "@/gs2/quest/result";
import { UpdateNamespaceRequest } from "@/gs2/quest/request";
import { UpdateNamespaceResult } from "@/gs2/quest/result";
import { DeleteNamespaceRequest } from "@/gs2/quest/request";
import { DeleteNamespaceResult } from "@/gs2/quest/result";
import { CreateQuestGroupModelMasterRequest } from "@/gs2/quest/request";
import { CreateQuestGroupModelMasterResult } from "@/gs2/quest/result";
import { DescribeQuestGroupModelMastersIterator } from "@/gs2/quest/domain/iterator/QuestGroupModelMastersDomainIterator";
import { DescribeQuestGroupModelsIterator } from "@/gs2/quest/domain/iterator/QuestGroupModelsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2QuestRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    questGroupModelMasterCache: QuestGroupModelMasterDomainCache;
    questGroupModelCache: QuestGroupModelDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2QuestRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.questGroupModelMasterCache = new QuestGroupModelMasterDomainCache();
        this.questGroupModelCache = new QuestGroupModelDomainCache();
    }

    public async getStatus(
        request: GetNamespaceStatusRequest
    ): Promise<GetNamespaceStatusResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetNamespaceStatusResult = await this.client.getNamespaceStatus(
            request
        );
        return r;
    }

    public async load(
        request: GetNamespaceRequest
    ): Promise<GetNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetNamespaceResult = await this.client.getNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateNamespaceRequest
    ): Promise<UpdateNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateNamespaceResult = await this.client.updateNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteNamespaceRequest
    ): Promise<DeleteNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: DeleteNamespaceResult = await this.client.deleteNamespace(
            request
        );
        this.namespaceCache.delete(r.getItem()!);
        return r;
    }

    public async createQuestGroupModelMaster(
        request: CreateQuestGroupModelMasterRequest
    ): Promise<CreateQuestGroupModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateQuestGroupModelMasterResult = await this.client.createQuestGroupModelMaster(
            request
        );
        return r;
    }

    public questGroupModelMasters(
    ): DescribeQuestGroupModelMastersIterator {
        return new DescribeQuestGroupModelMastersIterator(
            this.questGroupModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public questGroupModels(
    ): DescribeQuestGroupModelsIterator {
        return new DescribeQuestGroupModelsIterator(
            this.questGroupModelCache,
            this.client,
            this.namespaceName
        );
    }

    public user(
        userId: string
    ): UserDomain {
        return new UserDomain(
            this.session,
            this.namespaceName,
            userId
        );
    }

    public accessToken(
        accessToken: AccessToken
    ): UserAccessTokenDomain  {
        return new UserAccessTokenDomain(
            this.session,
            this.namespaceName,
            accessToken
        );
    }

    public currentQuestMaster(
    ): CurrentQuestMasterDomain {
        return new CurrentQuestMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public questGroupModel(
        questGroupName: string
    ): QuestGroupModelDomain {
        return new QuestGroupModelDomain(
            this.session,
            this.questGroupModelCache,
            this.namespaceName,
            questGroupName
        );
    }

    public questGroupModelMaster(
        questGroupName: string
    ): QuestGroupModelMasterDomain {
        return new QuestGroupModelMasterDomain(
            this.session,
            this.questGroupModelMasterCache,
            this.namespaceName,
            questGroupName
        );
    }

}
