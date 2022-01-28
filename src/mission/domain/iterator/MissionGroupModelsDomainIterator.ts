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
import { MissionGroupModel } from "@/gs2/mission/model";
import { MissionGroupModelDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelDomainCache";
import { Gs2MissionRestClient } from "@/gs2/mission";
import { DescribeMissionGroupModelsRequest } from "@/gs2/mission/request";
import { DescribeMissionGroupModelsResult } from "@/gs2/mission/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeMissionGroupModelsIterator {
    private missionGroupModelCache: MissionGroupModelDomainCache;
    private client: Gs2MissionRestClient;
    private namespaceName: string;
    private last: boolean;
    private result: MissionGroupModel[]|null;

    private fetchSize: number|null;

    public constructor(
        missionGroupModelCache: MissionGroupModelDomainCache,
        client: Gs2MissionRestClient,
        namespaceName: string
    ) {
        this.missionGroupModelCache = missionGroupModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeMissionGroupModelsResult = await this.client.describeMissionGroupModels(
            new DescribeMissionGroupModelsRequest()
                .withNamespaceName(this.namespaceName)
        );
        for (let item of r.getItems()!) {
            this.missionGroupModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<MissionGroupModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<MissionGroupModel>(() => {});
        }
        let ret: MissionGroupModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
