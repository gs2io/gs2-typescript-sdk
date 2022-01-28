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

export class UserAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2InboxRestClient;
    namespaceName: string;
    accessToken: AccessToken;
    messageCache: MessageDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2InboxRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
        this.messageCache = new MessageDomainCache();
    }

    public async receiveGlobalMessage(
        request: ReceiveGlobalMessageRequest
    ): Promise<ReceiveGlobalMessageResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: ReceiveGlobalMessageResult = await this.client.receiveGlobalMessage(
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
            messageName
        );
    }

    public received(
    ): ReceivedAccessTokenDomain {
        return new ReceivedAccessTokenDomain(
            this.session,
            this.namespaceName,
            this.accessToken
        );
    }

}
