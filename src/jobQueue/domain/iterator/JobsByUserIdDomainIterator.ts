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
import { Job } from "@/gs2/jobQueue/model";
import { JobDomainCache } from "@/gs2/jobQueue/domain/cache/JobDomainCache";
import { Gs2JobQueueRestClient } from "@/gs2/jobQueue";
import { DescribeJobsByUserIdRequest } from "@/gs2/jobQueue/request";
import { DescribeJobsByUserIdResult } from "@/gs2/jobQueue/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeJobsByUserIdIterator {
    private jobCache: JobDomainCache;
    private client: Gs2JobQueueRestClient;
    private namespaceName: string;
    private userId: string;
    private pageToken: string|null;
    private last: boolean;
    private result: Job[]|null;

    private fetchSize: number|null;

    public constructor(
        jobCache: JobDomainCache,
        client: Gs2JobQueueRestClient,
        namespaceName: string,
        userId: string
    ) {
        this.jobCache = jobCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeJobsByUserIdResult = await this.client.describeJobsByUserId(
            new DescribeJobsByUserIdRequest()
                .withNamespaceName(this.namespaceName)
                .withUserId(this.userId)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.jobCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Job> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Job>(() => {});
        }
        let ret: Job = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
