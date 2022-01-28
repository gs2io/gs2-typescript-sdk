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
import { ExportMasterRequest } from "@/gs2/inventory/request";
import { ExportMasterResult } from "@/gs2/inventory/result";
import { GetCurrentItemModelMasterRequest } from "@/gs2/inventory/request";
import { GetCurrentItemModelMasterResult } from "@/gs2/inventory/result";
import { UpdateCurrentItemModelMasterRequest } from "@/gs2/inventory/request";
import { UpdateCurrentItemModelMasterResult } from "@/gs2/inventory/result";
import { UpdateCurrentItemModelMasterFromGitHubRequest } from "@/gs2/inventory/request";
import { UpdateCurrentItemModelMasterFromGitHubResult } from "@/gs2/inventory/result";
import { AccessToken } from "@/gs2/auth/model";

export class CurrentItemModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2InventoryRestClient;
    namespaceName: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string
    ) {
        this.session = session;
        this.client = new Gs2InventoryRestClient(
            session
        );
        this.namespaceName = namespaceName;
    }

    public async exportMaster(
        request: ExportMasterRequest
    ): Promise<ExportMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: ExportMasterResult = await this.client.exportMaster(
            request
        );
        return r;
    }

    public async load(
        request: GetCurrentItemModelMasterRequest
    ): Promise<GetCurrentItemModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: GetCurrentItemModelMasterResult = await this.client.getCurrentItemModelMaster(
            request
        );
        return r;
    }

    public async update(
        request: UpdateCurrentItemModelMasterRequest
    ): Promise<UpdateCurrentItemModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentItemModelMasterResult = await this.client.updateCurrentItemModelMaster(
            request
        );
        return r;
    }

    public async updateFromGitHub(
        request: UpdateCurrentItemModelMasterFromGitHubRequest
    ): Promise<UpdateCurrentItemModelMasterFromGitHubResult> {
        request.setNamespaceName(this.namespaceName);
        let r: UpdateCurrentItemModelMasterFromGitHubResult = await this.client.updateCurrentItemModelMasterFromGitHub(
            request
        );
        return r;
    }

}
