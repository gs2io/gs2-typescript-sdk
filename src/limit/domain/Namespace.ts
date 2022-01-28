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
import { Gs2LimitRestClient } from "@/gs2/limit";
import { CurrentLimitMasterDomain } from "@/gs2/limit/domain/CurrentLimitMaster";
import { LimitModelDomain } from "@/gs2/limit/domain/LimitModel";
import { UserDomain } from "@/gs2/limit/domain/User";
import { UserAccessTokenDomain } from "@/gs2/limit/domain/UserAccessToken";
import { LimitModelMasterDomain } from "@/gs2/limit/domain/LimitModelMaster";
import { NamespaceDomainCache } from "@/gs2/limit/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/limit/domain/cache/CounterDomainCache";
import { LimitModelMasterDomainCache } from "@/gs2/limit/domain/cache/LimitModelMasterDomainCache";
import { LimitModelDomainCache } from "@/gs2/limit/domain/cache/LimitModelDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/limit/request";
import { GetNamespaceStatusResult } from "@/gs2/limit/result";
import { GetNamespaceRequest } from "@/gs2/limit/request";
import { GetNamespaceResult } from "@/gs2/limit/result";
import { UpdateNamespaceRequest } from "@/gs2/limit/request";
import { UpdateNamespaceResult } from "@/gs2/limit/result";
import { DeleteNamespaceRequest } from "@/gs2/limit/request";
import { DeleteNamespaceResult } from "@/gs2/limit/result";
import { CreateLimitModelMasterRequest } from "@/gs2/limit/request";
import { CreateLimitModelMasterResult } from "@/gs2/limit/result";
import { DescribeLimitModelMastersIterator } from "@/gs2/limit/domain/iterator/LimitModelMastersDomainIterator";
import { DescribeLimitModelsIterator } from "@/gs2/limit/domain/iterator/LimitModelsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2LimitRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    limitModelMasterCache: LimitModelMasterDomainCache;
    limitModelCache: LimitModelDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2LimitRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.limitModelMasterCache = new LimitModelMasterDomainCache();
        this.limitModelCache = new LimitModelDomainCache();
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

    public async createLimitModelMaster(
        request: CreateLimitModelMasterRequest
    ): Promise<CreateLimitModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateLimitModelMasterResult = await this.client.createLimitModelMaster(
            request
        );
        return r;
    }

    public limitModelMasters(
    ): DescribeLimitModelMastersIterator {
        return new DescribeLimitModelMastersIterator(
            this.limitModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public limitModels(
    ): DescribeLimitModelsIterator {
        return new DescribeLimitModelsIterator(
            this.limitModelCache,
            this.client,
            this.namespaceName
        );
    }

    public currentLimitMaster(
    ): CurrentLimitMasterDomain {
        return new CurrentLimitMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public limitModel(
        limitName: string
    ): LimitModelDomain {
        return new LimitModelDomain(
            this.session,
            this.limitModelCache,
            this.namespaceName,
            limitName
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

    public limitModelMaster(
        limitName: string
    ): LimitModelMasterDomain {
        return new LimitModelMasterDomain(
            this.session,
            this.limitModelMasterCache,
            this.namespaceName,
            limitName
        );
    }

}
