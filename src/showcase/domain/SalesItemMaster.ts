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
import { GetSalesItemMasterRequest } from "@/gs2/showcase/request";
import { GetSalesItemMasterResult } from "@/gs2/showcase/result";
import { UpdateSalesItemMasterRequest } from "@/gs2/showcase/request";
import { UpdateSalesItemMasterResult } from "@/gs2/showcase/result";
import { DeleteSalesItemMasterRequest } from "@/gs2/showcase/request";
import { DeleteSalesItemMasterResult } from "@/gs2/showcase/result";
import { AccessToken } from "@/gs2/auth/model";

export class SalesItemMasterDomain {
    session: Gs2RestSession;
    client: Gs2ShowcaseRestClient;
    salesItemMasterCache: SalesItemMasterDomainCache;
    namespaceName: string;
    salesItemName: string;

    public constructor(
        session: Gs2RestSession,
        salesItemMasterCache: SalesItemMasterDomainCache,
        namespaceName: string,
        salesItemName: string
    ) {
        this.session = session;
        this.client = new Gs2ShowcaseRestClient(
            session
        );
        this.salesItemMasterCache = salesItemMasterCache;
        this.namespaceName = namespaceName;
        this.salesItemName = salesItemName;
    }

    public async load(
        request: GetSalesItemMasterRequest
    ): Promise<GetSalesItemMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setSalesItemName(this.salesItemName);
        let r: GetSalesItemMasterResult = await this.client.getSalesItemMaster(
            request
        );
        this.salesItemMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateSalesItemMasterRequest
    ): Promise<UpdateSalesItemMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setSalesItemName(this.salesItemName);
        let r: UpdateSalesItemMasterResult = await this.client.updateSalesItemMaster(
            request
        );
        this.salesItemMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteSalesItemMasterRequest
    ): Promise<DeleteSalesItemMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setSalesItemName(this.salesItemName);
        let r: DeleteSalesItemMasterResult = await this.client.deleteSalesItemMaster(
            request
        );
        this.salesItemMasterCache.delete(r.getItem()!);
        return r;
    }

}
