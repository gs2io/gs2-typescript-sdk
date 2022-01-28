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
import { Gs2StaminaRestClient } from "@/gs2/stamina";
import { CurrentStaminaMasterDomain } from "@/gs2/stamina/domain/CurrentStaminaMaster";
import { StaminaModelDomain } from "@/gs2/stamina/domain/StaminaModel";
import { UserDomain } from "@/gs2/stamina/domain/User";
import { UserAccessTokenDomain } from "@/gs2/stamina/domain/UserAccessToken";
import { RecoverIntervalTableMasterDomain } from "@/gs2/stamina/domain/RecoverIntervalTableMaster";
import { MaxStaminaTableMasterDomain } from "@/gs2/stamina/domain/MaxStaminaTableMaster";
import { RecoverValueTableMasterDomain } from "@/gs2/stamina/domain/RecoverValueTableMaster";
import { StaminaModelMasterDomain } from "@/gs2/stamina/domain/StaminaModelMaster";
import { NamespaceDomainCache } from "@/gs2/stamina/domain/cache/NamespaceDomainCache";
import { StaminaModelMasterDomainCache } from "@/gs2/stamina/domain/cache/StaminaModelMasterDomainCache";
import { MaxStaminaTableMasterDomainCache } from "@/gs2/stamina/domain/cache/MaxStaminaTableMasterDomainCache";
import { RecoverIntervalTableMasterDomainCache } from "@/gs2/stamina/domain/cache/RecoverIntervalTableMasterDomainCache";
import { RecoverValueTableMasterDomainCache } from "@/gs2/stamina/domain/cache/RecoverValueTableMasterDomainCache";
import { StaminaModelDomainCache } from "@/gs2/stamina/domain/cache/StaminaModelDomainCache";
import { StaminaDomainCache } from "@/gs2/stamina/domain/cache/StaminaDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/stamina/request";
import { GetNamespaceStatusResult } from "@/gs2/stamina/result";
import { GetNamespaceRequest } from "@/gs2/stamina/request";
import { GetNamespaceResult } from "@/gs2/stamina/result";
import { UpdateNamespaceRequest } from "@/gs2/stamina/request";
import { UpdateNamespaceResult } from "@/gs2/stamina/result";
import { DeleteNamespaceRequest } from "@/gs2/stamina/request";
import { DeleteNamespaceResult } from "@/gs2/stamina/result";
import { CreateStaminaModelMasterRequest } from "@/gs2/stamina/request";
import { CreateStaminaModelMasterResult } from "@/gs2/stamina/result";
import { CreateMaxStaminaTableMasterRequest } from "@/gs2/stamina/request";
import { CreateMaxStaminaTableMasterResult } from "@/gs2/stamina/result";
import { CreateRecoverIntervalTableMasterRequest } from "@/gs2/stamina/request";
import { CreateRecoverIntervalTableMasterResult } from "@/gs2/stamina/result";
import { CreateRecoverValueTableMasterRequest } from "@/gs2/stamina/request";
import { CreateRecoverValueTableMasterResult } from "@/gs2/stamina/result";
import { DescribeStaminaModelMastersIterator } from "@/gs2/stamina/domain/iterator/StaminaModelMastersDomainIterator";
import { DescribeMaxStaminaTableMastersIterator } from "@/gs2/stamina/domain/iterator/MaxStaminaTableMastersDomainIterator";
import { DescribeRecoverIntervalTableMastersIterator } from "@/gs2/stamina/domain/iterator/RecoverIntervalTableMastersDomainIterator";
import { DescribeRecoverValueTableMastersIterator } from "@/gs2/stamina/domain/iterator/RecoverValueTableMastersDomainIterator";
import { DescribeStaminaModelsIterator } from "@/gs2/stamina/domain/iterator/StaminaModelsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2StaminaRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    staminaModelMasterCache: StaminaModelMasterDomainCache;
    maxStaminaTableMasterCache: MaxStaminaTableMasterDomainCache;
    recoverIntervalTableMasterCache: RecoverIntervalTableMasterDomainCache;
    recoverValueTableMasterCache: RecoverValueTableMasterDomainCache;
    staminaModelCache: StaminaModelDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2StaminaRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.staminaModelMasterCache = new StaminaModelMasterDomainCache();
        this.maxStaminaTableMasterCache = new MaxStaminaTableMasterDomainCache();
        this.recoverIntervalTableMasterCache = new RecoverIntervalTableMasterDomainCache();
        this.recoverValueTableMasterCache = new RecoverValueTableMasterDomainCache();
        this.staminaModelCache = new StaminaModelDomainCache();
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

    public async createStaminaModelMaster(
        request: CreateStaminaModelMasterRequest
    ): Promise<CreateStaminaModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateStaminaModelMasterResult = await this.client.createStaminaModelMaster(
            request
        );
        return r;
    }

    public async createMaxStaminaTableMaster(
        request: CreateMaxStaminaTableMasterRequest
    ): Promise<CreateMaxStaminaTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateMaxStaminaTableMasterResult = await this.client.createMaxStaminaTableMaster(
            request
        );
        return r;
    }

    public async createRecoverIntervalTableMaster(
        request: CreateRecoverIntervalTableMasterRequest
    ): Promise<CreateRecoverIntervalTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateRecoverIntervalTableMasterResult = await this.client.createRecoverIntervalTableMaster(
            request
        );
        return r;
    }

    public async createRecoverValueTableMaster(
        request: CreateRecoverValueTableMasterRequest
    ): Promise<CreateRecoverValueTableMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateRecoverValueTableMasterResult = await this.client.createRecoverValueTableMaster(
            request
        );
        return r;
    }

    public staminaModelMasters(
    ): DescribeStaminaModelMastersIterator {
        return new DescribeStaminaModelMastersIterator(
            this.staminaModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public maxStaminaTableMasters(
    ): DescribeMaxStaminaTableMastersIterator {
        return new DescribeMaxStaminaTableMastersIterator(
            this.maxStaminaTableMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public recoverIntervalTableMasters(
    ): DescribeRecoverIntervalTableMastersIterator {
        return new DescribeRecoverIntervalTableMastersIterator(
            this.recoverIntervalTableMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public recoverValueTableMasters(
    ): DescribeRecoverValueTableMastersIterator {
        return new DescribeRecoverValueTableMastersIterator(
            this.recoverValueTableMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public staminaModels(
    ): DescribeStaminaModelsIterator {
        return new DescribeStaminaModelsIterator(
            this.staminaModelCache,
            this.client,
            this.namespaceName
        );
    }

    public currentStaminaMaster(
    ): CurrentStaminaMasterDomain {
        return new CurrentStaminaMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public staminaModel(
        staminaName: string
    ): StaminaModelDomain {
        return new StaminaModelDomain(
            this.session,
            this.staminaModelCache,
            this.namespaceName,
            staminaName
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

    public recoverIntervalTableMaster(
        recoverIntervalTableName: string
    ): RecoverIntervalTableMasterDomain {
        return new RecoverIntervalTableMasterDomain(
            this.session,
            this.recoverIntervalTableMasterCache,
            this.namespaceName,
            recoverIntervalTableName
        );
    }

    public maxStaminaTableMaster(
        maxStaminaTableName: string
    ): MaxStaminaTableMasterDomain {
        return new MaxStaminaTableMasterDomain(
            this.session,
            this.maxStaminaTableMasterCache,
            this.namespaceName,
            maxStaminaTableName
        );
    }

    public recoverValueTableMaster(
        recoverValueTableName: string
    ): RecoverValueTableMasterDomain {
        return new RecoverValueTableMasterDomain(
            this.session,
            this.recoverValueTableMasterCache,
            this.namespaceName,
            recoverValueTableName
        );
    }

    public staminaModelMaster(
        staminaName: string
    ): StaminaModelMasterDomain {
        return new StaminaModelMasterDomain(
            this.session,
            this.staminaModelMasterCache,
            this.namespaceName,
            staminaName
        );
    }

}
