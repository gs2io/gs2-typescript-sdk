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
import { MoldModelMaster } from "@/gs2/formation/model";
import { MoldModelMasterDomainCache } from "@/gs2/formation/domain/cache/MoldModelMasterDomainCache";
import { Gs2FormationRestClient } from "@/gs2/formation";
import { DescribeMoldModelMastersRequest } from "@/gs2/formation/request";
import { DescribeMoldModelMastersResult } from "@/gs2/formation/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeMoldModelMastersIterator {
    private moldModelMasterCache: MoldModelMasterDomainCache;
    private client: Gs2FormationRestClient;
    private namespaceName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: MoldModelMaster[]|null;

    private fetchSize: number|null;

    public constructor(
        moldModelMasterCache: MoldModelMasterDomainCache,
        client: Gs2FormationRestClient,
        namespaceName: string
    ) {
        this.moldModelMasterCache = moldModelMasterCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeMoldModelMastersResult = await this.client.describeMoldModelMasters(
            new DescribeMoldModelMastersRequest()
                .withNamespaceName(this.namespaceName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.moldModelMasterCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<MoldModelMaster> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<MoldModelMaster>(() => {});
        }
        let ret: MoldModelMaster = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
