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

import { Gs2RestSession } from "@/gs2/core/model";
import { Gs2MissionRestClient } from "@/gs2/mission";
import { MissionTaskModelDomain } from "@/gs2/mission/domain/MissionTaskModel";
import { CompleteDomainCache } from "@/gs2/mission/domain/cache/CompleteDomainCache";
import { CounterModelMasterDomainCache } from "@/gs2/mission/domain/cache/CounterModelMasterDomainCache";
import { MissionGroupModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelMasterDomainCache";
import { NamespaceDomainCache } from "@/gs2/mission/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/mission/domain/cache/CounterDomainCache";
import { CounterModelDomainCache } from "@/gs2/mission/domain/cache/CounterModelDomainCache";
import { MissionGroupModelDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelDomainCache";
import { MissionTaskModelDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelDomainCache";
import { MissionTaskModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelMasterDomainCache";
import { GetMissionGroupModelRequest } from "@/gs2/mission/request";
import { GetMissionGroupModelResult } from "@/gs2/mission/result";
import { DescribeMissionTaskModelsIterator } from "@/gs2/mission/domain/iterator/MissionTaskModelsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class MissionGroupModelDomain {
    session: Gs2RestSession;
    client: Gs2MissionRestClient;
    missionGroupModelCache: MissionGroupModelDomainCache;
    namespaceName: string;
    missionGroupName: string;
    missionTaskModelCache: MissionTaskModelDomainCache;

    public constructor(
        session: Gs2RestSession,
        missionGroupModelCache: MissionGroupModelDomainCache,
        namespaceName: string,
        missionGroupName: string
    ) {
        this.session = session;
        this.client = new Gs2MissionRestClient(
            session
        );
        this.missionGroupModelCache = missionGroupModelCache;
        this.namespaceName = namespaceName;
        this.missionGroupName = missionGroupName;
        this.missionTaskModelCache = new MissionTaskModelDomainCache();
    }

    public async load(
        request: GetMissionGroupModelRequest
    ): Promise<GetMissionGroupModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setMissionGroupName(this.missionGroupName);
        let r: GetMissionGroupModelResult = await this.client.getMissionGroupModel(
            request
        );
        this.missionGroupModelCache.update(r.getItem()!);
        return r;
    }

    public missionTaskModels(
    ): DescribeMissionTaskModelsIterator {
        return new DescribeMissionTaskModelsIterator(
            this.missionTaskModelCache,
            this.client,
            this.namespaceName,
            this.missionGroupName
        );
    }

    public missionTaskModel(
        missionTaskName: string
    ): MissionTaskModelDomain {
        return new MissionTaskModelDomain(
            this.session,
            this.missionTaskModelCache,
            this.namespaceName,
            this.missionGroupName,
            missionTaskName
        );
    }

}
