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
import { Gs2RankingRestClient } from "@/gs2/ranking";
import { CurrentRankingMasterDomain } from "@/gs2/ranking/domain/CurrentRankingMaster";
import { CategoryModelDomain } from "@/gs2/ranking/domain/CategoryModel";
import { UserDomain } from "@/gs2/ranking/domain/User";
import { UserAccessTokenDomain } from "@/gs2/ranking/domain/UserAccessToken";
import { CategoryModelMasterDomain } from "@/gs2/ranking/domain/CategoryModelMaster";
import { NamespaceDomainCache } from "@/gs2/ranking/domain/cache/NamespaceDomainCache";
import { CategoryModelDomainCache } from "@/gs2/ranking/domain/cache/CategoryModelDomainCache";
import { CategoryModelMasterDomainCache } from "@/gs2/ranking/domain/cache/CategoryModelMasterDomainCache";
import { SubscribeUserDomainCache } from "@/gs2/ranking/domain/cache/SubscribeUserDomainCache";
import { ScoreDomainCache } from "@/gs2/ranking/domain/cache/ScoreDomainCache";
import { RankingDomainCache } from "@/gs2/ranking/domain/cache/RankingDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/ranking/request";
import { GetNamespaceStatusResult } from "@/gs2/ranking/result";
import { GetNamespaceRequest } from "@/gs2/ranking/request";
import { GetNamespaceResult } from "@/gs2/ranking/result";
import { UpdateNamespaceRequest } from "@/gs2/ranking/request";
import { UpdateNamespaceResult } from "@/gs2/ranking/result";
import { DeleteNamespaceRequest } from "@/gs2/ranking/request";
import { DeleteNamespaceResult } from "@/gs2/ranking/result";
import { CreateCategoryModelMasterRequest } from "@/gs2/ranking/request";
import { CreateCategoryModelMasterResult } from "@/gs2/ranking/result";
import { DescribeCategoryModelsIterator } from "@/gs2/ranking/domain/iterator/CategoryModelsDomainIterator";
import { DescribeCategoryModelMastersIterator } from "@/gs2/ranking/domain/iterator/CategoryModelMastersDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2RankingRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    categoryModelCache: CategoryModelDomainCache;
    categoryModelMasterCache: CategoryModelMasterDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2RankingRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.categoryModelCache = new CategoryModelDomainCache();
        this.categoryModelMasterCache = new CategoryModelMasterDomainCache();
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

    public async createCategoryModelMaster(
        request: CreateCategoryModelMasterRequest
    ): Promise<CreateCategoryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateCategoryModelMasterResult = await this.client.createCategoryModelMaster(
            request
        );
        return r;
    }

    public categoryModels(
    ): DescribeCategoryModelsIterator {
        return new DescribeCategoryModelsIterator(
            this.categoryModelCache,
            this.client,
            this.namespaceName
        );
    }

    public categoryModelMasters(
    ): DescribeCategoryModelMastersIterator {
        return new DescribeCategoryModelMastersIterator(
            this.categoryModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public currentRankingMaster(
    ): CurrentRankingMasterDomain {
        return new CurrentRankingMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public categoryModel(
        categoryName: string
    ): CategoryModelDomain {
        return new CategoryModelDomain(
            this.session,
            this.categoryModelCache,
            this.namespaceName,
            categoryName
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

    public categoryModelMaster(
        categoryName: string
    ): CategoryModelMasterDomain {
        return new CategoryModelMasterDomain(
            this.session,
            this.categoryModelMasterCache,
            this.namespaceName,
            categoryName
        );
    }

}
