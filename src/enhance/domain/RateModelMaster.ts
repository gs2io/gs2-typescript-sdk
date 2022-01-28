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
import { Gs2EnhanceRestClient } from "@/gs2/enhance";
import { NamespaceDomainCache } from "@/gs2/enhance/domain/cache/NamespaceDomainCache";
import { RateModelDomainCache } from "@/gs2/enhance/domain/cache/RateModelDomainCache";
import { RateModelMasterDomainCache } from "@/gs2/enhance/domain/cache/RateModelMasterDomainCache";
import { ProgressDomainCache } from "@/gs2/enhance/domain/cache/ProgressDomainCache";
import { GetRateModelMasterRequest } from "@/gs2/enhance/request";
import { GetRateModelMasterResult } from "@/gs2/enhance/result";
import { UpdateRateModelMasterRequest } from "@/gs2/enhance/request";
import { UpdateRateModelMasterResult } from "@/gs2/enhance/result";
import { DeleteRateModelMasterRequest } from "@/gs2/enhance/request";
import { DeleteRateModelMasterResult } from "@/gs2/enhance/result";
import { AccessToken } from "@/gs2/auth/model";

export class RateModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2EnhanceRestClient;
    rateModelMasterCache: RateModelMasterDomainCache;
    namespaceName: string;
    rateName: string;

    public constructor(
        session: Gs2RestSession,
        rateModelMasterCache: RateModelMasterDomainCache,
        namespaceName: string,
        rateName: string
    ) {
        this.session = session;
        this.client = new Gs2EnhanceRestClient(
            session
        );
        this.rateModelMasterCache = rateModelMasterCache;
        this.namespaceName = namespaceName;
        this.rateName = rateName;
    }

    public async load(
        request: GetRateModelMasterRequest
    ): Promise<GetRateModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRateName(this.rateName);
        let r: GetRateModelMasterResult = await this.client.getRateModelMaster(
            request
        );
        this.rateModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateRateModelMasterRequest
    ): Promise<UpdateRateModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRateName(this.rateName);
        let r: UpdateRateModelMasterResult = await this.client.updateRateModelMaster(
            request
        );
        this.rateModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteRateModelMasterRequest
    ): Promise<DeleteRateModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRateName(this.rateName);
        let r: DeleteRateModelMasterResult = await this.client.deleteRateModelMaster(
            request
        );
        this.rateModelMasterCache.delete(r.getItem()!);
        return r;
    }

}
