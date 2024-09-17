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
var VerifyTriggerByUserIdRequest = /** @class */ (function () {
    function VerifyTriggerByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.triggerName = null;
        this.verifyType = null;
        this.elapsedMinutes = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyTriggerByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyTriggerByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyTriggerByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyTriggerByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyTriggerByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.getTriggerName = function () {
        return this.triggerName;
    };
    VerifyTriggerByUserIdRequest.prototype.setTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.withTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyTriggerByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.getElapsedMinutes = function () {
        return this.elapsedMinutes;
    };
    VerifyTriggerByUserIdRequest.prototype.setElapsedMinutes = function (elapsedMinutes) {
        this.elapsedMinutes = elapsedMinutes;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.withElapsedMinutes = function (elapsedMinutes) {
        this.elapsedMinutes = elapsedMinutes;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyTriggerByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyTriggerByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyTriggerByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyTriggerByUserIdRequest.fromDict = function (data) {
        return new VerifyTriggerByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTriggerName(data["triggerName"])
            .withVerifyType(data["verifyType"])
            .withElapsedMinutes(data["elapsedMinutes"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyTriggerByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "triggerName": this.getTriggerName(),
            "verifyType": this.getVerifyType(),
            "elapsedMinutes": this.getElapsedMinutes(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyTriggerByUserIdRequest;
}());
exports.default = VerifyTriggerByUserIdRequest;
//# sourceMappingURL=VerifyTriggerByUserIdRequest.js.map