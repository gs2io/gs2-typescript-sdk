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

import * as Gs2Stamina from '../../stamina/model'
import MaxStaminaTable from './MaxStaminaTable';
import RecoverIntervalTable from './RecoverIntervalTable';
import RecoverValueTable from './RecoverValueTable';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:model:{staminaName}";

export default class StaminaModel implements IModel {
    private staminaModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private recoverIntervalMinutes: number|null = null;
    private recoverValue: number|null = null;
    private initialCapacity: number|null = null;
    private isOverflow: boolean|null = null;
    private maxCapacity: number|null = null;
    private maxStaminaTable: Gs2Stamina.MaxStaminaTable|null = null;
    private recoverIntervalTable: Gs2Stamina.RecoverIntervalTable|null = null;
    private recoverValueTable: Gs2Stamina.RecoverValueTable|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '.*')
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
            .replace('{staminaName}', '.*')
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
            .replace('{staminaName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getStaminaName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '(.*)')
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
        if (this.getStaminaName(grn) == null || this.getStaminaName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        staminaName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{staminaName}', staminaName ?? '');
    }
    public getStaminaModelId(): string|null {
        return this.staminaModelId;
    }
    public setStaminaModelId(staminaModelId: string|null) {
        this.staminaModelId = staminaModelId;
        return this;
    }
    public withStaminaModelId(staminaModelId: string|null): this {
        this.staminaModelId = staminaModelId;
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
    public getRecoverIntervalMinutes(): number|null {
        return this.recoverIntervalMinutes;
    }
    public setRecoverIntervalMinutes(recoverIntervalMinutes: number|null) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    }
    public withRecoverIntervalMinutes(recoverIntervalMinutes: number|null): this {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    }
    public getRecoverValue(): number|null {
        return this.recoverValue;
    }
    public setRecoverValue(recoverValue: number|null) {
        this.recoverValue = recoverValue;
        return this;
    }
    public withRecoverValue(recoverValue: number|null): this {
        this.recoverValue = recoverValue;
        return this;
    }
    public getInitialCapacity(): number|null {
        return this.initialCapacity;
    }
    public setInitialCapacity(initialCapacity: number|null) {
        this.initialCapacity = initialCapacity;
        return this;
    }
    public withInitialCapacity(initialCapacity: number|null): this {
        this.initialCapacity = initialCapacity;
        return this;
    }
    public getIsOverflow(): boolean|null {
        return this.isOverflow;
    }
    public setIsOverflow(isOverflow: boolean|null) {
        this.isOverflow = isOverflow;
        return this;
    }
    public withIsOverflow(isOverflow: boolean|null): this {
        this.isOverflow = isOverflow;
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
    public getMaxStaminaTable(): Gs2Stamina.MaxStaminaTable|null {
        return this.maxStaminaTable;
    }
    public setMaxStaminaTable(maxStaminaTable: Gs2Stamina.MaxStaminaTable|null) {
        this.maxStaminaTable = maxStaminaTable;
        return this;
    }
    public withMaxStaminaTable(maxStaminaTable: Gs2Stamina.MaxStaminaTable|null): this {
        this.maxStaminaTable = maxStaminaTable;
        return this;
    }
    public getRecoverIntervalTable(): Gs2Stamina.RecoverIntervalTable|null {
        return this.recoverIntervalTable;
    }
    public setRecoverIntervalTable(recoverIntervalTable: Gs2Stamina.RecoverIntervalTable|null) {
        this.recoverIntervalTable = recoverIntervalTable;
        return this;
    }
    public withRecoverIntervalTable(recoverIntervalTable: Gs2Stamina.RecoverIntervalTable|null): this {
        this.recoverIntervalTable = recoverIntervalTable;
        return this;
    }
    public getRecoverValueTable(): Gs2Stamina.RecoverValueTable|null {
        return this.recoverValueTable;
    }
    public setRecoverValueTable(recoverValueTable: Gs2Stamina.RecoverValueTable|null) {
        this.recoverValueTable = recoverValueTable;
        return this;
    }
    public withRecoverValueTable(recoverValueTable: Gs2Stamina.RecoverValueTable|null): this {
        this.recoverValueTable = recoverValueTable;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): StaminaModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaModel()
            .withStaminaModelId(data["staminaModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withRecoverIntervalMinutes(data["recoverIntervalMinutes"])
            .withRecoverValue(data["recoverValue"])
            .withInitialCapacity(data["initialCapacity"])
            .withIsOverflow(data["isOverflow"])
            .withMaxCapacity(data["maxCapacity"])
            .withMaxStaminaTable(Gs2Stamina.MaxStaminaTable.fromDict(data["maxStaminaTable"]))
            .withRecoverIntervalTable(Gs2Stamina.RecoverIntervalTable.fromDict(data["recoverIntervalTable"]))
            .withRecoverValueTable(Gs2Stamina.RecoverValueTable.fromDict(data["recoverValueTable"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "staminaModelId": this.getStaminaModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "recoverIntervalMinutes": this.getRecoverIntervalMinutes(),
            "recoverValue": this.getRecoverValue(),
            "initialCapacity": this.getInitialCapacity(),
            "isOverflow": this.getIsOverflow(),
            "maxCapacity": this.getMaxCapacity(),
            "maxStaminaTable": this.getMaxStaminaTable()?.toDict(),
            "recoverIntervalTable": this.getRecoverIntervalTable()?.toDict(),
            "recoverValueTable": this.getRecoverValueTable()?.toDict(),
        };
    }
}
