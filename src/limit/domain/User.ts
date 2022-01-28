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
import { CounterDomain } from "@/gs2/limit/domain/Counter";
import { CounterAccessTokenDomain } from "@/gs2/limit/domain/CounterAccessToken";
import { NamespaceDomainCache } from "@/gs2/limit/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/limit/domain/cache/CounterDomainCache";
import { LimitModelMasterDomainCache } from "@/gs2/limit/domain/cache/LimitModelMasterDomainCache";
import { LimitModelDomainCache } from "@/gs2/limit/domain/cache/LimitModelDomainCache";
import { DescribeCountersIterator } from "@/gs2/limit/domain/iterator/CountersDomainIterator";
import { DescribeCountersByUserIdIterator } from "@/gs2/limit/domain/iterator/CountersByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2LimitRestClient;
    namespaceName: string;
    userId: string;
    counterCache: CounterDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2LimitRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.counterCache = new CounterDomainCache();
    }

    public counters(
        limitName: string|null
    ): DescribeCountersByUserIdIterator {
        return new DescribeCountersByUserIdIterator(
            this.counterCache,
            this.client,
            this.namespaceName,
            this.userId,
            limitName
        );
    }

    public counter(
        limitName: string,
        counterName: string
    ): CounterDomain {
        return new CounterDomain(
            this.session,
            this.counterCache,
            this.namespaceName,
            this.userId,
            limitName,
            counterName
        );
    }

}
