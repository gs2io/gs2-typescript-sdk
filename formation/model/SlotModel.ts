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

export default class SlotModel implements IModel {
    private name: string|null = null;
    private propertyRegex: string|null = null;
    private metadata: string|null = null;
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
    public getPropertyRegex(): string|null {
        return this.propertyRegex;
    }
    public setPropertyRegex(propertyRegex: string|null) {
        this.propertyRegex = propertyRegex;
        return this;
    }
    public withPropertyRegex(propertyRegex: string|null): this {
        this.propertyRegex = propertyRegex;
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

    public static fromDict(data: {[key: string]: any}): SlotModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SlotModel()
            .withName(data["name"])
            .withPropertyRegex(data["propertyRegex"])
            .withMetadata(data["metadata"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "propertyRegex": this.getPropertyRegex(),
            "metadata": this.getMetadata(),
        };
    }
}
