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
import { ReferenceOfDomain } from "@/gs2/inventory/domain/ReferenceOf";
import { ReferenceOfAccessTokenDomain } from "@/gs2/inventory/domain/ReferenceOfAccessToken";
import { NamespaceDomainCache } from "@/gs2/inventory/domain/cache/NamespaceDomainCache";
import { InventoryModelMasterDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelMasterDomainCache";
import { InventoryModelDomainCache } from "@/gs2/inventory/domain/cache/InventoryModelDomainCache";
import { ItemModelMasterDomainCache } from "@/gs2/inventory/domain/cache/ItemModelMasterDomainCache";
import { ItemModelDomainCache } from "@/gs2/inventory/domain/cache/ItemModelDomainCache";
import { InventoryDomainCache } from "@/gs2/inventory/domain/cache/InventoryDomainCache";
import { ItemSetDomainCache } from "@/gs2/inventory/domain/cache/ItemSetDomainCache";
import { GetItemSetRequest } from "@/gs2/inventory/request";
import { GetItemSetResult } from "@/gs2/inventory/result";
import { GetItemSetByUserIdRequest } from "@/gs2/inventory/request";
import { GetItemSetByUserIdResult } from "@/gs2/inventory/result";
import { GetItemWithSignatureRequest } from "@/gs2/inventory/request";
import { GetItemWithSignatureResult } from "@/gs2/inventory/result";
import { GetItemWithSignatureByUserIdRequest } from "@/gs2/inventory/request";
import { GetItemWithSignatureByUserIdResult } from "@/gs2/inventory/result";
import { AcquireItemSetByUserIdRequest } from "@/gs2/inventory/request";
import { AcquireItemSetByUserIdResult } from "@/gs2/inventory/result";
import { ConsumeItemSetRequest } from "@/gs2/inventory/request";
import { ConsumeItemSetResult } from "@/gs2/inventory/result";
import { ConsumeItemSetByUserIdRequest } from "@/gs2/inventory/request";
import { ConsumeItemSetByUserIdResult } from "@/gs2/inventory/result";
import { DeleteItemSetByUserIdRequest } from "@/gs2/inventory/request";
import { DeleteItemSetByUserIdResult } from "@/gs2/inventory/result";
import { AccessToken } from "@/gs2/auth/model";

export class ItemSetDomain {
    session: Gs2RestSession;
    client: Gs2InventoryRestClient;
    itemSetCache: ItemSetDomainCache;
    namespaceName: string;
    userId: string;
    inventoryName: string;
    itemName: string;
    itemSetName: string;

    public constructor(
        session: Gs2RestSession,
        itemSetCache: ItemSetDomainCache,
        namespaceName: string,
        userId: string,
        inventoryName: string,
        itemName: string,
        itemSetName: string
    ) {
        this.session = session;
        this.client = new Gs2InventoryRestClient(
            session
        );
        this.itemSetCache = itemSetCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.inventoryName = inventoryName;
        this.itemName = itemName;
        this.itemSetName = itemSetName;
    }

    public async load(
        request: GetItemSetByUserIdRequest
    ): Promise<GetItemSetByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        request.setItemSetName(this.itemSetName);
        let r: GetItemSetByUserIdResult = await this.client.getItemSetByUserId(
            request
        );
        return r;
    }

    public async getItemWithSignature(
        request: GetItemWithSignatureByUserIdRequest
    ): Promise<GetItemWithSignatureByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        request.setItemSetName(this.itemSetName);
        let r: GetItemWithSignatureByUserIdResult = await this.client.getItemWithSignatureByUserId(
            request
        );
        return r;
    }

    public async acquire(
        request: AcquireItemSetByUserIdRequest
    ): Promise<AcquireItemSetByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        request.setItemSetName(this.itemSetName);
        let r: AcquireItemSetByUserIdResult = await this.client.acquireItemSetByUserId(
            request
        );
        return r;
    }

    public async consume(
        request: ConsumeItemSetByUserIdRequest
    ): Promise<ConsumeItemSetByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        request.setItemSetName(this.itemSetName);
        let r: ConsumeItemSetByUserIdResult = await this.client.consumeItemSetByUserId(
            request
        );
        return r;
    }

    public async delete(
        request: DeleteItemSetByUserIdRequest
    ): Promise<DeleteItemSetByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        request.setItemSetName(this.itemSetName);
        let r: DeleteItemSetByUserIdResult = await this.client.deleteItemSetByUserId(
            request
        );
        return r;
    }

    public referenceOf(
    ): ReferenceOfDomain {
        return new ReferenceOfDomain(
            this.session,
            this.namespaceName,
            this.userId,
            this.inventoryName,
            this.itemName,
            this.itemSetName
        );
    }

}
