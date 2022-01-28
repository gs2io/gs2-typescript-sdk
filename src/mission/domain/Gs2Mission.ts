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
import { Gs2MissionRestClient } from "@/gs2/mission";
import { DescribeNamespacesIterator } from "@/gs2/mission/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/mission/domain/Namespace";
import { CompleteDomainCache } from "@/gs2/mission/domain/cache/CompleteDomainCache";
import { CounterModelMasterDomainCache } from "@/gs2/mission/domain/cache/CounterModelMasterDomainCache";
import { MissionGroupModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelMasterDomainCache";
import { NamespaceDomainCache } from "@/gs2/mission/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/mission/domain/cache/CounterDomainCache";
import { CounterModelDomainCache } from "@/gs2/mission/domain/cache/CounterModelDomainCache";
import { MissionGroupModelDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelDomainCache";
import { MissionTaskModelDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelDomainCache";
import { MissionTaskModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelMasterDomainCache";
import { ReceiveByStampTaskRequest } from "@/gs2/mission/request";
import { ReceiveByStampTaskResult } from "@/gs2/mission/result";
import { CreateNamespaceRequest } from "@/gs2/mission/request";
import { CreateNamespaceResult } from "@/gs2/mission/result";
import { IncreaseByStampSheetRequest } from "@/gs2/mission/request";
import { IncreaseByStampSheetResult } from "@/gs2/mission/result";

export class Gs2Mission {
    session: Gs2RestSession;
    client: Gs2MissionRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2MissionRestClient (
            session
        );
        this.namespaceCache = new NamespaceDomainCache();
    }

    public async receiveByStampTask(
        request: ReceiveByStampTaskRequest
    ): Promise<ReceiveByStampTaskResult> {
        let r: ReceiveByStampTaskResult = await this.client.receiveByStampTask(
            request
        );
        return r;
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

    public async increaseByStampSheet(
        request: IncreaseByStampSheetRequest
    ): Promise<IncreaseByStampSheetResult> {
        let r: IncreaseByStampSheetResult = await this.client.increaseByStampSheet(
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
