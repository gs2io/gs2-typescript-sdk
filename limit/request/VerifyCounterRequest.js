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
var VerifyCounterRequest = /** @class */ (function () {
    function VerifyCounterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.limitName = null;
        this.counterName = null;
        this.verifyType = null;
        this.count = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyCounterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCounterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCounterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCounterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCounterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCounterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCounterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyCounterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCounterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCounterRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyCounterRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyCounterRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyCounterRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    VerifyCounterRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    VerifyCounterRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    VerifyCounterRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    VerifyCounterRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    VerifyCounterRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    VerifyCounterRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyCounterRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCounterRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCounterRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifyCounterRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyCounterRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyCounterRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyCounterRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCounterRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCounterRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyCounterRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCounterRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCounterRequest.fromDict = function (data) {
        return new VerifyCounterRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withLimitName(data["limitName"])
            .withCounterName(data["counterName"])
            .withVerifyType(data["verifyType"])
            .withCount(data["count"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyCounterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "limitName": this.getLimitName(),
            "counterName": this.getCounterName(),
            "verifyType": this.getVerifyType(),
            "count": this.getCount(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyCounterRequest;
}());
exports.default = VerifyCounterRequest;
//# sourceMappingURL=VerifyCounterRequest.js.map