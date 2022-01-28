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
import { Wallet } from "@/gs2/money/model";
import { WalletDomainCache } from "@/gs2/money/domain/cache/WalletDomainCache";
import { Gs2MoneyRestClient } from "@/gs2/money";
import { DescribeWalletsByUserIdRequest } from "@/gs2/money/request";
import { DescribeWalletsByUserIdResult } from "@/gs2/money/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeWalletsByUserIdIterator {
    private walletCache: WalletDomainCache;
    private client: Gs2MoneyRestClient;
    private namespaceName: string;
    private userId: string;
    private pageToken: string|null;
    private last: boolean;
    private result: Wallet[]|null;

    private fetchSize: number|null;

    public constructor(
        walletCache: WalletDomainCache,
        client: Gs2MoneyRestClient,
        namespaceName: string,
        userId: string
    ) {
        this.walletCache = walletCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeWalletsByUserIdResult = await this.client.describeWalletsByUserId(
            new DescribeWalletsByUserIdRequest()
                .withNamespaceName(this.namespaceName)
                .withUserId(this.userId)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.walletCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Wallet> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Wallet>(() => {});
        }
        let ret: Wallet = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
