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
import { ExperienceModelMaster } from "@/gs2/experience/model";
import { ExperienceModelMasterDomainCache } from "@/gs2/experience/domain/cache/ExperienceModelMasterDomainCache";
import { Gs2ExperienceRestClient } from "@/gs2/experience";
import { DescribeExperienceModelMastersRequest } from "@/gs2/experience/request";
import { DescribeExperienceModelMastersResult } from "@/gs2/experience/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeExperienceModelMastersIterator {
    private experienceModelMasterCache: ExperienceModelMasterDomainCache;
    private client: Gs2ExperienceRestClient;
    private namespaceName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: ExperienceModelMaster[]|null;

    private fetchSize: number|null;

    public constructor(
        experienceModelMasterCache: ExperienceModelMasterDomainCache,
        client: Gs2ExperienceRestClient,
        namespaceName: string
    ) {
        this.experienceModelMasterCache = experienceModelMasterCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeExperienceModelMastersResult = await this.client.describeExperienceModelMasters(
            new DescribeExperienceModelMastersRequest()
                .withNamespaceName(this.namespaceName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.experienceModelMasterCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<ExperienceModelMaster> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<ExperienceModelMaster>(() => {});
        }
        let ret: ExperienceModelMaster = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
