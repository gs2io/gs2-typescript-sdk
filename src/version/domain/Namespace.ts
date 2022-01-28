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
import { Gs2VersionRestClient } from "@/gs2/version";
import { CurrentVersionMasterDomain } from "@/gs2/version/domain/CurrentVersionMaster";
import { VersionModelDomain } from "@/gs2/version/domain/VersionModel";
import { UserDomain } from "@/gs2/version/domain/User";
import { UserAccessTokenDomain } from "@/gs2/version/domain/UserAccessToken";
import { VersionModelMasterDomain } from "@/gs2/version/domain/VersionModelMaster";
import { NamespaceDomainCache } from "@/gs2/version/domain/cache/NamespaceDomainCache";
import { VersionModelMasterDomainCache } from "@/gs2/version/domain/cache/VersionModelMasterDomainCache";
import { VersionModelDomainCache } from "@/gs2/version/domain/cache/VersionModelDomainCache";
import { AcceptVersionDomainCache } from "@/gs2/version/domain/cache/AcceptVersionDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/version/request";
import { GetNamespaceStatusResult } from "@/gs2/version/result";
import { GetNamespaceRequest } from "@/gs2/version/request";
import { GetNamespaceResult } from "@/gs2/version/result";
import { UpdateNamespaceRequest } from "@/gs2/version/request";
import { UpdateNamespaceResult } from "@/gs2/version/result";
import { DeleteNamespaceRequest } from "@/gs2/version/request";
import { DeleteNamespaceResult } from "@/gs2/version/result";
import { CreateVersionModelMasterRequest } from "@/gs2/version/request";
import { CreateVersionModelMasterResult } from "@/gs2/version/result";
import { DescribeVersionModelMastersIterator } from "@/gs2/version/domain/iterator/VersionModelMastersDomainIterator";
import { DescribeVersionModelsIterator } from "@/gs2/version/domain/iterator/VersionModelsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2VersionRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    versionModelMasterCache: VersionModelMasterDomainCache;
    versionModelCache: VersionModelDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2VersionRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.versionModelMasterCache = new VersionModelMasterDomainCache();
        this.versionModelCache = new VersionModelDomainCache();
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

    public async createVersionModelMaster(
        request: CreateVersionModelMasterRequest
    ): Promise<CreateVersionModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateVersionModelMasterResult = await this.client.createVersionModelMaster(
            request
        );
        return r;
    }

    public versionModelMasters(
    ): DescribeVersionModelMastersIterator {
        return new DescribeVersionModelMastersIterator(
            this.versionModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public versionModels(
    ): DescribeVersionModelsIterator {
        return new DescribeVersionModelsIterator(
            this.versionModelCache,
            this.client,
            this.namespaceName
        );
    }

    public currentVersionMaster(
    ): CurrentVersionMasterDomain {
        return new CurrentVersionMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public versionModel(
        versionName: string
    ): VersionModelDomain {
        return new VersionModelDomain(
            this.session,
            this.versionModelCache,
            this.namespaceName,
            versionName
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

    public versionModelMaster(
        versionName: string
    ): VersionModelMasterDomain {
        return new VersionModelMasterDomain(
            this.session,
            this.versionModelMasterCache,
            this.namespaceName,
            versionName
        );
    }

}
