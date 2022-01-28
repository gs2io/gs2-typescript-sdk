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
import { SetFirebaseTokenRequest } from "@/gs2/gateway/request";
import { SetFirebaseTokenResult } from "@/gs2/gateway/result";
import { SetFirebaseTokenByUserIdRequest } from "@/gs2/gateway/request";
import { SetFirebaseTokenByUserIdResult } from "@/gs2/gateway/result";
import { GetFirebaseTokenRequest } from "@/gs2/gateway/request";
import { GetFirebaseTokenResult } from "@/gs2/gateway/result";
import { GetFirebaseTokenByUserIdRequest } from "@/gs2/gateway/request";
import { GetFirebaseTokenByUserIdResult } from "@/gs2/gateway/result";
import { DeleteFirebaseTokenRequest } from "@/gs2/gateway/request";
import { DeleteFirebaseTokenResult } from "@/gs2/gateway/result";
import { DeleteFirebaseTokenByUserIdRequest } from "@/gs2/gateway/request";
import { DeleteFirebaseTokenByUserIdResult } from "@/gs2/gateway/result";
import { SendMobileNotificationByUserIdRequest } from "@/gs2/gateway/request";
import { SendMobileNotificationByUserIdResult } from "@/gs2/gateway/result";
import { AccessToken } from "@/gs2/auth/model";

export class FirebaseTokenDomain {
    session: Gs2RestSession;
    client: Gs2GatewayRestClient;
    namespaceName: string;
    userId: string;

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
    }

    public async set(
        request: SetFirebaseTokenByUserIdRequest
    ): Promise<SetFirebaseTokenByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: SetFirebaseTokenByUserIdResult = await this.client.setFirebaseTokenByUserId(
            request
        );
        return r;
    }

    public async load(
        request: GetFirebaseTokenByUserIdRequest
    ): Promise<GetFirebaseTokenByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: GetFirebaseTokenByUserIdResult = await this.client.getFirebaseTokenByUserId(
            request
        );
        return r;
    }

    public async delete(
        request: DeleteFirebaseTokenByUserIdRequest
    ): Promise<DeleteFirebaseTokenByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: DeleteFirebaseTokenByUserIdResult = await this.client.deleteFirebaseTokenByUserId(
            request
        );
        return r;
    }

    public async sendMobileNotification(
        request: SendMobileNotificationByUserIdRequest
    ): Promise<SendMobileNotificationByUserIdResult> {
        request.setNamespaceName(this.namespaceName);
        request.setUserId(this.userId);
        let r: SendMobileNotificationByUserIdResult = await this.client.sendMobileNotificationByUserId(
            request
        );
        return r;
    }

}
