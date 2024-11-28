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

import * as Gs2Deploy from '../../deploy/model'

export default class ChangeSet implements IModel {
    private resourceName: string|null = null;
    private resourceType: string|null = null;
    private operation: string|null = null;
    public getResourceName(): string|null {
        return this.resourceName;
    }
    public setResourceName(resourceName: string|null) {
        this.resourceName = resourceName;
        return this;
    }
    public withResourceName(resourceName: string|null): this {
        this.resourceName = resourceName;
        return this;
    }
    public getResourceType(): string|null {
        return this.resourceType;
    }
    public setResourceType(resourceType: string|null) {
        this.resourceType = resourceType;
        return this;
    }
    public withResourceType(resourceType: string|null): this {
        this.resourceType = resourceType;
        return this;
    }
    public getOperation(): string|null {
        return this.operation;
    }
    public setOperation(operation: string|null) {
        this.operation = operation;
        return this;
    }
    public withOperation(operation: string|null): this {
        this.operation = operation;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ChangeSet|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChangeSet()
            .withResourceName(data["resourceName"])
            .withResourceType(data["resourceType"])
            .withOperation(data["operation"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "resourceName": this.getResourceName(),
            "resourceType": this.getResourceType(),
            "operation": this.getOperation(),
        };
    }
}
