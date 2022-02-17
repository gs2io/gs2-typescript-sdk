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
import MaxStaminaTable from './MaxStaminaTable';
import RecoverIntervalTable from './RecoverIntervalTable';
import RecoverValueTable from './RecoverValueTable';

export default class StaminaModel implements IModel {
    private staminaModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private recoverIntervalMinutes: number|null = null;
    private recoverValue: number|null = null;
    private initialCapacity: number|null = null;
    private isOverflow: boolean|null = null;
    private maxCapacity: number|null = null;
    private maxStaminaTable: MaxStaminaTable|null = null;
    private recoverIntervalTable: RecoverIntervalTable|null = null;
    private recoverValueTable: RecoverValueTable|null = null;

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

    public getMaxStaminaTable(): MaxStaminaTable|null {
        return this.maxStaminaTable;
    }

    public setMaxStaminaTable(maxStaminaTable: MaxStaminaTable|null) {
        this.maxStaminaTable = maxStaminaTable;
        return this;
    }

    public withMaxStaminaTable(maxStaminaTable: MaxStaminaTable|null): this {
        this.maxStaminaTable = maxStaminaTable;
        return this;
    }

    public getRecoverIntervalTable(): RecoverIntervalTable|null {
        return this.recoverIntervalTable;
    }

    public setRecoverIntervalTable(recoverIntervalTable: RecoverIntervalTable|null) {
        this.recoverIntervalTable = recoverIntervalTable;
        return this;
    }

    public withRecoverIntervalTable(recoverIntervalTable: RecoverIntervalTable|null): this {
        this.recoverIntervalTable = recoverIntervalTable;
        return this;
    }

    public getRecoverValueTable(): RecoverValueTable|null {
        return this.recoverValueTable;
    }

    public setRecoverValueTable(recoverValueTable: RecoverValueTable|null) {
        this.recoverValueTable = recoverValueTable;
        return this;
    }

    public withRecoverValueTable(recoverValueTable: RecoverValueTable|null): this {
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
            .withMaxStaminaTable(MaxStaminaTable.fromDict(data["maxStaminaTable"]))
            .withRecoverIntervalTable(RecoverIntervalTable.fromDict(data["recoverIntervalTable"]))
            .withRecoverValueTable(RecoverValueTable.fromDict(data["recoverValueTable"]));
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
