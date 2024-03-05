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
var VerifyCounterByUserIdRequest = /** @class */ (function () {
    function VerifyCounterByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.limitName = null;
        this.counterName = null;
        this.verifyType = null;
        this.count = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyCounterByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCounterByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCounterByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyCounterByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyCounterByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    VerifyCounterByUserIdRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    VerifyCounterByUserIdRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyCounterByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifyCounterByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyCounterByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyCounterByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCounterByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCounterByUserIdRequest.fromDict = function (data) {
        return new VerifyCounterByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withLimitName(data["limitName"])
            .withCounterName(data["counterName"])
            .withVerifyType(data["verifyType"])
            .withCount(data["count"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyCounterByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "limitName": this.getLimitName(),
            "counterName": this.getCounterName(),
            "verifyType": this.getVerifyType(),
            "count": this.getCount(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyCounterByUserIdRequest;
}());
exports.default = VerifyCounterByUserIdRequest;
//# sourceMappingURL=VerifyCounterByUserIdRequest.js.map