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
import { Gs2KeyRestClient } from "@/gs2/key";
import { DescribeNamespacesIterator } from "@/gs2/key/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/key/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/key/domain/cache/NamespaceDomainCache";
import { KeyDomainCache } from "@/gs2/key/domain/cache/KeyDomainCache";
import { GitHubApiKeyDomainCache } from "@/gs2/key/domain/cache/GitHubApiKeyDomainCache";
import { CreateNamespaceRequest } from "@/gs2/key/request";
import { CreateNamespaceResult } from "@/gs2/key/result";

export class Gs2Key {
    session: Gs2RestSession;
    client: Gs2KeyRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2KeyRestClient (
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
