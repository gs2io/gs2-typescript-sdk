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
import { CategoryModel } from "@/gs2/ranking/model";
import { CategoryModelDomainCache } from "@/gs2/ranking/domain/cache/CategoryModelDomainCache";
import { Gs2RankingRestClient } from "@/gs2/ranking";
import { DescribeCategoryModelsRequest } from "@/gs2/ranking/request";
import { DescribeCategoryModelsResult } from "@/gs2/ranking/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeCategoryModelsIterator {
    private categoryModelCache: CategoryModelDomainCache;
    private client: Gs2RankingRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: CategoryModel[]|null;

    private fetchSize: number|null;

    public constructor(
        categoryModelCache: CategoryModelDomainCache,
        client: Gs2RankingRestClient,
        namespaceName: string
    ) {
        this.categoryModelCache = categoryModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeCategoryModelsResult = await this.client.describeCategoryModels(
            new DescribeCategoryModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.categoryModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<CategoryModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<CategoryModel>(() => {});
        }
        let ret: CategoryModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
