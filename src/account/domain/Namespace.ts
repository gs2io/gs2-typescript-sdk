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
import { AccountDomain } from "@/gs2/account/domain/Account";
import { AccountAccessTokenDomain } from "@/gs2/account/domain/AccountAccessToken";
import { NamespaceDomainCache } from "@/gs2/account/domain/cache/NamespaceDomainCache";
import { AccountDomainCache } from "@/gs2/account/domain/cache/AccountDomainCache";
import { TakeOverDomainCache } from "@/gs2/account/domain/cache/TakeOverDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/account/request";
import { GetNamespaceStatusResult } from "@/gs2/account/result";
import { GetNamespaceRequest } from "@/gs2/account/request";
import { GetNamespaceResult } from "@/gs2/account/result";
import { UpdateNamespaceRequest } from "@/gs2/account/request";
import { UpdateNamespaceResult } from "@/gs2/account/result";
import { DeleteNamespaceRequest } from "@/gs2/account/request";
import { DeleteNamespaceResult } from "@/gs2/account/result";
import { CreateAccountRequest } from "@/gs2/account/request";
import { CreateAccountResult } from "@/gs2/account/result";
import { DescribeAccountsIterator } from "@/gs2/account/domain/iterator/AccountsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2AccountRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    accountCache: AccountDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2AccountRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.accountCache = new AccountDomainCache();
    }

    public async getStatus(
        request: GetNamespaceStatusRequest
    ): Promise<GetNamespaceStatusResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetNamespaceStatusResult = await this.client.getNamespaceStatus(
            request
        );
        return r;
    }

    public async load(
        request: GetNamespaceRequest
    ): Promise<GetNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetNamespaceResult = await this.client.getNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateNamespaceRequest
    ): Promise<UpdateNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateNamespaceResult = await this.client.updateNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteNamespaceRequest
    ): Promise<DeleteNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: DeleteNamespaceResult = await this.client.deleteNamespace(
            request
        );
        this.namespaceCache.delete(r.getItem()!);
        return r;
    }

    public async createAccount(
        request: CreateAccountRequest
    ): Promise<CreateAccountResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateAccountResult = await this.client.createAccount(
            request
        );
        return r;
    }

    public accounts(
    ): DescribeAccountsIterator {
        return new DescribeAccountsIterator(
            this.accountCache,
            this.client,
            this.namespaceName
        );
    }

    public account(
        userId: string
    ): AccountDomain {
        return new AccountDomain(
            this.session,
            this.accountCache,
            this.namespaceName,
            userId
        );
    }

    public accessToken(
        accessToken: AccessToken
    ): AccountAccessTokenDomain  {
        return new AccountAccessTokenDomain(
            this.session,
            this.accountCache,
            this.namespaceName,
            accessToken
        );
    }

}
