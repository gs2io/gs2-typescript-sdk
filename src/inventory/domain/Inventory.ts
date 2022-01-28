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
import { ItemSetDomain } from "@/gs2/inventory/domain/ItemSet";
import { ItemSetAccessTokenDomain } from "@/gs2/inventory/domain/ItemSetAccessToken";
import { NamespaceDomainCache } from "@/gs2/inventory/domain/cache/NamespaceDomainCache";
import { InventoryModelMasterDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelMasterDomainCache";
import { InventoryModelDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelDomainCache";
import { ItemModelMasterDomainCache } from "@/gs2/inventory/domain/cache/ItemModelMasterDomainCache";
import { ItemModelDomainCache } from "@/gs2/inventory/domain/cache/ItemModelDomainCache";
import { InventoryDomainCache } from "@/gs2/inventory/domain/cache/InventoryDomainCache";
import { ItemSetDomainCache } from "@/gs2/inventory/domain/cache/ItemSetDomainCache";
import { GetInventoryRequest } from "@/gs2/inventory/request";
import { GetInventoryResult } from "@/gs2/inventory/result";
import { GetInventoryByUserIdRequest } from "@/gs2/inventory/request";
import { GetInventoryByUserIdResult } from "@/gs2/inventory/result";
import { AddCapacityByUserIdRequest } from "@/gs2/inventory/request";
import { AddCapacityByUserIdResult } from "@/gs2/inventory/result";
import { SetCapacityByUserIdRequest } from "@/gs2/inventory/request";
import { SetCapacityByUserIdResult } from "@/gs2/inventory/result";
import { DeleteInventoryByUserIdRequest } from "@/gs2/inventory/request";
import { DeleteInventoryByUserIdResult } from "@/gs2/inventory/result";
import { DescribeItemSetsIterator } from "@/gs2/inventory/domain/iterator/ItemSetsDomainIterator";
import { DescribeItemSetsByUserIdIterator } from "@/gs2/inventory/domain/iterator/ItemSetsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class InventoryDomain {
    session: Gs2RestSession;
    client: Gs2InventoryRestClient;
    inventoryCache: InventoryDomainCache;
    namespaceName: string;
    userId: string;
    inventoryName: string;
    itemSetCache: ItemSetDomainCache;

    public constructor(
        session: Gs2RestSession,
        inventoryCache: InventoryDomainCache,
        namespaceName: string,
        userId: string,
        inventoryName: string
    ) {
        this.session = session;
        this.client = new Gs2InventoryRestClient(
            session
        );
        this.inventoryCache = inventoryCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.inventoryName = inventoryName;
        this.itemSetCache = new ItemSetDomainCache();
    }

    public async load(
        request: GetInventoryByUserIdRequest
    ): Promise<GetInventoryByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        let r: GetInventoryByUserIdResult = await this.client.getInventoryByUserId(
            request
        );
        this.inventoryCache.update(r.getItem()!);
        return r;
    }

    public async addCapacity(
        request: AddCapacityByUserIdRequest
    ): Promise<AddCapacityByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        let r: AddCapacityByUserIdResult = await this.client.addCapacityByUserId(
            request
        );
        this.inventoryCache.update(r.getItem()!);
        return r;
    }

    public async setCapacity(
        request: SetCapacityByUserIdRequest
    ): Promise<SetCapacityByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        let r: SetCapacityByUserIdResult = await this.client.setCapacityByUserId(
            request
        );
        this.inventoryCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteInventoryByUserIdRequest
    ): Promise<DeleteInventoryByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        let r: DeleteInventoryByUserIdResult = await this.client.deleteInventoryByUserId(
            request
        );
        this.inventoryCache.delete(r.getItem()!);
        return r;
    }

    public itemSets(
    ): DescribeItemSetsByUserIdIterator {
        return new DescribeItemSetsByUserIdIterator(
            this.itemSetCache,
            this.client,
            this.namespaceName,
            this.inventoryName,
            this.userId
        );
    }

    public itemSet(
        itemName: string,
        itemSetName: string
    ): ItemSetDomain {
        return new ItemSetDomain(
            this.session,
            this.itemSetCache,
            this.namespaceName,
            this.userId,
            this.inventoryName,
            itemName,
            itemSetName
        );
    }

}
