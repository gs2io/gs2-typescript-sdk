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
import { CurrentMissionMasterDomain } from "@/gs2/mission/domain/CurrentMissionMaster";
import { MissionGroupModelDomain } from "@/gs2/mission/domain/MissionGroupModel";
import { CounterModelDomain } from "@/gs2/mission/domain/CounterModel";
import { UserDomain } from "@/gs2/mission/domain/User";
import { UserAccessTokenDomain } from "@/gs2/mission/domain/UserAccessToken";
import { MissionGroupModelMasterDomain } from "@/gs2/mission/domain/MissionGroupModelMaster";
import { CounterModelMasterDomain } from "@/gs2/mission/domain/CounterModelMaster";
import { CompleteDomainCache } from "@/gs2/mission/domain/cache/CompleteDomainCache";
import { CounterModelMasterDomainCache } from "@/gs2/mission/domain/cache/CounterModelMasterDomainCache";
import { MissionGroupModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelMasterDomainCache";
import { NamespaceDomainCache } from "@/gs2/mission/domain/cache/NamespaceDomainCache";
import { CounterDomainCache } from "@/gs2/mission/domain/cache/CounterDomainCache";
import { CounterModelDomainCache } from "@/gs2/mission/domain/cache/CounterModelDomainCache";
import { MissionGroupModelDomainCache } from "@/gs2/mission/domain/cache/MissionGroupModelDomainCache";
import { MissionTaskModelDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelDomainCache";
import { MissionTaskModelMasterDomainCache } from "@/gs2/mission/domain/cache/MissionTaskModelMasterDomainCache";
import { CreateCounterModelMasterRequest } from "@/gs2/mission/request";
import { CreateCounterModelMasterResult } from "@/gs2/mission/result";
import { CreateMissionGroupModelMasterRequest } from "@/gs2/mission/request";
import { CreateMissionGroupModelMasterResult } from "@/gs2/mission/result";
import { GetNamespaceStatusRequest } from "@/gs2/mission/request";
import { GetNamespaceStatusResult } from "@/gs2/mission/result";
import { GetNamespaceRequest } from "@/gs2/mission/request";
import { GetNamespaceResult } from "@/gs2/mission/result";
import { UpdateNamespaceRequest } from "@/gs2/mission/request";
import { UpdateNamespaceResult } from "@/gs2/mission/result";
import { DeleteNamespaceRequest } from "@/gs2/mission/request";
import { DeleteNamespaceResult } from "@/gs2/mission/result";
import { DescribeCounterModelMastersIterator } from "@/gs2/mission/domain/iterator/CounterModelMastersDomainIterator";
import { DescribeMissionGroupModelMastersIterator } from "@/gs2/mission/domain/iterator/MissionGroupModelMastersDomainIterator";
import { DescribeCounterModelsIterator } from "@/gs2/mission/domain/iterator/CounterModelsDomainIterator";
import { DescribeMissionGroupModelsIterator } from "@/gs2/mission/domain/iterator/MissionGroupModelsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2MissionRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    counterModelMasterCache: CounterModelMasterDomainCache;
    missionGroupModelMasterCache: MissionGroupModelMasterDomainCache;
    counterModelCache: CounterModelDomainCache;
    missionGroupModelCache: MissionGroupModelDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2MissionRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.counterModelMasterCache = new CounterModelMasterDomainCache();
        this.missionGroupModelMasterCache = new MissionGroupModelMasterDomainCache();
        this.counterModelCache = new CounterModelDomainCache();
        this.missionGroupModelCache = new MissionGroupModelDomainCache();
    }

    public async createCounterModelMaster(
        request: CreateCounterModelMasterRequest
    ): Promise<CreateCounterModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateCounterModelMasterResult = await this.client.createCounterModelMaster(
            request
        );
        return r;
    }

    public async createMissionGroupModelMaster(
        request: CreateMissionGroupModelMasterRequest
    ): Promise<CreateMissionGroupModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateMissionGroupModelMasterResult = await this.client.createMissionGroupModelMaster(
            request
        );
        return r;
    }

    public async getStatus(
        request: GetNamespaceStatusRequest
    ): Promise<GetNamespaceStatusResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetNamespaceStatusResult = await this.client.getNamespaceStatus(
            request
        );
        return r;
    }

    public async load(
        request: GetNamespaceRequest
    ): Promise<GetNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetNamespaceResult = await this.client.getNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateNamespaceRequest
    ): Promise<UpdateNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateNamespaceResult = await this.client.updateNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteNamespaceRequest
    ): Promise<DeleteNamespaceResult> {
        request.setNamespaceName(this.namespaceName);
        let r: DeleteNamespaceResult = await this.client.deleteNamespace(
            request
        );
        this.namespaceCache.delete(r.getItem()!);
        return r;
    }

    public counterModelMasters(
    ): DescribeCounterModelMastersIterator {
        return new DescribeCounterModelMastersIterator(
            this.counterModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public missionGroupModelMasters(
    ): DescribeMissionGroupModelMastersIterator {
        return new DescribeMissionGroupModelMastersIterator(
            this.missionGroupModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public counterModels(
    ): DescribeCounterModelsIterator {
        return new DescribeCounterModelsIterator(
            this.counterModelCache,
            this.client,
            this.namespaceName
        );
    }

    public missionGroupModels(
    ): DescribeMissionGroupModelsIterator {
        return new DescribeMissionGroupModelsIterator(
            this.missionGroupModelCache,
            this.client,
            this.namespaceName
        );
    }

    public currentMissionMaster(
    ): CurrentMissionMasterDomain {
        return new CurrentMissionMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public missionGroupModel(
        missionGroupName: string
    ): MissionGroupModelDomain {
        return new MissionGroupModelDomain(
            this.session,
            this.missionGroupModelCache,
            this.namespaceName,
            missionGroupName
        );
    }

    public counterModel(
        counterName: string
    ): CounterModelDomain {
        return new CounterModelDomain(
            this.session,
            this.counterModelCache,
            this.namespaceName,
            counterName
        );
    }

    public user(
        userId: string
    ): UserDomain {
        return new UserDomain(
            this.session,
            this.namespaceName,
            userId
        );
    }

    public accessToken(
        accessToken: AccessToken
    ): UserAccessTokenDomain  {
        return new UserAccessTokenDomain(
            this.session,
            this.namespaceName,
            accessToken
        );
    }

    public missionGroupModelMaster(
        missionGroupName: string
    ): MissionGroupModelMasterDomain {
        return new MissionGroupModelMasterDomain(
            this.session,
            this.missionGroupModelMasterCache,
            this.namespaceName,
            missionGroupName
        );
    }

    public counterModelMaster(
        counterName: string
    ): CounterModelMasterDomain {
        return new CounterModelMasterDomain(
            this.session,
            this.counterModelMasterCache,
            this.namespaceName,
            counterName
        );
    }

}
