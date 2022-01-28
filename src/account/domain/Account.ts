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

export class AccountDomain {
    session: Gs2RestSession;
    client: Gs2AccountRestClient;
    accountCache: AccountDomainCache;
    namespaceName: string;
    userId: string;
    takeOverCache: TakeOverDomainCache;

    public constructor(
        session: Gs2RestSession,
        accountCache: AccountDomainCache,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2AccountRestClient(
            session
        );
        this.accountCache = accountCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.takeOverCache = new TakeOverDomainCache();
    }

    public async updateTimeOffset(
        request: UpdateTimeOffsetRequest
    ): Promise<UpdateTimeOffsetResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: UpdateTimeOffsetResult = await this.client.updateTimeOffset(
            request
        );
        this.accountCache.update(r.getItem()!);
        return r;
    }

    public async load(
        request: GetAccountRequest
    ): Promise<GetAccountResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: GetAccountResult = await this.client.getAccount(
            request
        );
        this.accountCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteAccountRequest
    ): Promise<DeleteAccountResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: DeleteAccountResult = await this.client.deleteAccount(
            request
        );
        this.accountCache.delete(r.getItem()!);
        return r;
    }

    public async authentication(
        request: AuthenticationRequest
    ): Promise<AuthenticationResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: AuthenticationResult = await this.client.authentication(
            request
        );
        this.accountCache.update(r.getItem()!);
        return r;
    }

    public async createTakeOver(
        request: CreateTakeOverByUserIdRequest
    ): Promise<CreateTakeOverByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: CreateTakeOverByUserIdResult = await this.client.createTakeOverByUserId(
            request
        );
        return r;
    }

    public takeOvers(
    ): DescribeTakeOversByUserIdIterator {
        return new DescribeTakeOversByUserIdIterator(
            this.takeOverCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

    public takeOver(
        type: number
    ): TakeOverDomain {
        return new TakeOverDomain(
            this.session,
            this.takeOverCache,
            this.namespaceName,
            this.userId,
            type
        );
    }

}
