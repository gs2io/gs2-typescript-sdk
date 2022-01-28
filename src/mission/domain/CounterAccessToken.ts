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
import { IncreaseCounterByUserIdRequest } from "@/gs2/mission/request";
import { IncreaseCounterByUserIdResult } from "@/gs2/mission/result";
import { GetCounterRequest } from "@/gs2/mission/request";
import { GetCounterResult } from "@/gs2/mission/result";
import { GetCounterByUserIdRequest } from "@/gs2/mission/request";
import { GetCounterByUserIdResult } from "@/gs2/mission/result";
import { DeleteCounterByUserIdRequest } from "@/gs2/mission/request";
import { DeleteCounterByUserIdResult } from "@/gs2/mission/result";
import { AccessToken } from "@/gs2/auth/model";

export class CounterAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2MissionRestClient;
    counterCache: CounterDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    counterName: string;

    public constructor(
        session: Gs2RestSession,
        counterCache: CounterDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        counterName: string
    ) {
        this.session = session;
        this.client = new Gs2MissionRestClient(
            session
        );
        this.counterCache = counterCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.counterName = counterName;
    }

    public async load(
        request: GetCounterRequest
    ): Promise<GetCounterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setCounterName(this.counterName);
        let r: GetCounterResult = await this.client.getCounter(
            request
        );
        this.counterCache.update(r.getItem()!);
        return r;
    }

}
