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
var UpdateStaminaByUserIdRequest = /** @class */ (function () {
    function UpdateStaminaByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.userId = null;
        this.value = null;
        this.maxValue = null;
        this.recoverIntervalMinutes = null;
        this.recoverValue = null;
        this.duplicationAvoider = null;
    }
    UpdateStaminaByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateStaminaByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateStaminaByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateStaminaByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    UpdateStaminaByUserIdRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UpdateStaminaByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.getValue = function () {
        return this.value;
    };
    UpdateStaminaByUserIdRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.getMaxValue = function () {
        return this.maxValue;
    };
    UpdateStaminaByUserIdRequest.prototype.setMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.withMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.getRecoverIntervalMinutes = function () {
        return this.recoverIntervalMinutes;
    };
    UpdateStaminaByUserIdRequest.prototype.setRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.withRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.getRecoverValue = function () {
        return this.recoverValue;
    };
    UpdateStaminaByUserIdRequest.prototype.setRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.withRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateStaminaByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateStaminaByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateStaminaByUserIdRequest.fromDict = function (data) {
        return new UpdateStaminaByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withUserId(data["userId"])
            .withValue(data["value"])
            .withMaxValue(data["maxValue"])
            .withRecoverIntervalMinutes(data["recoverIntervalMinutes"])
            .withRecoverValue(data["recoverValue"]);
    };
    UpdateStaminaByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "userId": this.getUserId(),
            "value": this.getValue(),
            "maxValue": this.getMaxValue(),
            "recoverIntervalMinutes": this.getRecoverIntervalMinutes(),
            "recoverValue": this.getRecoverValue(),
        };
    };
    return UpdateStaminaByUserIdRequest;
}());
exports.default = UpdateStaminaByUserIdRequest;
//# sourceMappingURL=UpdateStaminaByUserIdRequest.js.map