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
import { Gs2GatewayRestClient } from "@/gs2/gateway";
import { WebSocketSessionDomain } from "@/gs2/gateway/domain/WebSocketSession";
import { WebSocketSessionAccessTokenDomain } from "@/gs2/gateway/domain/WebSocketSessionAccessToken";
import { FirebaseTokenDomain } from "@/gs2/gateway/domain/FirebaseToken";
import { FirebaseTokenAccessTokenDomain } from "@/gs2/gateway/domain/FirebaseTokenAccessToken";
import { NamespaceDomainCache } from "@/gs2/gateway/domain/cache/NamespaceDomainCache";
import { WebSocketSessionDomainCache } from "@/gs2/gateway/domain/cache/WebSocketSessionDomainCache";
import { DescribeWebSocketSessionsIterator } from "@/gs2/gateway/domain/iterator/WebSocketSessionsDomainIterator";
import { DescribeWebSocketSessionsByUserIdIterator } from "@/gs2/gateway/domain/iterator/WebSocketSessionsByUserIdDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2GatewayRestClient;
    namespaceName: string;
    userId: string;
    webSocketSessionCache: WebSocketSessionDomainCache;

    public constructor(
        session: Gs2RestSession,
        namespaceName: string,
        userId: string
    ) {
        this.session = session;
        this.client = new Gs2GatewayRestClient(
            session
        );
        this.namespaceName = namespaceName;
        this.userId = userId;
        this.webSocketSessionCache = new WebSocketSessionDomainCache();
    }

    public webSocketSessions(
    ): DescribeWebSocketSessionsByUserIdIterator {
        return new DescribeWebSocketSessionsByUserIdIterator(
            this.webSocketSessionCache,
            this.client,
            this.namespaceName,
            this.userId
        );
    }

    public webSocketSession(
    ): WebSocketSessionDomain {
        return new WebSocketSessionDomain(
            this.session,
            this.webSocketSessionCache,
            this.namespaceName,
            this.userId
        );
    }

    public firebaseToken(
    ): FirebaseTokenDomain {
        return new FirebaseTokenDomain(
            this.session,
            this.namespaceName,
            this.userId
        );
    }

}
