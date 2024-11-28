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

import * as Gs2MegaField from '../../megaField/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:megaField:{namespaceName}:model:area:{areaModelName}:layer:{layerModelName}";

export default class LayerModel implements IModel {
    private layerModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;

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
    public getLayerModelId(): string|null {
        return this.layerModelId;
    }
    public setLayerModelId(layerModelId: string|null) {
        this.layerModelId = layerModelId;
        return this;
    }
    public withLayerModelId(layerModelId: string|null): this {
        this.layerModelId = layerModelId;
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

    public static fromDict(data: {[key: string]: any}): LayerModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LayerModel()
            .withLayerModelId(data["layerModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "layerModelId": this.getLayerModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
        };
    }
}
