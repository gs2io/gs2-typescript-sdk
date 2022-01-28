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

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2ExchangeRestClient;
    namespaceName: string;
    userId: string;
    awaitCache: AwaitDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2ExchangeRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.awaitCache = new AwaitDomainCache();
    }

    public async exchange(
        request: ExchangeByUserIdRequest
    ): Promise<ExchangeByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: ExchangeByUserIdResult = await this.client.exchangeByUserId(
            request
        );
        return r;
    }

    public async createAwait(
        request: CreateAwaitByUserIdRequest
    ): Promise<CreateAwaitByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: CreateAwaitByUserIdResult = await this.client.createAwaitByUserId(
            request
        );
        return r;
    }

    public awaits(
        rateName: string|null
    ): DescribeAwaitsByUserIdIterator {
        return new DescribeAwaitsByUserIdIterator(
            this.awaitCache,
            this.client,
            this.namespaceName,
            this.userId,
            rateName
        );
    }

    public await(
        awaitName: string
    ): AwaitDomain {
        return new AwaitDomain(
            this.session,
            this.awaitCache,
            this.namespaceName,
            this.userId,
            awaitName
        );
    }

}
