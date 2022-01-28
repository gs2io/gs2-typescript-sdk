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
import { GetMoldModelRequest } from "@/gs2/formation/request";
import { GetMoldModelResult } from "@/gs2/formation/result";
import { AccessToken } from "@/gs2/auth/model";

export class MoldModelDomain {
    session: Gs2RestSession;
    client: Gs2FormationRestClient;
    moldModelCache: MoldModelDomainCache;
    namespaceName: string;
    moldName: string;

    public constructor(
        session: Gs2RestSession,
        moldModelCache: MoldModelDomainCache,
        namespaceName: string,
        moldName: string
    ) {
        this.session = session;
        this.client = new Gs2FormationRestClient(
            session
        );
        this.moldModelCache = moldModelCache;
        this.namespaceName = namespaceName;
        this.moldName = moldName;
    }

    public async load(
        request: GetMoldModelRequest
    ): Promise<GetMoldModelResult> {
        request.setNamespaceName(this.namespaceName);
        request.setMoldName(this.moldName);
        let r: GetMoldModelResult = await this.client.getMoldModel(
            request
        );
        this.moldModelCache.update(r.getItem()!);
        return r;
    }

}
