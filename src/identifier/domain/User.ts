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
import { IdentifierDomain } from "@/gs2/identifier/domain/Identifier";
import { PasswordDomain } from "@/gs2/identifier/domain/Password";
import { UserDomainCache } from "@/gs2/identifier/domain/cache/UserDomainCache";
import { SecurityPolicyDomainCache } from "@/gs2/identifier/domain/cache/SecurityPolicyDomainCache";
import { IdentifierDomainCache } from "@/gs2/identifier/domain/cache/IdentifierDomainCache";
import { PasswordDomainCache } from "@/gs2/identifier/domain/cache/PasswordDomainCache";
import { GetUserRequest } from "@/gs2/identifier/request";
import { GetUserResult } from "@/gs2/identifier/result";
import { CreatePasswordRequest } from "@/gs2/identifier/request";
import { CreatePasswordResult } from "@/gs2/identifier/result";
import { DeletePasswordRequest } from "@/gs2/identifier/request";
import { DeletePasswordResult } from "@/gs2/identifier/result";
import { GetHasSecurityPolicyRequest } from "@/gs2/identifier/request";
import { GetHasSecurityPolicyResult } from "@/gs2/identifier/result";
import { AttachSecurityPolicyRequest } from "@/gs2/identifier/request";
import { AttachSecurityPolicyResult } from "@/gs2/identifier/result";
import { DetachSecurityPolicyRequest } from "@/gs2/identifier/request";
import { DetachSecurityPolicyResult } from "@/gs2/identifier/result";
import { DescribePasswordsIterator } from "@/gs2/identifier/domain/iterator/PasswordsDomainIterator";
import { AccessToken } from "@/gs2/auth/model";

export class UserDomain {
    session: Gs2RestSession;
    client: Gs2IdentifierRestClient;
    userCache: UserDomainCache;
    userName: string;
    identifierCache: IdentifierDomainCache;
    passwordCache: PasswordDomainCache;

    public constructor(
        session: Gs2RestSession,
        userCache: UserDomainCache,
        userName: string
    ) {
        this.session = session;
        this.client = new Gs2IdentifierRestClient(
            session
        );
        this.userCache = userCache;
        this.userName = userName;
        this.identifierCache = new IdentifierDomainCache();
        this.passwordCache = new PasswordDomainCache();
    }

    public async load(
        request: GetUserRequest
    ): Promise<GetUserResult> {
        request.setUserName(this.userName);
        let r: GetUserResult = await this.client.getUser(
            request
        );
        this.userCache.update(r.getItem()!);
        return r;
    }

    public async createPassword(
        request: CreatePasswordRequest
    ): Promise<CreatePasswordResult> {
        request.setUserName(this.userName);
        let r: CreatePasswordResult = await this.client.createPassword(
            request
        );
        return r;
    }

    public async deletePassword(
        request: DeletePasswordRequest
    ): Promise<DeletePasswordResult> {
        request.setUserName(this.userName);
        let r: DeletePasswordResult = await this.client.deletePassword(
            request
        );
        return r;
    }

    public async getHasSecurityPolicy(
        request: GetHasSecurityPolicyRequest
    ): Promise<GetHasSecurityPolicyResult> {
        request.setUserName(this.userName);
        let r: GetHasSecurityPolicyResult = await this.client.getHasSecurityPolicy(
            request
        );
        return r;
    }

    public async attachSecurityPolicy(
        request: AttachSecurityPolicyRequest
    ): Promise<AttachSecurityPolicyResult> {
        request.setUserName(this.userName);
        let r: AttachSecurityPolicyResult = await this.client.attachSecurityPolicy(
            request
        );
        return r;
    }

    public async detachSecurityPolicy(
        request: DetachSecurityPolicyRequest
    ): Promise<DetachSecurityPolicyResult> {
        request.setUserName(this.userName);
        let r: DetachSecurityPolicyResult = await this.client.detachSecurityPolicy(
            request
        );
        return r;
    }

    public passwords(
    ): DescribePasswordsIterator {
        return new DescribePasswordsIterator(
            this.passwordCache,
            this.client,
            this.userName
        );
    }

    public identifier(
    ): IdentifierDomain {
        return new IdentifierDomain(
            this.session,
            this.identifierCache,
            this.userName
        );
    }

    public password(
    ): PasswordDomain {
        return new PasswordDomain(
            this.session,
            this.passwordCache,
            this.userName
        );
    }

}
