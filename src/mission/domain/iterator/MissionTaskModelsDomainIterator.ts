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
import { MissionTaskModel } from "@/gs2/mission/model";
import { MissionTaskModelDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelDomainCache";
import { Gs2MissionRestClient } from "@/gs2/mission";
import { DescribeMissionTaskModelsRequest } from "@/gs2/mission/request";
import { DescribeMissionTaskModelsResult } from "@/gs2/mission/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeMissionTaskModelsIterator {
    private missionTaskModelCache: MissionTaskModelDomainCache;
    private client: Gs2MissionRestClient;
    private namespaceName: string;
    private missionGroupName: string;
    private last: boolean;
    private result: MissionTaskModel[]|null;

    private fetchSize: number|null;

    public constructor(
        missionTaskModelCache: MissionTaskModelDomainCache,
        client: Gs2MissionRestClient,
        namespaceName: string,
        missionGroupName: string
    ) {
        this.missionTaskModelCache = missionTaskModelCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.missionGroupName = missionGroupName;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeMissionTaskModelsResult = await this.client.describeMissionTaskModels(
            new DescribeMissionTaskModelsRequest()
                .withNamespaceName(this.namespaceName)
                .withMissionGroupName(this.missionGroupName)
        );
        for (let item of r.getItems()!) {
            this.missionTaskModelCache.update(item);
        }
        this.result = r.getItems();
        this.last = true;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<MissionTaskModel> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<MissionTaskModel>(() => {});
        }
        let ret: MissionTaskModel = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
