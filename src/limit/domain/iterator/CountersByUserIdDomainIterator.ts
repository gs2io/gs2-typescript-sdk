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
import { Counter } from "@/gs2/limit/model";
import { CounterDomainCache } from "@/gs2/limit/domain/cache/CounterDomainCache";
import { Gs2LimitRestClient } from "@/gs2/limit";
import { DescribeCountersByUserIdRequest } from "@/gs2/limit/request";
import { DescribeCountersByUserIdResult } from "@/gs2/limit/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeCountersByUserIdIterator {
    private counterCache: CounterDomainCache;
    private client: Gs2LimitRestClient;
    private namespaceName: string;
    private userId: string;
    private limitName: string|null;
    private pageToken: string|null;
    private last: boolean;
    private result: Counter[]|null;

    private fetchSize: number|null;

    public constructor(
        counterCache: CounterDomainCache,
        client: Gs2LimitRestClient,
        namespaceName: string,
        userId: string,
        limitName: string|null
    ) {
        this.counterCache = counterCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.limitName = limitName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeCountersByUserIdResult = await this.client.describeCountersByUserId(
            new DescribeCountersByUserIdRequest()
                .withNamespaceName(this.namespaceName)
                .withUserId(this.userId)
                .withLimitName(this.limitName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.counterCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Counter> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Counter>(() => {});
        }
        let ret: Counter = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
