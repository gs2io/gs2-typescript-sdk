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
import { Receipt } from "@/gs2/money/model";
import { ReceiptDomainCache } from "@/gs2/money/domain/cache/ReceiptDomainCache";
import { Gs2MoneyRestClient } from "@/gs2/money";
import { DescribeReceiptsRequest } from "@/gs2/money/request";
import { DescribeReceiptsResult } from "@/gs2/money/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeReceiptsIterator {
    private receiptCache: ReceiptDomainCache;
    private client: Gs2MoneyRestClient;
    private namespaceName: string;
    private userId: string;
    private slot: number|null;
    private begin: number|null;
    private end: number|null;
    private pageToken: string|null;
    private last: boolean;
    private result: Receipt[]|null;

    private fetchSize: number|null;

    public constructor(
        receiptCache: ReceiptDomainCache,
        client: Gs2MoneyRestClient,
        namespaceName: string,
        userId: string,
        slot: number|null,
        begin: number|null,
        end: number|null
    ) {
        this.receiptCache = receiptCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.slot = slot;
        this.begin = begin;
        this.end = end;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeReceiptsResult = await this.client.describeReceipts(
            new DescribeReceiptsRequest()
                .withNamespaceName(this.namespaceName)
                .withUserId(this.userId)
                .withSlot(this.slot)
                .withBegin(this.begin)
                .withEnd(this.end)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.receiptCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Receipt> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Receipt>(() => {});
        }
        let ret: Receipt = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
