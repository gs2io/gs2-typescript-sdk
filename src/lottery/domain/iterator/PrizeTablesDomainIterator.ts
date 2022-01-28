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
import { PrizeTable } from "@/gs2/lottery/model";
import { PrizeTableDomainCache } from "@/gs2/lottery/domain/cache/PrizeTableDomainCache";
import { Gs2LotteryRestClient } from "@/gs2/lottery";
import { DescribePrizeTablesRequest } from "@/gs2/lottery/request";
import { DescribePrizeTablesResult } from "@/gs2/lottery/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribePrizeTablesIterator {
    private prizeTableCache: PrizeTableDomainCache;
    private client: Gs2LotteryRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: PrizeTable[]|null;

    private fetchSize: number|null;

    public constructor(
        prizeTableCache: PrizeTableDomainCache,
        client: Gs2LotteryRestClient,
        namespaceName: string
    ) {
        this.prizeTableCache = prizeTableCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribePrizeTablesResult = await this.client.describePrizeTables(
            new DescribePrizeTablesRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.prizeTableCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<PrizeTable> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<PrizeTable>(() => {});
        }
        let ret: PrizeTable = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
