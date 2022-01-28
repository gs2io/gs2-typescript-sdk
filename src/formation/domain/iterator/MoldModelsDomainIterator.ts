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
import { MoldModel } from "@/gs2/formation/model";
import { MoldModelDomainCache } from "@/gs2/formation/domain/cache/MoldModelDomainCache";
import { Gs2FormationRestClient } from "@/gs2/formation";
import { DescribeMoldModelsRequest } from "@/gs2/formation/request";
import { DescribeMoldModelsResult } from "@/gs2/formation/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeMoldModelsIterator {
    private moldModelCache: MoldModelDomainCache;
    private client: Gs2FormationRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: MoldModel[]|null;

    private fetchSize: number|null;

    public constructor(
        moldModelCache: MoldModelDomainCache,
        client: Gs2FormationRestClient,
        namespaceName: string
    ) {
        this.moldModelCache = moldModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeMoldModelsResult = await this.client.describeMoldModels(
            new DescribeMoldModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.moldModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<MoldModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<MoldModel>(() => {});
        }
        let ret: MoldModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
