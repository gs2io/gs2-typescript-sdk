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
import { Gs2JobQueueRestClient } from "@/gs2/jobQueue";
import { DescribeNamespacesIterator } from "@/gs2/jobQueue/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/jobQueue/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/jobQueue/domain/cache/NamespaceDomainCache";
import { JobDomainCache } from "@/gs2/jobQueue/domain/cache/JobDomainCache";
import { DeadLetterJobDomainCache } from "@/gs2/jobQueue/domain/cache/DeadLetterJobDomainCache";
import { CreateNamespaceRequest } from "@/gs2/jobQueue/request";
import { CreateNamespaceResult } from "@/gs2/jobQueue/result";
import { PushByStampSheetRequest } from "@/gs2/jobQueue/request";
import { PushByStampSheetResult } from "@/gs2/jobQueue/result";

export class Gs2JobQueue {
    session: Gs2RestSession;
    client: Gs2JobQueueRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2JobQueueRestClient (
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

    public async pushByStampSheet(
        request: PushByStampSheetRequest
    ): Promise<PushByStampSheetResult> {
        let r: PushByStampSheetResult = await this.client.pushByStampSheet(
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
