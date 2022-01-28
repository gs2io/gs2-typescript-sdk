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
import { NamespaceDomainCache } from "@/gs2/ranking/domain/cache/NamespaceDomainCache";
import { CategoryModelDomainCache } from "@/gs2/ranking/domain/cache/CategoryModelDomainCache";
import { CategoryModelMasterDomainCache } from "@/gs2/ranking/domain/cache/CategoryModelMasterDomainCache";
import { SubscribeUserDomainCache } from "@/gs2/ranking/domain/cache/SubscribeUserDomainCache";
import { ScoreDomainCache } from "@/gs2/ranking/domain/cache/ScoreDomainCache";
import { RankingDomainCache } from "@/gs2/ranking/domain/cache/RankingDomainCache";
import { GetCategoryModelMasterRequest } from "@/gs2/ranking/request";
import { GetCategoryModelMasterResult } from "@/gs2/ranking/result";
import { UpdateCategoryModelMasterRequest } from "@/gs2/ranking/request";
import { UpdateCategoryModelMasterResult } from "@/gs2/ranking/result";
import { DeleteCategoryModelMasterRequest } from "@/gs2/ranking/request";
import { DeleteCategoryModelMasterResult } from "@/gs2/ranking/result";
import { AccessToken } from "@/gs2/auth/model";

export class CategoryModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2RankingRestClient;
    categoryModelMasterCache: CategoryModelMasterDomainCache;
    namespaceName: string;
    categoryName: string;

    public constructor(
        session: Gs2RestSession,
        categoryModelMasterCache: CategoryModelMasterDomainCache,
        namespaceName: string,
        categoryName: string
    ) {
        this.session = session;
        this.client = new Gs2RankingRestClient(
            session
        );
        this.categoryModelMasterCache = categoryModelMasterCache;
        this.namespaceName = namespaceName;
        this.categoryName = categoryName;
    }

    public async load(
        request: GetCategoryModelMasterRequest
    ): Promise<GetCategoryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setCategoryName(this.categoryName);
        let r: GetCategoryModelMasterResult = await this.client.getCategoryModelMaster(
            request
        );
        this.categoryModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateCategoryModelMasterRequest
    ): Promise<UpdateCategoryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setCategoryName(this.categoryName);
        let r: UpdateCategoryModelMasterResult = await this.client.updateCategoryModelMaster(
            request
        );
        this.categoryModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteCategoryModelMasterRequest
    ): Promise<DeleteCategoryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setCategoryName(this.categoryName);
        let r: DeleteCategoryModelMasterResult = await this.client.deleteCategoryModelMaster(
            request
        );
        this.categoryModelMasterCache.delete(r.getItem()!);
        return r;
    }

}
