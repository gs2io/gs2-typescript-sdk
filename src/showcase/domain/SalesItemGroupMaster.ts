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
import { NamespaceDomainCache } from "@/gs2/showcase/domain/cache/NamespaceDomainCache";
import { SalesItemMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemMasterDomainCache";
import { SalesItemGroupMasterDomainCache } from "@/gs2/showcase/domain/cache/SalesItemGroupMasterDomainCache";
import { ShowcaseMasterDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseMasterDomainCache";
import { ShowcaseDomainCache } from "@/gs2/showcase/domain/cache/ShowcaseDomainCache";
import { GetSalesItemGroupMasterRequest } from "@/gs2/showcase/request";
import { GetSalesItemGroupMasterResult } from "@/gs2/showcase/result";
import { UpdateSalesItemGroupMasterRequest } from "@/gs2/showcase/request";
import { UpdateSalesItemGroupMasterResult } from "@/gs2/showcase/result";
import { DeleteSalesItemGroupMasterRequest } from "@/gs2/showcase/request";
import { DeleteSalesItemGroupMasterResult } from "@/gs2/showcase/result";
import { AccessToken } from "@/gs2/auth/model";

export class SalesItemGroupMasterDomain {
    session: Gs2RestSession;
    client: Gs2ShowcaseRestClient;
    salesItemGroupMasterCache: SalesItemGroupMasterDomainCache;
    namespaceName: string;
    salesItemGroupName: string;

    public constructor(
        session: Gs2RestSession,
        salesItemGroupMasterCache: SalesItemGroupMasterDomainCache,
        namespaceName: string,
        salesItemGroupName: string
    ) {
        this.session = session;
        this.client = new Gs2ShowcaseRestClient(
            session
        );
        this.salesItemGroupMasterCache = salesItemGroupMasterCache;
        this.namespaceName = namespaceName;
        this.salesItemGroupName = salesItemGroupName;
    }

    public async load(
        request: GetSalesItemGroupMasterRequest
    ): Promise<GetSalesItemGroupMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setSalesItemGroupName(this.salesItemGroupName);
        let r: GetSalesItemGroupMasterResult = await this.client.getSalesItemGroupMaster(
            request
        );
        this.salesItemGroupMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateSalesItemGroupMasterRequest
    ): Promise<UpdateSalesItemGroupMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setSalesItemGroupName(this.salesItemGroupName);
        let r: UpdateSalesItemGroupMasterResult = await this.client.updateSalesItemGroupMaster(
            request
        );
        this.salesItemGroupMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteSalesItemGroupMasterRequest
    ): Promise<DeleteSalesItemGroupMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setSalesItemGroupName(this.salesItemGroupName);
        let r: DeleteSalesItemGroupMasterResult = await this.client.deleteSalesItemGroupMaster(
            request
        );
        this.salesItemGroupMasterCache.delete(r.getItem()!);
        return r;
    }

}
