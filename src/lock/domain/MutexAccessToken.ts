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
import { NamespaceDomainCache } from "@/gs2/lock/domain/cache/NamespaceDomainCache";
import { MutexDomainCache } from "@/gs2/lock/domain/cache/MutexDomainCache";
import { LockRequest } from "@/gs2/lock/request";
import { LockResult } from "@/gs2/lock/result";
import { LockByUserIdRequest } from "@/gs2/lock/request";
import { LockByUserIdResult } from "@/gs2/lock/result";
import { UnlockRequest } from "@/gs2/lock/request";
import { UnlockResult } from "@/gs2/lock/result";
import { UnlockByUserIdRequest } from "@/gs2/lock/request";
import { UnlockByUserIdResult } from "@/gs2/lock/result";
import { GetMutexRequest } from "@/gs2/lock/request";
import { GetMutexResult } from "@/gs2/lock/result";
import { GetMutexByUserIdRequest } from "@/gs2/lock/request";
import { GetMutexByUserIdResult } from "@/gs2/lock/result";
import { DeleteMutexByUserIdRequest } from "@/gs2/lock/request";
import { DeleteMutexByUserIdResult } from "@/gs2/lock/result";
import { AccessToken } from "@/gs2/auth/model";

export class MutexAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2LockRestClient;
    mutexCache: MutexDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    propertyId: string;

    public constructor(
        session: Gs2RestSession,
        mutexCache: MutexDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        propertyId: string
    ) {
        this.session = session;
        this.client = new Gs2LockRestClient(
            session
        );
        this.mutexCache = mutexCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.propertyId = propertyId;
    }

    public async lock(
        request: LockRequest
    ): Promise<LockResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setPropertyId(this.propertyId);
        let r: LockResult = await this.client.lock(
            request
        );
        this.mutexCache.update(r.getItem()!);
        return r;
    }

    public async unlock(
        request: UnlockRequest
    ): Promise<UnlockResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setPropertyId(this.propertyId);
        let r: UnlockResult = await this.client.unlock(
            request
        );
        this.mutexCache.update(r.getItem()!);
        return r;
    }

    public async load(
        request: GetMutexRequest
    ): Promise<GetMutexResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setPropertyId(this.propertyId);
        let r: GetMutexResult = await this.client.getMutex(
            request
        );
        this.mutexCache.update(r.getItem()!);
        return r;
    }

}
