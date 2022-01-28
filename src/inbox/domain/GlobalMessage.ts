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
import { GetGlobalMessageRequest } from "@/gs2/inbox/request";
import { GetGlobalMessageResult } from "@/gs2/inbox/result";
import { AccessToken } from "@/gs2/auth/model";

export class GlobalMessageDomain {
    session: Gs2RestSession;
    client: Gs2InboxRestClient;
    globalMessageCache: GlobalMessageDomainCache;
    namespaceName: string;
    globalMessageName: string;

    public constructor(
        session: Gs2RestSession,
        globalMessageCache: GlobalMessageDomainCache,
        namespaceName: string,
        globalMessageName: string
    ) {
        this.session = session;
        this.client = new Gs2InboxRestClient(
            session
        );
        this.globalMessageCache = globalMessageCache;
        this.namespaceName = namespaceName;
        this.globalMessageName = globalMessageName;
    }

    public async load(
        request: GetGlobalMessageRequest
    ): Promise<GetGlobalMessageResult> {
        request.setNamespaceName(this.namespaceName);
        request.setGlobalMessageName(this.globalMessageName);
        let r: GetGlobalMessageResult = await this.client.getGlobalMessage(
            request
        );
        this.globalMessageCache.update(r.getItem()!);
        return r;
    }

}
