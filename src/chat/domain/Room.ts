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

export class RoomDomain {
    session: Gs2RestSession;
    client: Gs2ChatRestClient;
    roomCache: RoomDomainCache;
    namespaceName: string;
    userId: string;
    roomName: string;
    password: string|null;
    messageCache: MessageDomainCache;

    public constructor(
        session: Gs2RestSession,
        roomCache: RoomDomainCache,
        namespaceName: string,
        userId: string,
        roomName: string,
        password: string|null
    ) {
        this.session = session;
        this.client = new Gs2ChatRestClient(
            session
        );
        this.roomCache = roomCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.roomName = roomName;
        this.password = password;
        this.messageCache = new MessageDomainCache();
    }

    public async load(
        request: GetRoomRequest
    ): Promise<GetRoomResult> {
        request.setNamespaceName(this.namespaceName);
        request.setRoomName(this.roomName);
        let r: GetRoomResult = await this.client.getRoom(
            request
        );
        this.roomCache.update(r.getItem()!);
        return r;
    }

    public async updateFromBackend(
        request: UpdateRoomFromBackendRequest
    ): Promise<UpdateRoomFromBackendResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setRoomName(this.roomName);
        request.setPassword(this.password);
        let r: UpdateRoomFromBackendResult = await this.client.updateRoomFromBackend(
            request
        );
        this.roomCache.update(r.getItem()!);
        return r;
    }

    public async deleteFromBackend(
        request: DeleteRoomFromBackendRequest
    ): Promise<DeleteRoomFromBackendResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setRoomName(this.roomName);
        let r: DeleteRoomFromBackendResult = await this.client.deleteRoomFromBackend(
            request
        );
        this.roomCache.delete(r.getItem()!);
        return r;
    }

    public async post(
        request: PostByUserIdRequest
    ): Promise<PostByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setRoomName(this.roomName);
        request.setPassword(this.password);
        let r: PostByUserIdResult = await this.client.postByUserId(
            request
        );
        return r;
    }

    public messages(
    ): DescribeMessagesByUserIdIterator {
        return new DescribeMessagesByUserIdIterator(
            this.messageCache,
            this.client,
            this.namespaceName,
            this.roomName,
            this.password,
            this.userId
        );
    }

    public message(
        messageName: string
    ): MessageDomain {
        return new MessageDomain(
            this.session,
            this.messageCache,
            this.namespaceName,
            this.userId,
            this.roomName,
            messageName,
            this.password
        );
    }

}
