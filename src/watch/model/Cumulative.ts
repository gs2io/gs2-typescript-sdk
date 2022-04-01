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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:{resourceGrn}:{name}";

export default class Cumulative implements IModel {
    private cumulativeId: string|null = null;
    private resourceGrn: string|null = null;
    private name: string|null = null;
    private value: number|null = null;
    private updatedAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{resourceGrn}', '.*')
            .replace('{name}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{resourceGrn}', '.*')
            .replace('{name}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getResourceGrn(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{resourceGrn}', '(.*)')
            .replace('{name}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{resourceGrn}', '.*')
            .replace('{name}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getResourceGrn(grn) == null || this.getResourceGrn(grn) === '') {
            return false;
        }
        if (this.getName(grn) == null || this.getName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        resourceGrn: string|null,
        name: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{resourceGrn}', resourceGrn ?? '')
            .replace('{name}', name ?? '');
    }

    public getCumulativeId(): string|null {
        return this.cumulativeId;
    }

    public setCumulativeId(cumulativeId: string|null) {
        this.cumulativeId = cumulativeId;
        return this;
    }

    public withCumulativeId(cumulativeId: string|null): this {
        this.cumulativeId = cumulativeId;
        return this;
    }

    public getResourceGrn(): string|null {
        return this.resourceGrn;
    }

    public setResourceGrn(resourceGrn: string|null) {
        this.resourceGrn = resourceGrn;
        return this;
    }

    public withResourceGrn(resourceGrn: string|null): this {
        this.resourceGrn = resourceGrn;
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

    public static fromDict(data: {[key: string]: any}): Cumulative|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Cumulative()
            .withCumulativeId(data["cumulativeId"])
            .withResourceGrn(data["resourceGrn"])
            .withName(data["name"])
            .withValue(data["value"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "cumulativeId": this.getCumulativeId(),
            "resourceGrn": this.getResourceGrn(),
            "name": this.getName(),
            "value": this.getValue(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
