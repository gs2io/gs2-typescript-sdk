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
import { Gs2FormationRestClient } from "@/gs2/formation";
import { NamespaceDomainCache } from "@/gs2/formation/domain/cache/NamespaceDomainCache";
import { FormModelMasterDomainCache } from "@/gs2/formation/domain/cache/FormModelMasterDomainCache";
import { MoldModelDomainCache } from "@/gs2/formation/domain/cache/MoldModelDomainCache";
import { MoldModelMasterDomainCache } from "@/gs2/formation/domain/cache/MoldModelMasterDomainCache";
import { MoldDomainCache } from "@/gs2/formation/domain/cache/MoldDomainCache";
import { FormDomainCache } from "@/gs2/formation/domain/cache/FormDomainCache";
import { GetMoldModelMasterRequest } from "@/gs2/formation/request";
import { GetMoldModelMasterResult } from "@/gs2/formation/result";
import { UpdateMoldModelMasterRequest } from "@/gs2/formation/request";
import { UpdateMoldModelMasterResult } from "@/gs2/formation/result";
import { DeleteMoldModelMasterRequest } from "@/gs2/formation/request";
import { DeleteMoldModelMasterResult } from "@/gs2/formation/result";
import { AccessToken } from "@/gs2/auth/model";

export class MoldModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2FormationRestClient;
    moldModelMasterCache: MoldModelMasterDomainCache;
    namespaceName: string;
    moldName: string;

    public constructor(
        session: Gs2RestSession,
        moldModelMasterCache: MoldModelMasterDomainCache,
        namespaceName: string,
        moldName: string
    ) {
        this.session = session;
        this.client = new Gs2FormationRestClient(
            session
        );
        this.moldModelMasterCache = moldModelMasterCache;
        this.namespaceName = namespaceName;
        this.moldName = moldName;
    }

    public async load(
        request: GetMoldModelMasterRequest
    ): Promise<GetMoldModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setMoldName(this.moldName);
        let r: GetMoldModelMasterResult = await this.client.getMoldModelMaster(
            request
        );
        this.moldModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateMoldModelMasterRequest
    ): Promise<UpdateMoldModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setMoldName(this.moldName);
        let r: UpdateMoldModelMasterResult = await this.client.updateMoldModelMaster(
            request
        );
        this.moldModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteMoldModelMasterRequest
    ): Promise<DeleteMoldModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setMoldName(this.moldName);
        let r: DeleteMoldModelMasterResult = await this.client.deleteMoldModelMaster(
            request
        );
        this.moldModelMasterCache.delete(r.getItem()!);
        return r;
    }

}
