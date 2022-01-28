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
import { ExperienceModel } from "@/gs2/experience/model";
import { ExperienceModelDomainCache } from "@/gs2/experience/domain/cache/ExperienceModelDomainCache";
import { Gs2ExperienceRestClient } from "@/gs2/experience";
import { DescribeExperienceModelsRequest } from "@/gs2/experience/request";
import { DescribeExperienceModelsResult } from "@/gs2/experience/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeExperienceModelsIterator {
    private experienceModelCache: ExperienceModelDomainCache;
    private client: Gs2ExperienceRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: ExperienceModel[]|null;

    private fetchSize: number|null;

    public constructor(
        experienceModelCache: ExperienceModelDomainCache,
        client: Gs2ExperienceRestClient,
        namespaceName: string
    ) {
        this.experienceModelCache = experienceModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeExperienceModelsResult = await this.client.describeExperienceModels(
            new DescribeExperienceModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.experienceModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<ExperienceModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<ExperienceModel>(() => {});
        }
        let ret: ExperienceModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
