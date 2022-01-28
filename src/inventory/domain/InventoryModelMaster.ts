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
import { ItemModelMasterDomain } from "@/gs2/inventory/domain/ItemModelMaster";
import { NamespaceDomainCache } from "@/gs2/inventory/domain/cache/NamespaceDomainCache";
import { InventoryModelMasterDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelMasterDomainCache";
import { InventoryModelDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelDomainCache";
import { ItemModelMasterDomainCache } from "@/gs2/inventory/domain/cache/ItemModelMasterDomainCache";
import { ItemModelDomainCache } from "@/gs2/inventory/domain/cache/ItemModelDomainCache";
import { InventoryDomainCache } from "@/gs2/inventory/domain/cache/InventoryDomainCache";
import { ItemSetDomainCache } from "@/gs2/inventory/domain/cache/ItemSetDomainCache";
import { GetInventoryModelMasterRequest } from "@/gs2/inventory/request";
import { GetInventoryModelMasterResult } from "@/gs2/inventory/result";
import { UpdateInventoryModelMasterRequest } from "@/gs2/inventory/request";
import { UpdateInventoryModelMasterResult } from "@/gs2/inventory/result";
import { DeleteInventoryModelMasterRequest } from "@/gs2/inventory/request";
import { DeleteInventoryModelMasterResult } from "@/gs2/inventory/result";
import { CreateItemModelMasterRequest } from "@/gs2/inventory/request";
import { CreateItemModelMasterResult } from "@/gs2/inventory/result";
import { DescribeItemModelMastersIterator } from "@/gs2/inventory/domain/iterator/ItemModelMastersDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class InventoryModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2InventoryRestClient;
    inventoryModelMasterCache: InventoryModelMasterDomainCache;
    namespaceName: string;
    inventoryName: string;
    itemModelMasterCache: ItemModelMasterDomainCache;

    public constructor(
        session: Gs2RestSession,
        inventoryModelMasterCache: InventoryModelMasterDomainCache,
        namespaceName: string,
        inventoryName: string
    ) {
        this.session = session;
        this.client = new Gs2InventoryRestClient(
            session
        );
        this.inventoryModelMasterCache = inventoryModelMasterCache;
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
        this.itemModelMasterCache = new ItemModelMasterDomainCache();
    }

    public async load(
        request: GetInventoryModelMasterRequest
    ): Promise<GetInventoryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setInventoryName(this.inventoryName);
        let r: GetInventoryModelMasterResult = await this.client.getInventoryModelMaster(
            request
        );
        this.inventoryModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateInventoryModelMasterRequest
    ): Promise<UpdateInventoryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setInventoryName(this.inventoryName);
        let r: UpdateInventoryModelMasterResult = await this.client.updateInventoryModelMaster(
            request
        );
        this.inventoryModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteInventoryModelMasterRequest
    ): Promise<DeleteInventoryModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setInventoryName(this.inventoryName);
        let r: DeleteInventoryModelMasterResult = await this.client.deleteInventoryModelMaster(
            request
        );
        this.inventoryModelMasterCache.delete(r.getItem()!);
        return r;
    }

    public async createItemModelMaster(
        request: CreateItemModelMasterRequest
    ): Promise<CreateItemModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setInventoryName(this.inventoryName);
        let r: CreateItemModelMasterResult = await this.client.createItemModelMaster(
            request
        );
        return r;
    }

    public itemModelMasters(
    ): DescribeItemModelMastersIterator {
        return new DescribeItemModelMastersIterator(
            this.itemModelMasterCache,
            this.client,
            this.namespaceName,
            this.inventoryName
        );
    }

    public itemModelMaster(
        itemName: string
    ): ItemModelMasterDomain {
        return new ItemModelMasterDomain(
            this.session,
            this.itemModelMasterCache,
            this.namespaceName,
            this.inventoryName,
            itemName
        );
    }

}
