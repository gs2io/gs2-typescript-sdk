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
import { GetProgressRequest } from "@/gs2/quest/request";
import { GetProgressResult } from "@/gs2/quest/result";
import { GetProgressByUserIdRequest } from "@/gs2/quest/request";
import { GetProgressByUserIdResult } from "@/gs2/quest/result";
import { StartRequest } from "@/gs2/quest/request";
import { StartResult } from "@/gs2/quest/result";
import { StartByUserIdRequest } from "@/gs2/quest/request";
import { StartByUserIdResult } from "@/gs2/quest/result";
import { EndRequest } from "@/gs2/quest/request";
import { EndResult } from "@/gs2/quest/result";
import { EndByUserIdRequest } from "@/gs2/quest/request";
import { EndByUserIdResult } from "@/gs2/quest/result";
import { DeleteProgressRequest } from "@/gs2/quest/request";
import { DeleteProgressResult } from "@/gs2/quest/result";
import { DeleteProgressByUserIdRequest } from "@/gs2/quest/request";
import { DeleteProgressByUserIdResult } from "@/gs2/quest/result";
import { DescribeProgressesByUserIdIterator } from "@/gs2/quest/domain/iterator/ProgressesByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class ProgressAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2QuestRestClient;
    progressCache: ProgressDomainCache;
    namespaceName: string;
    accessToken: AccessToken;

    public constructor(
        session: Gs2RestSession,
        progressCache: ProgressDomainCache,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2QuestRestClient(
            session
        );
        this.progressCache = progressCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
    }

    public async load(
        request: GetProgressRequest
    ): Promise<GetProgressResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: GetProgressResult = await this.client.getProgress(
            request
        );
        this.progressCache.update(r.getItem()!);
        return r;
    }

    public async start(
        request: StartRequest
    ): Promise<StartResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: StartResult = await this.client.start(
            request
        );
        return r;
    }

    public async end(
        request: EndRequest
    ): Promise<EndResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: EndResult = await this.client.end(
            request
        );
        this.progressCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteProgressRequest
    ): Promise<DeleteProgressResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: DeleteProgressResult = await this.client.deleteProgress(
            request
        );
        this.progressCache.delete(r.getItem()!);
        return r;
    }

}
