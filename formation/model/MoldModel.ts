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

import * as Gs2Formation from '../../formation/model'
import SlotModel from './SlotModel';
import FormModel from './FormModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:formation:{namespaceName}:model:mold:{moldModelName}";

export default class MoldModel implements IModel {
    private moldModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private initialMaxCapacity: number|null = null;
    private maxCapacity: number|null = null;
    private formModel: Gs2Formation.FormModel|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '.*')
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
            .replace('{moldModelName}', '.*')
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
            .replace('{moldModelName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMoldModelName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldModelName}', '(.*)')
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
        if (this.getMoldModelName(grn) == null || this.getMoldModelName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        moldModelName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{moldModelName}', moldModelName ?? '');
    }
    public getMoldModelId(): string|null {
        return this.moldModelId;
    }
    public setMoldModelId(moldModelId: string|null) {
        this.moldModelId = moldModelId;
        return this;
    }
    public withMoldModelId(moldModelId: string|null): this {
        this.moldModelId = moldModelId;
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
    public getInitialMaxCapacity(): number|null {
        return this.initialMaxCapacity;
    }
    public setInitialMaxCapacity(initialMaxCapacity: number|null) {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    }
    public withInitialMaxCapacity(initialMaxCapacity: number|null): this {
        this.initialMaxCapacity = initialMaxCapacity;
        return this;
    }
    public getMaxCapacity(): number|null {
        return this.maxCapacity;
    }
    public setMaxCapacity(maxCapacity: number|null) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    public withMaxCapacity(maxCapacity: number|null): this {
        this.maxCapacity = maxCapacity;
        return this;
    }
    public getFormModel(): Gs2Formation.FormModel|null {
        return this.formModel;
    }
    public setFormModel(formModel: Gs2Formation.FormModel|null) {
        this.formModel = formModel;
        return this;
    }
    public withFormModel(formModel: Gs2Formation.FormModel|null): this {
        this.formModel = formModel;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MoldModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoldModel()
            .withMoldModelId(data["moldModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withInitialMaxCapacity(data["initialMaxCapacity"])
            .withMaxCapacity(data["maxCapacity"])
            .withFormModel(Gs2Formation.FormModel.fromDict(data["formModel"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "moldModelId": this.getMoldModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "initialMaxCapacity": this.getInitialMaxCapacity(),
            "maxCapacity": this.getMaxCapacity(),
            "formModel": this.getFormModel()?.toDict(),
        };
    }
}
