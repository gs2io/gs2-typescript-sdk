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
import { MissionTaskModelMasterDomain } from "@/gs2/mission/domain/MissionTaskModelMaster";
import { CompleteDomainCache } from "@/gs2/mission/domain/cache/CompleteDomainCache";
import { CounterModelMasterDomainCache } from "@/gs2/mission/domain/cache/CounterModelMasterDomainCache";
import { MissionGroupModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelMasterDomainCache";
import { NamespaceDomainCache } from "@/gs2/mission/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/mission/domain/cache/CounterDomainCache";
import { CounterModelDomainCache } from "@/gs2/mission/domain/cache/CounterModelDomainCache";
import { MissionGroupModelDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelDomainCache";
import { MissionTaskModelDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelDomainCache";
import { MissionTaskModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelMasterDomainCache";
import { GetMissionGroupModelMasterRequest } from "@/gs2/mission/request";
import { GetMissionGroupModelMasterResult } from "@/gs2/mission/result";
import { UpdateMissionGroupModelMasterRequest } from "@/gs2/mission/request";
import { UpdateMissionGroupModelMasterResult } from "@/gs2/mission/result";
import { DeleteMissionGroupModelMasterRequest } from "@/gs2/mission/request";
import { DeleteMissionGroupModelMasterResult } from "@/gs2/mission/result";
import { CreateMissionTaskModelMasterRequest } from "@/gs2/mission/request";
import { CreateMissionTaskModelMasterResult } from "@/gs2/mission/result";
import { DescribeMissionTaskModelMastersIterator } from "@/gs2/mission/domain/iterator/MissionTaskModelMastersDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class MissionGroupModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2MissionRestClient;
    missionGroupModelMasterCache: MissionGroupModelMasterDomainCache;
    namespaceName: string;
    missionGroupName: string;
    missionTaskModelMasterCache: MissionTaskModelMasterDomainCache;

    public constructor(
        session: Gs2RestSession,
        missionGroupModelMasterCache: MissionGroupModelMasterDomainCache,
        namespaceName: string,
        missionGroupName: string
    ) {
        this.session = session;
        this.client = new Gs2MissionRestClient(
            session
        );
        this.missionGroupModelMasterCache = missionGroupModelMasterCache;
        this.namespaceName = namespaceName;
        this.missionGroupName = missionGroupName;
        this.missionTaskModelMasterCache = new MissionTaskModelMasterDomainCache();
    }

    public async load(
        request: GetMissionGroupModelMasterRequest
    ): Promise<GetMissionGroupModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setMissionGroupName(this.missionGroupName);
        let r: GetMissionGroupModelMasterResult = await this.client.getMissionGroupModelMaster(
            request
        );
        this.missionGroupModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateMissionGroupModelMasterRequest
    ): Promise<UpdateMissionGroupModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setMissionGroupName(this.missionGroupName);
        let r: UpdateMissionGroupModelMasterResult = await this.client.updateMissionGroupModelMaster(
            request
        );
        this.missionGroupModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteMissionGroupModelMasterRequest
    ): Promise<DeleteMissionGroupModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setMissionGroupName(this.missionGroupName);
        let r: DeleteMissionGroupModelMasterResult = await this.client.deleteMissionGroupModelMaster(
            request
        );
        this.missionGroupModelMasterCache.delete(r.getItem()!);
        return r;
    }

    public async createMissionTaskModelMaster(
        request: CreateMissionTaskModelMasterRequest
    ): Promise<CreateMissionTaskModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setMissionGroupName(this.missionGroupName);
        let r: CreateMissionTaskModelMasterResult = await this.client.createMissionTaskModelMaster(
            request
        );
        return r;
    }

    public missionTaskModelMasters(
    ): DescribeMissionTaskModelMastersIterator {
        return new DescribeMissionTaskModelMastersIterator(
            this.missionTaskModelMasterCache,
            this.client,
            this.namespaceName,
            this.missionGroupName
        );
    }

    public missionTaskModelMaster(
        missionTaskName: string
    ): MissionTaskModelMasterDomain {
        return new MissionTaskModelMasterDomain(
            this.session,
            this.missionTaskModelMasterCache,
            this.namespaceName,
            this.missionGroupName,
            missionTaskName
        );
    }

}
