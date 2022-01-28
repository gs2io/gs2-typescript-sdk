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
import { Gs2DistributorRestClient } from "@/gs2/distributor";
import { CurrentDistributorMasterDomain } from "@/gs2/distributor/domain/CurrentDistributorMaster";
import { DistributorModelDomain } from "@/gs2/distributor/domain/DistributorModel";
import { DistributorModelMasterDomain } from "@/gs2/distributor/domain/DistributorModelMaster";
import { NamespaceDomainCache } from "@/gs2/distributor/domain/cache/NamespaceDomainCache";
import { DistributorModelMasterDomainCache } from "@/gs2/distributor/domain/cache/DistributorModelMasterDomainCache";
import { DistributorModelDomainCache } from "@/gs2/distributor/domain/cache/DistributorModelDomainCache";
import { GetNamespaceStatusRequest } from "@/gs2/distributor/request";
import { GetNamespaceStatusResult } from "@/gs2/distributor/result";
import { GetNamespaceRequest } from "@/gs2/distributor/request";
import { GetNamespaceResult } from "@/gs2/distributor/result";
import { UpdateNamespaceRequest } from "@/gs2/distributor/request";
import { UpdateNamespaceResult } from "@/gs2/distributor/result";
import { DeleteNamespaceRequest } from "@/gs2/distributor/request";
import { DeleteNamespaceResult } from "@/gs2/distributor/result";
import { CreateDistributorModelMasterRequest } from "@/gs2/distributor/request";
import { CreateDistributorModelMasterResult } from "@/gs2/distributor/result";
import { DistributeRequest } from "@/gs2/distributor/request";
import { DistributeResult } from "@/gs2/distributor/result";
import { RunStampTaskRequest } from "@/gs2/distributor/request";
import { RunStampTaskResult } from "@/gs2/distributor/result";
import { RunStampSheetRequest } from "@/gs2/distributor/request";
import { RunStampSheetResult } from "@/gs2/distributor/result";
import { RunStampSheetExpressRequest } from "@/gs2/distributor/request";
import { RunStampSheetExpressResult } from "@/gs2/distributor/result";
import { DescribeDistributorModelMastersIterator } from "@/gs2/distributor/domain/iterator/DistributorModelMastersDomainIterator";
import { DescribeDistributorModelsIterator } from "@/gs2/distributor/domain/iterator/DistributorModelsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class NamespaceDomain {
    session: Gs2RestSession;
    client: Gs2DistributorRestClient;
    namespaceCache: NamespaceDomainCache;
    namespaceName: string;
    distributorModelMasterCache: DistributorModelMasterDomainCache;
    distributorModelCache: DistributorModelDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceCache: NamespaceDomainCache,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2DistributorRestClient(
            session
        );
        this.namespaceCache = namespaceCache;
        this.namespaceName = namespaceName;
        this.distributorModelMasterCache = new DistributorModelMasterDomainCache();
        this.distributorModelCache = new DistributorModelDomainCache();
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

    public async createDistributorModelMaster(
        request: CreateDistributorModelMasterRequest
    ): Promise<CreateDistributorModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: CreateDistributorModelMasterResult = await this.client.createDistributorModelMaster(
            request
        );
        return r;
    }

    public async distribute(
        request: DistributeRequest
    ): Promise<DistributeResult> {
        request.setNamespaceName(this.namespaceName);
        let r: DistributeResult = await this.client.distribute(
            request
        );
        return r;
    }

    public async runStampTask(
        request: RunStampTaskRequest
    ): Promise<RunStampTaskResult> {
        request.setNamespaceName(this.namespaceName);
        let r: RunStampTaskResult = await this.client.runStampTask(
            request
        );
        return r;
    }

    public async runStampSheet(
        request: RunStampSheetRequest
    ): Promise<RunStampSheetResult> {
        request.setNamespaceName(this.namespaceName);
        let r: RunStampSheetResult = await this.client.runStampSheet(
            request
        );
        return r;
    }

    public async runStampSheetExpress(
        request: RunStampSheetExpressRequest
    ): Promise<RunStampSheetExpressResult> {
        request.setNamespaceName(this.namespaceName);
        let r: RunStampSheetExpressResult = await this.client.runStampSheetExpress(
            request
        );
        return r;
    }

    public distributorModelMasters(
    ): DescribeDistributorModelMastersIterator {
        return new DescribeDistributorModelMastersIterator(
            this.distributorModelMasterCache,
            this.client,
            this.namespaceName
        );
    }

    public distributorModels(
    ): DescribeDistributorModelsIterator {
        return new DescribeDistributorModelsIterator(
            this.distributorModelCache,
            this.client,
            this.namespaceName
        );
    }

    public currentDistributorMaster(
    ): CurrentDistributorMasterDomain {
        return new CurrentDistributorMasterDomain(
            this.session,
            this.namespaceName
        );
    }

    public distributorModel(
        distributorName: string
    ): DistributorModelDomain {
        return new DistributorModelDomain(
            this.session,
            this.distributorModelCache,
            this.namespaceName,
            distributorName
        );
    }

    public distributorModelMaster(
        distributorName: string
    ): DistributorModelMasterDomain {
        return new DistributorModelMasterDomain(
            this.session,
            this.distributorModelMasterCache,
            this.namespaceName,
            distributorName
        );
    }

}
