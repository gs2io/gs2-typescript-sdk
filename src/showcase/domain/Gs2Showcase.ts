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
import { Gs2ShowcaseRestClient } from "@/gs2/showcase";
import { DescribeNamespacesIterator } from "@/gs2/showcase/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/showcase/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/showcase/domain/cache/NamespaceDomainCache";
import { SalesItemMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemMasterDomainCache";
import { SalesItemGroupMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemGroupMasterDomainCache";
import { ShowcaseMasterDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseMasterDomainCache";
import { ShowcaseDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseDomainCache";
import { CreateNamespaceRequest } from "@/gs2/showcase/request";
import { CreateNamespaceResult } from "@/gs2/showcase/result";

export class Gs2Showcase {
    session: Gs2RestSession;
    client: Gs2ShowcaseRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2ShowcaseRestClient (
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
