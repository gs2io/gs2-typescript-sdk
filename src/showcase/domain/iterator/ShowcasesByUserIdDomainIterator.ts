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
import { Showcase } from "@/gs2/showcase/model";
import { ShowcaseDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseDomainCache";
import { Gs2ShowcaseRestClient } from "@/gs2/showcase";
import { DescribeShowcasesByUserIdRequest } from "@/gs2/showcase/request";
import { DescribeShowcasesByUserIdResult } from "@/gs2/showcase/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeShowcasesByUserIdIterator {
    private showcaseCache: ShowcaseDomainCache;
    private client: Gs2ShowcaseRestClient;
    private namespaceName: string;
    private userId: string;
    private last: boolean;
    private result: Showcase[]|null;

    private fetchSize: number|null;

    public constructor(
        showcaseCache: ShowcaseDomainCache,
        client: Gs2ShowcaseRestClient,
        namespaceName: string,
        userId: string
    ) {
        this.showcaseCache = showcaseCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeShowcasesByUserIdResult = await this.client.describeShowcasesByUserId(
            new DescribeShowcasesByUserIdRequest()
                .withNamespaceName(this.namespaceName)
                .withUserId(this.userId)
        );
        for (let item of r.getItems()!) {
            this.showcaseCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Showcase> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Showcase>(() => {});
        }
        let ret: Showcase = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
