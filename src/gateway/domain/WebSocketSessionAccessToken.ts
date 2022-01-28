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
import { NamespaceDomainCache } from "@/gs2/gateway/domain/cache/NamespaceDomainCache";
import { WebSocketSessionDomainCache } from "@/gs2/gateway/domain/cache/WebSocketSessionDomainCache";
import { SetUserIdRequest } from "@/gs2/gateway/request";
import { SetUserIdResult } from "@/gs2/gateway/result";
import { SetUserIdByUserIdRequest } from "@/gs2/gateway/request";
import { SetUserIdByUserIdResult } from "@/gs2/gateway/result";
import { SendNotificationRequest } from "@/gs2/gateway/request";
import { SendNotificationResult } from "@/gs2/gateway/result";
import { AccessToken } from "@/gs2/auth/model";

export class WebSocketSessionAccessTokenDomain {
    session: Gs2RestSession;
    client: Gs2GatewayRestClient;
    webSocketSessionCache: WebSocketSessionDomainCache;
    namespaceName: string;
    accessToken: AccessToken;

    public constructor(
        session: Gs2RestSession,
        webSocketSessionCache: WebSocketSessionDomainCache,
        namespaceName: string,
        accessToken: AccessToken
    ) {
        this.session = session;
        this.client = new Gs2GatewayRestClient(
            session
        );
        this.webSocketSessionCache = webSocketSessionCache;
        this.namespaceName = namespaceName;
        this.accessToken = accessToken;
    }

    public async setUserId(
        request: SetUserIdRequest
    ): Promise<SetUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setAccessToken(this.accessToken != null ? this.accessToken.getToken() : null);
        let r: SetUserIdResult = await this.client.setUserId(
            request
        );
        this.webSocketSessionCache.update(r.getItem()!);
        return r;
    }

}
