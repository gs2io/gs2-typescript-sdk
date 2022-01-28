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
import { MissionTaskModelMaster } from "@/gs2/mission/model";
import { MissionTaskModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelMasterDomainCache";
import { Gs2MissionRestClient } from "@/gs2/mission";
import { DescribeMissionTaskModelMastersRequest } from "@/gs2/mission/request";
import { DescribeMissionTaskModelMastersResult } from "@/gs2/mission/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeMissionTaskModelMastersIterator {
    private missionTaskModelMasterCache: MissionTaskModelMasterDomainCache;
    private client: Gs2MissionRestClient;
    private namespaceName: string;
    private missionGroupName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: MissionTaskModelMaster[]|null;

    private fetchSize: number|null;

    public constructor(
        missionTaskModelMasterCache: MissionTaskModelMasterDomainCache,
        client: Gs2MissionRestClient,
        namespaceName: string,
        missionGroupName: string
    ) {
        this.missionTaskModelMasterCache = missionTaskModelMasterCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.missionGroupName = missionGroupName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeMissionTaskModelMastersResult = await this.client.describeMissionTaskModelMasters(
            new DescribeMissionTaskModelMastersRequest()
                .withNamespaceName(this.namespaceName)
                .withMissionGroupName(this.missionGroupName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.missionTaskModelMasterCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<MissionTaskModelMaster> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<MissionTaskModelMaster>(() => {});
        }
        let ret: MissionTaskModelMaster = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
