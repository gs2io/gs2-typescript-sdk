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

import * as Gs2Mission from '../../mission/model'
import TargetCounterModel from './TargetCounterModel';
import VerifyAction from './VerifyAction';
import AcquireAction from './AcquireAction';
import MissionTaskModel from './MissionTaskModel';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:mission:{namespaceName}:group:{missionGroupName}";

export default class MissionGroupModel implements IModel {
    private missionGroupId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private tasks: Gs2Mission.MissionTaskModel[]|null = null;
    private resetType: string|null = null;
    private resetDayOfMonth: number|null = null;
    private resetDayOfWeek: string|null = null;
    private resetHour: number|null = null;
    private completeNotificationNamespaceId: string|null = null;
    private anchorTimestamp: number|null = null;
    private days: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
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
            .replace('{missionGroupName}', '.*')
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
            .replace('{missionGroupName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMissionGroupName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '(.*)')
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
        if (this.getMissionGroupName(grn) == null || this.getMissionGroupName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        missionGroupName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{missionGroupName}', missionGroupName ?? '');
    }
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
    public getTasks(): Gs2Mission.MissionTaskModel[]|null {
        return this.tasks;
    }
    public setTasks(tasks: Gs2Mission.MissionTaskModel[]|null) {
        this.tasks = tasks;
        return this;
    }
    public withTasks(tasks: Gs2Mission.MissionTaskModel[]|null): this {
        this.tasks = tasks;
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

    public static fromDict(data: {[key: string]: any}): MissionGroupModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionGroupModel()
            .withMissionGroupId(data["missionGroupId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withTasks(data.tasks ?
                data.tasks.map((item: {[key: string]: any}) => {
                    return Gs2Mission.MissionTaskModel.fromDict(item);
                }
            ) : null)
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"])
            .withCompleteNotificationNamespaceId(data["completeNotificationNamespaceId"])
            .withAnchorTimestamp(data["anchorTimestamp"])
            .withDays(data["days"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "missionGroupId": this.getMissionGroupId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "tasks": this.getTasks() ?
                this.getTasks()!.map((item: Gs2Mission.MissionTaskModel) => {
                    return item.toDict();
                }
            ) : null,
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
            "completeNotificationNamespaceId": this.getCompleteNotificationNamespaceId(),
            "anchorTimestamp": this.getAnchorTimestamp(),
            "days": this.getDays(),
        };
    }
}
