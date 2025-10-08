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
var TriggerByUserIdRequest = /** @class */ (function () {
    function TriggerByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.triggerName = null;
        this.userId = null;
        this.triggerStrategy = null;
        this.ttl = null;
        this.eventId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    TriggerByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    TriggerByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    TriggerByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    TriggerByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    TriggerByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    TriggerByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    TriggerByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    TriggerByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    TriggerByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    TriggerByUserIdRequest.prototype.getTriggerName = function () {
        return this.triggerName;
    };
    TriggerByUserIdRequest.prototype.setTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    TriggerByUserIdRequest.prototype.withTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    TriggerByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    TriggerByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    TriggerByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    TriggerByUserIdRequest.prototype.getTriggerStrategy = function () {
        return this.triggerStrategy;
    };
    TriggerByUserIdRequest.prototype.setTriggerStrategy = function (triggerStrategy) {
        this.triggerStrategy = triggerStrategy;
        return this;
    };
    TriggerByUserIdRequest.prototype.withTriggerStrategy = function (triggerStrategy) {
        this.triggerStrategy = triggerStrategy;
        return this;
    };
    TriggerByUserIdRequest.prototype.getTtl = function () {
        return this.ttl;
    };
    TriggerByUserIdRequest.prototype.setTtl = function (ttl) {
        this.ttl = ttl;
        return this;
    };
    TriggerByUserIdRequest.prototype.withTtl = function (ttl) {
        this.ttl = ttl;
        return this;
    };
    TriggerByUserIdRequest.prototype.getEventId = function () {
        return this.eventId;
    };
    TriggerByUserIdRequest.prototype.setEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    TriggerByUserIdRequest.prototype.withEventId = function (eventId) {
        this.eventId = eventId;
        return this;
    };
    TriggerByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    TriggerByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    TriggerByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    TriggerByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    TriggerByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    TriggerByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    TriggerByUserIdRequest.fromDict = function (data) {
        return new TriggerByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withTriggerName(data["triggerName"])
            .withUserId(data["userId"])
            .withTriggerStrategy(data["triggerStrategy"])
            .withTtl(data["ttl"])
            .withEventId(data["eventId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    TriggerByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "triggerName": this.getTriggerName(),
            "userId": this.getUserId(),
            "triggerStrategy": this.getTriggerStrategy(),
            "ttl": this.getTtl(),
            "eventId": this.getEventId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return TriggerByUserIdRequest;
}());
exports.default = TriggerByUserIdRequest;
//# sourceMappingURL=TriggerByUserIdRequest.js.map