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
var VerifyStaminaOverflowValueByUserIdRequest = /** @class */ (function () {
    function VerifyStaminaOverflowValueByUserIdRequest() {
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
    VerifyStaminaOverflowValueByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.getValue = function () {
        return this.value;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStaminaOverflowValueByUserIdRequest.fromDict = function (data) {
        return new VerifyStaminaOverflowValueByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withStaminaName(data["staminaName"])
            .withVerifyType(data["verifyType"])
            .withValue(data["value"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyStaminaOverflowValueByUserIdRequest.prototype.toDict = function () {
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
    return VerifyStaminaOverflowValueByUserIdRequest;
}());
exports.default = VerifyStaminaOverflowValueByUserIdRequest;
//# sourceMappingURL=VerifyStaminaOverflowValueByUserIdRequest.js.map