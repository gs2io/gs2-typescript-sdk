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
import { InventoryDomain } from "@/gs2/inventory/domain/Inventory";
import { InventoryAccessTokenDomain } from "@/gs2/inventory/domain/InventoryAccessToken";
import { NamespaceDomainCache } from "@/gs2/inventory/domain/cache/NamespaceDomainCache";
import { InventoryModelMasterDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelMasterDomainCache";
import { InventoryModelDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelDomainCache";
import { ItemModelMasterDomainCache } from "@/gs2/inventory/domain/cache/ItemModelMasterDomainCache";
import { ItemModelDomainCache } from "@/gs2/inventory/domain/cache/ItemModelDomainCache";
import { InventoryDomainCache } from "@/gs2/inventory/domain/cache/InventoryDomainCache";
import { ItemSetDomainCache } from "@/gs2/inventory/domain/cache/ItemSetDomainCache";
import { DescribeInventoriesIterator } from "@/gs2/inventory/domain/iterator/InventoriesDomainIterator";
import { DescribeInventoriesByUserIdIterator } from "@/gs2/inventory/domain/iterator/InventoriesByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2InventoryRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    inventoryCache: InventoryDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2InventoryRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.inventoryCache = new InventoryDomainCache();
    }

    public inventories(
    ): DescribeInventoriesIterator {
        return new DescribeInventoriesIterator(
            this.inventoryCache,
            this.client,
            this.namespaceName,
            this.accessToken
        );
    }

    public inventory(
        inventoryName: string
    ): InventoryAccessTokenDomain {
        return new InventoryAccessTokenDomain(
            this.session,
            this.inventoryCache,
            this.namespaceName,
            this.accessToken,
            inventoryName
        );
    }

}
