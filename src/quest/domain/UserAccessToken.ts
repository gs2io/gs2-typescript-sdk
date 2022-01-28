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
import { ProgressDomain } from "@/gs2/quest/domain/Progress";
import { ProgressAccessTokenDomain } from "@/gs2/quest/domain/ProgressAccessToken";
import { CompletedQuestListDomain } from "@/gs2/quest/domain/CompletedQuestList";
import { CompletedQuestListAccessTokenDomain } from "@/gs2/quest/domain/CompletedQuestListAccessToken";
import { NamespaceDomainCache } from "@/gs2/quest/domain/cache/NamespaceDomainCache";
import { QuestGroupModelMasterDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelMasterDomainCache";
import { QuestModelMasterDomainCache } from "@/gs2/quest/domain/cache/QuestModelMasterDomainCache";
import { ProgressDomainCache } from "@/gs2/quest/domain/cache/ProgressDomainCache";
import { CompletedQuestListDomainCache } from "@/gs2/quest/domain/cache/CompletedQuestListDomainCache";
import { QuestGroupModelDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelDomainCache";
import { QuestModelDomainCache } from "@/gs2/quest/domain/cache/QuestModelDomainCache";
import { CreateProgressByUserIdRequest } from "@/gs2/quest/request";
import { CreateProgressByUserIdResult } from "@/gs2/quest/result";
import { DescribeCompletedQuestListsIterator } from "@/gs2/quest/domain/iterator/CompletedQuestListsDomainIterator";
import { DescribeCompletedQuestListsByUserIdIterator } from "@/gs2/quest/domain/iterator/CompletedQuestListsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2QuestRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    progressCache: ProgressDomainCache;
    completedQuestListCache: CompletedQuestListDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2QuestRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.progressCache = new ProgressDomainCache();
        this.completedQuestListCache = new CompletedQuestListDomainCache();
    }

    public completedQuestLists(
    ): DescribeCompletedQuestListsIterator {
        return new DescribeCompletedQuestListsIterator(
            this.completedQuestListCache,
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

    public progress(
    ): ProgressAccessTokenDomain {
        return new ProgressAccessTokenDomain(
            this.session,
            this.progressCache,
            this.namespaceName,
            this.accessToken
        );
    }

    public completedQuestList(
        questGroupName: string
    ): CompletedQuestListAccessTokenDomain {
        return new CompletedQuestListAccessTokenDomain(
            this.session,
            this.completedQuestListCache,
            this.namespaceName,
            this.accessToken,
            questGroupName
        );
    }

}
