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
import { GetCategoryModelRequest } from "@/gs2/ranking/request";
import { GetCategoryModelResult } from "@/gs2/ranking/result";
import { AccessToken } from "@/gs2/auth/model";

export class CategoryModelDomain {
    session: Gs2RestSession;
    client: Gs2RankingRestClient;
    categoryModelCache: CategoryModelDomainCache;
    namespaceName: string;
    categoryName: string;

    public constructor(
        session: Gs2RestSession,
        categoryModelCache: CategoryModelDomainCache,
        namespaceName: string,
        categoryName: string
    ) {
        this.session = session;
        this.client = new Gs2RankingRestClient(
            session
        );
        this.categoryModelCache = categoryModelCache;
        this.namespaceName = namespaceName;
        this.categoryName = categoryName;
    }

    public async load(
        request: GetCategoryModelRequest
    ): Promise<GetCategoryModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setCategoryName(this.categoryName);
        let r: GetCategoryModelResult = await this.client.getCategoryModel(
            request
        );
        this.categoryModelCache.update(r.getItem()!);
        return r;
    }

}
