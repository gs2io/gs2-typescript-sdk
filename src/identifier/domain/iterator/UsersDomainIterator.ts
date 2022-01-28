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
import { User } from "@/gs2/identifier/model";
import { UserDomainCache } from "@/gs2/identifier/domain/cache/UserDomainCache";
import { Gs2IdentifierRestClient } from "@/gs2/identifier";
import { DescribeUsersRequest } from "@/gs2/identifier/request";
import { DescribeUsersResult } from "@/gs2/identifier/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeUsersIterator {
    private userCache: UserDomainCache;
    private client: Gs2IdentifierRestClient;
    private pageToken: string|null;
    private last: boolean;
    private result: User[]|null;

    private fetchSize: number|null;

    public constructor(
        userCache: UserDomainCache,
        client: Gs2IdentifierRestClient
    ) {
        this.userCache = userCache;
        this.client = client;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeUsersResult = await this.client.describeUsers(
            new DescribeUsersRequest()
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.userCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<User> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<User>(() => {});
        }
        let ret: User = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
