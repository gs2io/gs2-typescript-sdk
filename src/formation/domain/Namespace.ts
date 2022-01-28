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
import { Gs2FormationRestClient } from "@/gs2/formation";
import { CurrentFormMasterDomain } from "@/gs2/formation/domain/CurrentFormMaster";
import { MoldModelDomain } from "@/gs2/formation/domain/MoldModel";
import { UserDomain } from "@/gs2/formation/domain/User";
import { UserAccessTokenDomain } from "@/gs2/formation/domain/UserAccessToken";
import { FormModelMasterDomain } from "@/gs2/formation/domain/FormModelMaster";
import { MoldModelMasterDomain } from "@/gs2/formation/domain/MoldModelMaster";
import { NamespaceDomainCache } from "@/gs2/formation/domain/cache/NamespaceDomainCache";
import { FormModelMasterDomainCache } from "@/gs2/formation/domain/cache/FormModelMasterDomainCache";
import { MoldModelDomainCache } from "@/gs2/formation/domain/cache/MoldModelDomainCache";
import { MoldModelMasterDomainCache } from "@/gs2/formation/domain/cache/MoldModelMasterDomainCache";
import { MoldDomainCache } from "@/gs2/formation/domain/cache/MoldDomainCache";
import { FormDomainCache } from "@/gs2/formation/domain/cache/FormDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/formation/request";
import { GetNamespaceStatusResult } from "@/gs2/formation/result";
import { GetNamespaceRequest } from "@/gs2/formation/request";
import { GetNamespaceResult } from "@/gs2/formation/result";
import { UpdateNamespaceRequest } from "@/gs2/formation/request";
import { UpdateNamespaceResult } from "@/gs2/formation/result";
import { DeleteNamespaceRequest } from "@/gs2/formation/request";
import { DeleteNamespaceResult } from "@/gs2/formation/result";
import { CreateFormModelMasterRequest } from "@/gs2/formation/request";
import { CreateFormModelMasterResult } from "@/gs2/formation/result";
import { CreateMoldModelMasterRequest } from "@/gs2/formation/request";
import { CreateMoldModelMasterResult } from "@/gs2/formation/result";
import { DescribeFormModelMastersIterator } from "@/gs2/formation/domain/iterator/FormModelMastersDomainIterator";
import { DescribeMoldModelsIterator } from "@/gs2/formation/domain/iterator/MoldModelsDomainIterator";
import { DescribeMoldModelMastersIterator } from "@/gs2/formation/domain/iterator/MoldModelMastersDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2FormationRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    formModelMasterCache: FormModelMasterDomainCache;
    moldModelCache: MoldModelDomainCache;
    moldModelMasterCache: MoldModelMasterDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2FormationRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.formModelMasterCache = new FormModelMasterDomainCache();
        this.moldModelCache = new MoldModelDomainCache();
        this.moldModelMasterCache = new MoldModelMasterDomainCache();
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

    public async createFormModelMaster(
        request: CreateFormModelMasterRequest
    ): Promise<CreateFormModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateFormModelMasterResult = await this.client.createFormModelMaster(
            request
        );
        return r;
    }

    public async createMoldModelMaster(
        request: CreateMoldModelMasterRequest
    ): Promise<CreateMoldModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateMoldModelMasterResult = await this.client.createMoldModelMaster(
            request
        );
        return r;
    }

    public formModelMasters(
    ): DescribeFormModelMastersIterator {
        return new DescribeFormModelMastersIterator(
            this.formModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public moldModels(
    ): DescribeMoldModelsIterator {
        return new DescribeMoldModelsIterator(
            this.moldModelCache,
            this.client,
            this.namespaceName
        );
    }

    public moldModelMasters(
    ): DescribeMoldModelMastersIterator {
        return new DescribeMoldModelMastersIterator(
            this.moldModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public currentFormMaster(
    ): CurrentFormMasterDomain {
        return new CurrentFormMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public moldModel(
        moldName: string
    ): MoldModelDomain {
        return new MoldModelDomain(
            this.session,
            this.moldModelCache,
            this.namespaceName,
            moldName
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

    public formModelMaster(
        formModelName: string
    ): FormModelMasterDomain {
        return new FormModelMasterDomain(
            this.session,
            this.formModelMasterCache,
            this.namespaceName,
            formModelName
        );
    }

    public moldModelMaster(
        moldName: string
    ): MoldModelMasterDomain {
        return new MoldModelMasterDomain(
            this.session,
            this.moldModelMasterCache,
            this.namespaceName,
            moldName
        );
    }

}
