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
import { NamespaceDomainCache } from "@/gs2/inventory/domain/cache/NamespaceDomainCache";
import { InventoryModelMasterDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelMasterDomainCache";
import { InventoryModelDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelDomainCache";
import { ItemModelMasterDomainCache } from "@/gs2/inventory/domain/cache/ItemModelMasterDomainCache";
import { ItemModelDomainCache } from "@/gs2/inventory/domain/cache/ItemModelDomainCache";
import { InventoryDomainCache } from "@/gs2/inventory/domain/cache/InventoryDomainCache";
import { ItemSetDomainCache } from "@/gs2/inventory/domain/cache/ItemSetDomainCache";
import { GetItemModelMasterRequest } from "@/gs2/inventory/request";
import { GetItemModelMasterResult } from "@/gs2/inventory/result";
import { UpdateItemModelMasterRequest } from "@/gs2/inventory/request";
import { UpdateItemModelMasterResult } from "@/gs2/inventory/result";
import { DeleteItemModelMasterRequest } from "@/gs2/inventory/request";
import { DeleteItemModelMasterResult } from "@/gs2/inventory/result";
import { AccessToken } from "@/gs2/auth/model";

export class ItemModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2InventoryRestClient;
    itemModelMasterCache: ItemModelMasterDomainCache;
    namespaceName: string;
    inventoryName: string;
    itemName: string;

    public constructor(
        session: Gs2RestSession,
        itemModelMasterCache: ItemModelMasterDomainCache,
        namespaceName: string,
        inventoryName: string,
        itemName: string
    ) {
        this.session = session;
        this.client = new Gs2InventoryRestClient(
            session
        );
        this.itemModelMasterCache = itemModelMasterCache;
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
        this.itemName = itemName;
    }

    public async load(
        request: GetItemModelMasterRequest
    ): Promise<GetItemModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        let r: GetItemModelMasterResult = await this.client.getItemModelMaster(
            request
        );
        this.itemModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateItemModelMasterRequest
    ): Promise<UpdateItemModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        let r: UpdateItemModelMasterResult = await this.client.updateItemModelMaster(
            request
        );
        this.itemModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteItemModelMasterRequest
    ): Promise<DeleteItemModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        let r: DeleteItemModelMasterResult = await this.client.deleteItemModelMaster(
            request
        );
        this.itemModelMasterCache.delete(r.getItem()!);
        return r;
    }

}
