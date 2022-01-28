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
import { Gs2LimitRestClient } from "@/gs2/limit";
import { NamespaceDomainCache } from "@/gs2/limit/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/limit/domain/cache/CounterDomainCache";
import { LimitModelMasterDomainCache } from "@/gs2/limit/domain/cache/LimitModelMasterDomainCache";
import { LimitModelDomainCache } from "@/gs2/limit/domain/cache/LimitModelDomainCache";
import { GetLimitModelMasterRequest } from "@/gs2/limit/request";
import { GetLimitModelMasterResult } from "@/gs2/limit/result";
import { UpdateLimitModelMasterRequest } from "@/gs2/limit/request";
import { UpdateLimitModelMasterResult } from "@/gs2/limit/result";
import { DeleteLimitModelMasterRequest } from "@/gs2/limit/request";
import { DeleteLimitModelMasterResult } from "@/gs2/limit/result";
import { AccessToken } from "@/gs2/auth/model";

export class LimitModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2LimitRestClient;
    limitModelMasterCache: LimitModelMasterDomainCache;
    namespaceName: string;
    limitName: string;

    public constructor(
        session: Gs2RestSession,
        limitModelMasterCache: LimitModelMasterDomainCache,
        namespaceName: string,
        limitName: string
    ) {
        this.session = session;
        this.client = new Gs2LimitRestClient(
            session
        );
        this.limitModelMasterCache = limitModelMasterCache;
        this.namespaceName = namespaceName;
        this.limitName = limitName;
    }

    public async load(
        request: GetLimitModelMasterRequest
    ): Promise<GetLimitModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setLimitName(this.limitName);
        let r: GetLimitModelMasterResult = await this.client.getLimitModelMaster(
            request
        );
        this.limitModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateLimitModelMasterRequest
    ): Promise<UpdateLimitModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setLimitName(this.limitName);
        let r: UpdateLimitModelMasterResult = await this.client.updateLimitModelMaster(
            request
        );
        this.limitModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteLimitModelMasterRequest
    ): Promise<DeleteLimitModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setLimitName(this.limitName);
        let r: DeleteLimitModelMasterResult = await this.client.deleteLimitModelMaster(
            request
        );
        this.limitModelMasterCache.delete(r.getItem()!);
        return r;
    }

}
