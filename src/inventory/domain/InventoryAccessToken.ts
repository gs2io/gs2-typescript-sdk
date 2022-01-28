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

export class InventoryAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2InventoryRestClient;
    inventoryCache: InventoryDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    inventoryName: string;
    itemSetCache: ItemSetDomainCache;

    public constructor(
        session: Gs2RestSession,
        inventoryCache: InventoryDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        inventoryName: string
    ) {
        this.session = session;
        this.client = new Gs2InventoryRestClient(
            session
        );
        this.inventoryCache = inventoryCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.inventoryName = inventoryName;
        this.itemSetCache = new ItemSetDomainCache();
    }

    public async load(
        request: GetInventoryRequest
    ): Promise<GetInventoryResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setInventoryName(this.inventoryName);
        let r: GetInventoryResult = await this.client.getInventory(
            request
        );
        this.inventoryCache.update(r.getItem()!);
        return r;
    }

    public itemSets(
    ): DescribeItemSetsIterator {
        return new DescribeItemSetsIterator(
            this.itemSetCache,
            this.client,
            this.namespaceName,
            this.inventoryName,
            this.accessToken
        );
    }

    public itemSet(
        itemName: string,
        itemSetName: string
    ): ItemSetAccessTokenDomain {
        return new ItemSetAccessTokenDomain(
            this.session,
            this.itemSetCache,
            this.namespaceName,
            this.accessToken,
            this.inventoryName,
            itemName,
            itemSetName
        );
    }

}
