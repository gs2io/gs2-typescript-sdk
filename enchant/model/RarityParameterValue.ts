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

export default class RarityParameterValue implements IModel {
    private name: string|null = null;
    private resourceName: string|null = null;
    private resourceValue: number|null = null;
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
    public getResourceValue(): number|null {
        return this.resourceValue;
    }
    public setResourceValue(resourceValue: number|null) {
        this.resourceValue = resourceValue;
        return this;
    }
    public withResourceValue(resourceValue: number|null): this {
        this.resourceValue = resourceValue;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RarityParameterValue|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RarityParameterValue()
            .withName(data["name"])
            .withResourceName(data["resourceName"])
            .withResourceValue(data["resourceValue"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "resourceName": this.getResourceName(),
            "resourceValue": this.getResourceValue(),
        };
    }
}
