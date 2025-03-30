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
var VerifyStaminaMaxValueByUserIdRequest = /** @class */ (function () {
    function VerifyStaminaMaxValueByUserIdRequest() {
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
    VerifyStaminaMaxValueByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.getValue = function () {
        return this.value;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStaminaMaxValueByUserIdRequest.fromDict = function (data) {
        return new VerifyStaminaMaxValueByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withStaminaName(data["staminaName"])
            .withVerifyType(data["verifyType"])
            .withValue(data["value"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyStaminaMaxValueByUserIdRequest.prototype.toDict = function () {
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
    return VerifyStaminaMaxValueByUserIdRequest;
}());
exports.default = VerifyStaminaMaxValueByUserIdRequest;
//# sourceMappingURL=VerifyStaminaMaxValueByUserIdRequest.js.map