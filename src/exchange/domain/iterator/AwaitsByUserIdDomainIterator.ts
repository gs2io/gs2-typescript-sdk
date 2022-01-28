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
import { Await } from "@/gs2/exchange/model";
import { AwaitDomainCache } from "@/gs2/exchange/domain/cache/AwaitDomainCache";
import { Gs2ExchangeRestClient } from "@/gs2/exchange";
import { DescribeAwaitsByUserIdRequest } from "@/gs2/exchange/request";
import { DescribeAwaitsByUserIdResult } from "@/gs2/exchange/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeAwaitsByUserIdIterator {
    private awaitCache: AwaitDomainCache;
    private client: Gs2ExchangeRestClient;
    private namespaceName: string;
    private userId: string;
    private rateName: string|null;
    private pageToken: string|null;
    private last: boolean;
    private result: Await[]|null;

    private fetchSize: number|null;

    public constructor(
        awaitCache: AwaitDomainCache,
        client: Gs2ExchangeRestClient,
        namespaceName: string,
        userId: string,
        rateName: string|null
    ) {
        this.awaitCache = awaitCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.rateName = rateName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeAwaitsByUserIdResult = await this.client.describeAwaitsByUserId(
            new DescribeAwaitsByUserIdRequest()
                .withNamespaceName(this.namespaceName)
                .withUserId(this.userId)
                .withRateName(this.rateName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.awaitCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Await> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Await>(() => {});
        }
        let ret: Await = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
