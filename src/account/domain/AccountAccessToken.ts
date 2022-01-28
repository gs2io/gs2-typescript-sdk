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
import { Gs2AccountRestClient } from "@/gs2/account";
import { TakeOverDomain } from "@/gs2/account/domain/TakeOver";
import { TakeOverAccessTokenDomain } from "@/gs2/account/domain/TakeOverAccessToken";
import { NamespaceDomainCache } from "@/gs2/account/domain/cache/NamespaceDomainCache";
import { AccountDomainCache } from "@/gs2/account/domain/cache/AccountDomainCache";
import { TakeOverDomainCache } from "@/gs2/account/domain/cache/TakeOverDomainCache";
import { UpdateTimeOffsetRequest } from "@/gs2/account/request";
import { UpdateTimeOffsetResult } from "@/gs2/account/result";
import { GetAccountRequest } from "@/gs2/account/request";
import { GetAccountResult } from "@/gs2/account/result";
import { DeleteAccountRequest } from "@/gs2/account/request";
import { DeleteAccountResult } from "@/gs2/account/result";
import { AuthenticationRequest } from "@/gs2/account/request";
import { AuthenticationResult } from "@/gs2/account/result";
import { CreateTakeOverRequest } from "@/gs2/account/request";
import { CreateTakeOverResult } from "@/gs2/account/result";
import { CreateTakeOverByUserIdRequest } from "@/gs2/account/request";
import { CreateTakeOverByUserIdResult } from "@/gs2/account/result";
import { DescribeTakeOversIterator } from "@/gs2/account/domain/iterator/TakeOversDomainIterator";
import { DescribeTakeOversByUserIdIterator } from "@/gs2/account/domain/iterator/TakeOversByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class AccountAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2AccountRestClient;
    accountCache: AccountDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    takeOverCache: TakeOverDomainCache;

    public constructor(
        session: Gs2RestSession,
        accountCache: AccountDomainCache,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2AccountRestClient(
            session
        );
        this.accountCache = accountCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.takeOverCache = new TakeOverDomainCache();
    }

    public async createTakeOver(
        request: CreateTakeOverRequest
    ): Promise<CreateTakeOverResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: CreateTakeOverResult = await this.client.createTakeOver(
            request
        );
        return r;
    }

    public takeOvers(
    ): DescribeTakeOversIterator {
        return new DescribeTakeOversIterator(
            this.takeOverCache,
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

    public takeOver(
        type: number
    ): TakeOverAccessTokenDomain {
        return new TakeOverAccessTokenDomain(
            this.session,
            this.takeOverCache,
            this.namespaceName,
            this.accessToken,
            type
        );
    }

}
