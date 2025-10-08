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
var SetRecoverIntervalByUserIdRequest = /** @class */ (function () {
    function SetRecoverIntervalByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.userId = null;
        this.recoverIntervalMinutes = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SetRecoverIntervalByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetRecoverIntervalByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetRecoverIntervalByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetRecoverIntervalByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    SetRecoverIntervalByUserIdRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetRecoverIntervalByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.getRecoverIntervalMinutes = function () {
        return this.recoverIntervalMinutes;
    };
    SetRecoverIntervalByUserIdRequest.prototype.setRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.withRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SetRecoverIntervalByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetRecoverIntervalByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetRecoverIntervalByUserIdRequest.fromDict = function (data) {
        return new SetRecoverIntervalByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withUserId(data["userId"])
            .withRecoverIntervalMinutes(data["recoverIntervalMinutes"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SetRecoverIntervalByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "userId": this.getUserId(),
            "recoverIntervalMinutes": this.getRecoverIntervalMinutes(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SetRecoverIntervalByUserIdRequest;
}());
exports.default = SetRecoverIntervalByUserIdRequest;
//# sourceMappingURL=SetRecoverIntervalByUserIdRequest.js.map