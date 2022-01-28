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
import { Gs2LockRestClient } from "@/gs2/lock";
import { MutexDomain } from "@/gs2/lock/domain/Mutex";
import { MutexAccessTokenDomain } from "@/gs2/lock/domain/MutexAccessToken";
import { NamespaceDomainCache } from "@/gs2/lock/domain/cache/NamespaceDomainCache";
import { MutexDomainCache } from "@/gs2/lock/domain/cache/MutexDomainCache";
import { DescribeMutexesIterator } from "@/gs2/lock/domain/iterator/MutexesDomainIterator";
import { DescribeMutexesByUserIdIterator } from "@/gs2/lock/domain/iterator/MutexesByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2LockRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    mutexCache: MutexDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2LockRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.mutexCache = new MutexDomainCache();
    }

    public mutexes(
    ): DescribeMutexesIterator {
        return new DescribeMutexesIterator(
            this.mutexCache,
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

    public mutex(
        propertyId: string
    ): MutexAccessTokenDomain {
        return new MutexAccessTokenDomain(
            this.session,
            this.mutexCache,
            this.namespaceName,
            this.accessToken,
            propertyId
        );
    }

}
