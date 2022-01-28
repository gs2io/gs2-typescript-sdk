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
import { Gs2IdentifierRestClient } from "@/gs2/identifier";
import { UserDomainCache } from "@/gs2/identifier/domain/cache/UserDomainCache";
import { SecurityPolicyDomainCache } from "@/gs2/identifier/domain/cache/SecurityPolicyDomainCache";
import { IdentifierDomainCache } from "@/gs2/identifier/domain/cache/IdentifierDomainCache";
import { PasswordDomainCache } from "@/gs2/identifier/domain/cache/PasswordDomainCache";
import { GetPasswordRequest } from "@/gs2/identifier/request";
import { GetPasswordResult } from "@/gs2/identifier/result";
import { AccessToken } from "@/gs2/auth/model";

export class PasswordDomain {
    session: Gs2RestSession;
    client: Gs2IdentifierRestClient;
    passwordCache: PasswordDomainCache;
    userName: string;

    public constructor(
        session: Gs2RestSession,
        passwordCache: PasswordDomainCache,
        userName: string
    ) {
        this.session = session;
        this.client = new Gs2IdentifierRestClient(
            session
        );
        this.passwordCache = passwordCache;
        this.userName = userName;
    }

    public async load(
        request: GetPasswordRequest
    ): Promise<GetPasswordResult> {
        request.setUserName(this.userName);
        let r: GetPasswordResult = await this.client.getPassword(
            request
        );
        this.passwordCache.update(r.getItem()!);
        return r;
    }

}
