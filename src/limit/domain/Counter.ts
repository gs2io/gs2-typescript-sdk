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
import { Gs2LimitRestClient } from "@/gs2/limit";
import { NamespaceDomainCache } from "@/gs2/limit/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/limit/domain/cache/CounterDomainCache";
import { LimitModelMasterDomainCache } from "@/gs2/limit/domain/cache/LimitModelMasterDomainCache";
import { LimitModelDomainCache } from "@/gs2/limit/domain/cache/LimitModelDomainCache";
import { GetCounterRequest } from "@/gs2/limit/request";
import { GetCounterResult } from "@/gs2/limit/result";
import { GetCounterByUserIdRequest } from "@/gs2/limit/request";
import { GetCounterByUserIdResult } from "@/gs2/limit/result";
import { CountUpRequest } from "@/gs2/limit/request";
import { CountUpResult } from "@/gs2/limit/result";
import { CountUpByUserIdRequest } from "@/gs2/limit/request";
import { CountUpByUserIdResult } from "@/gs2/limit/result";
import { DeleteCounterByUserIdRequest } from "@/gs2/limit/request";
import { DeleteCounterByUserIdResult } from "@/gs2/limit/result";
import { AccessToken } from "@/gs2/auth/model";

export class CounterDomain {
    session: Gs2RestSession;
    client: Gs2LimitRestClient;
    counterCache: CounterDomainCache;
    namespaceName: string;
    userId: string;
    limitName: string;
    counterName: string;

    public constructor(
        session: Gs2RestSession,
        counterCache: CounterDomainCache,
        namespaceName: string,
        userId: string,
        limitName: string,
        counterName: string
    ) {
        this.session = session;
        this.client = new Gs2LimitRestClient(
            session
        );
        this.counterCache = counterCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.limitName = limitName;
        this.counterName = counterName;
    }

    public async load(
        request: GetCounterByUserIdRequest
    ): Promise<GetCounterByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setLimitName(this.limitName);
        request.setCounterName(this.counterName);
        let r: GetCounterByUserIdResult = await this.client.getCounterByUserId(
            request
        );
        this.counterCache.update(r.getItem()!);
        return r;
    }

    public async countUp(
        request: CountUpByUserIdRequest
    ): Promise<CountUpByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setLimitName(this.limitName);
        request.setCounterName(this.counterName);
        let r: CountUpByUserIdResult = await this.client.countUpByUserId(
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
        request.setLimitName(this.limitName);
        request.setCounterName(this.counterName);
        let r: DeleteCounterByUserIdResult = await this.client.deleteCounterByUserId(
            request
        );
        this.counterCache.delete(r.getItem()!);
        return r;
    }

}
