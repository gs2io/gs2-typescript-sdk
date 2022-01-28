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
import { GetFormModelMasterRequest } from "@/gs2/formation/request";
import { GetFormModelMasterResult } from "@/gs2/formation/result";
import { UpdateFormModelMasterRequest } from "@/gs2/formation/request";
import { UpdateFormModelMasterResult } from "@/gs2/formation/result";
import { DeleteFormModelMasterRequest } from "@/gs2/formation/request";
import { DeleteFormModelMasterResult } from "@/gs2/formation/result";
import { AccessToken } from "@/gs2/auth/model";

export class FormModelMasterDomain {
    session: Gs2RestSession;
    client: Gs2FormationRestClient;
    formModelMasterCache: FormModelMasterDomainCache;
    namespaceName: string;
    formModelName: string;

    public constructor(
        session: Gs2RestSession,
        formModelMasterCache: FormModelMasterDomainCache,
        namespaceName: string,
        formModelName: string
    ) {
        this.session = session;
        this.client = new Gs2FormationRestClient(
            session
        );
        this.formModelMasterCache = formModelMasterCache;
        this.namespaceName = namespaceName;
        this.formModelName = formModelName;
    }

    public async load(
        request: GetFormModelMasterRequest
    ): Promise<GetFormModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setFormModelName(this.formModelName);
        let r: GetFormModelMasterResult = await this.client.getFormModelMaster(
            request
        );
        this.formModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateFormModelMasterRequest
    ): Promise<UpdateFormModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setFormModelName(this.formModelName);
        let r: UpdateFormModelMasterResult = await this.client.updateFormModelMaster(
            request
        );
        this.formModelMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteFormModelMasterRequest
    ): Promise<DeleteFormModelMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setFormModelName(this.formModelName);
        let r: DeleteFormModelMasterResult = await this.client.deleteFormModelMaster(
            request
        );
        this.formModelMasterCache.delete(r.getItem()!);
        return r;
    }

}
