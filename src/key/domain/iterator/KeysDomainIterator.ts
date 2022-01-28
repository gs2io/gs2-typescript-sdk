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
import { Key } from "@/gs2/key/model";
import { KeyDomainCache } from "@/gs2/key/domain/cache/KeyDomainCache";
import { Gs2KeyRestClient } from "@/gs2/key";
import { DescribeKeysRequest } from "@/gs2/key/request";
import { DescribeKeysResult } from "@/gs2/key/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeKeysIterator {
    private keyCache: KeyDomainCache;
    private client: Gs2KeyRestClient;
    private namespaceName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: Key[]|null;

    private fetchSize: number|null;

    public constructor(
        keyCache: KeyDomainCache,
        client: Gs2KeyRestClient,
        namespaceName: string
    ) {
        this.keyCache = keyCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeKeysResult = await this.client.describeKeys(
            new DescribeKeysRequest()
                .withNamespaceName(this.namespaceName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.keyCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Key> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Key>(() => {});
        }
        let ret: Key = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
