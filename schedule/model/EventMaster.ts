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
import RepeatSetting from './RepeatSetting';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}";

export default class EventMaster implements IModel {
    private eventId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private scheduleType: string|null = null;
    private absoluteBegin: number|null = null;
    private absoluteEnd: number|null = null;
    private relativeTriggerName: string|null = null;
    private repeatSetting: RepeatSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;
    private revision: number|null = null;
    private repeatType: string|null = null;
    private repeatBeginDayOfMonth: number|null = null;
    private repeatEndDayOfMonth: number|null = null;
    private repeatBeginDayOfWeek: string|null = null;
    private repeatEndDayOfWeek: string|null = null;
    private repeatBeginHour: number|null = null;
    private repeatEndHour: number|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{eventName}', '.*')
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
            .replace('{eventName}', '.*')
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
            .replace('{eventName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getEventName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{eventName}', '(.*)')
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
        if (this.getEventName(grn) == null || this.getEventName(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        namespaceName: string|null,
        eventName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{eventName}', eventName ?? '');
    }
    public getEventId(): string|null {
        return this.eventId;
    }
    public setEventId(eventId: string|null) {
        this.eventId = eventId;
        return this;
    }
    public withEventId(eventId: string|null): this {
        this.eventId = eventId;
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
    public getScheduleType(): string|null {
        return this.scheduleType;
    }
    public setScheduleType(scheduleType: string|null) {
        this.scheduleType = scheduleType;
        return this;
    }
    public withScheduleType(scheduleType: string|null): this {
        this.scheduleType = scheduleType;
        return this;
    }
    public getAbsoluteBegin(): number|null {
        return this.absoluteBegin;
    }
    public setAbsoluteBegin(absoluteBegin: number|null) {
        this.absoluteBegin = absoluteBegin;
        return this;
    }
    public withAbsoluteBegin(absoluteBegin: number|null): this {
        this.absoluteBegin = absoluteBegin;
        return this;
    }
    public getAbsoluteEnd(): number|null {
        return this.absoluteEnd;
    }
    public setAbsoluteEnd(absoluteEnd: number|null) {
        this.absoluteEnd = absoluteEnd;
        return this;
    }
    public withAbsoluteEnd(absoluteEnd: number|null): this {
        this.absoluteEnd = absoluteEnd;
        return this;
    }
    public getRelativeTriggerName(): string|null {
        return this.relativeTriggerName;
    }
    public setRelativeTriggerName(relativeTriggerName: string|null) {
        this.relativeTriggerName = relativeTriggerName;
        return this;
    }
    public withRelativeTriggerName(relativeTriggerName: string|null): this {
        this.relativeTriggerName = relativeTriggerName;
        return this;
    }
    public getRepeatSetting(): RepeatSetting|null {
        return this.repeatSetting;
    }
    public setRepeatSetting(repeatSetting: RepeatSetting|null) {
        this.repeatSetting = repeatSetting;
        return this;
    }
    public withRepeatSetting(repeatSetting: RepeatSetting|null): this {
        this.repeatSetting = repeatSetting;
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
    /** @deprecated */
    public getRepeatType(): string|null {
        return this.repeatType;
    }
    /** @deprecated */
    public setRepeatType(repeatType: string|null) {
        this.repeatType = repeatType;
        return this;
    }
    /** @deprecated */
    public withRepeatType(repeatType: string|null): this {
        this.repeatType = repeatType;
        return this;
    }
    /** @deprecated */
    public getRepeatBeginDayOfMonth(): number|null {
        return this.repeatBeginDayOfMonth;
    }
    /** @deprecated */
    public setRepeatBeginDayOfMonth(repeatBeginDayOfMonth: number|null) {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    }
    /** @deprecated */
    public withRepeatBeginDayOfMonth(repeatBeginDayOfMonth: number|null): this {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    }
    /** @deprecated */
    public getRepeatEndDayOfMonth(): number|null {
        return this.repeatEndDayOfMonth;
    }
    /** @deprecated */
    public setRepeatEndDayOfMonth(repeatEndDayOfMonth: number|null) {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    }
    /** @deprecated */
    public withRepeatEndDayOfMonth(repeatEndDayOfMonth: number|null): this {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    }
    /** @deprecated */
    public getRepeatBeginDayOfWeek(): string|null {
        return this.repeatBeginDayOfWeek;
    }
    /** @deprecated */
    public setRepeatBeginDayOfWeek(repeatBeginDayOfWeek: string|null) {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    }
    /** @deprecated */
    public withRepeatBeginDayOfWeek(repeatBeginDayOfWeek: string|null): this {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    }
    /** @deprecated */
    public getRepeatEndDayOfWeek(): string|null {
        return this.repeatEndDayOfWeek;
    }
    /** @deprecated */
    public setRepeatEndDayOfWeek(repeatEndDayOfWeek: string|null) {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    }
    /** @deprecated */
    public withRepeatEndDayOfWeek(repeatEndDayOfWeek: string|null): this {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    }
    /** @deprecated */
    public getRepeatBeginHour(): number|null {
        return this.repeatBeginHour;
    }
    /** @deprecated */
    public setRepeatBeginHour(repeatBeginHour: number|null) {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    }
    /** @deprecated */
    public withRepeatBeginHour(repeatBeginHour: number|null): this {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    }
    /** @deprecated */
    public getRepeatEndHour(): number|null {
        return this.repeatEndHour;
    }
    /** @deprecated */
    public setRepeatEndHour(repeatEndHour: number|null) {
        this.repeatEndHour = repeatEndHour;
        return this;
    }
    /** @deprecated */
    public withRepeatEndHour(repeatEndHour: number|null): this {
        this.repeatEndHour = repeatEndHour;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): EventMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new EventMaster()
            .withEventId(data["eventId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withScheduleType(data["scheduleType"])
            .withAbsoluteBegin(data["absoluteBegin"])
            .withAbsoluteEnd(data["absoluteEnd"])
            .withRelativeTriggerName(data["relativeTriggerName"])
            .withRepeatSetting(RepeatSetting.fromDict(data["repeatSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"])
            .withRepeatType(data["repeatType"])
            .withRepeatBeginDayOfMonth(data["repeatBeginDayOfMonth"])
            .withRepeatEndDayOfMonth(data["repeatEndDayOfMonth"])
            .withRepeatBeginDayOfWeek(data["repeatBeginDayOfWeek"])
            .withRepeatEndDayOfWeek(data["repeatEndDayOfWeek"])
            .withRepeatBeginHour(data["repeatBeginHour"])
            .withRepeatEndHour(data["repeatEndHour"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "eventId": this.getEventId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "scheduleType": this.getScheduleType(),
            "absoluteBegin": this.getAbsoluteBegin(),
            "absoluteEnd": this.getAbsoluteEnd(),
            "relativeTriggerName": this.getRelativeTriggerName(),
            "repeatSetting": this.getRepeatSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
            "repeatType": this.getRepeatType(),
            "repeatBeginDayOfMonth": this.getRepeatBeginDayOfMonth(),
            "repeatEndDayOfMonth": this.getRepeatEndDayOfMonth(),
            "repeatBeginDayOfWeek": this.getRepeatBeginDayOfWeek(),
            "repeatEndDayOfWeek": this.getRepeatEndDayOfWeek(),
            "repeatBeginHour": this.getRepeatBeginHour(),
            "repeatEndHour": this.getRepeatEndHour(),
        };
    }
}
