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

export class CounterDomain {
    session: Gs2RestSession;
    client: Gs2MissionRestClient;
    counterCache: CounterDomainCache;
    namespaceName: string;
    userId: string;
    counterName: string;

    public constructor(
        session: Gs2RestSession,
        counterCache: CounterDomainCache,
        namespaceName: string,
        userId: string,
        counterName: string
    ) {
        this.session = session;
        this.client = new Gs2MissionRestClient(
            session
        );
        this.counterCache = counterCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.counterName = counterName;
    }

    public async increase(
        request: IncreaseCounterByUserIdRequest
    ): Promise<IncreaseCounterByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setCounterName(this.counterName);
        let r: IncreaseCounterByUserIdResult = await this.client.increaseCounterByUserId(
            request
        );
        this.counterCache.update(r.getItem()!);
        return r;
    }

    public async load(
        request: GetCounterByUserIdRequest
    ): Promise<GetCounterByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setCounterName(this.counterName);
        let r: GetCounterByUserIdResult = await this.client.getCounterByUserId(
            request
        );
        this.counterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteCounterByUserIdRequest
    ): Promise<DeleteCounterByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setCounterName(this.counterName);
        let r: DeleteCounterByUserIdResult = await this.client.deleteCounterByUserId(
            request
        );
        this.counterCache.delete(r.getItem()!);
        return r;
    }

}
