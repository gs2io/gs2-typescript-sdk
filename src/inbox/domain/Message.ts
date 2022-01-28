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
import { GetMessageRequest } from "@/gs2/inbox/request";
import { GetMessageResult } from "@/gs2/inbox/result";
import { GetMessageByUserIdRequest } from "@/gs2/inbox/request";
import { GetMessageByUserIdResult } from "@/gs2/inbox/result";
import { OpenMessageRequest } from "@/gs2/inbox/request";
import { OpenMessageResult } from "@/gs2/inbox/result";
import { OpenMessageByUserIdRequest } from "@/gs2/inbox/request";
import { OpenMessageByUserIdResult } from "@/gs2/inbox/result";
import { ReadMessageRequest } from "@/gs2/inbox/request";
import { ReadMessageResult } from "@/gs2/inbox/result";
import { ReadMessageByUserIdRequest } from "@/gs2/inbox/request";
import { ReadMessageByUserIdResult } from "@/gs2/inbox/result";
import { DeleteMessageRequest } from "@/gs2/inbox/request";
import { DeleteMessageResult } from "@/gs2/inbox/result";
import { DeleteMessageByUserIdRequest } from "@/gs2/inbox/request";
import { DeleteMessageByUserIdResult } from "@/gs2/inbox/result";
import { AccessToken } from "@/gs2/auth/model";

export class MessageDomain {
    session: Gs2RestSession;
    client: Gs2InboxRestClient;
    messageCache: MessageDomainCache;
    namespaceName: string;
    userId: string;
    messageName: string;

    public constructor(
        session: Gs2RestSession,
        messageCache: MessageDomainCache,
        namespaceName: string,
        userId: string,
        messageName: string
    ) {
        this.session = session;
        this.client = new Gs2InboxRestClient(
            session
        );
        this.messageCache = messageCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.messageName = messageName;
    }

    public async load(
        request: GetMessageByUserIdRequest
    ): Promise<GetMessageByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMessageName(this.messageName);
        let r: GetMessageByUserIdResult = await this.client.getMessageByUserId(
            request
        );
        this.messageCache.update(r.getItem()!);
        return r;
    }

    public async open(
        request: OpenMessageByUserIdRequest
    ): Promise<OpenMessageByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMessageName(this.messageName);
        let r: OpenMessageByUserIdResult = await this.client.openMessageByUserId(
            request
        );
        this.messageCache.update(r.getItem()!);
        return r;
    }

    public async read(
        request: ReadMessageByUserIdRequest
    ): Promise<ReadMessageByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMessageName(this.messageName);
        let r: ReadMessageByUserIdResult = await this.client.readMessageByUserId(
            request
        );
        this.messageCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteMessageByUserIdRequest
    ): Promise<DeleteMessageByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setMessageName(this.messageName);
        let r: DeleteMessageByUserIdResult = await this.client.deleteMessageByUserId(
            request
        );
        return r;
    }

}
