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
import { Gs2ChatRestClient } from "@/gs2/chat";
import { NamespaceDomainCache } from "@/gs2/chat/domain/cache/NamespaceDomainCache";
import { RoomDomainCache } from "@/gs2/chat/domain/cache/RoomDomainCache";
import { MessageDomainCache } from "@/gs2/chat/domain/cache/MessageDomainCache";
import { SubscribeDomainCache } from "@/gs2/chat/domain/cache/SubscribeDomainCache";
import { GetMessageRequest } from "@/gs2/chat/request";
import { GetMessageResult } from "@/gs2/chat/result";
import { GetMessageByUserIdRequest } from "@/gs2/chat/request";
import { GetMessageByUserIdResult } from "@/gs2/chat/result";
import { DeleteMessageRequest } from "@/gs2/chat/request";
import { DeleteMessageResult } from "@/gs2/chat/result";
import { AccessToken } from "@/gs2/auth/model";

export class MessageDomain {
    session: Gs2RestSession;
    client: Gs2ChatRestClient;
    messageCache: MessageDomainCache;
    namespaceName: string;
    userId: string;
    roomName: string;
    messageName: string;
    password: string|null;

    public constructor(
        session: Gs2RestSession,
        messageCache: MessageDomainCache,
        namespaceName: string,
        userId: string,
        roomName: string,
        messageName: string,
        password: string|null
    ) {
        this.session = session;
        this.client = new Gs2ChatRestClient(
            session
        );
        this.messageCache = messageCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.roomName = roomName;
        this.messageName = messageName;
        this.password = password;
    }

    public async load(
        request: GetMessageByUserIdRequest
    ): Promise<GetMessageByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setRoomName(this.roomName);
        request.setMessageName(this.messageName);
        request.setPassword(this.password);
        let r: GetMessageByUserIdResult = await this.client.getMessageByUserId(
            request
        );
        this.messageCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteMessageRequest
    ): Promise<DeleteMessageResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setRoomName(this.roomName);
        request.setMessageName(this.messageName);
        let r: DeleteMessageResult = await this.client.deleteMessage(
            request
        );
        this.messageCache.delete(r.getItem()!);
        return r;
    }

}
