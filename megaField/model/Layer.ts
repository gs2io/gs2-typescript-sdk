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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:megaField:{namespaceName}:layer:{areaModelName}:{layerModelName}";

export default class Layer implements IModel {
    private layerId: string|null = null;
    private areaModelName: string|null = null;
    private layerModelName: string|null = null;
    private numberOfMinEntries: number|null = null;
    private numberOfMaxEntries: number|null = null;
    private createdAt: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*')
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
            .replace('{namespaceName}', '.*')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getAreaModelName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{areaModelName}', '(.*)')
            .replace('{layerModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getLayerModelName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{areaModelName}', '.*')
            .replace('{layerModelName}', '(.*)')
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
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getAreaModelName(grn) == null || this.getAreaModelName(grn) === '') {
            return false;
        }
        if (this.getLayerModelName(grn) == null || this.getLayerModelName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        areaModelName: string|null,
        layerModelName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{areaModelName}', areaModelName ?? '')
            .replace('{layerModelName}', layerModelName ?? '');
    }
    public getLayerId(): string|null {
        return this.layerId;
    }
    public setLayerId(layerId: string|null) {
        this.layerId = layerId;
        return this;
    }
    public withLayerId(layerId: string|null): this {
        this.layerId = layerId;
        return this;
    }
    public getAreaModelName(): string|null {
        return this.areaModelName;
    }
    public setAreaModelName(areaModelName: string|null) {
        this.areaModelName = areaModelName;
        return this;
    }
    public withAreaModelName(areaModelName: string|null): this {
        this.areaModelName = areaModelName;
        return this;
    }
    public getLayerModelName(): string|null {
        return this.layerModelName;
    }
    public setLayerModelName(layerModelName: string|null) {
        this.layerModelName = layerModelName;
        return this;
    }
    public withLayerModelName(layerModelName: string|null): this {
        this.layerModelName = layerModelName;
        return this;
    }
    public getNumberOfMinEntries(): number|null {
        return this.numberOfMinEntries;
    }
    public setNumberOfMinEntries(numberOfMinEntries: number|null) {
        this.numberOfMinEntries = numberOfMinEntries;
        return this;
    }
    public withNumberOfMinEntries(numberOfMinEntries: number|null): this {
        this.numberOfMinEntries = numberOfMinEntries;
        return this;
    }
    public getNumberOfMaxEntries(): number|null {
        return this.numberOfMaxEntries;
    }
    public setNumberOfMaxEntries(numberOfMaxEntries: number|null) {
        this.numberOfMaxEntries = numberOfMaxEntries;
        return this;
    }
    public withNumberOfMaxEntries(numberOfMaxEntries: number|null): this {
        this.numberOfMaxEntries = numberOfMaxEntries;
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

    public static fromDict(data: {[key: string]: any}): Layer|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Layer()
            .withLayerId(data["layerId"])
            .withAreaModelName(data["areaModelName"])
            .withLayerModelName(data["layerModelName"])
            .withNumberOfMinEntries(data["numberOfMinEntries"])
            .withNumberOfMaxEntries(data["numberOfMaxEntries"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "layerId": this.getLayerId(),
            "areaModelName": this.getAreaModelName(),
            "layerModelName": this.getLayerModelName(),
            "numberOfMinEntries": this.getNumberOfMinEntries(),
            "numberOfMaxEntries": this.getNumberOfMaxEntries(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
