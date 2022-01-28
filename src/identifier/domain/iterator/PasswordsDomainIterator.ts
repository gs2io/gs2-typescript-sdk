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
import { Password } from "@/gs2/identifier/model";
import { PasswordDomainCache } from "@/gs2/identifier/domain/cache/PasswordDomainCache";
import { Gs2IdentifierRestClient } from "@/gs2/identifier";
import { DescribePasswordsRequest } from "@/gs2/identifier/request";
import { DescribePasswordsResult } from "@/gs2/identifier/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribePasswordsIterator {
    private passwordCache: PasswordDomainCache;
    private client: Gs2IdentifierRestClient;
    private userName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: Password[]|null;

    private fetchSize: number|null;

    public constructor(
        passwordCache: PasswordDomainCache,
        client: Gs2IdentifierRestClient,
        userName: string
    ) {
        this.passwordCache = passwordCache;
        this.client = client;
        this.userName = userName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribePasswordsResult = await this.client.describePasswords(
            new DescribePasswordsRequest()
                .withUserName(this.userName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.passwordCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Password> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Password>(() => {});
        }
        let ret: Password = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
