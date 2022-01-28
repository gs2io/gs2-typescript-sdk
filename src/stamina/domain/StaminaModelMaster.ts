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
import { GetStaminaModelMasterRequest } from "@/gs2/stamina/request";
import { GetStaminaModelMasterResult } from "@/gs2/stamina/result";
import { UpdateStaminaModelMasterRequest } from "@/gs2/stamina/request";
import { UpdateStaminaModelMasterResult } from "@/gs2/stamina/result";
import { DeleteStaminaModelMasterRequest } from "@/gs2/stamina/request";
import { DeleteStaminaModelMasterResult } from "@/gs2/stamina/result";
import { AccessToken } from "@/gs2/auth/model";

export class StaminaModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2StaminaRestClient;
    staminaModelMasterCache: StaminaModelMasterDomainCache;
    namespaceName: string;
    staminaName: string;

    public constructor(
        session: Gs2RestSession,
        staminaModelMasterCache: StaminaModelMasterDomainCache,
        namespaceName: string,
        staminaName: string
    ) {
        this.session = session;
        this.client = new Gs2StaminaRestClient(
            session
        );
        this.staminaModelMasterCache = staminaModelMasterCache;
        this.namespaceName = namespaceName;
        this.staminaName = staminaName;
    }

    public async load(
        request: GetStaminaModelMasterRequest
    ): Promise<GetStaminaModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setStaminaName(this.staminaName);
        let r: GetStaminaModelMasterResult = await this.client.getStaminaModelMaster(
            request
        );
        this.staminaModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateStaminaModelMasterRequest
    ): Promise<UpdateStaminaModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setStaminaName(this.staminaName);
        let r: UpdateStaminaModelMasterResult = await this.client.updateStaminaModelMaster(
            request
        );
        this.staminaModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteStaminaModelMasterRequest
    ): Promise<DeleteStaminaModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setStaminaName(this.staminaName);
        let r: DeleteStaminaModelMasterResult = await this.client.deleteStaminaModelMaster(
            request
        );
        this.staminaModelMasterCache.delete(r.getItem()!);
        return r;
    }

}
