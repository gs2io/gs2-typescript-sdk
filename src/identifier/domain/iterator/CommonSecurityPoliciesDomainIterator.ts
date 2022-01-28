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
import { SecurityPolicy } from "@/gs2/identifier/model";
import { SecurityPolicyDomainCache } from "@/gs2/identifier/domain/cache/SecurityPolicyDomainCache";
import { Gs2IdentifierRestClient } from "@/gs2/identifier";
import { DescribeCommonSecurityPoliciesRequest } from "@/gs2/identifier/request";
import { DescribeCommonSecurityPoliciesResult } from "@/gs2/identifier/result";
import { AccessToken } from "@/gs2/auth/model";

export class DescribeCommonSecurityPoliciesIterator {
    private securityPolicyCache: SecurityPolicyDomainCache;
    private client: Gs2IdentifierRestClient;
    private pageToken: string|null;
    private last: boolean;
    private result: SecurityPolicy[]|null;

    private fetchSize: number|null;

    public constructor(
        securityPolicyCache: SecurityPolicyDomainCache,
        client: Gs2IdentifierRestClient
    ) {
        this.securityPolicyCache = securityPolicyCache;
        this.client = client;
        this.pageToken = null;
        this.last = false;
        this.result = [];

        this.fetchSize = null;
    }

    private async load(): Promise<any> {
        let r: DescribeCommonSecurityPoliciesResult = await this.client.describeCommonSecurityPolicies(
            new DescribeCommonSecurityPoliciesRequest()
                .withPageToken(this.pageToken)
                .withLimit(this.fetchSize)
        );
        for (let item of r.getItems()!) {
            this.securityPolicyCache.update(item);
        }
        this.result = r.getItems();
        this.pageToken = r.getNextPageToken();
        this.last = this.pageToken === null;
    }

    public hasNext(): boolean {
        return this.result!.length != 0 || !this.last;
    }

    public async next(

    ): Promise<SecurityPolicy> {
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        if (this.result == null || this.result!.length == 0) {
            return new Promise<SecurityPolicy>(() => {});
        }
        let ret: SecurityPolicy = this.result[0];
        this.result = this.result.slice(1, this.result!.length);
        if (this.result!.length == 0 && !this.last) {
            await this.load();
        }
        return ret;
    }
}
