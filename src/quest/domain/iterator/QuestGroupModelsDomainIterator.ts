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
import { QuestGroupModel } from "@/gs2/quest/model";
import { QuestGroupModelDomainCache } from "@/gs2/quest/domain/cache/QuestGroupModelDomainCache";
import { Gs2QuestRestClient } from "@/gs2/quest";
import { DescribeQuestGroupModelsRequest } from "@/gs2/quest/request";
import { DescribeQuestGroupModelsResult } from "@/gs2/quest/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeQuestGroupModelsIterator {
    private questGroupModelCache: QuestGroupModelDomainCache;
    private client: Gs2QuestRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: QuestGroupModel[]|null;

    private fetchSize: number|null;

    public constructor(
        questGroupModelCache: QuestGroupModelDomainCache,
        client: Gs2QuestRestClient,
        namespaceName: string
    ) {
        this.questGroupModelCache = questGroupModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeQuestGroupModelsResult = await this.client.describeQuestGroupModels(
            new DescribeQuestGroupModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.questGroupModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<QuestGroupModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<QuestGroupModel>(() => {});
        }
        let ret: QuestGroupModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
