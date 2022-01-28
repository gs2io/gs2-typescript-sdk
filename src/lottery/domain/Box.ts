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
import { GetBoxRequest } from "@/gs2/lottery/request";
import { GetBoxResult } from "@/gs2/lottery/result";
import { GetBoxByUserIdRequest } from "@/gs2/lottery/request";
import { GetBoxByUserIdResult } from "@/gs2/lottery/result";
import { GetRawBoxByUserIdRequest } from "@/gs2/lottery/request";
import { GetRawBoxByUserIdResult } from "@/gs2/lottery/result";
import { ResetBoxRequest } from "@/gs2/lottery/request";
import { ResetBoxResult } from "@/gs2/lottery/result";
import { ResetBoxByUserIdRequest } from "@/gs2/lottery/request";
import { ResetBoxByUserIdResult } from "@/gs2/lottery/result";
import { AccessToken } from "@/gs2/auth/model";

export class BoxDomain {
    session: Gs2RestSession;
    client: Gs2LotteryRestClient;
    boxCache: BoxDomainCache;
    namespaceName: string;
    userId: string;
    prizeTableName: string;

    public constructor(
        session: Gs2RestSession,
        boxCache: BoxDomainCache,
        namespaceName: string,
        userId: string,
        prizeTableName: string
    ) {
        this.session = session;
        this.client = new Gs2LotteryRestClient(
            session
        );
        this.boxCache = boxCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.prizeTableName = prizeTableName;
    }

    public async load(
        request: GetBoxByUserIdRequest
    ): Promise<GetBoxByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setPrizeTableName(this.prizeTableName);
        let r: GetBoxByUserIdResult = await this.client.getBoxByUserId(
            request
        );
        return r;
    }

    public async getRaw(
        request: GetRawBoxByUserIdRequest
    ): Promise<GetRawBoxByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setPrizeTableName(this.prizeTableName);
        let r: GetRawBoxByUserIdResult = await this.client.getRawBoxByUserId(
            request
        );
        this.boxCache.update(r.getItem()!);
        return r;
    }

    public async reset(
        request: ResetBoxByUserIdRequest
    ): Promise<ResetBoxByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setPrizeTableName(this.prizeTableName);
        let r: ResetBoxByUserIdResult = await this.client.resetBoxByUserId(
            request
        );
        return r;
    }

}
