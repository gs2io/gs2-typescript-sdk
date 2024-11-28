"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Gs2Schedule = tslib_1.__importStar(require("../../schedule/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}";
var EventMaster = /** @class */ (function () {
    function EventMaster() {
        this.eventId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.scheduleType = null;
        this.absoluteBegin = null;
        this.absoluteEnd = null;
        this.relativeTriggerName = null;
        this.repeatSetting = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
        this.repeatType = null;
        this.repeatBeginDayOfMonth = null;
        this.repeatEndDayOfMonth = null;
        this.repeatBeginDayOfWeek = null;
        this.repeatEndDayOfWeek = null;
        this.repeatBeginHour = null;
        this.repeatEndHour = null;
    }
    EventMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{eventName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    EventMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{eventName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    EventMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{eventName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    EventMaster.getEventName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{eventName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    EventMaster.isValid = function (grn) {
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
    };
    EventMaster.createGrn = function (region, ownerId, namespaceName, eventName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{eventName}', eventName !== null && eventName !== void 0 ? eventName : '');
    };
    EventMaster.prototype.getEventId = function () {
        return this.eventId;
    };
    EventMaster.prototype.setEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    EventMaster.prototype.withEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    EventMaster.prototype.getName = function () {
        return this.name;
    };
    EventMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    EventMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    EventMaster.prototype.getDescription = function () {
        return this.description;
    };
    EventMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    EventMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    EventMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    EventMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    EventMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    EventMaster.prototype.getScheduleType = function () {
        return this.scheduleType;
    };
    EventMaster.prototype.setScheduleType = function (scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    };
    EventMaster.prototype.withScheduleType = function (scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    };
    EventMaster.prototype.getAbsoluteBegin = function () {
        return this.absoluteBegin;
    };
    EventMaster.prototype.setAbsoluteBegin = function (absoluteBegin) {
        this.absoluteBegin = absoluteBegin;
        return this;
    };
    EventMaster.prototype.withAbsoluteBegin = function (absoluteBegin) {
        this.absoluteBegin = absoluteBegin;
        return this;
    };
    EventMaster.prototype.getAbsoluteEnd = function () {
        return this.absoluteEnd;
    };
    EventMaster.prototype.setAbsoluteEnd = function (absoluteEnd) {
        this.absoluteEnd = absoluteEnd;
        return this;
    };
    EventMaster.prototype.withAbsoluteEnd = function (absoluteEnd) {
        this.absoluteEnd = absoluteEnd;
        return this;
    };
    EventMaster.prototype.getRelativeTriggerName = function () {
        return this.relativeTriggerName;
    };
    EventMaster.prototype.setRelativeTriggerName = function (relativeTriggerName) {
        this.relativeTriggerName = relativeTriggerName;
        return this;
    };
    EventMaster.prototype.withRelativeTriggerName = function (relativeTriggerName) {
        this.relativeTriggerName = relativeTriggerName;
        return this;
    };
    EventMaster.prototype.getRepeatSetting = function () {
        return this.repeatSetting;
    };
    EventMaster.prototype.setRepeatSetting = function (repeatSetting) {
        this.repeatSetting = repeatSetting;
        return this;
    };
    EventMaster.prototype.withRepeatSetting = function (repeatSetting) {
        this.repeatSetting = repeatSetting;
        return this;
    };
    EventMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    EventMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    EventMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    EventMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    EventMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    EventMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    EventMaster.prototype.getRevision = function () {
        return this.revision;
    };
    EventMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    EventMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.getRepeatType = function () {
        return this.repeatType;
    };
    /** @deprecated */
    EventMaster.prototype.setRepeatType = function (repeatType) {
        this.repeatType = repeatType;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.withRepeatType = function (repeatType) {
        this.repeatType = repeatType;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.getRepeatBeginDayOfMonth = function () {
        return this.repeatBeginDayOfMonth;
    };
    /** @deprecated */
    EventMaster.prototype.setRepeatBeginDayOfMonth = function (repeatBeginDayOfMonth) {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.withRepeatBeginDayOfMonth = function (repeatBeginDayOfMonth) {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.getRepeatEndDayOfMonth = function () {
        return this.repeatEndDayOfMonth;
    };
    /** @deprecated */
    EventMaster.prototype.setRepeatEndDayOfMonth = function (repeatEndDayOfMonth) {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.withRepeatEndDayOfMonth = function (repeatEndDayOfMonth) {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.getRepeatBeginDayOfWeek = function () {
        return this.repeatBeginDayOfWeek;
    };
    /** @deprecated */
    EventMaster.prototype.setRepeatBeginDayOfWeek = function (repeatBeginDayOfWeek) {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.withRepeatBeginDayOfWeek = function (repeatBeginDayOfWeek) {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.getRepeatEndDayOfWeek = function () {
        return this.repeatEndDayOfWeek;
    };
    /** @deprecated */
    EventMaster.prototype.setRepeatEndDayOfWeek = function (repeatEndDayOfWeek) {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.withRepeatEndDayOfWeek = function (repeatEndDayOfWeek) {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.getRepeatBeginHour = function () {
        return this.repeatBeginHour;
    };
    /** @deprecated */
    EventMaster.prototype.setRepeatBeginHour = function (repeatBeginHour) {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.withRepeatBeginHour = function (repeatBeginHour) {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.getRepeatEndHour = function () {
        return this.repeatEndHour;
    };
    /** @deprecated */
    EventMaster.prototype.setRepeatEndHour = function (repeatEndHour) {
        this.repeatEndHour = repeatEndHour;
        return this;
    };
    /** @deprecated */
    EventMaster.prototype.withRepeatEndHour = function (repeatEndHour) {
        this.repeatEndHour = repeatEndHour;
        return this;
    };
    EventMaster.fromDict = function (data) {
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
            .withRepeatSetting(Gs2Schedule.RepeatSetting.fromDict(data["repeatSetting"]))
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
    };
    EventMaster.prototype.toDict = function () {
        var _a;
        return {
            "eventId": this.getEventId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "scheduleType": this.getScheduleType(),
            "absoluteBegin": this.getAbsoluteBegin(),
            "absoluteEnd": this.getAbsoluteEnd(),
            "relativeTriggerName": this.getRelativeTriggerName(),
            "repeatSetting": (_a = this.getRepeatSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
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
    };
    return EventMaster;
}());
exports.default = EventMaster;
//# sourceMappingURL=EventMaster.js.map