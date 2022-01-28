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
import { News } from "@/gs2/news/model";
import { NewsDomainCache } from "@/gs2/news/domain/cache/NewsDomainCache";
import { Gs2NewsRestClient } from "@/gs2/news";
import { DescribeNewsByUserIdRequest } from "@/gs2/news/request";
import { DescribeNewsByUserIdResult } from "@/gs2/news/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeNewsByUserIdIterator {
    private newsCache: NewsDomainCache;
    private client: Gs2NewsRestClient;
    private namespaceName: string;
    private userId: string;
    private last: boolean;
    private result: News[]|null;

    private fetchSize: number|null;

    public constructor(
        newsCache: NewsDomainCache,
        client: Gs2NewsRestClient,
        namespaceName: string,
        userId: string
    ) {
        this.newsCache = newsCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeNewsByUserIdResult = await this.client.describeNewsByUserId(
            new DescribeNewsByUserIdRequest()
                .withNamespaceName(this.namespaceName)
                .withUserId(this.userId)
        );
        this.newsCache.update(r.getItems()!);
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<News> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<News>(() => {});
        }
        let ret: News = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
