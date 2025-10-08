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
var Gs2Schedule = tslib_1.__importStar(require("../model"));
var CreateEventMasterRequest = /** @class */ (function () {
    function CreateEventMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.scheduleType = null;
        this.absoluteBegin = null;
        this.absoluteEnd = null;
        this.repeatType = null;
        this.repeatBeginDayOfMonth = null;
        this.repeatEndDayOfMonth = null;
        this.repeatBeginDayOfWeek = null;
        this.repeatEndDayOfWeek = null;
        this.repeatBeginHour = null;
        this.repeatEndHour = null;
        this.relativeTriggerName = null;
        this.repeatSetting = null;
    }
    CreateEventMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateEventMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateEventMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateEventMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateEventMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateEventMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateEventMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateEventMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateEventMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateEventMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateEventMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateEventMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateEventMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateEventMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateEventMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateEventMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateEventMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateEventMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateEventMasterRequest.prototype.getScheduleType = function () {
        return this.scheduleType;
    };
    CreateEventMasterRequest.prototype.setScheduleType = function (scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    };
    CreateEventMasterRequest.prototype.withScheduleType = function (scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    };
    CreateEventMasterRequest.prototype.getAbsoluteBegin = function () {
        return this.absoluteBegin;
    };
    CreateEventMasterRequest.prototype.setAbsoluteBegin = function (absoluteBegin) {
        this.absoluteBegin = absoluteBegin;
        return this;
    };
    CreateEventMasterRequest.prototype.withAbsoluteBegin = function (absoluteBegin) {
        this.absoluteBegin = absoluteBegin;
        return this;
    };
    CreateEventMasterRequest.prototype.getAbsoluteEnd = function () {
        return this.absoluteEnd;
    };
    CreateEventMasterRequest.prototype.setAbsoluteEnd = function (absoluteEnd) {
        this.absoluteEnd = absoluteEnd;
        return this;
    };
    CreateEventMasterRequest.prototype.withAbsoluteEnd = function (absoluteEnd) {
        this.absoluteEnd = absoluteEnd;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.getRepeatType = function () {
        return this.repeatType;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.setRepeatType = function (repeatType) {
        this.repeatType = repeatType;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.withRepeatType = function (repeatType) {
        this.repeatType = repeatType;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.getRepeatBeginDayOfMonth = function () {
        return this.repeatBeginDayOfMonth;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.setRepeatBeginDayOfMonth = function (repeatBeginDayOfMonth) {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.withRepeatBeginDayOfMonth = function (repeatBeginDayOfMonth) {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.getRepeatEndDayOfMonth = function () {
        return this.repeatEndDayOfMonth;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.setRepeatEndDayOfMonth = function (repeatEndDayOfMonth) {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.withRepeatEndDayOfMonth = function (repeatEndDayOfMonth) {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.getRepeatBeginDayOfWeek = function () {
        return this.repeatBeginDayOfWeek;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.setRepeatBeginDayOfWeek = function (repeatBeginDayOfWeek) {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.withRepeatBeginDayOfWeek = function (repeatBeginDayOfWeek) {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.getRepeatEndDayOfWeek = function () {
        return this.repeatEndDayOfWeek;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.setRepeatEndDayOfWeek = function (repeatEndDayOfWeek) {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.withRepeatEndDayOfWeek = function (repeatEndDayOfWeek) {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.getRepeatBeginHour = function () {
        return this.repeatBeginHour;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.setRepeatBeginHour = function (repeatBeginHour) {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.withRepeatBeginHour = function (repeatBeginHour) {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.getRepeatEndHour = function () {
        return this.repeatEndHour;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.setRepeatEndHour = function (repeatEndHour) {
        this.repeatEndHour = repeatEndHour;
        return this;
    };
    /** @deprecated */
    CreateEventMasterRequest.prototype.withRepeatEndHour = function (repeatEndHour) {
        this.repeatEndHour = repeatEndHour;
        return this;
    };
    CreateEventMasterRequest.prototype.getRelativeTriggerName = function () {
        return this.relativeTriggerName;
    };
    CreateEventMasterRequest.prototype.setRelativeTriggerName = function (relativeTriggerName) {
        this.relativeTriggerName = relativeTriggerName;
        return this;
    };
    CreateEventMasterRequest.prototype.withRelativeTriggerName = function (relativeTriggerName) {
        this.relativeTriggerName = relativeTriggerName;
        return this;
    };
    CreateEventMasterRequest.prototype.getRepeatSetting = function () {
        return this.repeatSetting;
    };
    CreateEventMasterRequest.prototype.setRepeatSetting = function (repeatSetting) {
        this.repeatSetting = repeatSetting;
        return this;
    };
    CreateEventMasterRequest.prototype.withRepeatSetting = function (repeatSetting) {
        this.repeatSetting = repeatSetting;
        return this;
    };
    CreateEventMasterRequest.fromDict = function (data) {
        return new CreateEventMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withScheduleType(data["scheduleType"])
            .withAbsoluteBegin(data["absoluteBegin"])
            .withAbsoluteEnd(data["absoluteEnd"])
            .withRepeatType(data["repeatType"])
            .withRepeatBeginDayOfMonth(data["repeatBeginDayOfMonth"])
            .withRepeatEndDayOfMonth(data["repeatEndDayOfMonth"])
            .withRepeatBeginDayOfWeek(data["repeatBeginDayOfWeek"])
            .withRepeatEndDayOfWeek(data["repeatEndDayOfWeek"])
            .withRepeatBeginHour(data["repeatBeginHour"])
            .withRepeatEndHour(data["repeatEndHour"])
            .withRelativeTriggerName(data["relativeTriggerName"])
            .withRepeatSetting(Gs2Schedule.RepeatSetting.fromDict(data["repeatSetting"]));
    };
    CreateEventMasterRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "scheduleType": this.getScheduleType(),
            "absoluteBegin": this.getAbsoluteBegin(),
            "absoluteEnd": this.getAbsoluteEnd(),
            "repeatType": this.getRepeatType(),
            "repeatBeginDayOfMonth": this.getRepeatBeginDayOfMonth(),
            "repeatEndDayOfMonth": this.getRepeatEndDayOfMonth(),
            "repeatBeginDayOfWeek": this.getRepeatBeginDayOfWeek(),
            "repeatEndDayOfWeek": this.getRepeatEndDayOfWeek(),
            "repeatBeginHour": this.getRepeatBeginHour(),
            "repeatEndHour": this.getRepeatEndHour(),
            "relativeTriggerName": this.getRelativeTriggerName(),
            "repeatSetting": (_a = this.getRepeatSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return CreateEventMasterRequest;
}());
exports.default = CreateEventMasterRequest;
//# sourceMappingURL=CreateEventMasterRequest.js.map