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
import { Gs2MissionRestClient } from "@/gs2/mission";
import { CompleteDomainCache } from "@/gs2/mission/domain/cache/CompleteDomainCache";
import { CounterModelMasterDomainCache } from "@/gs2/mission/domain/cache/CounterModelMasterDomainCache";
import { MissionGroupModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelMasterDomainCache";
import { NamespaceDomainCache } from "@/gs2/mission/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/mission/domain/cache/CounterDomainCache";
import { CounterModelDomainCache } from "@/gs2/mission/domain/cache/CounterModelDomainCache";
import { MissionGroupModelDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelDomainCache";
import { MissionTaskModelDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelDomainCache";
import { MissionTaskModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelMasterDomainCache";
import { CompleteRequest } from "@/gs2/mission/request";
import { CompleteResult } from "@/gs2/mission/result";
import { CompleteByUserIdRequest } from "@/gs2/mission/request";
import { CompleteByUserIdResult } from "@/gs2/mission/result";
import { ReceiveByUserIdRequest } from "@/gs2/mission/request";
import { ReceiveByUserIdResult } from "@/gs2/mission/result";
import { GetCompleteRequest } from "@/gs2/mission/request";
import { GetCompleteResult } from "@/gs2/mission/result";
import { GetCompleteByUserIdRequest } from "@/gs2/mission/request";
import { GetCompleteByUserIdResult } from "@/gs2/mission/result";
import { DeleteCompleteByUserIdRequest } from "@/gs2/mission/request";
import { DeleteCompleteByUserIdResult } from "@/gs2/mission/result";
import { AccessToken } from "@/gs2/auth/model";

export class CompleteAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2MissionRestClient;
    completeCache: CompleteDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    missionGroupName: string;

    public constructor(
        session: Gs2RestSession,
        completeCache: CompleteDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        missionGroupName: string
    ) {
        this.session = session;
        this.client = new Gs2MissionRestClient(
            session
        );
        this.completeCache = completeCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.missionGroupName = missionGroupName;
    }

    public async complete(
        request: CompleteRequest
    ): Promise<CompleteResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setMissionGroupName(this.missionGroupName);
        let r: CompleteResult = await this.client.complete(
            request
        );
        return r;
    }

    public async load(
        request: GetCompleteRequest
    ): Promise<GetCompleteResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setMissionGroupName(this.missionGroupName);
        let r: GetCompleteResult = await this.client.getComplete(
            request
        );
        this.completeCache.update(r.getItem()!);
        return r;
    }

}
