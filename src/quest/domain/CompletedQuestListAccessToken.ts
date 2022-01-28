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
import { GetCompletedQuestListRequest } from "@/gs2/quest/request";
import { GetCompletedQuestListResult } from "@/gs2/quest/result";
import { GetCompletedQuestListByUserIdRequest } from "@/gs2/quest/request";
import { GetCompletedQuestListByUserIdResult } from "@/gs2/quest/result";
import { DeleteCompletedQuestListByUserIdRequest } from "@/gs2/quest/request";
import { DeleteCompletedQuestListByUserIdResult } from "@/gs2/quest/result";
import { AccessToken } from "@/gs2/auth/model";

export class CompletedQuestListAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2QuestRestClient;
    completedQuestListCache: CompletedQuestListDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    questGroupName: string;

    public constructor(
        session: Gs2RestSession,
        completedQuestListCache: CompletedQuestListDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        questGroupName: string
    ) {
        this.session = session;
        this.client = new Gs2QuestRestClient(
            session
        );
        this.completedQuestListCache = completedQuestListCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.questGroupName = questGroupName;
    }

    public async load(
        request: GetCompletedQuestListRequest
    ): Promise<GetCompletedQuestListResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setQuestGroupName(this.questGroupName);
        let r: GetCompletedQuestListResult = await this.client.getCompletedQuestList(
            request
        );
        this.completedQuestListCache.update(r.getItem()!);
        return r;
    }

}
