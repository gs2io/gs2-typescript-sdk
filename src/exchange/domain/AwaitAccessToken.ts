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
import { Gs2ExchangeRestClient } from "@/gs2/exchange";
import { NamespaceDomainCache } from "@/gs2/exchange/domain/cache/NamespaceDomainCache";
import { RateModelDomainCache } from "@/gs2/exchange/domain/cache/RateModelDomainCache";
import { RateModelMasterDomainCache } from "@/gs2/exchange/domain/cache/RateModelMasterDomainCache";
import { AwaitDomainCache } from "@/gs2/exchange/domain/cache/AwaitDomainCache";
import { GetAwaitRequest } from "@/gs2/exchange/request";
import { GetAwaitResult } from "@/gs2/exchange/result";
import { GetAwaitByUserIdRequest } from "@/gs2/exchange/request";
import { GetAwaitByUserIdResult } from "@/gs2/exchange/result";
import { AcquireRequest } from "@/gs2/exchange/request";
import { AcquireResult } from "@/gs2/exchange/result";
import { AcquireByUserIdRequest } from "@/gs2/exchange/request";
import { AcquireByUserIdResult } from "@/gs2/exchange/result";
import { AcquireForceByUserIdRequest } from "@/gs2/exchange/request";
import { AcquireForceByUserIdResult } from "@/gs2/exchange/result";
import { SkipRequest } from "@/gs2/exchange/request";
import { SkipResult } from "@/gs2/exchange/result";
import { SkipByUserIdRequest } from "@/gs2/exchange/request";
import { SkipByUserIdResult } from "@/gs2/exchange/result";
import { DeleteAwaitRequest } from "@/gs2/exchange/request";
import { DeleteAwaitResult } from "@/gs2/exchange/result";
import { DeleteAwaitByUserIdRequest } from "@/gs2/exchange/request";
import { DeleteAwaitByUserIdResult } from "@/gs2/exchange/result";
import { AccessToken } from "@/gs2/auth/model";

export class AwaitAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2ExchangeRestClient;
    awaitCache: AwaitDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    awaitName: string;

    public constructor(
        session: Gs2RestSession,
        awaitCache: AwaitDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        awaitName: string
    ) {
        this.session = session;
        this.client = new Gs2ExchangeRestClient(
            session
        );
        this.awaitCache = awaitCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.awaitName = awaitName;
    }

    public async load(
        request: GetAwaitRequest
    ): Promise<GetAwaitResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setAwaitName(this.awaitName);
        let r: GetAwaitResult = await this.client.getAwait(
            request
        );
        this.awaitCache.update(r.getItem()!);
        return r;
    }

    public async acquire(
        request: AcquireRequest
    ): Promise<AcquireResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setAwaitName(this.awaitName);
        let r: AcquireResult = await this.client.acquire(
            request
        );
        this.awaitCache.update(r.getItem()!);
        return r;
    }

    public async skip(
        request: SkipRequest
    ): Promise<SkipResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setAwaitName(this.awaitName);
        let r: SkipResult = await this.client.skip(
            request
        );
        this.awaitCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteAwaitRequest
    ): Promise<DeleteAwaitResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setAwaitName(this.awaitName);
        let r: DeleteAwaitResult = await this.client.deleteAwait(
            request
        );
        this.awaitCache.delete(r.getItem()!);
        return r;
    }

}
