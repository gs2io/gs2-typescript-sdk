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
import { ShowcaseMaster } from "@/gs2/showcase/model";
import { ShowcaseMasterDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseMasterDomainCache";
import { Gs2ShowcaseRestClient } from "@/gs2/showcase";
import { DescribeShowcaseMastersRequest } from "@/gs2/showcase/request";
import { DescribeShowcaseMastersResult } from "@/gs2/showcase/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeShowcaseMastersIterator {
    private showcaseMasterCache: ShowcaseMasterDomainCache;
    private client: Gs2ShowcaseRestClient;
    private namespaceName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: ShowcaseMaster[]|null;

    private fetchSize: number|null;

    public constructor(
        showcaseMasterCache: ShowcaseMasterDomainCache,
        client: Gs2ShowcaseRestClient,
        namespaceName: string
    ) {
        this.showcaseMasterCache = showcaseMasterCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeShowcaseMastersResult = await this.client.describeShowcaseMasters(
            new DescribeShowcaseMastersRequest()
                .withNamespaceName(this.namespaceName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.showcaseMasterCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<ShowcaseMaster> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<ShowcaseMaster>(() => {});
        }
        let ret: ShowcaseMaster = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
