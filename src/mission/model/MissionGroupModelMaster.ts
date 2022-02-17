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

export default class MissionGroupModelMaster implements IModel {
    private missionGroupId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private description: string|null = null;
    private resetType: string|null = null;
    private resetDayOfMonth: number|null = null;
    private resetDayOfWeek: string|null = null;
    private resetHour: number|null = null;
    private completeNotificationNamespaceId: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getMissionGroupId(): string|null {
        return this.missionGroupId;
    }

    public setMissionGroupId(missionGroupId: string|null) {
        this.missionGroupId = missionGroupId;
        return this;
    }

    public withMissionGroupId(missionGroupId: string|null): this {
        this.missionGroupId = missionGroupId;
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

    public getCompleteNotificationNamespaceId(): string|null {
        return this.completeNotificationNamespaceId;
    }

    public setCompleteNotificationNamespaceId(completeNotificationNamespaceId: string|null) {
        this.completeNotificationNamespaceId = completeNotificationNamespaceId;
        return this;
    }

    public withCompleteNotificationNamespaceId(completeNotificationNamespaceId: string|null): this {
        this.completeNotificationNamespaceId = completeNotificationNamespaceId;
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

    public static fromDict(data: {[key: string]: any}): MissionGroupModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionGroupModelMaster()
            .withMissionGroupId(data["missionGroupId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"])
            .withCompleteNotificationNamespaceId(data["completeNotificationNamespaceId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "missionGroupId": this.getMissionGroupId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
            "completeNotificationNamespaceId": this.getCompleteNotificationNamespaceId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
