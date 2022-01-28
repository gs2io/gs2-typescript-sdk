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
import { Gs2EnhanceRestClient } from "@/gs2/enhance";
import { DescribeNamespacesIterator } from "@/gs2/enhance/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/enhance/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/enhance/domain/cache/NamespaceDomainCache";
import { RateModelDomainCache } from "@/gs2/enhance/domain/cache/RateModelDomainCache";
import { RateModelMasterDomainCache } from "@/gs2/enhance/domain/cache/RateModelMasterDomainCache";
import { ProgressDomainCache } from "@/gs2/enhance/domain/cache/ProgressDomainCache";
import { CreateNamespaceRequest } from "@/gs2/enhance/request";
import { CreateNamespaceResult } from "@/gs2/enhance/result";
import { DirectEnhanceByStampSheetRequest } from "@/gs2/enhance/request";
import { DirectEnhanceByStampSheetResult } from "@/gs2/enhance/result";
import { CreateProgressByStampSheetRequest } from "@/gs2/enhance/request";
import { CreateProgressByStampSheetResult } from "@/gs2/enhance/result";
import { DeleteProgressByStampTaskRequest } from "@/gs2/enhance/request";
import { DeleteProgressByStampTaskResult } from "@/gs2/enhance/result";

export class Gs2Enhance {
    session: Gs2RestSession;
    client: Gs2EnhanceRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2EnhanceRestClient (
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

    public async directEnhanceByStampSheet(
        request: DirectEnhanceByStampSheetRequest
    ): Promise<DirectEnhanceByStampSheetResult> {
        let r: DirectEnhanceByStampSheetResult = await this.client.directEnhanceByStampSheet(
            request
        );
        return r;
    }

    public async createProgressByStampSheet(
        request: CreateProgressByStampSheetRequest
    ): Promise<CreateProgressByStampSheetResult> {
        let r: CreateProgressByStampSheetResult = await this.client.createProgressByStampSheet(
            request
        );
        return r;
    }

    public async deleteProgressByStampTask(
        request: DeleteProgressByStampTaskRequest
    ): Promise<DeleteProgressByStampTaskResult> {
        let r: DeleteProgressByStampTaskResult = await this.client.deleteProgressByStampTask(
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
