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
const grnFormat: string = "grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:user:{userId}:stamina:{staminaName}";

export default class Stamina implements IModel {
    private staminaId: string|null = null;
    private staminaName: string|null = null;
    private userId: string|null = null;
    private value: number|null = null;
    private maxValue: number|null = null;
    private recoverIntervalMinutes: number|null = null;
    private recoverValue: number|null = null;
    private overflowValue: number|null = null;
    private nextRecoverAt: number|null = null;
    private lastRecoveredAt: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
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
            .replace('{userId}', '.*')
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
            .replace('{userId}', '.*')
            .replace('{staminaName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getUserId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
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
            .replace('{userId}', '.*')
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
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
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
        userId: string|null,
        staminaName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{userId}', userId ?? '')
            .replace('{staminaName}', staminaName ?? '');
    }
    public getStaminaId(): string|null {
        return this.staminaId;
    }
    public setStaminaId(staminaId: string|null) {
        this.staminaId = staminaId;
        return this;
    }
    public withStaminaId(staminaId: string|null): this {
        this.staminaId = staminaId;
        return this;
    }
    public getStaminaName(): string|null {
        return this.staminaName;
    }
    public setStaminaName(staminaName: string|null) {
        this.staminaName = staminaName;
        return this;
    }
    public withStaminaName(staminaName: string|null): this {
        this.staminaName = staminaName;
        return this;
    }
    public getUserId(): string|null {
        return this.userId;
    }
    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }
    public withUserId(userId: string|null): this {
        this.userId = userId;
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
    public getMaxValue(): number|null {
        return this.maxValue;
    }
    public setMaxValue(maxValue: number|null) {
        this.maxValue = maxValue;
        return this;
    }
    public withMaxValue(maxValue: number|null): this {
        this.maxValue = maxValue;
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
    public getOverflowValue(): number|null {
        return this.overflowValue;
    }
    public setOverflowValue(overflowValue: number|null) {
        this.overflowValue = overflowValue;
        return this;
    }
    public withOverflowValue(overflowValue: number|null): this {
        this.overflowValue = overflowValue;
        return this;
    }
    public getNextRecoverAt(): number|null {
        return this.nextRecoverAt;
    }
    public setNextRecoverAt(nextRecoverAt: number|null) {
        this.nextRecoverAt = nextRecoverAt;
        return this;
    }
    public withNextRecoverAt(nextRecoverAt: number|null): this {
        this.nextRecoverAt = nextRecoverAt;
        return this;
    }
    public getLastRecoveredAt(): number|null {
        return this.lastRecoveredAt;
    }
    public setLastRecoveredAt(lastRecoveredAt: number|null) {
        this.lastRecoveredAt = lastRecoveredAt;
        return this;
    }
    public withLastRecoveredAt(lastRecoveredAt: number|null): this {
        this.lastRecoveredAt = lastRecoveredAt;
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
    public getRevision(): number|null {
        return this.revision;
    }
    public setRevision(revision: number|null) {
        this.revision = revision;
        return this;
    }
    public withRevision(revision: number|null): this {
        this.revision = revision;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Stamina|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Stamina()
            .withStaminaId(data["staminaId"])
            .withStaminaName(data["staminaName"])
            .withUserId(data["userId"])
            .withValue(data["value"])
            .withMaxValue(data["maxValue"])
            .withRecoverIntervalMinutes(data["recoverIntervalMinutes"])
            .withRecoverValue(data["recoverValue"])
            .withOverflowValue(data["overflowValue"])
            .withNextRecoverAt(data["nextRecoverAt"])
            .withLastRecoveredAt(data["lastRecoveredAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "staminaId": this.getStaminaId(),
            "staminaName": this.getStaminaName(),
            "userId": this.getUserId(),
            "value": this.getValue(),
            "maxValue": this.getMaxValue(),
            "recoverIntervalMinutes": this.getRecoverIntervalMinutes(),
            "recoverValue": this.getRecoverValue(),
            "overflowValue": this.getOverflowValue(),
            "nextRecoverAt": this.getNextRecoverAt(),
            "lastRecoveredAt": this.getLastRecoveredAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    }
}
