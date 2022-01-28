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
import { DescribeNamespacesIterator } from "@/gs2/account/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/account/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/account/domain/cache/NamespaceDomainCache";
import { AccountDomainCache } from "@/gs2/account/domain/cache/AccountDomainCache";
import { TakeOverDomainCache } from "@/gs2/account/domain/cache/TakeOverDomainCache";
import { CreateNamespaceRequest } from "@/gs2/account/request";
import { CreateNamespaceResult } from "@/gs2/account/result";
import { DeleteTakeOverByUserIdentifierRequest } from "@/gs2/account/request";
import { DeleteTakeOverByUserIdentifierResult } from "@/gs2/account/result";
import { DoTakeOverRequest } from "@/gs2/account/request";
import { DoTakeOverResult } from "@/gs2/account/result";

export class Gs2Account {
    session: Gs2RestSession;
    client: Gs2AccountRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2AccountRestClient (
            session
        );
        this.namespaceCache = new NamespaceDomainCache();
    }

    public async createNamespace(
        request: CreateNamespaceRequest
    ): Promise<CreateNamespaceResult> {
        let r: CreateNamespaceResult = await this.client.createNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async deleteTakeOverByUserIdentifier(
        request: DeleteTakeOverByUserIdentifierRequest
    ): Promise<DeleteTakeOverByUserIdentifierResult> {
        let r: DeleteTakeOverByUserIdentifierResult = await this.client.deleteTakeOverByUserIdentifier(
            request
        );
        return r;
    }

    public async doTakeOver(
        request: DoTakeOverRequest
    ): Promise<DoTakeOverResult> {
        let r: DoTakeOverResult = await this.client.doTakeOver(
            request
        );
        return r;
    }

    public namespaces(
    ): DescribeNamespacesIterator {
        return new DescribeNamespacesIterator(
            this.namespaceCache,
            this.client
        );
    }

    public namespace(
        namespaceName: string
    ): NamespaceDomain {
        return new NamespaceDomain(
            this.session,
            this.namespaceCache,
            namespaceName
        );
    }
}
