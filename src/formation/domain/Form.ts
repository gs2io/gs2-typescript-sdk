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
import { GetFormRequest } from "@/gs2/formation/request";
import { GetFormResult } from "@/gs2/formation/result";
import { GetFormByUserIdRequest } from "@/gs2/formation/request";
import { GetFormByUserIdResult } from "@/gs2/formation/result";
import { GetFormWithSignatureRequest } from "@/gs2/formation/request";
import { GetFormWithSignatureResult } from "@/gs2/formation/result";
import { GetFormWithSignatureByUserIdRequest } from "@/gs2/formation/request";
import { GetFormWithSignatureByUserIdResult } from "@/gs2/formation/result";
import { SetFormByUserIdRequest } from "@/gs2/formation/request";
import { SetFormByUserIdResult } from "@/gs2/formation/result";
import { SetFormWithSignatureRequest } from "@/gs2/formation/request";
import { SetFormWithSignatureResult } from "@/gs2/formation/result";
import { AcquireActionsToFormPropertiesRequest } from "@/gs2/formation/request";
import { AcquireActionsToFormPropertiesResult } from "@/gs2/formation/result";
import { DeleteFormRequest } from "@/gs2/formation/request";
import { DeleteFormResult } from "@/gs2/formation/result";
import { DeleteFormByUserIdRequest } from "@/gs2/formation/request";
import { DeleteFormByUserIdResult } from "@/gs2/formation/result";
import { AccessToken } from "@/gs2/auth/model";

export class FormDomain {
    session: Gs2RestSession;
    client: Gs2FormationRestClient;
    formCache: FormDomainCache;
    namespaceName: string;
    userId: string;
    moldName: string;
    index: number;

    public constructor(
        session: Gs2RestSession,
        formCache: FormDomainCache,
        namespaceName: string,
        userId: string,
        moldName: string,
        index: number
    ) {
        this.session = session;
        this.client = new Gs2FormationRestClient(
            session
        );
        this.formCache = formCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.moldName = moldName;
        this.index = index;
    }

    public async load(
        request: GetFormByUserIdRequest
    ): Promise<GetFormByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMoldName(this.moldName);
        request.setIndex(this.index);
        let r: GetFormByUserIdResult = await this.client.getFormByUserId(
            request
        );
        this.formCache.update(r.getItem()!);
        return r;
    }

    public async getWithSignature(
        request: GetFormWithSignatureByUserIdRequest
    ): Promise<GetFormWithSignatureByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMoldName(this.moldName);
        request.setIndex(this.index);
        let r: GetFormWithSignatureByUserIdResult = await this.client.getFormWithSignatureByUserId(
            request
        );
        this.formCache.update(r.getItem()!);
        return r;
    }

    public async set(
        request: SetFormByUserIdRequest
    ): Promise<SetFormByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMoldName(this.moldName);
        request.setIndex(this.index);
        let r: SetFormByUserIdResult = await this.client.setFormByUserId(
            request
        );
        this.formCache.update(r.getItem()!);
        return r;
    }

    public async acquireActionsToProperties(
        request: AcquireActionsToFormPropertiesRequest
    ): Promise<AcquireActionsToFormPropertiesResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMoldName(this.moldName);
        request.setIndex(this.index);
        let r: AcquireActionsToFormPropertiesResult = await this.client.acquireActionsToFormProperties(
            request
        );
        this.formCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteFormByUserIdRequest
    ): Promise<DeleteFormByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMoldName(this.moldName);
        request.setIndex(this.index);
        let r: DeleteFormByUserIdResult = await this.client.deleteFormByUserId(
            request
        );
        this.formCache.delete(r.getItem()!);
        return r;
    }

}
