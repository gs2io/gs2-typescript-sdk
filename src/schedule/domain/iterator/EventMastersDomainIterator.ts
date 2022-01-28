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
import { EventMaster } from "@/gs2/schedule/model";
import { EventMasterDomainCache } from "@/gs2/schedule/domain/cache/EventMasterDomainCache";
import { Gs2ScheduleRestClient } from "@/gs2/schedule";
import { DescribeEventMastersRequest } from "@/gs2/schedule/request";
import { DescribeEventMastersResult } from "@/gs2/schedule/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeEventMastersIterator {
    private eventMasterCache: EventMasterDomainCache;
    private client: Gs2ScheduleRestClient;
    private namespaceName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: EventMaster[]|null;

    private fetchSize: number|null;

    public constructor(
        eventMasterCache: EventMasterDomainCache,
        client: Gs2ScheduleRestClient,
        namespaceName: string
    ) {
        this.eventMasterCache = eventMasterCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeEventMastersResult = await this.client.describeEventMasters(
            new DescribeEventMastersRequest()
                .withNamespaceName(this.namespaceName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.eventMasterCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<EventMaster> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<EventMaster>(() => {});
        }
        let ret: EventMaster = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
