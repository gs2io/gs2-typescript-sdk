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
import { ItemModelDomain } from "@/gs2/inventory/domain/ItemModel";
import { NamespaceDomainCache } from "@/gs2/inventory/domain/cache/NamespaceDomainCache";
import { InventoryModelMasterDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelMasterDomainCache";
import { InventoryModelDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelDomainCache";
import { ItemModelMasterDomainCache } from "@/gs2/inventory/domain/cache/ItemModelMasterDomainCache";
import { ItemModelDomainCache } from "@/gs2/inventory/domain/cache/ItemModelDomainCache";
import { InventoryDomainCache } from "@/gs2/inventory/domain/cache/InventoryDomainCache";
import { ItemSetDomainCache } from "@/gs2/inventory/domain/cache/ItemSetDomainCache";
import { GetInventoryModelRequest } from "@/gs2/inventory/request";
import { GetInventoryModelResult } from "@/gs2/inventory/result";
import { DescribeItemModelsIterator } from "@/gs2/inventory/domain/iterator/ItemModelsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class InventoryModelDomain {
    session: Gs2RestSession;
    client: Gs2InventoryRestClient;
    inventoryModelCache: InventoryModelDomainCache;
    namespaceName: string;
    inventoryName: string;
    itemModelCache: ItemModelDomainCache;

    public constructor(
        session: Gs2RestSession,
        inventoryModelCache: InventoryModelDomainCache,
        namespaceName: string,
        inventoryName: string
    ) {
        this.session = session;
        this.client = new Gs2InventoryRestClient(
            session
        );
        this.inventoryModelCache = inventoryModelCache;
        this.namespaceName = namespaceName;
        this.inventoryName = inventoryName;
        this.itemModelCache = new ItemModelDomainCache();
    }

    public async load(
        request: GetInventoryModelRequest
    ): Promise<GetInventoryModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setInventoryName(this.inventoryName);
        let r: GetInventoryModelResult = await this.client.getInventoryModel(
            request
        );
        this.inventoryModelCache.update(r.getItem()!);
        return r;
    }

    public itemModels(
    ): DescribeItemModelsIterator {
        return new DescribeItemModelsIterator(
            this.itemModelCache,
            this.client,
            this.namespaceName,
            this.inventoryName
        );
    }

    public itemModel(
        itemName: string
    ): ItemModelDomain {
        return new ItemModelDomain(
            this.session,
            this.itemModelCache,
            this.namespaceName,
            this.inventoryName,
            itemName
        );
    }

}
