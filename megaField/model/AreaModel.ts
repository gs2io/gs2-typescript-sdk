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
import LayerModel from './LayerModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:megaField:{namespaceName}:model:area:{areaModelName}";

export default class AreaModel implements IModel {
    private areaModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private layerModels: Gs2MegaField.LayerModel[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{areaModelName}', '.*')
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
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        areaModelName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{areaModelName}', areaModelName ?? '');
    }
    public getAreaModelId(): string|null {
        return this.areaModelId;
    }
    public setAreaModelId(areaModelId: string|null) {
        this.areaModelId = areaModelId;
        return this;
    }
    public withAreaModelId(areaModelId: string|null): this {
        this.areaModelId = areaModelId;
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
    public getLayerModels(): Gs2MegaField.LayerModel[]|null {
        return this.layerModels;
    }
    public setLayerModels(layerModels: Gs2MegaField.LayerModel[]|null) {
        this.layerModels = layerModels;
        return this;
    }
    public withLayerModels(layerModels: Gs2MegaField.LayerModel[]|null): this {
        this.layerModels = layerModels;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AreaModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AreaModel()
            .withAreaModelId(data["areaModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withLayerModels(data.layerModels ?
                data.layerModels.map((item: {[key: string]: any}) => {
                    return Gs2MegaField.LayerModel.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "areaModelId": this.getAreaModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "layerModels": this.getLayerModels() ?
                this.getLayerModels()!.map((item: Gs2MegaField.LayerModel) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
