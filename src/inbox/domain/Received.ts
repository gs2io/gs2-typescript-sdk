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
import { GetReceivedByUserIdRequest } from "@/gs2/inbox/request";
import { GetReceivedByUserIdResult } from "@/gs2/inbox/result";
import { UpdateReceivedByUserIdRequest } from "@/gs2/inbox/request";
import { UpdateReceivedByUserIdResult } from "@/gs2/inbox/result";
import { DeleteReceivedByUserIdRequest } from "@/gs2/inbox/request";
import { DeleteReceivedByUserIdResult } from "@/gs2/inbox/result";
import { AccessToken } from "@/gs2/auth/model";

export class ReceivedDomain {
    session: Gs2RestSession;
    client: Gs2InboxRestClient;
    namespaceName: string;
    userId: string;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2InboxRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
    }

    public async load(
        request: GetReceivedByUserIdRequest
    ): Promise<GetReceivedByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: GetReceivedByUserIdResult = await this.client.getReceivedByUserId(
            request
        );
        return r;
    }

    public async update(
        request: UpdateReceivedByUserIdRequest
    ): Promise<UpdateReceivedByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: UpdateReceivedByUserIdResult = await this.client.updateReceivedByUserId(
            request
        );
        return r;
    }

    public async delete(
        request: DeleteReceivedByUserIdRequest
    ): Promise<DeleteReceivedByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: DeleteReceivedByUserIdResult = await this.client.deleteReceivedByUserId(
            request
        );
        return r;
    }

}
