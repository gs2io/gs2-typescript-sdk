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
import { GetStaminaRequest } from "@/gs2/stamina/request";
import { GetStaminaResult } from "@/gs2/stamina/result";
import { GetStaminaByUserIdRequest } from "@/gs2/stamina/request";
import { GetStaminaByUserIdResult } from "@/gs2/stamina/result";
import { UpdateStaminaByUserIdRequest } from "@/gs2/stamina/request";
import { UpdateStaminaByUserIdResult } from "@/gs2/stamina/result";
import { ConsumeStaminaRequest } from "@/gs2/stamina/request";
import { ConsumeStaminaResult } from "@/gs2/stamina/result";
import { ConsumeStaminaByUserIdRequest } from "@/gs2/stamina/request";
import { ConsumeStaminaByUserIdResult } from "@/gs2/stamina/result";
import { RecoverStaminaByUserIdRequest } from "@/gs2/stamina/request";
import { RecoverStaminaByUserIdResult } from "@/gs2/stamina/result";
import { RaiseMaxValueByUserIdRequest } from "@/gs2/stamina/request";
import { RaiseMaxValueByUserIdResult } from "@/gs2/stamina/result";
import { SetMaxValueByUserIdRequest } from "@/gs2/stamina/request";
import { SetMaxValueByUserIdResult } from "@/gs2/stamina/result";
import { SetRecoverIntervalByUserIdRequest } from "@/gs2/stamina/request";
import { SetRecoverIntervalByUserIdResult } from "@/gs2/stamina/result";
import { SetRecoverValueByUserIdRequest } from "@/gs2/stamina/request";
import { SetRecoverValueByUserIdResult } from "@/gs2/stamina/result";
import { SetMaxValueByStatusRequest } from "@/gs2/stamina/request";
import { SetMaxValueByStatusResult } from "@/gs2/stamina/result";
import { SetRecoverIntervalByStatusRequest } from "@/gs2/stamina/request";
import { SetRecoverIntervalByStatusResult } from "@/gs2/stamina/result";
import { SetRecoverValueByStatusRequest } from "@/gs2/stamina/request";
import { SetRecoverValueByStatusResult } from "@/gs2/stamina/result";
import { DeleteStaminaByUserIdRequest } from "@/gs2/stamina/request";
import { DeleteStaminaByUserIdResult } from "@/gs2/stamina/result";
import { AccessToken } from "@/gs2/auth/model";

export class StaminaAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2StaminaRestClient;
    staminaCache: StaminaDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    staminaName: string;

    public constructor(
        session: Gs2RestSession,
        staminaCache: StaminaDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        staminaName: string
    ) {
        this.session = session;
        this.client = new Gs2StaminaRestClient(
            session
        );
        this.staminaCache = staminaCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.staminaName = staminaName;
    }

    public async load(
        request: GetStaminaRequest
    ): Promise<GetStaminaResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setStaminaName(this.staminaName);
        let r: GetStaminaResult = await this.client.getStamina(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

    public async consume(
        request: ConsumeStaminaRequest
    ): Promise<ConsumeStaminaResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setStaminaName(this.staminaName);
        let r: ConsumeStaminaResult = await this.client.consumeStamina(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

    public async setMaxValueByStatus(
        request: SetMaxValueByStatusRequest
    ): Promise<SetMaxValueByStatusResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setStaminaName(this.staminaName);
        let r: SetMaxValueByStatusResult = await this.client.setMaxValueByStatus(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

    public async setRecoverIntervalByStatus(
        request: SetRecoverIntervalByStatusRequest
    ): Promise<SetRecoverIntervalByStatusResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setStaminaName(this.staminaName);
        let r: SetRecoverIntervalByStatusResult = await this.client.setRecoverIntervalByStatus(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

    public async setRecoverValueByStatus(
        request: SetRecoverValueByStatusRequest
    ): Promise<SetRecoverValueByStatusResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setStaminaName(this.staminaName);
        let r: SetRecoverValueByStatusResult = await this.client.setRecoverValueByStatus(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

}
