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
 *
 * deny overwrite
 */

import { Gs2RestSession } from "@/gs2/core/model";
import { Gs2IdentifierRestClient } from "@/gs2/identifier";
import { DescribeUsersIterator } from "@/gs2/identifier/domain/iterator/UsersDomainIterator";
import { DescribeSecurityPoliciesIterator } from "@/gs2/identifier/domain/iterator/SecurityPoliciesDomainIterator";
import { DescribeCommonSecurityPoliciesIterator } from "@/gs2/identifier/domain/iterator/CommonSecurityPoliciesDomainIterator";
import { UserDomain } from "@/gs2/identifier/domain/User";
import { UserDomainCache } from "@/gs2/identifier/domain/cache/UserDomainCache";
import { SecurityPolicyDomain } from "@/gs2/identifier/domain/SecurityPolicy";
import { SecurityPolicyDomainCache } from "@/gs2/identifier/domain/cache/SecurityPolicyDomainCache";
import { CreateUserRequest } from "@/gs2/identifier/request";
import { CreateUserResult } from "@/gs2/identifier/result";
import { UpdateUserRequest } from "@/gs2/identifier/request";
import { UpdateUserResult } from "@/gs2/identifier/result";
import { DeleteUserRequest } from "@/gs2/identifier/request";
import { DeleteUserResult } from "@/gs2/identifier/result";
import { CreateSecurityPolicyRequest } from "@/gs2/identifier/request";
import { CreateSecurityPolicyResult } from "@/gs2/identifier/result";
import { UpdateSecurityPolicyRequest } from "@/gs2/identifier/request";
import { UpdateSecurityPolicyResult } from "@/gs2/identifier/result";
import { DeleteSecurityPolicyRequest } from "@/gs2/identifier/request";
import { DeleteSecurityPolicyResult } from "@/gs2/identifier/result";
import { CreateIdentifierRequest } from "@/gs2/identifier/request";
import { CreateIdentifierResult } from "@/gs2/identifier/result";
import { DeleteIdentifierRequest } from "@/gs2/identifier/request";
import { DeleteIdentifierResult } from "@/gs2/identifier/result";
import { LoginRequest } from "@/gs2/identifier/request";
import { LoginResult } from "@/gs2/identifier/result";
import { LoginByUserRequest } from "@/gs2/identifier/request";
import { LoginByUserResult } from "@/gs2/identifier/result";

export class Gs2Identifier {
    session: Gs2RestSession;
    client: Gs2IdentifierRestClient;
    userCache: UserDomainCache;
    securityPolicyCache: SecurityPolicyDomainCache;

    public constructor(
        session: Gs2RestSession
    ) {
        this.session = session;
        this.client = new Gs2IdentifierRestClient (
            session
        );
        this.userCache = new UserDomainCache();
        this.securityPolicyCache = new SecurityPolicyDomainCache();
    }

    public async createUser(
        request: CreateUserRequest
    ): Promise<CreateUserResult> {
        let r: CreateUserResult = await this.client.createUser(
            request
        );
        this.userCache.update(r.getItem()!);
        return r;
    }

    public async updateUser(
        request: UpdateUserRequest
    ): Promise<UpdateUserResult> {
        let r: UpdateUserResult = await this.client.updateUser(
            request
        );
        this.userCache.update(r.getItem()!);
        return r;
    }

    public async deleteUser(
        request: DeleteUserRequest
    ): Promise<DeleteUserResult> {
        let r: DeleteUserResult = await this.client.deleteUser(
            request
        );
        return r;
    }

    public async createSecurityPolicy(
        request: CreateSecurityPolicyRequest
    ): Promise<CreateSecurityPolicyResult> {
        let r: CreateSecurityPolicyResult = await this.client.createSecurityPolicy(
            request
        );
        this.securityPolicyCache.update(r.getItem()!);
        return r;
    }

    public async updateSecurityPolicy(
        request: UpdateSecurityPolicyRequest
    ): Promise<UpdateSecurityPolicyResult> {
        let r: UpdateSecurityPolicyResult = await this.client.updateSecurityPolicy(
            request
        );
        this.securityPolicyCache.update(r.getItem()!);
        return r;
    }

    public async deleteSecurityPolicy(
        request: DeleteSecurityPolicyRequest
    ): Promise<DeleteSecurityPolicyResult> {
        let r: DeleteSecurityPolicyResult = await this.client.deleteSecurityPolicy(
            request
        );
        return r;
    }

    public async createIdentifier(
        request: CreateIdentifierRequest
    ): Promise<CreateIdentifierResult> {
        let r: CreateIdentifierResult = await this.client.createIdentifier(
            request
        );
        return r;
    }

    public async deleteIdentifier(
        request: DeleteIdentifierRequest
    ): Promise<DeleteIdentifierResult> {
        let r: DeleteIdentifierResult = await this.client.deleteIdentifier(
            request
        );
        return r;
    }

    public async login(
        request: LoginRequest
    ): Promise<LoginResult> {
        let r: LoginResult = await this.client.login(
            request
        );
        return r;
    }

    public async loginByUser(
        request: LoginByUserRequest
    ): Promise<LoginByUserResult> {
        let r: LoginByUserResult = await this.client.loginByUser(
            request
        );
        return r;
    }

    public users(
    ): DescribeUsersIterator {
        return new DescribeUsersIterator(
            this.userCache,
            this.client
        );
    }

    public securityPolicies(
    ): DescribeSecurityPoliciesIterator {
        return new DescribeSecurityPoliciesIterator(
            this.securityPolicyCache,
            this.client
        );
    }

    public commonSecurityPolicies(
    ): DescribeCommonSecurityPoliciesIterator {
        return new DescribeCommonSecurityPoliciesIterator(
            this.securityPolicyCache,
            this.client
        );
    }

    public user(
        userName: string
    ): UserDomain {
        return new UserDomain(
            this.session,
            this.userCache,
            userName
        );
    }

    public securityPolicy(
        securityPolicyName: string
    ): SecurityPolicyDomain {
        return new SecurityPolicyDomain(
            this.session,
            this.securityPolicyCache,
            securityPolicyName
        );
    }
}
