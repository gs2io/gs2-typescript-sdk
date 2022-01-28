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
import { VersionModel } from "@/gs2/version/model";
import { VersionModelDomainCache } from "@/gs2/version/domain/cache/VersionModelDomainCache";
import { Gs2VersionRestClient } from "@/gs2/version";
import { DescribeVersionModelsRequest } from "@/gs2/version/request";
import { DescribeVersionModelsResult } from "@/gs2/version/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeVersionModelsIterator {
    private versionModelCache: VersionModelDomainCache;
    private client: Gs2VersionRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: VersionModel[]|null;

    private fetchSize: number|null;

    public constructor(
        versionModelCache: VersionModelDomainCache,
        client: Gs2VersionRestClient,
        namespaceName: string
    ) {
        this.versionModelCache = versionModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeVersionModelsResult = await this.client.describeVersionModels(
            new DescribeVersionModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.versionModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<VersionModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<VersionModel>(() => {});
        }
        let ret: VersionModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
