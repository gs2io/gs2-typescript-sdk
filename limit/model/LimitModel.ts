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

import * as Gs2Limit from '../../limit/model'
const grnFormat: string = "grn:gs2:{region}:{ownerId}:limit:{namespaceName}:limit:{limitName}";

export default class LimitModel implements IModel {
    private limitModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private resetType: string|null = null;
    private resetDayOfMonth: number|null = null;
    private resetDayOfWeek: string|null = null;
    private resetHour: number|null = null;
    private anchorTimestamp: number|null = null;
    private days: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*')
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
            .replace('{limitName}', '.*')
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
            .replace('{limitName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getLimitName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '(.*)')
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
        if (this.getLimitName(grn) == null || this.getLimitName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        limitName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{limitName}', limitName ?? '');
    }
    public getLimitModelId(): string|null {
        return this.limitModelId;
    }
    public setLimitModelId(limitModelId: string|null) {
        this.limitModelId = limitModelId;
        return this;
    }
    public withLimitModelId(limitModelId: string|null): this {
        this.limitModelId = limitModelId;
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
    public getResetDayOfMonth(): number|null {
        return this.resetDayOfMonth;
    }
    public setResetDayOfMonth(resetDayOfMonth: number|null) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    }
    public withResetDayOfMonth(resetDayOfMonth: number|null): this {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    }
    public getResetDayOfWeek(): string|null {
        return this.resetDayOfWeek;
    }
    public setResetDayOfWeek(resetDayOfWeek: string|null) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    }
    public withResetDayOfWeek(resetDayOfWeek: string|null): this {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    }
    public getResetHour(): number|null {
        return this.resetHour;
    }
    public setResetHour(resetHour: number|null) {
        this.resetHour = resetHour;
        return this;
    }
    public withResetHour(resetHour: number|null): this {
        this.resetHour = resetHour;
        return this;
    }
    public getAnchorTimestamp(): number|null {
        return this.anchorTimestamp;
    }
    public setAnchorTimestamp(anchorTimestamp: number|null) {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    }
    public withAnchorTimestamp(anchorTimestamp: number|null): this {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    }
    public getDays(): number|null {
        return this.days;
    }
    public setDays(days: number|null) {
        this.days = days;
        return this;
    }
    public withDays(days: number|null): this {
        this.days = days;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitModel()
            .withLimitModelId(data["limitModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"])
            .withAnchorTimestamp(data["anchorTimestamp"])
            .withDays(data["days"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "limitModelId": this.getLimitModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
            "anchorTimestamp": this.getAnchorTimestamp(),
            "days": this.getDays(),
        };
    }
}
