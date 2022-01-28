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
import { SubscribeRequest } from "@/gs2/chat/request";
import { SubscribeResult } from "@/gs2/chat/result";
import { SubscribeByUserIdRequest } from "@/gs2/chat/request";
import { SubscribeByUserIdResult } from "@/gs2/chat/result";
import { GetSubscribeRequest } from "@/gs2/chat/request";
import { GetSubscribeResult } from "@/gs2/chat/result";
import { GetSubscribeByUserIdRequest } from "@/gs2/chat/request";
import { GetSubscribeByUserIdResult } from "@/gs2/chat/result";
import { UpdateNotificationTypeRequest } from "@/gs2/chat/request";
import { UpdateNotificationTypeResult } from "@/gs2/chat/result";
import { UpdateNotificationTypeByUserIdRequest } from "@/gs2/chat/request";
import { UpdateNotificationTypeByUserIdResult } from "@/gs2/chat/result";
import { UnsubscribeRequest } from "@/gs2/chat/request";
import { UnsubscribeResult } from "@/gs2/chat/result";
import { UnsubscribeByUserIdRequest } from "@/gs2/chat/request";
import { UnsubscribeByUserIdResult } from "@/gs2/chat/result";
import { AccessToken } from "@/gs2/auth/model";

export class SubscribeDomain {
    session: Gs2RestSession;
    client: Gs2ChatRestClient;
    subscribeCache: SubscribeDomainCache;
    namespaceName: string;
    userId: string;
    roomName: string;

    public constructor(
        session: Gs2RestSession,
        subscribeCache: SubscribeDomainCache,
        namespaceName: string,
        userId: string,
        roomName: string
    ) {
        this.session = session;
        this.client = new Gs2ChatRestClient(
            session
        );
        this.subscribeCache = subscribeCache;
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.roomName = roomName;
    }

    public async subscribe(
        request: SubscribeByUserIdRequest
    ): Promise<SubscribeByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setRoomName(this.roomName);
        let r: SubscribeByUserIdResult = await this.client.subscribeByUserId(
            request
        );
        this.subscribeCache.update(r.getItem()!);
        return r;
    }

    public async load(
        request: GetSubscribeByUserIdRequest
    ): Promise<GetSubscribeByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setRoomName(this.roomName);
        let r: GetSubscribeByUserIdResult = await this.client.getSubscribeByUserId(
            request
        );
        this.subscribeCache.update(r.getItem()!);
        return r;
    }

    public async updateNotificationType(
        request: UpdateNotificationTypeByUserIdRequest
    ): Promise<UpdateNotificationTypeByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setRoomName(this.roomName);
        let r: UpdateNotificationTypeByUserIdResult = await this.client.updateNotificationTypeByUserId(
            request
        );
        this.subscribeCache.update(r.getItem()!);
        return r;
    }

    public async unsubscribe(
        request: UnsubscribeByUserIdRequest
    ): Promise<UnsubscribeByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        request.setRoomName(this.roomName);
        let r: UnsubscribeByUserIdResult = await this.client.unsubscribeByUserId(
            request
        );
        this.subscribeCache.update(r.getItem()!);
        return r;
    }

}
