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
import { Gs2LotteryRestClient } from "@/gs2/lottery";
import { NamespaceDomainCache } from "@/gs2/lottery/domain/cache/NamespaceDomainCache";
import { LotteryModelMasterDomainCache } from "@/gs2/lottery/domain/cache/LotteryModelMasterDomainCache";
import { PrizeTableMasterDomainCache } from "@/gs2/lottery/domain/cache/PrizeTableMasterDomainCache";
import { BoxDomainCache } from "@/gs2/lottery/domain/cache/BoxDomainCache";
import { LotteryModelDomainCache } from "@/gs2/lottery/domain/cache/LotteryModelDomainCache";
import { PrizeTableDomainCache } from "@/gs2/lottery/domain/cache/PrizeTableDomainCache";
import { ProbabilityDomainCache } from "@/gs2/lottery/domain/cache/ProbabilityDomainCache";
import { GetPrizeTableRequest } from "@/gs2/lottery/request";
import { GetPrizeTableResult } from "@/gs2/lottery/result";
import { AccessToken } from "@/gs2/auth/model";

export class PrizeTableDomain {
    session: Gs2RestSession;
    client: Gs2LotteryRestClient;
    prizeTableCache: PrizeTableDomainCache;
    namespaceName: string;
    prizeTableName: string;

    public constructor(
        session: Gs2RestSession,
        prizeTableCache: PrizeTableDomainCache,
        namespaceName: string,
        prizeTableName: string
    ) {
        this.session = session;
        this.client = new Gs2LotteryRestClient(
            session
        );
        this.prizeTableCache = prizeTableCache;
        this.namespaceName = namespaceName;
        this.prizeTableName = prizeTableName;
    }

    public async load(
        request: GetPrizeTableRequest
    ): Promise<GetPrizeTableResult> {
        request.setNamespaceName(this.namespaceName);
        request.setPrizeTableName(this.prizeTableName);
        let r: GetPrizeTableResult = await this.client.getPrizeTable(
            request
        );
        this.prizeTableCache.update(r.getItem()!);
        return r;
    }

}
