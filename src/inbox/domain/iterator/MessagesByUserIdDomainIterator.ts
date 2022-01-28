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
import { Message } from "@/gs2/inbox/model";
import { MessageDomainCache } from "@/gs2/inbox/domain/cache/MessageDomainCache";
import { Gs2InboxRestClient } from "@/gs2/inbox";
import { DescribeMessagesByUserIdRequest } from "@/gs2/inbox/request";
import { DescribeMessagesByUserIdResult } from "@/gs2/inbox/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeMessagesByUserIdIterator {
    private messageCache: MessageDomainCache;
    private client: Gs2InboxRestClient;
    private namespaceName: string;
    private userId: string;
    private pageToken: string|null;
    private last: boolean;
    private result: Message[]|null;

    private fetchSize: number|null;

    public constructor(
        messageCache: MessageDomainCache,
        client: Gs2InboxRestClient,
        namespaceName: string,
        userId: string
    ) {
        this.messageCache = messageCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeMessagesByUserIdResult = await this.client.describeMessagesByUserId(
            new DescribeMessagesByUserIdRequest()
                .withNamespaceName(this.namespaceName)
                .withUserId(this.userId)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.messageCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Message> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Message>(() => {});
        }
        let ret: Message = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
