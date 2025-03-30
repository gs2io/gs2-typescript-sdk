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
var VerifyStaminaRecoverValueByUserIdRequest = /** @class */ (function () {
    function VerifyStaminaRecoverValueByUserIdRequest() {
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
    VerifyStaminaRecoverValueByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.getValue = function () {
        return this.value;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStaminaRecoverValueByUserIdRequest.fromDict = function (data) {
        return new VerifyStaminaRecoverValueByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withStaminaName(data["staminaName"])
            .withVerifyType(data["verifyType"])
            .withValue(data["value"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyStaminaRecoverValueByUserIdRequest.prototype.toDict = function () {
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
    return VerifyStaminaRecoverValueByUserIdRequest;
}());
exports.default = VerifyStaminaRecoverValueByUserIdRequest;
//# sourceMappingURL=VerifyStaminaRecoverValueByUserIdRequest.js.map