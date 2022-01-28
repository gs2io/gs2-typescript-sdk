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
import { DescribeNamespacesIterator } from "@/gs2/distributor/domain/iterator/NamespacesDomainIterator";
import { NamespaceDomain } from "@/gs2/distributor/domain/Namespace";
import { NamespaceDomainCache } from "@/gs2/distributor/domain/cache/NamespaceDomainCache";
import { DistributorModelMasterDomainCache } from "@/gs2/distributor/domain/cache/DistributorModelMasterDomainCache";
import { DistributorModelDomainCache } from "@/gs2/distributor/domain/cache/DistributorModelDomainCache";
import { CreateNamespaceRequest } from "@/gs2/distributor/request";
import { CreateNamespaceResult } from "@/gs2/distributor/result";
import { DistributeWithoutOverflowProcessRequest } from "@/gs2/distributor/request";
import { DistributeWithoutOverflowProcessResult } from "@/gs2/distributor/result";
import { RunStampTaskWithoutNamespaceRequest } from "@/gs2/distributor/request";
import { RunStampTaskWithoutNamespaceResult } from "@/gs2/distributor/result";
import { RunStampSheetWithoutNamespaceRequest } from "@/gs2/distributor/request";
import { RunStampSheetWithoutNamespaceResult } from "@/gs2/distributor/result";
import { RunStampSheetExpressWithoutNamespaceRequest } from "@/gs2/distributor/request";
import { RunStampSheetExpressWithoutNamespaceResult } from "@/gs2/distributor/result";

export class Gs2Distributor {
    session: Gs2RestSession;
    client: Gs2DistributorRestClient;
    namespaceCache: NamespaceDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2DistributorRestClient (
            session
        );
        this.namespaceCache = new NamespaceDomainCache();
    }

    public async createNamespace(
        request: CreateNamespaceRequest
    ): Promise<CreateNamespaceResult> {
        let r: CreateNamespaceResult = await this.client.createNamespace(
            request
        );
        this.namespaceCache.update(r.getItem()!);
        return r;
    }

    public async distributeWithoutOverflowProcess(
        request: DistributeWithoutOverflowProcessRequest
    ): Promise<DistributeWithoutOverflowProcessResult> {
        let r: DistributeWithoutOverflowProcessResult = await this.client.distributeWithoutOverflowProcess(
            request
        );
        return r;
    }

    public async runStampTaskWithoutNamespace(
        request: RunStampTaskWithoutNamespaceRequest
    ): Promise<RunStampTaskWithoutNamespaceResult> {
        let r: RunStampTaskWithoutNamespaceResult = await this.client.runStampTaskWithoutNamespace(
            request
        );
        return r;
    }

    public async runStampSheetWithoutNamespace(
        request: RunStampSheetWithoutNamespaceRequest
    ): Promise<RunStampSheetWithoutNamespaceResult> {
        let r: RunStampSheetWithoutNamespaceResult = await this.client.runStampSheetWithoutNamespace(
            request
        );
        return r;
    }

    public async runStampSheetExpressWithoutNamespace(
        request: RunStampSheetExpressWithoutNamespaceRequest
    ): Promise<RunStampSheetExpressWithoutNamespaceResult> {
        let r: RunStampSheetExpressWithoutNamespaceResult = await this.client.runStampSheetExpressWithoutNamespace(
            request
        );
        return r;
    }

    public namespaces(
    ): DescribeNamespacesIterator {
        return new DescribeNamespacesIterator(
            this.namespaceCache,
            this.client
        );
    }

    public namespace(
        namespaceName: string
    ): NamespaceDomain {
        return new NamespaceDomain(
            this.session,
            this.namespaceCache,
            namespaceName
        );
    }
}
