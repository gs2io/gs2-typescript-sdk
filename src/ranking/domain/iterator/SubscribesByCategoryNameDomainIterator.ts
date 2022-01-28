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
import { SubscribeUser } from "@/gs2/ranking/model";
import { SubscribeUserDomainCache } from "@/gs2/ranking/domain/cache/SubscribeUserDomainCache";
import { Gs2RankingRestClient } from "@/gs2/ranking";
import { DescribeSubscribesByCategoryNameRequest } from "@/gs2/ranking/request";
import { DescribeSubscribesByCategoryNameResult } from "@/gs2/ranking/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeSubscribesByCategoryNameIterator {
    private subscribeUserCache: SubscribeUserDomainCache;
    private client: Gs2RankingRestClient;
    private namespaceName: string;
    private categoryName: string;
    private accessToken: AccessToken|null;
    private last: boolean;
    private result: SubscribeUser[]|null;

    private fetchSize: number|null;

    public constructor(
        subscribeUserCache: SubscribeUserDomainCache,
        client: Gs2RankingRestClient,
        namespaceName: string,
        categoryName: string,
        accessToken: AccessToken|null
    ) {
        this.subscribeUserCache = subscribeUserCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.categoryName = categoryName;
        this.accessToken = accessToken;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeSubscribesByCategoryNameResult = await this.client.describeSubscribesByCategoryName(
            new DescribeSubscribesByCategoryNameRequest()
                .withNamespaceName(this.namespaceName)
                .withCategoryName(this.categoryName)
                .withAccessToken(this.accessToken != null ? this.accessToken.getToken() : null)
        );
        for (let item of r.getItems()!) {
            this.subscribeUserCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<SubscribeUser> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<SubscribeUser>(() => {});
        }
        let ret: SubscribeUser = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
