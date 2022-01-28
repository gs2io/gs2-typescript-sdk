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
import { GetLotteryModelRequest } from "@/gs2/lottery/request";
import { GetLotteryModelResult } from "@/gs2/lottery/result";
import { AccessToken } from "@/gs2/auth/model";

export class LotteryModelDomain {
    session: Gs2RestSession;
    client: Gs2LotteryRestClient;
    lotteryModelCache: LotteryModelDomainCache;
    namespaceName: string;
    lotteryName: string;

    public constructor(
        session: Gs2RestSession,
        lotteryModelCache: LotteryModelDomainCache,
        namespaceName: string,
        lotteryName: string
    ) {
        this.session = session;
        this.client = new Gs2LotteryRestClient(
            session
        );
        this.lotteryModelCache = lotteryModelCache;
        this.namespaceName = namespaceName;
        this.lotteryName = lotteryName;
    }

    public async load(
        request: GetLotteryModelRequest
    ): Promise<GetLotteryModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setLotteryName(this.lotteryName);
        let r: GetLotteryModelResult = await this.client.getLotteryModel(
            request
        );
        this.lotteryModelCache.update(r.getItem()!);
        return r;
    }

}
