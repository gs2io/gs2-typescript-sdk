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
import { MessageDomain } from "@/gs2/inbox/domain/Message";
import { MessageAccessTokenDomain } from "@/gs2/inbox/domain/MessageAccessToken";
import { ReceivedDomain } from "@/gs2/inbox/domain/Received";
import { ReceivedAccessTokenDomain } from "@/gs2/inbox/domain/ReceivedAccessToken";
import { NamespaceDomainCache } from "@/gs2/inbox/domain/cache/NamespaceDomainCache";
import { MessageDomainCache } from "@/gs2/inbox/domain/cache/MessageDomainCache";
import { GlobalMessageMasterDomainCache } from "@/gs2/inbox/domain/cache/GlobalMessageMasterDomainCache";
import { GlobalMessageDomainCache } from "@/gs2/inbox/domain/cache/GlobalMessageDomainCache";
import { SendMessageByUserIdRequest } from "@/gs2/inbox/request";
import { SendMessageByUserIdResult } from "@/gs2/inbox/result";
import { ReceiveGlobalMessageRequest } from "@/gs2/inbox/request";
import { ReceiveGlobalMessageResult } from "@/gs2/inbox/result";
import { ReceiveGlobalMessageByUserIdRequest } from "@/gs2/inbox/request";
import { ReceiveGlobalMessageByUserIdResult } from "@/gs2/inbox/result";
import { DescribeMessagesIterator } from "@/gs2/inbox/domain/iterator/MessagesDomainIterator";
import { DescribeMessagesByUserIdIterator } from "@/gs2/inbox/domain/iterator/MessagesByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2InboxRestClient;
    namespaceName: string;
    userId: string;
    messageCache: MessageDomainCache;

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
        this.messageCache = new MessageDomainCache();
    }

    public async sendMessage(
        request: SendMessageByUserIdRequest
    ): Promise<SendMessageByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: SendMessageByUserIdResult = await this.client.sendMessageByUserId(
            request
        );
        return r;
    }

    public async receiveGlobalMessage(
        request: ReceiveGlobalMessageByUserIdRequest
    ): Promise<ReceiveGlobalMessageByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: ReceiveGlobalMessageByUserIdResult = await this.client.receiveGlobalMessageByUserId(
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
            messageName
        );
    }

    public received(
    ): ReceivedDomain {
        return new ReceivedDomain(
            this.session,
            this.namespaceName,
            this.userId
        );
    }

}
