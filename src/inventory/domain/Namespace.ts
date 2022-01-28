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
import { Gs2InventoryRestClient } from "@/gs2/inventory";
import { CurrentItemModelMasterDomain } from "@/gs2/inventory/domain/CurrentItemModelMaster";
import { InventoryModelDomain } from "@/gs2/inventory/domain/InventoryModel";
import { UserDomain } from "@/gs2/inventory/domain/User";
import { UserAccessTokenDomain } from "@/gs2/inventory/domain/UserAccessToken";
import { InventoryModelMasterDomain } from "@/gs2/inventory/domain/InventoryModelMaster";
import { NamespaceDomainCache } from "@/gs2/inventory/domain/cache/NamespaceDomainCache";
import { InventoryModelMasterDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelMasterDomainCache";
import { InventoryModelDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelDomainCache";
import { ItemModelMasterDomainCache } from "@/gs2/inventory/domain/cache/ItemModelMasterDomainCache";
import { ItemModelDomainCache } from "@/gs2/inventory/domain/cache/ItemModelDomainCache";
import { InventoryDomainCache } from "@/gs2/inventory/domain/cache/InventoryDomainCache";
import { ItemSetDomainCache } from "@/gs2/inventory/domain/cache/ItemSetDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/inventory/request";
import { GetNamespaceStatusResult } from "@/gs2/inventory/result";
import { GetNamespaceRequest } from "@/gs2/inventory/request";
import { GetNamespaceResult } from "@/gs2/inventory/result";
import { UpdateNamespaceRequest } from "@/gs2/inventory/request";
import { UpdateNamespaceResult } from "@/gs2/inventory/result";
import { DeleteNamespaceRequest } from "@/gs2/inventory/request";
import { DeleteNamespaceResult } from "@/gs2/inventory/result";
import { CreateInventoryModelMasterRequest } from "@/gs2/inventory/request";
import { CreateInventoryModelMasterResult } from "@/gs2/inventory/result";
import { DescribeInventoryModelMastersIterator } from "@/gs2/inventory/domain/iterator/InventoryModelMastersDomainIterator";
import { DescribeInventoryModelsIterator } from "@/gs2/inventory/domain/iterator/InventoryModelsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2InventoryRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    inventoryModelMasterCache: InventoryModelMasterDomainCache;
    inventoryModelCache: InventoryModelDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2InventoryRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.inventoryModelMasterCache = new InventoryModelMasterDomainCache();
        this.inventoryModelCache = new InventoryModelDomainCache();
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

    public async createInventoryModelMaster(
        request: CreateInventoryModelMasterRequest
    ): Promise<CreateInventoryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateInventoryModelMasterResult = await this.client.createInventoryModelMaster(
            request
        );
        return r;
    }

    public inventoryModelMasters(
    ): DescribeInventoryModelMastersIterator {
        return new DescribeInventoryModelMastersIterator(
            this.inventoryModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public inventoryModels(
    ): DescribeInventoryModelsIterator {
        return new DescribeInventoryModelsIterator(
            this.inventoryModelCache,
            this.client,
            this.namespaceName
        );
    }

    public currentItemModelMaster(
    ): CurrentItemModelMasterDomain {
        return new CurrentItemModelMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public inventoryModel(
        inventoryName: string
    ): InventoryModelDomain {
        return new InventoryModelDomain(
            this.session,
            this.inventoryModelCache,
            this.namespaceName,
            inventoryName
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

    public inventoryModelMaster(
        inventoryName: string
    ): InventoryModelMasterDomain {
        return new InventoryModelMasterDomain(
            this.session,
            this.inventoryModelMasterCache,
            this.namespaceName,
            inventoryName
        );
    }

}
