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
var VerifyStaminaRecoverIntervalMinutesByUserIdRequest = /** @class */ (function () {
    function VerifyStaminaRecoverIntervalMinutesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.staminaName = null;
        this.verifyType = null;
        this.value = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.getValue = function () {
        return this.value;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.fromDict = function (data) {
        return new VerifyStaminaRecoverIntervalMinutesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withStaminaName(data["staminaName"])
            .withVerifyType(data["verifyType"])
            .withValue(data["value"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyStaminaRecoverIntervalMinutesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "staminaName": this.getStaminaName(),
            "verifyType": this.getVerifyType(),
            "value": this.getValue(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyStaminaRecoverIntervalMinutesByUserIdRequest;
}());
exports.default = VerifyStaminaRecoverIntervalMinutesByUserIdRequest;
//# sourceMappingURL=VerifyStaminaRecoverIntervalMinutesByUserIdRequest.js.map