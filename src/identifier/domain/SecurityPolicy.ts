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
import { GetSecurityPolicyRequest } from "@/gs2/identifier/request";
import { GetSecurityPolicyResult } from "@/gs2/identifier/result";
import { AccessToken } from "@/gs2/auth/model";

export class SecurityPolicyDomain {
    session: Gs2RestSession;
    client: Gs2IdentifierRestClient;
    securityPolicyCache: SecurityPolicyDomainCache;
    securityPolicyName: string;

    public constructor(
        session: Gs2RestSession,
        securityPolicyCache: SecurityPolicyDomainCache,
        securityPolicyName: string
    ) {
        this.session = session;
        this.client = new Gs2IdentifierRestClient(
            session
        );
        this.securityPolicyCache = securityPolicyCache;
        this.securityPolicyName = securityPolicyName;
    }

    public async load(
        request: GetSecurityPolicyRequest
    ): Promise<GetSecurityPolicyResult> {
        request.setSecurityPolicyName(this.securityPolicyName);
        let r: GetSecurityPolicyResult = await this.client.getSecurityPolicy(
            request
        );
        this.securityPolicyCache.update(r.getItem()!);
        return r;
    }

}
