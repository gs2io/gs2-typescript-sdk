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
import { GetLotteryModelMasterRequest } from "@/gs2/lottery/request";
import { GetLotteryModelMasterResult } from "@/gs2/lottery/result";
import { UpdateLotteryModelMasterRequest } from "@/gs2/lottery/request";
import { UpdateLotteryModelMasterResult } from "@/gs2/lottery/result";
import { DeleteLotteryModelMasterRequest } from "@/gs2/lottery/request";
import { DeleteLotteryModelMasterResult } from "@/gs2/lottery/result";
import { AccessToken } from "@/gs2/auth/model";

export class LotteryModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2LotteryRestClient;
    lotteryModelMasterCache: LotteryModelMasterDomainCache;
    namespaceName: string;
    lotteryName: string;

    public constructor(
        session: Gs2RestSession,
        lotteryModelMasterCache: LotteryModelMasterDomainCache,
        namespaceName: string,
        lotteryName: string
    ) {
        this.session = session;
        this.client = new Gs2LotteryRestClient(
            session
        );
        this.lotteryModelMasterCache = lotteryModelMasterCache;
        this.namespaceName = namespaceName;
        this.lotteryName = lotteryName;
    }

    public async load(
        request: GetLotteryModelMasterRequest
    ): Promise<GetLotteryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setLotteryName(this.lotteryName);
        let r: GetLotteryModelMasterResult = await this.client.getLotteryModelMaster(
            request
        );
        this.lotteryModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateLotteryModelMasterRequest
    ): Promise<UpdateLotteryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setLotteryName(this.lotteryName);
        let r: UpdateLotteryModelMasterResult = await this.client.updateLotteryModelMaster(
            request
        );
        this.lotteryModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteLotteryModelMasterRequest
    ): Promise<DeleteLotteryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setLotteryName(this.lotteryName);
        let r: DeleteLotteryModelMasterResult = await this.client.deleteLotteryModelMaster(
            request
        );
        this.lotteryModelMasterCache.delete(r.getItem()!);
        return r;
    }

}
