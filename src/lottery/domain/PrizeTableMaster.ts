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
import { GetPrizeTableMasterRequest } from "@/gs2/lottery/request";
import { GetPrizeTableMasterResult } from "@/gs2/lottery/result";
import { UpdatePrizeTableMasterRequest } from "@/gs2/lottery/request";
import { UpdatePrizeTableMasterResult } from "@/gs2/lottery/result";
import { DeletePrizeTableMasterRequest } from "@/gs2/lottery/request";
import { DeletePrizeTableMasterResult } from "@/gs2/lottery/result";
import { AccessToken } from "@/gs2/auth/model";

export class PrizeTableMasterDomain {
    session: Gs2RestSession;
    client: Gs2LotteryRestClient;
    prizeTableMasterCache: PrizeTableMasterDomainCache;
    namespaceName: string;
    prizeTableName: string;

    public constructor(
        session: Gs2RestSession,
        prizeTableMasterCache: PrizeTableMasterDomainCache,
        namespaceName: string,
        prizeTableName: string
    ) {
        this.session = session;
        this.client = new Gs2LotteryRestClient(
            session
        );
        this.prizeTableMasterCache = prizeTableMasterCache;
        this.namespaceName = namespaceName;
        this.prizeTableName = prizeTableName;
    }

    public async load(
        request: GetPrizeTableMasterRequest
    ): Promise<GetPrizeTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setPrizeTableName(this.prizeTableName);
        let r: GetPrizeTableMasterResult = await this.client.getPrizeTableMaster(
            request
        );
        this.prizeTableMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdatePrizeTableMasterRequest
    ): Promise<UpdatePrizeTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setPrizeTableName(this.prizeTableName);
        let r: UpdatePrizeTableMasterResult = await this.client.updatePrizeTableMaster(
            request
        );
        this.prizeTableMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeletePrizeTableMasterRequest
    ): Promise<DeletePrizeTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setPrizeTableName(this.prizeTableName);
        let r: DeletePrizeTableMasterResult = await this.client.deletePrizeTableMaster(
            request
        );
        this.prizeTableMasterCache.delete(r.getItem()!);
        return r;
    }

}
