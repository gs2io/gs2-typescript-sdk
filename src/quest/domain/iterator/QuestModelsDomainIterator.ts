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
import { QuestModel } from "@/gs2/quest/model";
import { QuestModelDomainCache } from "@/gs2/quest/domain/cache/QuestModelDomainCache";
import { Gs2QuestRestClient } from "@/gs2/quest";
import { DescribeQuestModelsRequest } from "@/gs2/quest/request";
import { DescribeQuestModelsResult } from "@/gs2/quest/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeQuestModelsIterator {
    private questModelCache: QuestModelDomainCache;
    private client: Gs2QuestRestClient;
    private namespaceName: string;
    private questGroupName: string;
    private last: boolean;
    private result: QuestModel[]|null;

    private fetchSize: number|null;

    public constructor(
        questModelCache: QuestModelDomainCache,
        client: Gs2QuestRestClient,
        namespaceName: string,
        questGroupName: string
    ) {
        this.questModelCache = questModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.questGroupName = questGroupName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeQuestModelsResult = await this.client.describeQuestModels(
            new DescribeQuestModelsRequest()
                .withNamespaceName(this.namespaceName)
                .withQuestGroupName(this.questGroupName)
        );
        for (let item of r.getItems()!) {
            this.questModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<QuestModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<QuestModel>(() => {});
        }
        let ret: QuestModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
