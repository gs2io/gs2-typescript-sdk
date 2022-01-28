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
import { NamespaceDomainCache } from "@/gs2/stamina/domain/cache/NamespaceDomainCache";
import { StaminaModelMasterDomainCache } from "@/gs2/stamina/domain/cache/StaminaModelMasterDomainCache";
import { MaxStaminaTableMasterDomainCache } from "@/gs2/stamina/domain/cache/MaxStaminaTableMasterDomainCache";
import { RecoverIntervalTableMasterDomainCache } from "@/gs2/stamina/domain/cache/RecoverIntervalTableMasterDomainCache";
import { RecoverValueTableMasterDomainCache } from "@/gs2/stamina/domain/cache/RecoverValueTableMasterDomainCache";
import { StaminaModelDomainCache } from "@/gs2/stamina/domain/cache/StaminaModelDomainCache";
import { StaminaDomainCache } from "@/gs2/stamina/domain/cache/StaminaDomainCache";
import { GetMaxStaminaTableMasterRequest } from "@/gs2/stamina/request";
import { GetMaxStaminaTableMasterResult } from "@/gs2/stamina/result";
import { UpdateMaxStaminaTableMasterRequest } from "@/gs2/stamina/request";
import { UpdateMaxStaminaTableMasterResult } from "@/gs2/stamina/result";
import { DeleteMaxStaminaTableMasterRequest } from "@/gs2/stamina/request";
import { DeleteMaxStaminaTableMasterResult } from "@/gs2/stamina/result";
import { AccessToken } from "@/gs2/auth/model";

export class MaxStaminaTableMasterDomain {
    session: Gs2RestSession;
    client: Gs2StaminaRestClient;
    maxStaminaTableMasterCache: MaxStaminaTableMasterDomainCache;
    namespaceName: string;
    maxStaminaTableName: string;

    public constructor(
        session: Gs2RestSession,
        maxStaminaTableMasterCache: MaxStaminaTableMasterDomainCache,
        namespaceName: string,
        maxStaminaTableName: string
    ) {
        this.session = session;
        this.client = new Gs2StaminaRestClient(
            session
        );
        this.maxStaminaTableMasterCache = maxStaminaTableMasterCache;
        this.namespaceName = namespaceName;
        this.maxStaminaTableName = maxStaminaTableName;
    }

    public async load(
        request: GetMaxStaminaTableMasterRequest
    ): Promise<GetMaxStaminaTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setMaxStaminaTableName(this.maxStaminaTableName);
        let r: GetMaxStaminaTableMasterResult = await this.client.getMaxStaminaTableMaster(
            request
        );
        this.maxStaminaTableMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateMaxStaminaTableMasterRequest
    ): Promise<UpdateMaxStaminaTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setMaxStaminaTableName(this.maxStaminaTableName);
        let r: UpdateMaxStaminaTableMasterResult = await this.client.updateMaxStaminaTableMaster(
            request
        );
        this.maxStaminaTableMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteMaxStaminaTableMasterRequest
    ): Promise<DeleteMaxStaminaTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setMaxStaminaTableName(this.maxStaminaTableName);
        let r: DeleteMaxStaminaTableMasterResult = await this.client.deleteMaxStaminaTableMaster(
            request
        );
        this.maxStaminaTableMasterCache.delete(r.getItem()!);
        return r;
    }

}
