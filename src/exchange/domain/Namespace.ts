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
import { RateModelMasterDomain } from "@/gs2/exchange/domain/RateModelMaster";
import { CurrentRateMasterDomain } from "@/gs2/exchange/domain/CurrentRateMaster";
import { RateModelDomain } from "@/gs2/exchange/domain/RateModel";
import { UserDomain } from "@/gs2/exchange/domain/User";
import { UserAccessTokenDomain } from "@/gs2/exchange/domain/UserAccessToken";
import { NamespaceDomainCache } from "@/gs2/exchange/domain/cache/NamespaceDomainCache";
import { RateModelDomainCache } from "@/gs2/exchange/domain/cache/RateModelDomainCache";
import { RateModelMasterDomainCache } from "@/gs2/exchange/domain/cache/RateModelMasterDomainCache";
import { AwaitDomainCache } from "@/gs2/exchange/domain/cache/AwaitDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/exchange/request";
import { GetNamespaceStatusResult } from "@/gs2/exchange/result";
import { GetNamespaceRequest } from "@/gs2/exchange/request";
import { GetNamespaceResult } from "@/gs2/exchange/result";
import { UpdateNamespaceRequest } from "@/gs2/exchange/request";
import { UpdateNamespaceResult } from "@/gs2/exchange/result";
import { DeleteNamespaceRequest } from "@/gs2/exchange/request";
import { DeleteNamespaceResult } from "@/gs2/exchange/result";
import { CreateRateModelMasterRequest } from "@/gs2/exchange/request";
import { CreateRateModelMasterResult } from "@/gs2/exchange/result";
import { DescribeRateModelsIterator } from "@/gs2/exchange/domain/iterator/RateModelsDomainIterator";
import { DescribeRateModelMastersIterator } from "@/gs2/exchange/domain/iterator/RateModelMastersDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2ExchangeRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    rateModelCache: RateModelDomainCache;
    rateModelMasterCache: RateModelMasterDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2ExchangeRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.rateModelCache = new RateModelDomainCache();
        this.rateModelMasterCache = new RateModelMasterDomainCache();
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

    public async createRateModelMaster(
        request: CreateRateModelMasterRequest
    ): Promise<CreateRateModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateRateModelMasterResult = await this.client.createRateModelMaster(
            request
        );
        return r;
    }

    public rateModels(
    ): DescribeRateModelsIterator {
        return new DescribeRateModelsIterator(
            this.rateModelCache,
            this.client,
            this.namespaceName
        );
    }

    public rateModelMasters(
    ): DescribeRateModelMastersIterator {
        return new DescribeRateModelMastersIterator(
            this.rateModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public rateModelMaster(
        rateName: string
    ): RateModelMasterDomain {
        return new RateModelMasterDomain(
            this.session,
            this.rateModelMasterCache,
            this.namespaceName,
            rateName
        );
    }

    public currentRateMaster(
    ): CurrentRateMasterDomain {
        return new CurrentRateMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public rateModel(
        rateName: string
    ): RateModelDomain {
        return new RateModelDomain(
            this.session,
            this.rateModelCache,
            this.namespaceName,
            rateName
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

}
