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
import { TakeOver } from "@/gs2/account/model";
import { TakeOverDomainCache } from "@/gs2/account/domain/cache/TakeOverDomainCache";
import { Gs2AccountRestClient } from "@/gs2/account";
import { DescribeTakeOversRequest } from "@/gs2/account/request";
import { DescribeTakeOversResult } from "@/gs2/account/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeTakeOversIterator {
    private takeOverCache: TakeOverDomainCache;
    private client: Gs2AccountRestClient;
    private namespaceName: string;
    private accessToken: AccessToken|null;
    private pageToken: string|null;
    private last: boolean;
    private result: TakeOver[]|null;

    private fetchSize: number|null;

    public constructor(
        takeOverCache: TakeOverDomainCache,
        client: Gs2AccountRestClient,
        namespaceName: string,
        accessToken: AccessToken|null
    ) {
        this.takeOverCache = takeOverCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeTakeOversResult = await this.client.describeTakeOvers(
            new DescribeTakeOversRequest()
                .withNamespaceName(this.namespaceName)
                .withAccessToken(this.accessToken != null ? this.accessToken.getToken() : null)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.takeOverCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<TakeOver> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<TakeOver>(() => {});
        }
        let ret: TakeOver = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
