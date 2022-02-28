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

import IModel from '../../core/interface/IModel';
const grnFormat: string = "grn:gs2::{ownerId}:identifier:securityPolicy:{securityPolicyName}";

export default class SecurityPolicy implements IModel {
    private securityPolicyId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private policy: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{ownerId}', '(.*)')
            .replace('{securityPolicyName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getSecurityPolicyName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{ownerId}', '.*')
            .replace('{securityPolicyName}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getSecurityPolicyName(grn) == null) {
            return false;
        }
        return true;
    }

    public static createGrn(
        ownerId: string|null,
        securityPolicyName: string|null,
    ): string|null {
        return grnFormat
            .replace('{ownerId}', ownerId ?? '')
            .replace('{securityPolicyName}', securityPolicyName ?? '');
    }

    public getSecurityPolicyId(): string|null {
        return this.securityPolicyId;
    }

    public setSecurityPolicyId(securityPolicyId: string|null) {
        this.securityPolicyId = securityPolicyId;
        return this;
    }

    public withSecurityPolicyId(securityPolicyId: string|null): this {
        this.securityPolicyId = securityPolicyId;
        return this;
    }

    public getName(): string|null {
        return this.name;
    }

    public setName(name: string|null) {
        this.name = name;
        return this;
    }

    public withName(name: string|null): this {
        this.name = name;
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

    public getCreatedAt(): number|null {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }

    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }

    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }

    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SecurityPolicy|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SecurityPolicy()
            .withSecurityPolicyId(data["securityPolicyId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withPolicy(data["policy"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "securityPolicyId": this.getSecurityPolicyId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "policy": this.getPolicy(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
