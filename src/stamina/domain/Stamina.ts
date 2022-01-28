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

export class StaminaDomain {
    session: Gs2RestSession;
    client: Gs2StaminaRestClient;
    staminaCache: StaminaDomainCache;
    namespaceName: string;
    userId: string;
    staminaName: string;

    public constructor(
        session: Gs2RestSession,
        staminaCache: StaminaDomainCache,
        namespaceName: string,
        userId: string,
        staminaName: string
    ) {
        this.session = session;
        this.client = new Gs2StaminaRestClient(
            session
        );
        this.staminaCache = staminaCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.staminaName = staminaName;
    }

    public async load(
        request: GetStaminaByUserIdRequest
    ): Promise<GetStaminaByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setStaminaName(this.staminaName);
        let r: GetStaminaByUserIdResult = await this.client.getStaminaByUserId(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateStaminaByUserIdRequest
    ): Promise<UpdateStaminaByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setStaminaName(this.staminaName);
        let r: UpdateStaminaByUserIdResult = await this.client.updateStaminaByUserId(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

    public async consume(
        request: ConsumeStaminaByUserIdRequest
    ): Promise<ConsumeStaminaByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setStaminaName(this.staminaName);
        let r: ConsumeStaminaByUserIdResult = await this.client.consumeStaminaByUserId(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

    public async recover(
        request: RecoverStaminaByUserIdRequest
    ): Promise<RecoverStaminaByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setStaminaName(this.staminaName);
        let r: RecoverStaminaByUserIdResult = await this.client.recoverStaminaByUserId(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

    public async raiseMaxValue(
        request: RaiseMaxValueByUserIdRequest
    ): Promise<RaiseMaxValueByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setStaminaName(this.staminaName);
        let r: RaiseMaxValueByUserIdResult = await this.client.raiseMaxValueByUserId(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

    public async setMaxValue(
        request: SetMaxValueByUserIdRequest
    ): Promise<SetMaxValueByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setStaminaName(this.staminaName);
        let r: SetMaxValueByUserIdResult = await this.client.setMaxValueByUserId(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

    public async setRecoverInterval(
        request: SetRecoverIntervalByUserIdRequest
    ): Promise<SetRecoverIntervalByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setStaminaName(this.staminaName);
        let r: SetRecoverIntervalByUserIdResult = await this.client.setRecoverIntervalByUserId(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

    public async setRecoverValue(
        request: SetRecoverValueByUserIdRequest
    ): Promise<SetRecoverValueByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setStaminaName(this.staminaName);
        let r: SetRecoverValueByUserIdResult = await this.client.setRecoverValueByUserId(
            request
        );
        this.staminaCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteStaminaByUserIdRequest
    ): Promise<DeleteStaminaByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setStaminaName(this.staminaName);
        let r: DeleteStaminaByUserIdResult = await this.client.deleteStaminaByUserId(
            request
        );
        return r;
    }

}
