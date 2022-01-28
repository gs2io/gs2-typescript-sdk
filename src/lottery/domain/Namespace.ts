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
import { UserDomain } from "@/gs2/lottery/domain/User";
import { UserAccessTokenDomain } from "@/gs2/lottery/domain/UserAccessToken";
import { CurrentLotteryMasterDomain } from "@/gs2/lottery/domain/CurrentLotteryMaster";
import { LotteryModelDomain } from "@/gs2/lottery/domain/LotteryModel";
import { PrizeTableMasterDomain } from "@/gs2/lottery/domain/PrizeTableMaster";
import { LotteryModelMasterDomain } from "@/gs2/lottery/domain/LotteryModelMaster";
import { PrizeTableDomain } from "@/gs2/lottery/domain/PrizeTable";
import { NamespaceDomainCache } from "@/gs2/lottery/domain/cache/NamespaceDomainCache";
import { LotteryModelMasterDomainCache } from "@/gs2/lottery/domain/cache/LotteryModelMasterDomainCache";
import { PrizeTableMasterDomainCache } from "@/gs2/lottery/domain/cache/PrizeTableMasterDomainCache";
import { BoxDomainCache } from "@/gs2/lottery/domain/cache/BoxDomainCache";
import { LotteryModelDomainCache } from "@/gs2/lottery/domain/cache/LotteryModelDomainCache";
import { PrizeTableDomainCache } from "@/gs2/lottery/domain/cache/PrizeTableDomainCache";
import { ProbabilityDomainCache } from "@/gs2/lottery/domain/cache/ProbabilityDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/lottery/request";
import { GetNamespaceStatusResult } from "@/gs2/lottery/result";
import { GetNamespaceRequest } from "@/gs2/lottery/request";
import { GetNamespaceResult } from "@/gs2/lottery/result";
import { UpdateNamespaceRequest } from "@/gs2/lottery/request";
import { UpdateNamespaceResult } from "@/gs2/lottery/result";
import { DeleteNamespaceRequest } from "@/gs2/lottery/request";
import { DeleteNamespaceResult } from "@/gs2/lottery/result";
import { CreateLotteryModelMasterRequest } from "@/gs2/lottery/request";
import { CreateLotteryModelMasterResult } from "@/gs2/lottery/result";
import { CreatePrizeTableMasterRequest } from "@/gs2/lottery/request";
import { CreatePrizeTableMasterResult } from "@/gs2/lottery/result";
import { DescribeLotteryModelMastersIterator } from "@/gs2/lottery/domain/iterator/LotteryModelMastersDomainIterator";
import { DescribePrizeTableMastersIterator } from "@/gs2/lottery/domain/iterator/PrizeTableMastersDomainIterator";
import { DescribeLotteryModelsIterator } from "@/gs2/lottery/domain/iterator/LotteryModelsDomainIterator";
import { DescribePrizeTablesIterator } from "@/gs2/lottery/domain/iterator/PrizeTablesDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2LotteryRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    lotteryModelMasterCache: LotteryModelMasterDomainCache;
    prizeTableMasterCache: PrizeTableMasterDomainCache;
    lotteryModelCache: LotteryModelDomainCache;
    prizeTableCache: PrizeTableDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2LotteryRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.lotteryModelMasterCache = new LotteryModelMasterDomainCache();
        this.prizeTableMasterCache = new PrizeTableMasterDomainCache();
        this.lotteryModelCache = new LotteryModelDomainCache();
        this.prizeTableCache = new PrizeTableDomainCache();
    }

    public async getStatus(
        request: GetNamespaceStatusRequest
    ): Promise<GetNamespaceStatusResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetNamespaceStatusResult = await this.client.getNamespaceStatus(
            request
        );
        return r;
    }

    public async load(
        request: GetNamespaceRequest
    ): Promise<GetNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetNamespaceResult = await this.client.getNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateNamespaceRequest
    ): Promise<UpdateNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateNamespaceResult = await this.client.updateNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteNamespaceRequest
    ): Promise<DeleteNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: DeleteNamespaceResult = await this.client.deleteNamespace(
            request
        );
        this.namespaceCache.delete(r.getItem()!);
        return r;
    }

    public async createLotteryModelMaster(
        request: CreateLotteryModelMasterRequest
    ): Promise<CreateLotteryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateLotteryModelMasterResult = await this.client.createLotteryModelMaster(
            request
        );
        return r;
    }

    public async createPrizeTableMaster(
        request: CreatePrizeTableMasterRequest
    ): Promise<CreatePrizeTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreatePrizeTableMasterResult = await this.client.createPrizeTableMaster(
            request
        );
        return r;
    }

    public lotteryModelMasters(
    ): DescribeLotteryModelMastersIterator {
        return new DescribeLotteryModelMastersIterator(
            this.lotteryModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public prizeTableMasters(
    ): DescribePrizeTableMastersIterator {
        return new DescribePrizeTableMastersIterator(
            this.prizeTableMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public lotteryModels(
    ): DescribeLotteryModelsIterator {
        return new DescribeLotteryModelsIterator(
            this.lotteryModelCache,
            this.client,
            this.namespaceName
        );
    }

    public prizeTables(
    ): DescribePrizeTablesIterator {
        return new DescribePrizeTablesIterator(
            this.prizeTableCache,
            this.client,
            this.namespaceName
        );
    }

    public user(
        userId: string
    ): UserDomain {
        return new UserDomain(
            this.session,
            this.namespaceName,
            userId
        );
    }

    public accessToken(
        accessToken: AccessToken
    ): UserAccessTokenDomain  {
        return new UserAccessTokenDomain(
            this.session,
            this.namespaceName,
            accessToken
        );
    }

    public currentLotteryMaster(
    ): CurrentLotteryMasterDomain {
        return new CurrentLotteryMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public lotteryModel(
        lotteryName: string
    ): LotteryModelDomain {
        return new LotteryModelDomain(
            this.session,
            this.lotteryModelCache,
            this.namespaceName,
            lotteryName
        );
    }

    public prizeTableMaster(
        prizeTableName: string
    ): PrizeTableMasterDomain {
        return new PrizeTableMasterDomain(
            this.session,
            this.prizeTableMasterCache,
            this.namespaceName,
            prizeTableName
        );
    }

    public lotteryModelMaster(
        lotteryName: string
    ): LotteryModelMasterDomain {
        return new LotteryModelMasterDomain(
            this.session,
            this.lotteryModelMasterCache,
            this.namespaceName,
            lotteryName
        );
    }

    public prizeTable(
        prizeTableName: string
    ): PrizeTableDomain {
        return new PrizeTableDomain(
            this.session,
            this.prizeTableCache,
            this.namespaceName,
            prizeTableName
        );
    }

}
