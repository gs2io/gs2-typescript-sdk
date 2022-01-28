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
import { Script } from "@/gs2/script/model";
import { ScriptDomainCache } from "@/gs2/script/domain/cache/ScriptDomainCache";
import { Gs2ScriptRestClient } from "@/gs2/script";
import { DescribeScriptsRequest } from "@/gs2/script/request";
import { DescribeScriptsResult } from "@/gs2/script/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeScriptsIterator {
    private scriptCache: ScriptDomainCache;
    private client: Gs2ScriptRestClient;
    private namespaceName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: Script[]|null;

    private fetchSize: number|null;

    public constructor(
        scriptCache: ScriptDomainCache,
        client: Gs2ScriptRestClient,
        namespaceName: string
    ) {
        this.scriptCache = scriptCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeScriptsResult = await this.client.describeScripts(
            new DescribeScriptsRequest()
                .withNamespaceName(this.namespaceName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.scriptCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<Script> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<Script>(() => {});
        }
        let ret: Script = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
