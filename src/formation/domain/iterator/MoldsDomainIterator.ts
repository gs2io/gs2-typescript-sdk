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
import { Mold } from "@/gs2/formation/model";
import { MoldDomainCache } from "@/gs2/formation/domain/cache/MoldDomainCache";
import { Gs2FormationRestClient } from "@/gs2/formation";
import { DescribeMoldsRequest } from "@/gs2/formation/request";
import { DescribeMoldsResult } from "@/gs2/formation/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeMoldsIterator {
    private moldCache: MoldDomainCache;
    private client: Gs2FormationRestClient;
    private namespaceName: string;
    private accessToken: AccessToken|null;
    private pageToken: string|null;
    private last: boolean;
    private result: Mold[]|null;

    private fetchSize: number|null;

    public constructor(
        moldCache: MoldDomainCache,
        client: Gs2FormationRestClient,
        namespaceName: string,
        accessToken: AccessToken|null
    ) {
        this.moldCache = moldCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeMoldsResult = await this.client.describeMolds(
            new DescribeMoldsRequest()
                .withNamespaceName(this.namespaceName)
                .withAccessToken(this.accessToken != null ? this.accessToken.getToken() : null)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.moldCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Mold> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Mold>(() => {});
        }
        let ret: Mold = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
