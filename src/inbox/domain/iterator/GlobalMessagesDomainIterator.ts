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
import { GlobalMessage } from "@/gs2/inbox/model";
import { GlobalMessageDomainCache } from "@/gs2/inbox/domain/cache/GlobalMessageDomainCache";
import { Gs2InboxRestClient } from "@/gs2/inbox";
import { DescribeGlobalMessagesRequest } from "@/gs2/inbox/request";
import { DescribeGlobalMessagesResult } from "@/gs2/inbox/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeGlobalMessagesIterator {
    private globalMessageCache: GlobalMessageDomainCache;
    private client: Gs2InboxRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: GlobalMessage[]|null;

    private fetchSize: number|null;

    public constructor(
        globalMessageCache: GlobalMessageDomainCache,
        client: Gs2InboxRestClient,
        namespaceName: string
    ) {
        this.globalMessageCache = globalMessageCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeGlobalMessagesResult = await this.client.describeGlobalMessages(
            new DescribeGlobalMessagesRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.globalMessageCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<GlobalMessage> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<GlobalMessage>(() => {});
        }
        let ret: GlobalMessage = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
