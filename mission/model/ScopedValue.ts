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

export default class ScopedValue implements IModel {
    private resetType: string|null = null;
    private value: number|null = null;
    private nextResetAt: number|null = null;
    private updatedAt: number|null = null;

    public getResetType(): string|null {
        return this.resetType;
    }

    public setResetType(resetType: string|null) {
        this.resetType = resetType;
        return this;
    }

    public withResetType(resetType: string|null): this {
        this.resetType = resetType;
        return this;
    }

    public getValue(): number|null {
        return this.value;
    }

    public setValue(value: number|null) {
        this.value = value;
        return this;
    }

    public withValue(value: number|null): this {
        this.value = value;
        return this;
    }

    public getNextResetAt(): number|null {
        return this.nextResetAt;
    }

    public setNextResetAt(nextResetAt: number|null) {
        this.nextResetAt = nextResetAt;
        return this;
    }

    public withNextResetAt(nextResetAt: number|null): this {
        this.nextResetAt = nextResetAt;
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

    public static fromDict(data: {[key: string]: any}): ScopedValue|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ScopedValue()
            .withResetType(data["resetType"])
            .withValue(data["value"])
            .withNextResetAt(data["nextResetAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "resetType": this.getResetType(),
            "value": this.getValue(),
            "nextResetAt": this.getNextResetAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
