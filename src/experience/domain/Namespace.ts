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
import { Gs2ExperienceRestClient } from "@/gs2/experience";
import { CurrentExperienceMasterDomain } from "@/gs2/experience/domain/CurrentExperienceMaster";
import { ExperienceModelDomain } from "@/gs2/experience/domain/ExperienceModel";
import { UserDomain } from "@/gs2/experience/domain/User";
import { UserAccessTokenDomain } from "@/gs2/experience/domain/UserAccessToken";
import { ThresholdMasterDomain } from "@/gs2/experience/domain/ThresholdMaster";
import { ExperienceModelMasterDomain } from "@/gs2/experience/domain/ExperienceModelMaster";
import { NamespaceDomainCache } from "@/gs2/experience/domain/cache/NamespaceDomainCache";
import { ExperienceModelMasterDomainCache } from "@/gs2/experience/domain/cache/ExperienceModelMasterDomainCache";
import { ExperienceModelDomainCache } from "@/gs2/experience/domain/cache/ExperienceModelDomainCache";
import { ThresholdMasterDomainCache } from "@/gs2/experience/domain/cache/ThresholdMasterDomainCache";
import { StatusDomainCache } from "@/gs2/experience/domain/cache/StatusDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/experience/request";
import { GetNamespaceStatusResult } from "@/gs2/experience/result";
import { GetNamespaceRequest } from "@/gs2/experience/request";
import { GetNamespaceResult } from "@/gs2/experience/result";
import { UpdateNamespaceRequest } from "@/gs2/experience/request";
import { UpdateNamespaceResult } from "@/gs2/experience/result";
import { DeleteNamespaceRequest } from "@/gs2/experience/request";
import { DeleteNamespaceResult } from "@/gs2/experience/result";
import { CreateExperienceModelMasterRequest } from "@/gs2/experience/request";
import { CreateExperienceModelMasterResult } from "@/gs2/experience/result";
import { CreateThresholdMasterRequest } from "@/gs2/experience/request";
import { CreateThresholdMasterResult } from "@/gs2/experience/result";
import { DescribeExperienceModelMastersIterator } from "@/gs2/experience/domain/iterator/ExperienceModelMastersDomainIterator";
import { DescribeExperienceModelsIterator } from "@/gs2/experience/domain/iterator/ExperienceModelsDomainIterator";
import { DescribeThresholdMastersIterator } from "@/gs2/experience/domain/iterator/ThresholdMastersDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2ExperienceRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    experienceModelMasterCache: ExperienceModelMasterDomainCache;
    experienceModelCache: ExperienceModelDomainCache;
    thresholdMasterCache: ThresholdMasterDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2ExperienceRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.experienceModelMasterCache = new ExperienceModelMasterDomainCache();
        this.experienceModelCache = new ExperienceModelDomainCache();
        this.thresholdMasterCache = new ThresholdMasterDomainCache();
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

    public async createExperienceModelMaster(
        request: CreateExperienceModelMasterRequest
    ): Promise<CreateExperienceModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateExperienceModelMasterResult = await this.client.createExperienceModelMaster(
            request
        );
        return r;
    }

    public async createThresholdMaster(
        request: CreateThresholdMasterRequest
    ): Promise<CreateThresholdMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateThresholdMasterResult = await this.client.createThresholdMaster(
            request
        );
        return r;
    }

    public experienceModelMasters(
    ): DescribeExperienceModelMastersIterator {
        return new DescribeExperienceModelMastersIterator(
            this.experienceModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public experienceModels(
    ): DescribeExperienceModelsIterator {
        return new DescribeExperienceModelsIterator(
            this.experienceModelCache,
            this.client,
            this.namespaceName
        );
    }

    public thresholdMasters(
    ): DescribeThresholdMastersIterator {
        return new DescribeThresholdMastersIterator(
            this.thresholdMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public currentExperienceMaster(
    ): CurrentExperienceMasterDomain {
        return new CurrentExperienceMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public experienceModel(
        experienceName: string
    ): ExperienceModelDomain {
        return new ExperienceModelDomain(
            this.session,
            this.experienceModelCache,
            this.namespaceName,
            experienceName
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

    public thresholdMaster(
        thresholdName: string
    ): ThresholdMasterDomain {
        return new ThresholdMasterDomain(
            this.session,
            this.thresholdMasterCache,
            this.namespaceName,
            thresholdName
        );
    }

    public experienceModelMaster(
        experienceName: string
    ): ExperienceModelMasterDomain {
        return new ExperienceModelMasterDomain(
            this.session,
            this.experienceModelMasterCache,
            this.namespaceName,
            experienceName
        );
    }

}
