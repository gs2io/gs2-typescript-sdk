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
var ExtendTriggerByUserIdRequest = /** @class */ (function () {
    function ExtendTriggerByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.triggerName = null;
        this.userId = null;
        this.extendSeconds = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    ExtendTriggerByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ExtendTriggerByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ExtendTriggerByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ExtendTriggerByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.getTriggerName = function () {
        return this.triggerName;
    };
    ExtendTriggerByUserIdRequest.prototype.setTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.withTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ExtendTriggerByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.getExtendSeconds = function () {
        return this.extendSeconds;
    };
    ExtendTriggerByUserIdRequest.prototype.setExtendSeconds = function (extendSeconds) {
        this.extendSeconds = extendSeconds;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.withExtendSeconds = function (extendSeconds) {
        this.extendSeconds = extendSeconds;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    ExtendTriggerByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ExtendTriggerByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ExtendTriggerByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ExtendTriggerByUserIdRequest.fromDict = function (data) {
        return new ExtendTriggerByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withTriggerName(data["triggerName"])
            .withUserId(data["userId"])
            .withExtendSeconds(data["extendSeconds"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    ExtendTriggerByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "triggerName": this.getTriggerName(),
            "userId": this.getUserId(),
            "extendSeconds": this.getExtendSeconds(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return ExtendTriggerByUserIdRequest;
}());
exports.default = ExtendTriggerByUserIdRequest;
//# sourceMappingURL=ExtendTriggerByUserIdRequest.js.map