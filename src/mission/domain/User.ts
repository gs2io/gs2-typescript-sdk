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
import { CounterDomain } from "@/gs2/mission/domain/Counter";
import { CounterAccessTokenDomain } from "@/gs2/mission/domain/CounterAccessToken";
import { CompleteDomain } from "@/gs2/mission/domain/Complete";
import { CompleteAccessTokenDomain } from "@/gs2/mission/domain/CompleteAccessToken";
import { CompleteDomainCache } from "@/gs2/mission/domain/cache/CompleteDomainCache";
import { CounterModelMasterDomainCache } from "@/gs2/mission/domain/cache/CounterModelMasterDomainCache";
import { MissionGroupModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelMasterDomainCache";
import { NamespaceDomainCache } from "@/gs2/mission/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/mission/domain/cache/CounterDomainCache";
import { CounterModelDomainCache } from "@/gs2/mission/domain/cache/CounterModelDomainCache";
import { MissionGroupModelDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelDomainCache";
import { MissionTaskModelDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelDomainCache";
import { MissionTaskModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelMasterDomainCache";
import { DescribeCompletesIterator } from "@/gs2/mission/domain/iterator/CompletesDomainIterator";
import { DescribeCompletesByUserIdIterator } from "@/gs2/mission/domain/iterator/CompletesByUserIdDomainIterator";
import { DescribeCountersIterator } from "@/gs2/mission/domain/iterator/CountersDomainIterator";
import { DescribeCountersByUserIdIterator } from "@/gs2/mission/domain/iterator/CountersByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2MissionRestClient;
    namespaceName: string;
    userId: string;
    completeCache: CompleteDomainCache;
    counterCache: CounterDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2MissionRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.completeCache = new CompleteDomainCache();
        this.counterCache = new CounterDomainCache();
    }

    public completes(
    ): DescribeCompletesByUserIdIterator {
        return new DescribeCompletesByUserIdIterator(
            this.completeCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

    public counters(
    ): DescribeCountersByUserIdIterator {
        return new DescribeCountersByUserIdIterator(
            this.counterCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

    public counter(
        counterName: string
    ): CounterDomain {
        return new CounterDomain(
            this.session,
            this.counterCache,
            this.namespaceName,
            this.userId,
            counterName
        );
    }

    public complete(
        missionGroupName: string
    ): CompleteDomain {
        return new CompleteDomain(
            this.session,
            this.completeCache,
            this.namespaceName,
            this.userId,
            missionGroupName
        );
    }

}
