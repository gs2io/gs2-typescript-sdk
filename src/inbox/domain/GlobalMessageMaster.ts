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
import { Gs2InboxRestClient } from "@/gs2/inbox";
import { NamespaceDomainCache } from "@/gs2/inbox/domain/cache/NamespaceDomainCache";
import { MessageDomainCache } from "@/gs2/inbox/domain/cache/MessageDomainCache";
import { GlobalMessageMasterDomainCache } from "@/gs2/inbox/domain/cache/GlobalMessageMasterDomainCache";
import { GlobalMessageDomainCache } from "@/gs2/inbox/domain/cache/GlobalMessageDomainCache";
import { GetGlobalMessageMasterRequest } from "@/gs2/inbox/request";
import { GetGlobalMessageMasterResult } from "@/gs2/inbox/result";
import { UpdateGlobalMessageMasterRequest } from "@/gs2/inbox/request";
import { UpdateGlobalMessageMasterResult } from "@/gs2/inbox/result";
import { DeleteGlobalMessageMasterRequest } from "@/gs2/inbox/request";
import { DeleteGlobalMessageMasterResult } from "@/gs2/inbox/result";
import { AccessToken } from "@/gs2/auth/model";

export class GlobalMessageMasterDomain {
    session: Gs2RestSession;
    client: Gs2InboxRestClient;
    globalMessageMasterCache: GlobalMessageMasterDomainCache;
    namespaceName: string;
    globalMessageName: string;

    public constructor(
        session: Gs2RestSession,
        globalMessageMasterCache: GlobalMessageMasterDomainCache,
        namespaceName: string,
        globalMessageName: string
    ) {
        this.session = session;
        this.client = new Gs2InboxRestClient(
            session
        );
        this.globalMessageMasterCache = globalMessageMasterCache;
        this.namespaceName = namespaceName;
        this.globalMessageName = globalMessageName;
    }

    public async load(
        request: GetGlobalMessageMasterRequest
    ): Promise<GetGlobalMessageMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setGlobalMessageName(this.globalMessageName);
        let r: GetGlobalMessageMasterResult = await this.client.getGlobalMessageMaster(
            request
        );
        this.globalMessageMasterCache.update(r.getItem()!);
        return r;
    }

    public async update(
        request: UpdateGlobalMessageMasterRequest
    ): Promise<UpdateGlobalMessageMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setGlobalMessageName(this.globalMessageName);
        let r: UpdateGlobalMessageMasterResult = await this.client.updateGlobalMessageMaster(
            request
        );
        this.globalMessageMasterCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteGlobalMessageMasterRequest
    ): Promise<DeleteGlobalMessageMasterResult> {
        request.setNamespaceName(this.namespaceName);
        request.setGlobalMessageName(this.globalMessageName);
        let r: DeleteGlobalMessageMasterResult = await this.client.deleteGlobalMessageMaster(
            request
        );
        return r;
    }

}
