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
import { NamespaceDomainCache } from "@/gs2/distributor/domain/cache/NamespaceDomainCache";
import { DistributorModelMasterDomainCache } from "@/gs2/distributor/domain/cache/DistributorModelMasterDomainCache";
import { DistributorModelDomainCache } from "@/gs2/distributor/domain/cache/DistributorModelDomainCache";
import { GetDistributorModelMasterRequest } from "@/gs2/distributor/request";
import { GetDistributorModelMasterResult } from "@/gs2/distributor/result";
import { UpdateDistributorModelMasterRequest } from "@/gs2/distributor/request";
import { UpdateDistributorModelMasterResult } from "@/gs2/distributor/result";
import { DeleteDistributorModelMasterRequest } from "@/gs2/distributor/request";
import { DeleteDistributorModelMasterResult } from "@/gs2/distributor/result";
import { AccessToken } from "@/gs2/auth/model";

export class DistributorModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2DistributorRestClient;
    distributorModelMasterCache: DistributorModelMasterDomainCache;
    namespaceName: string;
    distributorName: string;

    public constructor(
        session: Gs2RestSession,
        distributorModelMasterCache: DistributorModelMasterDomainCache,
        namespaceName: string,
        distributorName: string
    ) {
        this.session = session;
        this.client = new Gs2DistributorRestClient(
            session
        );
        this.distributorModelMasterCache = distributorModelMasterCache;
        this.namespaceName = namespaceName;
        this.distributorName = distributorName;
    }

    public async load(
        request: GetDistributorModelMasterRequest
    ): Promise<GetDistributorModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setDistributorName(this.distributorName);
        let r: GetDistributorModelMasterResult = await this.client.getDistributorModelMaster(
            request
        );
        this.distributorModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateDistributorModelMasterRequest
    ): Promise<UpdateDistributorModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setDistributorName(this.distributorName);
        let r: UpdateDistributorModelMasterResult = await this.client.updateDistributorModelMaster(
            request
        );
        this.distributorModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteDistributorModelMasterRequest
    ): Promise<DeleteDistributorModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setDistributorName(this.distributorName);
        let r: DeleteDistributorModelMasterResult = await this.client.deleteDistributorModelMaster(
            request
        );
        this.distributorModelMasterCache.delete(r.getItem()!);
        return r;
    }

}
