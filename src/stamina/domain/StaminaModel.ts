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
import { GetStaminaModelRequest } from "@/gs2/stamina/request";
import { GetStaminaModelResult } from "@/gs2/stamina/result";
import { AccessToken } from "@/gs2/auth/model";

export class StaminaModelDomain {
    session: Gs2RestSession;
    client: Gs2StaminaRestClient;
    staminaModelCache: StaminaModelDomainCache;
    namespaceName: string;
    staminaName: string;

    public constructor(
        session: Gs2RestSession,
        staminaModelCache: StaminaModelDomainCache,
        namespaceName: string,
        staminaName: string
    ) {
        this.session = session;
        this.client = new Gs2StaminaRestClient(
            session
        );
        this.staminaModelCache = staminaModelCache;
        this.namespaceName = namespaceName;
        this.staminaName = staminaName;
    }

    public async load(
        request: GetStaminaModelRequest
    ): Promise<GetStaminaModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setStaminaName(this.staminaName);
        let r: GetStaminaModelResult = await this.client.getStaminaModel(
            request
        );
        this.staminaModelCache.update(r.getItem()!);
        return r;
    }

}
