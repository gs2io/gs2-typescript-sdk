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

export default class StaminaModelMaster implements IModel {
    private staminaModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private description: string|null = null;
    private recoverIntervalMinutes: number|null = null;
    private recoverValue: number|null = null;
    private initialCapacity: number|null = null;
    private isOverflow: boolean|null = null;
    private maxCapacity: number|null = null;
    private maxStaminaTableName: string|null = null;
    private recoverIntervalTableName: string|null = null;
    private recoverValueTableName: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

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

    public getDescription(): string|null {
        return this.description;
    }

    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }

    public withDescription(description: string|null): this {
        this.description = description;
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

    public getMaxStaminaTableName(): string|null {
        return this.maxStaminaTableName;
    }

    public setMaxStaminaTableName(maxStaminaTableName: string|null) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    }

    public withMaxStaminaTableName(maxStaminaTableName: string|null): this {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    }

    public getRecoverIntervalTableName(): string|null {
        return this.recoverIntervalTableName;
    }

    public setRecoverIntervalTableName(recoverIntervalTableName: string|null) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    }

    public withRecoverIntervalTableName(recoverIntervalTableName: string|null): this {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    }

    public getRecoverValueTableName(): string|null {
        return this.recoverValueTableName;
    }

    public setRecoverValueTableName(recoverValueTableName: string|null) {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    }

    public withRecoverValueTableName(recoverValueTableName: string|null): this {
        this.recoverValueTableName = recoverValueTableName;
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

    public static fromDict(data: {[key: string]: any}): StaminaModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaModelMaster()
            .withStaminaModelId(data["staminaModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withRecoverIntervalMinutes(data["recoverIntervalMinutes"])
            .withRecoverValue(data["recoverValue"])
            .withInitialCapacity(data["initialCapacity"])
            .withIsOverflow(data["isOverflow"])
            .withMaxCapacity(data["maxCapacity"])
            .withMaxStaminaTableName(data["maxStaminaTableName"])
            .withRecoverIntervalTableName(data["recoverIntervalTableName"])
            .withRecoverValueTableName(data["recoverValueTableName"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "staminaModelId": this.getStaminaModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "recoverIntervalMinutes": this.getRecoverIntervalMinutes(),
            "recoverValue": this.getRecoverValue(),
            "initialCapacity": this.getInitialCapacity(),
            "isOverflow": this.getIsOverflow(),
            "maxCapacity": this.getMaxCapacity(),
            "maxStaminaTableName": this.getMaxStaminaTableName(),
            "recoverIntervalTableName": this.getRecoverIntervalTableName(),
            "recoverValueTableName": this.getRecoverValueTableName(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
