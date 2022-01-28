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

export class ItemSetAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2InventoryRestClient;
    itemSetCache: ItemSetDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    inventoryName: string;
    itemName: string;
    itemSetName: string;

    public constructor(
        session: Gs2RestSession,
        itemSetCache: ItemSetDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
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
        this.accessToken = accessToken;
        this.inventoryName = inventoryName;
        this.itemName = itemName;
        this.itemSetName = itemSetName;
    }

    public async load(
        request: GetItemSetRequest
    ): Promise<GetItemSetResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        request.setItemSetName(this.itemSetName);
        let r: GetItemSetResult = await this.client.getItemSet(
            request
        );
        return r;
    }

    public async getItemWithSignature(
        request: GetItemWithSignatureRequest
    ): Promise<GetItemWithSignatureResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        request.setItemSetName(this.itemSetName);
        let r: GetItemWithSignatureResult = await this.client.getItemWithSignature(
            request
        );
        return r;
    }

    public async consume(
        request: ConsumeItemSetRequest
    ): Promise<ConsumeItemSetResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        request.setItemSetName(this.itemSetName);
        let r: ConsumeItemSetResult = await this.client.consumeItemSet(
            request
        );
        return r;
    }

    public referenceOf(
    ): ReferenceOfAccessTokenDomain {
        return new ReferenceOfAccessTokenDomain(
            this.session,
            this.namespaceName,
            this.accessToken,
            this.inventoryName,
            this.itemName,
            this.itemSetName
        );
    }

}
