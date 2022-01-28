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
import { MissionGroupModelMaster } from "@/gs2/mission/model";
import { MissionGroupModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelMasterDomainCache";
import { Gs2MissionRestClient } from "@/gs2/mission";
import { DescribeMissionGroupModelMastersRequest } from "@/gs2/mission/request";
import { DescribeMissionGroupModelMastersResult } from "@/gs2/mission/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeMissionGroupModelMastersIterator {
    private missionGroupModelMasterCache: MissionGroupModelMasterDomainCache;
    private client: Gs2MissionRestClient;
    private namespaceName: string;
    private pageToken: string|null;
    private last: boolean;
    private result: MissionGroupModelMaster[]|null;

    private fetchSize: number|null;

    public constructor(
        missionGroupModelMasterCache: MissionGroupModelMasterDomainCache,
        client: Gs2MissionRestClient,
        namespaceName: string
    ) {
        this.missionGroupModelMasterCache = missionGroupModelMasterCache;
        this.client = client;
        this.namespaceName = namespaceName;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeMissionGroupModelMastersResult = await this.client.describeMissionGroupModelMasters(
            new DescribeMissionGroupModelMastersRequest()
                .withNamespaceName(this.namespaceName)
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.missionGroupModelMasterCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<MissionGroupModelMaster> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<MissionGroupModelMaster>(() => {});
        }
        let ret: MissionGroupModelMaster = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
