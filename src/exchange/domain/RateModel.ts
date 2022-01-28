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
import { Gs2ExchangeRestClient } from "@/gs2/exchange";
import { NamespaceDomainCache } from "@/gs2/exchange/domain/cache/NamespaceDomainCache";
import { RateModelDomainCache } from "@/gs2/exchange/domain/cache/RateModelDomainCache";
import { RateModelMasterDomainCache } from "@/gs2/exchange/domain/cache/RateModelMasterDomainCache";
import { AwaitDomainCache } from "@/gs2/exchange/domain/cache/AwaitDomainCache";
import { GetRateModelRequest } from "@/gs2/exchange/request";
import { GetRateModelResult } from "@/gs2/exchange/result";
import { AccessToken } from "@/gs2/auth/model";

export class RateModelDomain {
    session: Gs2RestSession;
    client: Gs2ExchangeRestClient;
    rateModelCache: RateModelDomainCache;
    namespaceName: string;
    rateName: string;

    public constructor(
        session: Gs2RestSession,
        rateModelCache: RateModelDomainCache,
        namespaceName: string,
        rateName: string
    ) {
        this.session = session;
        this.client = new Gs2ExchangeRestClient(
            session
        );
        this.rateModelCache = rateModelCache;
        this.namespaceName = namespaceName;
        this.rateName = rateName;
    }

    public async load(
        request: GetRateModelRequest
    ): Promise<GetRateModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRateName(this.rateName);
        let r: GetRateModelResult = await this.client.getRateModel(
            request
        );
        this.rateModelCache.update(r.getItem()!);
        return r;
    }

}
