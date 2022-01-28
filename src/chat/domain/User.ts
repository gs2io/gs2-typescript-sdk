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
import { RoomDomain } from "@/gs2/chat/domain/Room";
import { RoomAccessTokenDomain } from "@/gs2/chat/domain/RoomAccessToken";
import { SubscribeDomain } from "@/gs2/chat/domain/Subscribe";
import { SubscribeAccessTokenDomain } from "@/gs2/chat/domain/SubscribeAccessToken";
import { NamespaceDomainCache } from "@/gs2/chat/domain/cache/NamespaceDomainCache";
import { RoomDomainCache } from "@/gs2/chat/domain/cache/RoomDomainCache";
import { MessageDomainCache } from "@/gs2/chat/domain/cache/MessageDomainCache";
import { SubscribeDomainCache } from "@/gs2/chat/domain/cache/SubscribeDomainCache";
import { CreateRoomRequest } from "@/gs2/chat/request";
import { CreateRoomResult } from "@/gs2/chat/result";
import { CreateRoomFromBackendRequest } from "@/gs2/chat/request";
import { CreateRoomFromBackendResult } from "@/gs2/chat/result";
import { DescribeRoomsIterator } from "@/gs2/chat/domain/iterator/RoomsDomainIterator";
import { DescribeSubscribesIterator } from "@/gs2/chat/domain/iterator/SubscribesDomainIterator";
import { DescribeSubscribesByUserIdIterator } from "@/gs2/chat/domain/iterator/SubscribesByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2ChatRestClient;
    namespaceName: string;
    userId: string;
    roomCache: RoomDomainCache;
    subscribeCache: SubscribeDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2ChatRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.roomCache = new RoomDomainCache();
        this.subscribeCache = new SubscribeDomainCache();
    }

    public async createRoomFromBackend(
        request: CreateRoomFromBackendRequest
    ): Promise<CreateRoomFromBackendResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: CreateRoomFromBackendResult = await this.client.createRoomFromBackend(
            request
        );
        return r;
    }

    public rooms(
    ): DescribeRoomsIterator {
        return new DescribeRoomsIterator(
            this.roomCache,
            this.client,
            this.namespaceName
        );
    }

    public subscribes(
    ): DescribeSubscribesByUserIdIterator {
        return new DescribeSubscribesByUserIdIterator(
            this.subscribeCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

    public room(
        roomName: string,
        password: string|null
    ): RoomDomain {
        return new RoomDomain(
            this.session,
            this.roomCache,
            this.namespaceName,
            this.userId,
            roomName,
            password
        );
    }

    public subscribe(
        roomName: string
    ): SubscribeDomain {
        return new SubscribeDomain(
            this.session,
            this.subscribeCache,
            this.namespaceName,
            this.userId,
            roomName
        );
    }

}
