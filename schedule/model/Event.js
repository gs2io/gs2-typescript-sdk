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
var RepeatSetting_1 = tslib_1.__importDefault(require("./RepeatSetting"));
var grnFormat = "grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}";
var Event = /** @class */ (function () {
    function Event() {
        this.eventId = null;
        this.name = null;
        this.metadata = null;
        this.scheduleType = null;
        this.absoluteBegin = null;
        this.absoluteEnd = null;
        this.relativeTriggerName = null;
        this.repeatSetting = null;
        this.repeatType = null;
        this.repeatBeginDayOfMonth = null;
        this.repeatEndDayOfMonth = null;
        this.repeatBeginDayOfWeek = null;
        this.repeatEndDayOfWeek = null;
        this.repeatBeginHour = null;
        this.repeatEndHour = null;
    }
    Event.getRegion = function (grn) {
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
    Event.getOwnerId = function (grn) {
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
    Event.getNamespaceName = function (grn) {
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
    Event.getEventName = function (grn) {
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
    Event.isValid = function (grn) {
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
    Event.createGrn = function (region, ownerId, namespaceName, eventName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{eventName}', eventName !== null && eventName !== void 0 ? eventName : '');
    };
    Event.prototype.getEventId = function () {
        return this.eventId;
    };
    Event.prototype.setEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    Event.prototype.withEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    Event.prototype.getName = function () {
        return this.name;
    };
    Event.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Event.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Event.prototype.getMetadata = function () {
        return this.metadata;
    };
    Event.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Event.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Event.prototype.getScheduleType = function () {
        return this.scheduleType;
    };
    Event.prototype.setScheduleType = function (scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    };
    Event.prototype.withScheduleType = function (scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    };
    Event.prototype.getAbsoluteBegin = function () {
        return this.absoluteBegin;
    };
    Event.prototype.setAbsoluteBegin = function (absoluteBegin) {
        this.absoluteBegin = absoluteBegin;
        return this;
    };
    Event.prototype.withAbsoluteBegin = function (absoluteBegin) {
        this.absoluteBegin = absoluteBegin;
        return this;
    };
    Event.prototype.getAbsoluteEnd = function () {
        return this.absoluteEnd;
    };
    Event.prototype.setAbsoluteEnd = function (absoluteEnd) {
        this.absoluteEnd = absoluteEnd;
        return this;
    };
    Event.prototype.withAbsoluteEnd = function (absoluteEnd) {
        this.absoluteEnd = absoluteEnd;
        return this;
    };
    Event.prototype.getRelativeTriggerName = function () {
        return this.relativeTriggerName;
    };
    Event.prototype.setRelativeTriggerName = function (relativeTriggerName) {
        this.relativeTriggerName = relativeTriggerName;
        return this;
    };
    Event.prototype.withRelativeTriggerName = function (relativeTriggerName) {
        this.relativeTriggerName = relativeTriggerName;
        return this;
    };
    Event.prototype.getRepeatSetting = function () {
        return this.repeatSetting;
    };
    Event.prototype.setRepeatSetting = function (repeatSetting) {
        this.repeatSetting = repeatSetting;
        return this;
    };
    Event.prototype.withRepeatSetting = function (repeatSetting) {
        this.repeatSetting = repeatSetting;
        return this;
    };
    /** @deprecated */
    Event.prototype.getRepeatType = function () {
        return this.repeatType;
    };
    /** @deprecated */
    Event.prototype.setRepeatType = function (repeatType) {
        this.repeatType = repeatType;
        return this;
    };
    /** @deprecated */
    Event.prototype.withRepeatType = function (repeatType) {
        this.repeatType = repeatType;
        return this;
    };
    /** @deprecated */
    Event.prototype.getRepeatBeginDayOfMonth = function () {
        return this.repeatBeginDayOfMonth;
    };
    /** @deprecated */
    Event.prototype.setRepeatBeginDayOfMonth = function (repeatBeginDayOfMonth) {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    };
    /** @deprecated */
    Event.prototype.withRepeatBeginDayOfMonth = function (repeatBeginDayOfMonth) {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    };
    /** @deprecated */
    Event.prototype.getRepeatEndDayOfMonth = function () {
        return this.repeatEndDayOfMonth;
    };
    /** @deprecated */
    Event.prototype.setRepeatEndDayOfMonth = function (repeatEndDayOfMonth) {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    };
    /** @deprecated */
    Event.prototype.withRepeatEndDayOfMonth = function (repeatEndDayOfMonth) {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    };
    /** @deprecated */
    Event.prototype.getRepeatBeginDayOfWeek = function () {
        return this.repeatBeginDayOfWeek;
    };
    /** @deprecated */
    Event.prototype.setRepeatBeginDayOfWeek = function (repeatBeginDayOfWeek) {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    };
    /** @deprecated */
    Event.prototype.withRepeatBeginDayOfWeek = function (repeatBeginDayOfWeek) {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    };
    /** @deprecated */
    Event.prototype.getRepeatEndDayOfWeek = function () {
        return this.repeatEndDayOfWeek;
    };
    /** @deprecated */
    Event.prototype.setRepeatEndDayOfWeek = function (repeatEndDayOfWeek) {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    };
    /** @deprecated */
    Event.prototype.withRepeatEndDayOfWeek = function (repeatEndDayOfWeek) {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    };
    /** @deprecated */
    Event.prototype.getRepeatBeginHour = function () {
        return this.repeatBeginHour;
    };
    /** @deprecated */
    Event.prototype.setRepeatBeginHour = function (repeatBeginHour) {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    };
    /** @deprecated */
    Event.prototype.withRepeatBeginHour = function (repeatBeginHour) {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    };
    /** @deprecated */
    Event.prototype.getRepeatEndHour = function () {
        return this.repeatEndHour;
    };
    /** @deprecated */
    Event.prototype.setRepeatEndHour = function (repeatEndHour) {
        this.repeatEndHour = repeatEndHour;
        return this;
    };
    /** @deprecated */
    Event.prototype.withRepeatEndHour = function (repeatEndHour) {
        this.repeatEndHour = repeatEndHour;
        return this;
    };
    Event.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Event()
            .withEventId(data["eventId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withScheduleType(data["scheduleType"])
            .withAbsoluteBegin(data["absoluteBegin"])
            .withAbsoluteEnd(data["absoluteEnd"])
            .withRelativeTriggerName(data["relativeTriggerName"])
            .withRepeatSetting(RepeatSetting_1.default.fromDict(data["repeatSetting"]))
            .withRepeatType(data["repeatType"])
            .withRepeatBeginDayOfMonth(data["repeatBeginDayOfMonth"])
            .withRepeatEndDayOfMonth(data["repeatEndDayOfMonth"])
            .withRepeatBeginDayOfWeek(data["repeatBeginDayOfWeek"])
            .withRepeatEndDayOfWeek(data["repeatEndDayOfWeek"])
            .withRepeatBeginHour(data["repeatBeginHour"])
            .withRepeatEndHour(data["repeatEndHour"]);
    };
    Event.prototype.toDict = function () {
        var _a;
        return {
            "eventId": this.getEventId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "scheduleType": this.getScheduleType(),
            "absoluteBegin": this.getAbsoluteBegin(),
            "absoluteEnd": this.getAbsoluteEnd(),
            "relativeTriggerName": this.getRelativeTriggerName(),
            "repeatSetting": (_a = this.getRepeatSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "repeatType": this.getRepeatType(),
            "repeatBeginDayOfMonth": this.getRepeatBeginDayOfMonth(),
            "repeatEndDayOfMonth": this.getRepeatEndDayOfMonth(),
            "repeatBeginDayOfWeek": this.getRepeatBeginDayOfWeek(),
            "repeatEndDayOfWeek": this.getRepeatEndDayOfWeek(),
            "repeatBeginHour": this.getRepeatBeginHour(),
            "repeatEndHour": this.getRepeatEndHour(),
        };
    };
    return Event;
}());
exports.default = Event;
//# sourceMappingURL=Event.js.map