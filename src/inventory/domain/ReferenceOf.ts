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
import { GetReferenceOfRequest } from "@/gs2/inventory/request";
import { GetReferenceOfResult } from "@/gs2/inventory/result";
import { GetReferenceOfByUserIdRequest } from "@/gs2/inventory/request";
import { GetReferenceOfByUserIdResult } from "@/gs2/inventory/result";
import { VerifyReferenceOfRequest } from "@/gs2/inventory/request";
import { VerifyReferenceOfResult } from "@/gs2/inventory/result";
import { VerifyReferenceOfByUserIdRequest } from "@/gs2/inventory/request";
import { VerifyReferenceOfByUserIdResult } from "@/gs2/inventory/result";
import { AddReferenceOfRequest } from "@/gs2/inventory/request";
import { AddReferenceOfResult } from "@/gs2/inventory/result";
import { AddReferenceOfByUserIdRequest } from "@/gs2/inventory/request";
import { AddReferenceOfByUserIdResult } from "@/gs2/inventory/result";
import { DeleteReferenceOfRequest } from "@/gs2/inventory/request";
import { DeleteReferenceOfResult } from "@/gs2/inventory/result";
import { DeleteReferenceOfByUserIdRequest } from "@/gs2/inventory/request";
import { DeleteReferenceOfByUserIdResult } from "@/gs2/inventory/result";
import { DescribeReferenceOfIterator } from "@/gs2/inventory/domain/iterator/ReferenceOfDomainIterator";
import { DescribeReferenceOfByUserIdIterator } from "@/gs2/inventory/domain/iterator/ReferenceOfByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class ReferenceOfDomain {
    session: Gs2RestSession;
    client: Gs2InventoryRestClient;
    namespaceName: string;
    userId: string;
    inventoryName: string;
    itemName: string;
    itemSetName: string;

    public constructor(
        session: Gs2RestSession,
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
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.inventoryName = inventoryName;
        this.itemName = itemName;
        this.itemSetName = itemSetName;
    }

    public async load(
        request: GetReferenceOfByUserIdRequest
    ): Promise<GetReferenceOfByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        request.setItemSetName(this.itemSetName);
        let r: GetReferenceOfByUserIdResult = await this.client.getReferenceOfByUserId(
            request
        );
        return r;
    }

    public async verify(
        request: VerifyReferenceOfByUserIdRequest
    ): Promise<VerifyReferenceOfByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        request.setItemSetName(this.itemSetName);
        let r: VerifyReferenceOfByUserIdResult = await this.client.verifyReferenceOfByUserId(
            request
        );
        return r;
    }

    public async add(
        request: AddReferenceOfByUserIdRequest
    ): Promise<AddReferenceOfByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        request.setItemSetName(this.itemSetName);
        let r: AddReferenceOfByUserIdResult = await this.client.addReferenceOfByUserId(
            request
        );
        return r;
    }

    public async delete(
        request: DeleteReferenceOfByUserIdRequest
    ): Promise<DeleteReferenceOfByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setInventoryName(this.inventoryName);
        request.setItemName(this.itemName);
        request.setItemSetName(this.itemSetName);
        let r: DeleteReferenceOfByUserIdResult = await this.client.deleteReferenceOfByUserId(
            request
        );
        return r;
    }

    public list(
    ): DescribeReferenceOfByUserIdIterator {
        return new DescribeReferenceOfByUserIdIterator(
            this.client,
            this.namespaceName,
            this.inventoryName,
            this.userId,
            this.itemName,
            this.itemSetName
        );
    }

}
