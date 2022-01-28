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
import { BoxDomain } from "@/gs2/lottery/domain/Box";
import { BoxAccessTokenDomain } from "@/gs2/lottery/domain/BoxAccessToken";
import { NamespaceDomainCache } from "@/gs2/lottery/domain/cache/NamespaceDomainCache";
import { LotteryModelMasterDomainCache } from "@/gs2/lottery/domain/cache/LotteryModelMasterDomainCache";
import { PrizeTableMasterDomainCache } from "@/gs2/lottery/domain/cache/PrizeTableMasterDomainCache";
import { BoxDomainCache } from "@/gs2/lottery/domain/cache/BoxDomainCache";
import { LotteryModelDomainCache } from "@/gs2/lottery/domain/cache/LotteryModelDomainCache";
import { PrizeTableDomainCache } from "@/gs2/lottery/domain/cache/PrizeTableDomainCache";
import { ProbabilityDomainCache } from "@/gs2/lottery/domain/cache/ProbabilityDomainCache";
import { DrawByUserIdRequest } from "@/gs2/lottery/request";
import { DrawByUserIdResult } from "@/gs2/lottery/result";
import { DescribeBoxesIterator } from "@/gs2/lottery/domain/iterator/BoxesDomainIterator";
import { DescribeBoxesByUserIdIterator } from "@/gs2/lottery/domain/iterator/BoxesByUserIdDomainIterator";
import { DescribeProbabilitiesIterator } from "@/gs2/lottery/domain/iterator/ProbabilitiesDomainIterator";
import { DescribeProbabilitiesByUserIdIterator } from "@/gs2/lottery/domain/iterator/ProbabilitiesByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2LotteryRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    boxCache: BoxDomainCache;
    probabilityCache: ProbabilityDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2LotteryRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.boxCache = new BoxDomainCache();
        this.probabilityCache = new ProbabilityDomainCache();
    }

    public boxes(
    ): DescribeBoxesIterator {
        return new DescribeBoxesIterator(
            this.boxCache,
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

    public probabilities(
        lotteryName: string
    ): DescribeProbabilitiesIterator {
        return new DescribeProbabilitiesIterator(
            this.probabilityCache,
            this.client,
            this.namespaceName,
            lotteryName,
            this.accessToken
        );
    }

    public box(
        prizeTableName: string
    ): BoxAccessTokenDomain {
        return new BoxAccessTokenDomain(
            this.session,
            this.boxCache,
            this.namespaceName,
            this.accessToken,
            prizeTableName
        );
    }

}
