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
import { StaminaModel } from "@/gs2/stamina/model";
import { StaminaModelDomainCache } from "@/gs2/stamina/domain/cache/StaminaModelDomainCache";
import { Gs2StaminaRestClient } from "@/gs2/stamina";
import { DescribeStaminaModelsRequest } from "@/gs2/stamina/request";
import { DescribeStaminaModelsResult } from "@/gs2/stamina/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeStaminaModelsIterator {
    private staminaModelCache: StaminaModelDomainCache;
    private client: Gs2StaminaRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: StaminaModel[]|null;

    private fetchSize: number|null;

    public constructor(
        staminaModelCache: StaminaModelDomainCache,
        client: Gs2StaminaRestClient,
        namespaceName: string
    ) {
        this.staminaModelCache = staminaModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeStaminaModelsResult = await this.client.describeStaminaModels(
            new DescribeStaminaModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.staminaModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<StaminaModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<StaminaModel>(() => {});
        }
        let ret: StaminaModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
