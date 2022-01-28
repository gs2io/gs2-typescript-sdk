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
import { GetRecoverValueTableMasterRequest } from "@/gs2/stamina/request";
import { GetRecoverValueTableMasterResult } from "@/gs2/stamina/result";
import { UpdateRecoverValueTableMasterRequest } from "@/gs2/stamina/request";
import { UpdateRecoverValueTableMasterResult } from "@/gs2/stamina/result";
import { DeleteRecoverValueTableMasterRequest } from "@/gs2/stamina/request";
import { DeleteRecoverValueTableMasterResult } from "@/gs2/stamina/result";
import { AccessToken } from "@/gs2/auth/model";

export class RecoverValueTableMasterDomain {
    session: Gs2RestSession;
    client: Gs2StaminaRestClient;
    recoverValueTableMasterCache: RecoverValueTableMasterDomainCache;
    namespaceName: string;
    recoverValueTableName: string;

    public constructor(
        session: Gs2RestSession,
        recoverValueTableMasterCache: RecoverValueTableMasterDomainCache,
        namespaceName: string,
        recoverValueTableName: string
    ) {
        this.session = session;
        this.client = new Gs2StaminaRestClient(
            session
        );
        this.recoverValueTableMasterCache = recoverValueTableMasterCache;
        this.namespaceName = namespaceName;
        this.recoverValueTableName = recoverValueTableName;
    }

    public async load(
        request: GetRecoverValueTableMasterRequest
    ): Promise<GetRecoverValueTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRecoverValueTableName(this.recoverValueTableName);
        let r: GetRecoverValueTableMasterResult = await this.client.getRecoverValueTableMaster(
            request
        );
        this.recoverValueTableMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateRecoverValueTableMasterRequest
    ): Promise<UpdateRecoverValueTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRecoverValueTableName(this.recoverValueTableName);
        let r: UpdateRecoverValueTableMasterResult = await this.client.updateRecoverValueTableMaster(
            request
        );
        this.recoverValueTableMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteRecoverValueTableMasterRequest
    ): Promise<DeleteRecoverValueTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRecoverValueTableName(this.recoverValueTableName);
        let r: DeleteRecoverValueTableMasterResult = await this.client.deleteRecoverValueTableMaster(
            request
        );
        this.recoverValueTableMasterCache.delete(r.getItem()!);
        return r;
    }

}
