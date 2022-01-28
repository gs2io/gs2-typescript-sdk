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
import { GetItemModelRequest } from "@/gs2/inventory/request";
import { GetItemModelResult } from "@/gs2/inventory/result";
import { AccessToken } from "@/gs2/auth/model";

export class ItemModelDomain {
    session: Gs2RestSession;
    client: Gs2InventoryRestClient;
    itemModelCache: ItemModelDomainCache;
    namespaceName: string;
    inventoryName: string;
    itemName: string;

    public constructor(
        session: Gs2RestSession,
        itemModelCache: ItemModelDomainCache,
        namespaceName: string,
        inventoryName: string,
        itemName: string
    ) {
        this.session = session;
        this.client = new Gs2InventoryRestClient(
            session
        );
        this.itemModelCache = itemModelCache;
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
        this.itemName = itemName;
    }

    public async load(
        request: GetItemModelRequest
    ): Promise<GetItemModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        let r: GetItemModelResult = await this.client.getItemModel(
            request
        );
        this.itemModelCache.update(r.getItem()!);
        return r;
    }

}
