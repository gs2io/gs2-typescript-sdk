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
import { DistributorModel } from "@/gs2/distributor/model";
import { DistributorModelDomainCache } from "@/gs2/distributor/domain/cache/DistributorModelDomainCache";
import { Gs2DistributorRestClient } from "@/gs2/distributor";
import { DescribeDistributorModelsRequest } from "@/gs2/distributor/request";
import { DescribeDistributorModelsResult } from "@/gs2/distributor/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeDistributorModelsIterator {
    private distributorModelCache: DistributorModelDomainCache;
    private client: Gs2DistributorRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: DistributorModel[]|null;

    private fetchSize: number|null;

    public constructor(
        distributorModelCache: DistributorModelDomainCache,
        client: Gs2DistributorRestClient,
        namespaceName: string
    ) {
        this.distributorModelCache = distributorModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeDistributorModelsResult = await this.client.describeDistributorModels(
            new DescribeDistributorModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.distributorModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<DistributorModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<DistributorModel>(() => {});
        }
        let ret: DistributorModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
