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

export class MessageAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2InboxRestClient;
    messageCache: MessageDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    messageName: string;

    public constructor(
        session: Gs2RestSession,
        messageCache: MessageDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        messageName: string
    ) {
        this.session = session;
        this.client = new Gs2InboxRestClient(
            session
        );
        this.messageCache = messageCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.messageName = messageName;
    }

    public async load(
        request: GetMessageRequest
    ): Promise<GetMessageResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setMessageName(this.messageName);
        let r: GetMessageResult = await this.client.getMessage(
            request
        );
        this.messageCache.update(r.getItem()!);
        return r;
    }

    public async open(
        request: OpenMessageRequest
    ): Promise<OpenMessageResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setMessageName(this.messageName);
        let r: OpenMessageResult = await this.client.openMessage(
            request
        );
        this.messageCache.update(r.getItem()!);
        return r;
    }

    public async read(
        request: ReadMessageRequest
    ): Promise<ReadMessageResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setMessageName(this.messageName);
        let r: ReadMessageResult = await this.client.readMessage(
            request
        );
        this.messageCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteMessageRequest
    ): Promise<DeleteMessageResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setMessageName(this.messageName);
        let r: DeleteMessageResult = await this.client.deleteMessage(
            request
        );
        return r;
    }

}
