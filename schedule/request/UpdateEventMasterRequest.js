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
var UpdateEventMasterRequest = /** @class */ (function () {
    function UpdateEventMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.eventName = null;
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
    }
    UpdateEventMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateEventMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateEventMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateEventMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateEventMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateEventMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateEventMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateEventMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateEventMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateEventMasterRequest.prototype.getEventName = function () {
        return this.eventName;
    };
    UpdateEventMasterRequest.prototype.setEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    UpdateEventMasterRequest.prototype.withEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    UpdateEventMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateEventMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateEventMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateEventMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateEventMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateEventMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateEventMasterRequest.prototype.getScheduleType = function () {
        return this.scheduleType;
    };
    UpdateEventMasterRequest.prototype.setScheduleType = function (scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    };
    UpdateEventMasterRequest.prototype.withScheduleType = function (scheduleType) {
        this.scheduleType = scheduleType;
        return this;
    };
    UpdateEventMasterRequest.prototype.getAbsoluteBegin = function () {
        return this.absoluteBegin;
    };
    UpdateEventMasterRequest.prototype.setAbsoluteBegin = function (absoluteBegin) {
        this.absoluteBegin = absoluteBegin;
        return this;
    };
    UpdateEventMasterRequest.prototype.withAbsoluteBegin = function (absoluteBegin) {
        this.absoluteBegin = absoluteBegin;
        return this;
    };
    UpdateEventMasterRequest.prototype.getAbsoluteEnd = function () {
        return this.absoluteEnd;
    };
    UpdateEventMasterRequest.prototype.setAbsoluteEnd = function (absoluteEnd) {
        this.absoluteEnd = absoluteEnd;
        return this;
    };
    UpdateEventMasterRequest.prototype.withAbsoluteEnd = function (absoluteEnd) {
        this.absoluteEnd = absoluteEnd;
        return this;
    };
    UpdateEventMasterRequest.prototype.getRepeatType = function () {
        return this.repeatType;
    };
    UpdateEventMasterRequest.prototype.setRepeatType = function (repeatType) {
        this.repeatType = repeatType;
        return this;
    };
    UpdateEventMasterRequest.prototype.withRepeatType = function (repeatType) {
        this.repeatType = repeatType;
        return this;
    };
    UpdateEventMasterRequest.prototype.getRepeatBeginDayOfMonth = function () {
        return this.repeatBeginDayOfMonth;
    };
    UpdateEventMasterRequest.prototype.setRepeatBeginDayOfMonth = function (repeatBeginDayOfMonth) {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    };
    UpdateEventMasterRequest.prototype.withRepeatBeginDayOfMonth = function (repeatBeginDayOfMonth) {
        this.repeatBeginDayOfMonth = repeatBeginDayOfMonth;
        return this;
    };
    UpdateEventMasterRequest.prototype.getRepeatEndDayOfMonth = function () {
        return this.repeatEndDayOfMonth;
    };
    UpdateEventMasterRequest.prototype.setRepeatEndDayOfMonth = function (repeatEndDayOfMonth) {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    };
    UpdateEventMasterRequest.prototype.withRepeatEndDayOfMonth = function (repeatEndDayOfMonth) {
        this.repeatEndDayOfMonth = repeatEndDayOfMonth;
        return this;
    };
    UpdateEventMasterRequest.prototype.getRepeatBeginDayOfWeek = function () {
        return this.repeatBeginDayOfWeek;
    };
    UpdateEventMasterRequest.prototype.setRepeatBeginDayOfWeek = function (repeatBeginDayOfWeek) {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    };
    UpdateEventMasterRequest.prototype.withRepeatBeginDayOfWeek = function (repeatBeginDayOfWeek) {
        this.repeatBeginDayOfWeek = repeatBeginDayOfWeek;
        return this;
    };
    UpdateEventMasterRequest.prototype.getRepeatEndDayOfWeek = function () {
        return this.repeatEndDayOfWeek;
    };
    UpdateEventMasterRequest.prototype.setRepeatEndDayOfWeek = function (repeatEndDayOfWeek) {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    };
    UpdateEventMasterRequest.prototype.withRepeatEndDayOfWeek = function (repeatEndDayOfWeek) {
        this.repeatEndDayOfWeek = repeatEndDayOfWeek;
        return this;
    };
    UpdateEventMasterRequest.prototype.getRepeatBeginHour = function () {
        return this.repeatBeginHour;
    };
    UpdateEventMasterRequest.prototype.setRepeatBeginHour = function (repeatBeginHour) {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    };
    UpdateEventMasterRequest.prototype.withRepeatBeginHour = function (repeatBeginHour) {
        this.repeatBeginHour = repeatBeginHour;
        return this;
    };
    UpdateEventMasterRequest.prototype.getRepeatEndHour = function () {
        return this.repeatEndHour;
    };
    UpdateEventMasterRequest.prototype.setRepeatEndHour = function (repeatEndHour) {
        this.repeatEndHour = repeatEndHour;
        return this;
    };
    UpdateEventMasterRequest.prototype.withRepeatEndHour = function (repeatEndHour) {
        this.repeatEndHour = repeatEndHour;
        return this;
    };
    UpdateEventMasterRequest.prototype.getRelativeTriggerName = function () {
        return this.relativeTriggerName;
    };
    UpdateEventMasterRequest.prototype.setRelativeTriggerName = function (relativeTriggerName) {
        this.relativeTriggerName = relativeTriggerName;
        return this;
    };
    UpdateEventMasterRequest.prototype.withRelativeTriggerName = function (relativeTriggerName) {
        this.relativeTriggerName = relativeTriggerName;
        return this;
    };
    UpdateEventMasterRequest.fromDict = function (data) {
        return new UpdateEventMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withEventName(data["eventName"])
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
            .withRelativeTriggerName(data["relativeTriggerName"]);
    };
    UpdateEventMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "eventName": this.getEventName(),
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
        };
    };
    return UpdateEventMasterRequest;
}());
exports.default = UpdateEventMasterRequest;
//# sourceMappingURL=UpdateEventMasterRequest.js.map