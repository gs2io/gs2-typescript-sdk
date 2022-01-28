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
import { Complete } from "@/gs2/mission/model";
import { CompleteDomainCache } from "@/gs2/mission/domain/cache/CompleteDomainCache";
import { Gs2MissionRestClient } from "@/gs2/mission";
import { DescribeCompletesRequest } from "@/gs2/mission/request";
import { DescribeCompletesResult } from "@/gs2/mission/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeCompletesIterator {
    private completeCache: CompleteDomainCache;
    private client: Gs2MissionRestClient;
    private namespaceName: string;
    private accessToken: AccessToken|null;
    private pageToken: string|null;
    private last: boolean;
    private result: Complete[]|null;

    private fetchSize: number|null;

    public constructor(
        completeCache: CompleteDomainCache,
        client: Gs2MissionRestClient,
        namespaceName: string,
        accessToken: AccessToken|null
    ) {
        this.completeCache = completeCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeCompletesResult = await this.client.describeCompletes(
            new DescribeCompletesRequest()
                .withNamespaceName(this.namespaceName)
                .withAccessToken(this.accessToken != null ? this.accessToken.getToken() : null)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.completeCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Complete> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Complete>(() => {});
        }
        let ret: Complete = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
