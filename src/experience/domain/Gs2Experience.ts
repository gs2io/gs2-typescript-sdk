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
import { Gs2ExperienceRestClient } from "@/gs2/experience";
import { DescribeNamespacesIterator } from "@/gs2/experience/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/experience/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/experience/domain/cache/NamespaceDomainCache";
import { ExperienceModelMasterDomainCache } from "@/gs2/experience/domain/cache/ExperienceModelMasterDomainCache";
import { ExperienceModelDomainCache } from "@/gs2/experience/domain/cache/ExperienceModelDomainCache";
import { ThresholdMasterDomainCache } from "@/gs2/experience/domain/cache/ThresholdMasterDomainCache";
import { StatusDomainCache } from "@/gs2/experience/domain/cache/StatusDomainCache";
import { CreateNamespaceRequest } from "@/gs2/experience/request";
import { CreateNamespaceResult } from "@/gs2/experience/result";
import { AddExperienceByStampSheetRequest } from "@/gs2/experience/request";
import { AddExperienceByStampSheetResult } from "@/gs2/experience/result";
import { AddRankCapByStampSheetRequest } from "@/gs2/experience/request";
import { AddRankCapByStampSheetResult } from "@/gs2/experience/result";
import { SetRankCapByStampSheetRequest } from "@/gs2/experience/request";
import { SetRankCapByStampSheetResult } from "@/gs2/experience/result";

export class Gs2Experience {
    session: Gs2RestSession;
    client: Gs2ExperienceRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2ExperienceRestClient (
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

    public async addExperienceByStampSheet(
        request: AddExperienceByStampSheetRequest
    ): Promise<AddExperienceByStampSheetResult> {
        let r: AddExperienceByStampSheetResult = await this.client.addExperienceByStampSheet(
            request
        );
        return r;
    }

    public async addRankCapByStampSheet(
        request: AddRankCapByStampSheetRequest
    ): Promise<AddRankCapByStampSheetResult> {
        let r: AddRankCapByStampSheetResult = await this.client.addRankCapByStampSheet(
            request
        );
        return r;
    }

    public async setRankCapByStampSheet(
        request: SetRankCapByStampSheetRequest
    ): Promise<SetRankCapByStampSheetResult> {
        let r: SetRankCapByStampSheetResult = await this.client.setRankCapByStampSheet(
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
