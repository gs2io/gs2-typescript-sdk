/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IRequest from '../../core/interface/IRequest';

import * as Gs2Identifier from '../model'

export class UpdateSecurityPolicyRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private securityPolicyName: string|null = null;
    private description: string|null = null;
    private policy: string|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }

    public getSecurityPolicyName(): string|null {
        return this.securityPolicyName;
    }

    public setSecurityPolicyName(securityPolicyName: string|null) {
        this.securityPolicyName = securityPolicyName;
        return this;
    }

    public withSecurityPolicyName(securityPolicyName: string|null): this {
        this.securityPolicyName = securityPolicyName;
        return this;
    }

    public getDescription(): string|null {
        return this.description;
    }

    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }

    public withDescription(description: string|null): this {
        this.description = description;
        return this;
    }

    public getPolicy(): string|null {
        return this.policy;
    }

    public setPolicy(policy: string|null) {
        this.policy = policy;
        return this;
    }

    public withPolicy(policy: string|null): this {
        this.policy = policy;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateSecurityPolicyRequest {
        return new UpdateSecurityPolicyRequest()
            .withSecurityPolicyName(data["securityPolicyName"])
            .withDescription(data["description"])
            .withPolicy(data["policy"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "securityPolicyName": this.getSecurityPolicyName(),
            "description": this.getDescription(),
            "policy": this.getPolicy(),
        };
    }
}