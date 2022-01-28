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
import { Gs2StaminaRestClient } from "@/gs2/stamina";
import { DescribeNamespacesIterator } from "@/gs2/stamina/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/stamina/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/stamina/domain/cache/NamespaceDomainCache";
import { StaminaModelMasterDomainCache } from "@/gs2/stamina/domain/cache/StaminaModelMasterDomainCache";
import { MaxStaminaTableMasterDomainCache } from "@/gs2/stamina/domain/cache/MaxStaminaTableMasterDomainCache";
import { RecoverIntervalTableMasterDomainCache } from "@/gs2/stamina/domain/cache/RecoverIntervalTableMasterDomainCache";
import { RecoverValueTableMasterDomainCache } from "@/gs2/stamina/domain/cache/RecoverValueTableMasterDomainCache";
import { StaminaModelDomainCache } from "@/gs2/stamina/domain/cache/StaminaModelDomainCache";
import { StaminaDomainCache } from "@/gs2/stamina/domain/cache/StaminaDomainCache";
import { CreateNamespaceRequest } from "@/gs2/stamina/request";
import { CreateNamespaceResult } from "@/gs2/stamina/result";
import { RecoverStaminaByStampSheetRequest } from "@/gs2/stamina/request";
import { RecoverStaminaByStampSheetResult } from "@/gs2/stamina/result";
import { RaiseMaxValueByStampSheetRequest } from "@/gs2/stamina/request";
import { RaiseMaxValueByStampSheetResult } from "@/gs2/stamina/result";
import { SetMaxValueByStampSheetRequest } from "@/gs2/stamina/request";
import { SetMaxValueByStampSheetResult } from "@/gs2/stamina/result";
import { SetRecoverIntervalByStampSheetRequest } from "@/gs2/stamina/request";
import { SetRecoverIntervalByStampSheetResult } from "@/gs2/stamina/result";
import { SetRecoverValueByStampSheetRequest } from "@/gs2/stamina/request";
import { SetRecoverValueByStampSheetResult } from "@/gs2/stamina/result";
import { ConsumeStaminaByStampTaskRequest } from "@/gs2/stamina/request";
import { ConsumeStaminaByStampTaskResult } from "@/gs2/stamina/result";

export class Gs2Stamina {
    session: Gs2RestSession;
    client: Gs2StaminaRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2StaminaRestClient (
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

    public async recoverStaminaByStampSheet(
        request: RecoverStaminaByStampSheetRequest
    ): Promise<RecoverStaminaByStampSheetResult> {
        let r: RecoverStaminaByStampSheetResult = await this.client.recoverStaminaByStampSheet(
            request
        );
        return r;
    }

    public async raiseMaxValueByStampSheet(
        request: RaiseMaxValueByStampSheetRequest
    ): Promise<RaiseMaxValueByStampSheetResult> {
        let r: RaiseMaxValueByStampSheetResult = await this.client.raiseMaxValueByStampSheet(
            request
        );
        return r;
    }

    public async setMaxValueByStampSheet(
        request: SetMaxValueByStampSheetRequest
    ): Promise<SetMaxValueByStampSheetResult> {
        let r: SetMaxValueByStampSheetResult = await this.client.setMaxValueByStampSheet(
            request
        );
        return r;
    }

    public async setRecoverIntervalByStampSheet(
        request: SetRecoverIntervalByStampSheetRequest
    ): Promise<SetRecoverIntervalByStampSheetResult> {
        let r: SetRecoverIntervalByStampSheetResult = await this.client.setRecoverIntervalByStampSheet(
            request
        );
        return r;
    }

    public async setRecoverValueByStampSheet(
        request: SetRecoverValueByStampSheetRequest
    ): Promise<SetRecoverValueByStampSheetResult> {
        let r: SetRecoverValueByStampSheetResult = await this.client.setRecoverValueByStampSheet(
            request
        );
        return r;
    }

    public async consumeStaminaByStampTask(
        request: ConsumeStaminaByStampTaskRequest
    ): Promise<ConsumeStaminaByStampTaskResult> {
        let r: ConsumeStaminaByStampTaskResult = await this.client.consumeStaminaByStampTask(
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
