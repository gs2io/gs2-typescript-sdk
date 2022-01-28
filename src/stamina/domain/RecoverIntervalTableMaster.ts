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
import { GetRecoverIntervalTableMasterRequest } from "@/gs2/stamina/request";
import { GetRecoverIntervalTableMasterResult } from "@/gs2/stamina/result";
import { UpdateRecoverIntervalTableMasterRequest } from "@/gs2/stamina/request";
import { UpdateRecoverIntervalTableMasterResult } from "@/gs2/stamina/result";
import { DeleteRecoverIntervalTableMasterRequest } from "@/gs2/stamina/request";
import { DeleteRecoverIntervalTableMasterResult } from "@/gs2/stamina/result";
import { AccessToken } from "@/gs2/auth/model";

export class RecoverIntervalTableMasterDomain {
    session: Gs2RestSession;
    client: Gs2StaminaRestClient;
    recoverIntervalTableMasterCache: RecoverIntervalTableMasterDomainCache;
    namespaceName: string;
    recoverIntervalTableName: string;

    public constructor(
        session: Gs2RestSession,
        recoverIntervalTableMasterCache: RecoverIntervalTableMasterDomainCache,
        namespaceName: string,
        recoverIntervalTableName: string
    ) {
        this.session = session;
        this.client = new Gs2StaminaRestClient(
            session
        );
        this.recoverIntervalTableMasterCache = recoverIntervalTableMasterCache;
        this.namespaceName = namespaceName;
        this.recoverIntervalTableName = recoverIntervalTableName;
    }

    public async load(
        request: GetRecoverIntervalTableMasterRequest
    ): Promise<GetRecoverIntervalTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRecoverIntervalTableName(this.recoverIntervalTableName);
        let r: GetRecoverIntervalTableMasterResult = await this.client.getRecoverIntervalTableMaster(
            request
        );
        this.recoverIntervalTableMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateRecoverIntervalTableMasterRequest
    ): Promise<UpdateRecoverIntervalTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRecoverIntervalTableName(this.recoverIntervalTableName);
        let r: UpdateRecoverIntervalTableMasterResult = await this.client.updateRecoverIntervalTableMaster(
            request
        );
        this.recoverIntervalTableMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteRecoverIntervalTableMasterRequest
    ): Promise<DeleteRecoverIntervalTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRecoverIntervalTableName(this.recoverIntervalTableName);
        let r: DeleteRecoverIntervalTableMasterResult = await this.client.deleteRecoverIntervalTableMaster(
            request
        );
        this.recoverIntervalTableMasterCache.delete(r.getItem()!);
        return r;
    }

}
