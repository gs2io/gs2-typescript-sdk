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

export default class RoleModel implements IModel {
    private name: string|null = null;
    private metadata: string|null = null;
    private policyDocument: string|null = null;
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
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getPolicyDocument(): string|null {
        return this.policyDocument;
    }
    public setPolicyDocument(policyDocument: string|null) {
        this.policyDocument = policyDocument;
        return this;
    }
    public withPolicyDocument(policyDocument: string|null): this {
        this.policyDocument = policyDocument;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RoleModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RoleModel()
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withPolicyDocument(data["policyDocument"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "policyDocument": this.getPolicyDocument(),
        };
    }
}
