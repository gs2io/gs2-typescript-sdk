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
import { Gs2FormationRestClient } from "@/gs2/formation";
import { DescribeNamespacesIterator } from "@/gs2/formation/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/formation/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/formation/domain/cache/NamespaceDomainCache";
import { FormModelMasterDomainCache } from "@/gs2/formation/domain/cache/FormModelMasterDomainCache";
import { MoldModelDomainCache } from "@/gs2/formation/domain/cache/MoldModelDomainCache";
import { MoldModelMasterDomainCache } from "@/gs2/formation/domain/cache/MoldModelMasterDomainCache";
import { MoldDomainCache } from "@/gs2/formation/domain/cache/MoldDomainCache";
import { FormDomainCache } from "@/gs2/formation/domain/cache/FormDomainCache";
import { CreateNamespaceRequest } from "@/gs2/formation/request";
import { CreateNamespaceResult } from "@/gs2/formation/result";
import { AddCapacityByStampSheetRequest } from "@/gs2/formation/request";
import { AddCapacityByStampSheetResult } from "@/gs2/formation/result";
import { SetCapacityByStampSheetRequest } from "@/gs2/formation/request";
import { SetCapacityByStampSheetResult } from "@/gs2/formation/result";
import { AcquireActionToFormPropertiesByStampSheetRequest } from "@/gs2/formation/request";
import { AcquireActionToFormPropertiesByStampSheetResult } from "@/gs2/formation/result";

export class Gs2Formation {
    session: Gs2RestSession;
    client: Gs2FormationRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2FormationRestClient (
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

    public async addCapacityByStampSheet(
        request: AddCapacityByStampSheetRequest
    ): Promise<AddCapacityByStampSheetResult> {
        let r: AddCapacityByStampSheetResult = await this.client.addCapacityByStampSheet(
            request
        );
        return r;
    }

    public async setCapacityByStampSheet(
        request: SetCapacityByStampSheetRequest
    ): Promise<SetCapacityByStampSheetResult> {
        let r: SetCapacityByStampSheetResult = await this.client.setCapacityByStampSheet(
            request
        );
        return r;
    }

    public async acquireActionToFormPropertiesByStampSheet(
        request: AcquireActionToFormPropertiesByStampSheetRequest
    ): Promise<AcquireActionToFormPropertiesByStampSheetResult> {
        let r: AcquireActionToFormPropertiesByStampSheetResult = await this.client.acquireActionToFormPropertiesByStampSheet(
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
