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
var VerifyCounterValueByUserIdRequest = /** @class */ (function () {
    function VerifyCounterValueByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.counterName = null;
        this.verifyType = null;
        this.scopeType = null;
        this.resetType = null;
        this.conditionName = null;
        this.value = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyCounterValueByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCounterValueByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCounterValueByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyCounterValueByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyCounterValueByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    VerifyCounterValueByUserIdRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyCounterValueByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.getScopeType = function () {
        return this.scopeType;
    };
    VerifyCounterValueByUserIdRequest.prototype.setScopeType = function (scopeType) {
        this.scopeType = scopeType;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withScopeType = function (scopeType) {
        this.scopeType = scopeType;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.getResetType = function () {
        return this.resetType;
    };
    VerifyCounterValueByUserIdRequest.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.getConditionName = function () {
        return this.conditionName;
    };
    VerifyCounterValueByUserIdRequest.prototype.setConditionName = function (conditionName) {
        this.conditionName = conditionName;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withConditionName = function (conditionName) {
        this.conditionName = conditionName;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.getValue = function () {
        return this.value;
    };
    VerifyCounterValueByUserIdRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyCounterValueByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyCounterValueByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyCounterValueByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCounterValueByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCounterValueByUserIdRequest.fromDict = function (data) {
        return new VerifyCounterValueByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withCounterName(data["counterName"])
            .withVerifyType(data["verifyType"])
            .withScopeType(data["scopeType"])
            .withResetType(data["resetType"])
            .withConditionName(data["conditionName"])
            .withValue(data["value"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyCounterValueByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "counterName": this.getCounterName(),
            "verifyType": this.getVerifyType(),
            "scopeType": this.getScopeType(),
            "resetType": this.getResetType(),
            "conditionName": this.getConditionName(),
            "value": this.getValue(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyCounterValueByUserIdRequest;
}());
exports.default = VerifyCounterValueByUserIdRequest;
//# sourceMappingURL=VerifyCounterValueByUserIdRequest.js.map