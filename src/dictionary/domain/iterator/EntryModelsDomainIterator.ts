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
import { EntryModel } from "@/gs2/dictionary/model";
import { EntryModelDomainCache } from "@/gs2/dictionary/domain/cache/EntryModelDomainCache";
import { Gs2DictionaryRestClient } from "@/gs2/dictionary";
import { DescribeEntryModelsRequest } from "@/gs2/dictionary/request";
import { DescribeEntryModelsResult } from "@/gs2/dictionary/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeEntryModelsIterator {
    private entryModelCache: EntryModelDomainCache;
    private client: Gs2DictionaryRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: EntryModel[]|null;

    private fetchSize: number|null;

    public constructor(
        entryModelCache: EntryModelDomainCache,
        client: Gs2DictionaryRestClient,
        namespaceName: string
    ) {
        this.entryModelCache = entryModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeEntryModelsResult = await this.client.describeEntryModels(
            new DescribeEntryModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.entryModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<EntryModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<EntryModel>(() => {});
        }
        let ret: EntryModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
