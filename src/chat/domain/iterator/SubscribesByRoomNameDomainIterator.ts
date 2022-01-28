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
import { Subscribe } from "@/gs2/chat/model";
import { SubscribeDomainCache } from "@/gs2/chat/domain/cache/SubscribeDomainCache";
import { Gs2ChatRestClient } from "@/gs2/chat";
import { DescribeSubscribesByRoomNameRequest } from "@/gs2/chat/request";
import { DescribeSubscribesByRoomNameResult } from "@/gs2/chat/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeSubscribesByRoomNameIterator {
    private subscribeCache: SubscribeDomainCache;
    private client: Gs2ChatRestClient;
    private namespaceName: string;
    private roomName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: Subscribe[]|null;

    private fetchSize: number|null;

    public constructor(
        subscribeCache: SubscribeDomainCache,
        client: Gs2ChatRestClient,
        namespaceName: string,
        roomName: string
    ) {
        this.subscribeCache = subscribeCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.roomName = roomName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeSubscribesByRoomNameResult = await this.client.describeSubscribesByRoomName(
            new DescribeSubscribesByRoomNameRequest()
                .withNamespaceName(this.namespaceName)
                .withRoomName(this.roomName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.subscribeCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Subscribe> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Subscribe>(() => {});
        }
        let ret: Subscribe = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
