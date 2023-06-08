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
var grnFormat = "grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:event:{eventName}";
var Event = /** @class */ (function () {
    function Event() {
        this.eventId = null;
        this.name = null;
        this.metadata = null;
        this.scheduleType = null;
        this.repeatType = null;
        this.absoluteBegin = null;
        this.absoluteEnd = null;
        this.repeatBeginDayOfMonth = null;
        this.repeatEndDayOfMonth = null;
        this.repeatBeginDayOfWeek = null;
        this.repeatEndDayOfWeek = null;
        this.repeatBeginHour = null;
        this.repeatEndHour = null;
        this.relativeTriggerName = null;
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
    Event.prototype.getRepeatType = function () {
        return this.repeatType;
    };
    Event.prototype.setRepeatType = function (repeatType) {
        this.repeatType = repeatType;
        return this;
    };
    Event.prototype.withRepeatType = function (repeatType) {
        this.repeatType = repeatType;
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
    Event.prototype.getRepeatBeginDayOfMonth = function () {
        return this.repeatBeginDayOfMonth;
    };
    Event.prototype.setRepeatBeginDayOfMonth = function (repeatBeginDayOfMonth) {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    };
    Event.prototype.withRepeatBeginDayOfMonth = function (repeatBeginDayOfMonth) {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    };
    Event.prototype.getRepeatEndDayOfMonth = function () {
        return this.repeatEndDayOfMonth;
    };
    Event.prototype.setRepeatEndDayOfMonth = function (repeatEndDayOfMonth) {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    };
    Event.prototype.withRepeatEndDayOfMonth = function (repeatEndDayOfMonth) {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    };
    Event.prototype.getRepeatBeginDayOfWeek = function () {
        return this.repeatBeginDayOfWeek;
    };
    Event.prototype.setRepeatBeginDayOfWeek = function (repeatBeginDayOfWeek) {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    };
    Event.prototype.withRepeatBeginDayOfWeek = function (repeatBeginDayOfWeek) {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    };
    Event.prototype.getRepeatEndDayOfWeek = function () {
        return this.repeatEndDayOfWeek;
    };
    Event.prototype.setRepeatEndDayOfWeek = function (repeatEndDayOfWeek) {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    };
    Event.prototype.withRepeatEndDayOfWeek = function (repeatEndDayOfWeek) {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    };
    Event.prototype.getRepeatBeginHour = function () {
        return this.repeatBeginHour;
    };
    Event.prototype.setRepeatBeginHour = function (repeatBeginHour) {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    };
    Event.prototype.withRepeatBeginHour = function (repeatBeginHour) {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    };
    Event.prototype.getRepeatEndHour = function () {
        return this.repeatEndHour;
    };
    Event.prototype.setRepeatEndHour = function (repeatEndHour) {
        this.repeatEndHour = repeatEndHour;
        return this;
    };
    Event.prototype.withRepeatEndHour = function (repeatEndHour) {
        this.repeatEndHour = repeatEndHour;
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
    Event.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Event()
            .withEventId(data["eventId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withScheduleType(data["scheduleType"])
            .withRepeatType(data["repeatType"])
            .withAbsoluteBegin(data["absoluteBegin"])
            .withAbsoluteEnd(data["absoluteEnd"])
            .withRepeatBeginDayOfMonth(data["repeatBeginDayOfMonth"])
            .withRepeatEndDayOfMonth(data["repeatEndDayOfMonth"])
            .withRepeatBeginDayOfWeek(data["repeatBeginDayOfWeek"])
            .withRepeatEndDayOfWeek(data["repeatEndDayOfWeek"])
            .withRepeatBeginHour(data["repeatBeginHour"])
            .withRepeatEndHour(data["repeatEndHour"])
            .withRelativeTriggerName(data["relativeTriggerName"]);
    };
    Event.prototype.toDict = function () {
        return {
            "eventId": this.getEventId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "scheduleType": this.getScheduleType(),
            "repeatType": this.getRepeatType(),
            "absoluteBegin": this.getAbsoluteBegin(),
            "absoluteEnd": this.getAbsoluteEnd(),
            "repeatBeginDayOfMonth": this.getRepeatBeginDayOfMonth(),
            "repeatEndDayOfMonth": this.getRepeatEndDayOfMonth(),
            "repeatBeginDayOfWeek": this.getRepeatBeginDayOfWeek(),
            "repeatEndDayOfWeek": this.getRepeatEndDayOfWeek(),
            "repeatBeginHour": this.getRepeatBeginHour(),
            "repeatEndHour": this.getRepeatEndHour(),
            "relativeTriggerName": this.getRelativeTriggerName(),
        };
    };
    return Event;
}());
exports.default = Event;
//# sourceMappingURL=Event.js.map