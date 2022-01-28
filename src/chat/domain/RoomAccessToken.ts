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
import { MessageDomain } from "@/gs2/chat/domain/Message";
import { MessageAccessTokenDomain } from "@/gs2/chat/domain/MessageAccessToken";
import { NamespaceDomainCache } from "@/gs2/chat/domain/cache/NamespaceDomainCache";
import { RoomDomainCache } from "@/gs2/chat/domain/cache/RoomDomainCache";
import { MessageDomainCache } from "@/gs2/chat/domain/cache/MessageDomainCache";
import { SubscribeDomainCache } from "@/gs2/chat/domain/cache/SubscribeDomainCache";
import { GetRoomRequest } from "@/gs2/chat/request";
import { GetRoomResult } from "@/gs2/chat/result";
import { UpdateRoomRequest } from "@/gs2/chat/request";
import { UpdateRoomResult } from "@/gs2/chat/result";
import { UpdateRoomFromBackendRequest } from "@/gs2/chat/request";
import { UpdateRoomFromBackendResult } from "@/gs2/chat/result";
import { DeleteRoomRequest } from "@/gs2/chat/request";
import { DeleteRoomResult } from "@/gs2/chat/result";
import { DeleteRoomFromBackendRequest } from "@/gs2/chat/request";
import { DeleteRoomFromBackendResult } from "@/gs2/chat/result";
import { PostRequest } from "@/gs2/chat/request";
import { PostResult } from "@/gs2/chat/result";
import { PostByUserIdRequest } from "@/gs2/chat/request";
import { PostByUserIdResult } from "@/gs2/chat/result";
import { DescribeMessagesIterator } from "@/gs2/chat/domain/iterator/MessagesDomainIterator";
import { DescribeMessagesByUserIdIterator } from "@/gs2/chat/domain/iterator/MessagesByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class RoomAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2ChatRestClient;
    roomCache: RoomDomainCache;
    namespaceName: string;
    accessToken: AccessToken;
    roomName: string;
    password: string|null;
    messageCache: MessageDomainCache;

    public constructor(
        session: Gs2RestSession,
        roomCache: RoomDomainCache,
        namespaceName: string,
        accessToken: AccessToken,
        roomName: string,
        password: string|null
    ) {
        this.session = session;
        this.client = new Gs2ChatRestClient(
            session
        );
        this.roomCache = roomCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.roomName = roomName;
        this.password = password;
        this.messageCache = new MessageDomainCache();
    }

    public async update(
        request: UpdateRoomRequest
    ): Promise<UpdateRoomResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setRoomName(this.roomName);
        request.setPassword(this.password);
        let r: UpdateRoomResult = await this.client.updateRoom(
            request
        );
        this.roomCache.update(r.getItem()!);
        return r;
    }

    public async delete(
        request: DeleteRoomRequest
    ): Promise<DeleteRoomResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setRoomName(this.roomName);
        let r: DeleteRoomResult = await this.client.deleteRoom(
            request
        );
        this.roomCache.delete(r.getItem()!);
        return r;
    }

    public async post(
        request: PostRequest
    ): Promise<PostResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        request.setRoomName(this.roomName);
        request.setPassword(this.password);
        let r: PostResult = await this.client.post(
            request
        );
        return r;
    }

    public messages(
    ): DescribeMessagesIterator {
        return new DescribeMessagesIterator(
            this.messageCache,
            this.client,
            this.namespaceName,
            this.roomName,
            this.password,
            this.accessToken
        );
    }

    public message(
        messageName: string
    ): MessageAccessTokenDomain {
        return new MessageAccessTokenDomain(
            this.session,
            this.messageCache,
            this.namespaceName,
            this.accessToken,
            this.roomName,
            messageName,
            this.password
        );
    }

}
