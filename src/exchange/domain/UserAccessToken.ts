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
import { AwaitDomain } from "@/gs2/exchange/domain/Await";
import { AwaitAccessTokenDomain } from "@/gs2/exchange/domain/AwaitAccessToken";
import { NamespaceDomainCache } from "@/gs2/exchange/domain/cache/NamespaceDomainCache";
import { RateModelDomainCache } from "@/gs2/exchange/domain/cache/RateModelDomainCache";
import { RateModelMasterDomainCache } from "@/gs2/exchange/domain/cache/RateModelMasterDomainCache";
import { AwaitDomainCache } from "@/gs2/exchange/domain/cache/AwaitDomainCache";
import { ExchangeRequest } from "@/gs2/exchange/request";
import { ExchangeResult } from "@/gs2/exchange/result";
import { ExchangeByUserIdRequest } from "@/gs2/exchange/request";
import { ExchangeByUserIdResult } from "@/gs2/exchange/result";
import { CreateAwaitByUserIdRequest } from "@/gs2/exchange/request";
import { CreateAwaitByUserIdResult } from "@/gs2/exchange/result";
import { DescribeAwaitsIterator } from "@/gs2/exchange/domain/iterator/AwaitsDomainIterator";
import { DescribeAwaitsByUserIdIterator } from "@/gs2/exchange/domain/iterator/AwaitsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2ExchangeRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    awaitCache: AwaitDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2ExchangeRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.awaitCache = new AwaitDomainCache();
    }

    public async exchange(
        request: ExchangeRequest
    ): Promise<ExchangeResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: ExchangeResult = await this.client.exchange(
            request
        );
        return r;
    }

    public awaits(
        rateName: string|null
    ): DescribeAwaitsIterator {
        return new DescribeAwaitsIterator(
            this.awaitCache,
            this.client,
            this.namespaceName,
            this.accessToken,
            rateName
        );
    }

    public await(
        awaitName: string
    ): AwaitAccessTokenDomain {
        return new AwaitAccessTokenDomain(
            this.session,
            this.awaitCache,
            this.namespaceName,
            this.accessToken,
            awaitName
        );
    }

}
