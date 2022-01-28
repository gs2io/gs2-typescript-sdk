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
import { Gs2ShowcaseRestClient } from "@/gs2/showcase";
import { CurrentShowcaseMasterDomain } from "@/gs2/showcase/domain/CurrentShowcaseMaster";
import { UserDomain } from "@/gs2/showcase/domain/User";
import { UserAccessTokenDomain } from "@/gs2/showcase/domain/UserAccessToken";
import { SalesItemMasterDomain } from "@/gs2/showcase/domain/SalesItemMaster";
import { SalesItemGroupMasterDomain } from "@/gs2/showcase/domain/SalesItemGroupMaster";
import { ShowcaseMasterDomain } from "@/gs2/showcase/domain/ShowcaseMaster";
import { NamespaceDomainCache } from "@/gs2/showcase/domain/cache/NamespaceDomainCache";
import { SalesItemMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemMasterDomainCache";
import { SalesItemGroupMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemGroupMasterDomainCache";
import { ShowcaseMasterDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseMasterDomainCache";
import { ShowcaseDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/showcase/request";
import { GetNamespaceStatusResult } from "@/gs2/showcase/result";
import { GetNamespaceRequest } from "@/gs2/showcase/request";
import { GetNamespaceResult } from "@/gs2/showcase/result";
import { UpdateNamespaceRequest } from "@/gs2/showcase/request";
import { UpdateNamespaceResult } from "@/gs2/showcase/result";
import { DeleteNamespaceRequest } from "@/gs2/showcase/request";
import { DeleteNamespaceResult } from "@/gs2/showcase/result";
import { CreateSalesItemMasterRequest } from "@/gs2/showcase/request";
import { CreateSalesItemMasterResult } from "@/gs2/showcase/result";
import { CreateSalesItemGroupMasterRequest } from "@/gs2/showcase/request";
import { CreateSalesItemGroupMasterResult } from "@/gs2/showcase/result";
import { CreateShowcaseMasterRequest } from "@/gs2/showcase/request";
import { CreateShowcaseMasterResult } from "@/gs2/showcase/result";
import { DescribeSalesItemMastersIterator } from "@/gs2/showcase/domain/iterator/SalesItemMastersDomainIterator";
import { DescribeSalesItemGroupMastersIterator } from "@/gs2/showcase/domain/iterator/SalesItemGroupMastersDomainIterator";
import { DescribeShowcaseMastersIterator } from "@/gs2/showcase/domain/iterator/ShowcaseMastersDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2ShowcaseRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    salesItemMasterCache: SalesItemMasterDomainCache;
    salesItemGroupMasterCache: SalesItemGroupMasterDomainCache;
    showcaseMasterCache: ShowcaseMasterDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2ShowcaseRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.salesItemMasterCache = new SalesItemMasterDomainCache();
        this.salesItemGroupMasterCache = new SalesItemGroupMasterDomainCache();
        this.showcaseMasterCache = new ShowcaseMasterDomainCache();
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

    public async createSalesItemMaster(
        request: CreateSalesItemMasterRequest
    ): Promise<CreateSalesItemMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateSalesItemMasterResult = await this.client.createSalesItemMaster(
            request
        );
        return r;
    }

    public async createSalesItemGroupMaster(
        request: CreateSalesItemGroupMasterRequest
    ): Promise<CreateSalesItemGroupMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateSalesItemGroupMasterResult = await this.client.createSalesItemGroupMaster(
            request
        );
        return r;
    }

    public async createShowcaseMaster(
        request: CreateShowcaseMasterRequest
    ): Promise<CreateShowcaseMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateShowcaseMasterResult = await this.client.createShowcaseMaster(
            request
        );
        return r;
    }

    public salesItemMasters(
    ): DescribeSalesItemMastersIterator {
        return new DescribeSalesItemMastersIterator(
            this.salesItemMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public salesItemGroupMasters(
    ): DescribeSalesItemGroupMastersIterator {
        return new DescribeSalesItemGroupMastersIterator(
            this.salesItemGroupMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public showcaseMasters(
    ): DescribeShowcaseMastersIterator {
        return new DescribeShowcaseMastersIterator(
            this.showcaseMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public currentShowcaseMaster(
    ): CurrentShowcaseMasterDomain {
        return new CurrentShowcaseMasterDomain(
            this.session,
            this.namespaceName
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

    public salesItemMaster(
        salesItemName: string
    ): SalesItemMasterDomain {
        return new SalesItemMasterDomain(
            this.session,
            this.salesItemMasterCache,
            this.namespaceName,
            salesItemName
        );
    }

    public salesItemGroupMaster(
        salesItemGroupName: string
    ): SalesItemGroupMasterDomain {
        return new SalesItemGroupMasterDomain(
            this.session,
            this.salesItemGroupMasterCache,
            this.namespaceName,
            salesItemGroupName
        );
    }

    public showcaseMaster(
        showcaseName: string
    ): ShowcaseMasterDomain {
        return new ShowcaseMasterDomain(
            this.session,
            this.showcaseMasterCache,
            this.namespaceName,
            showcaseName
        );
    }

}
