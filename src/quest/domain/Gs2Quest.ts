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
import { Gs2QuestRestClient } from "@/gs2/quest";
import { DescribeNamespacesIterator } from "@/gs2/quest/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/quest/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/quest/domain/cache/NamespaceDomainCache";
import { QuestGroupModelMasterDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelMasterDomainCache";
import { QuestModelMasterDomainCache } from "@/gs2/quest/domain/cache/QuestModelMasterDomainCache";
import { ProgressDomainCache } from "@/gs2/quest/domain/cache/ProgressDomainCache";
import { CompletedQuestListDomainCache } from "@/gs2/quest/domain/cache/CompletedQuestListDomainCache";
import { QuestGroupModelDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelDomainCache";
import { QuestModelDomainCache } from "@/gs2/quest/domain/cache/QuestModelDomainCache";
import { CreateNamespaceRequest } from "@/gs2/quest/request";
import { CreateNamespaceResult } from "@/gs2/quest/result";
import { CreateProgressByStampSheetRequest } from "@/gs2/quest/request";
import { CreateProgressByStampSheetResult } from "@/gs2/quest/result";
import { DeleteProgressByStampTaskRequest } from "@/gs2/quest/request";
import { DeleteProgressByStampTaskResult } from "@/gs2/quest/result";

export class Gs2Quest {
    session: Gs2RestSession;
    client: Gs2QuestRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2QuestRestClient (
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
