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
var VerifyCounterValueRequest = /** @class */ (function () {
    function VerifyCounterValueRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.counterName = null;
        this.verifyType = null;
        this.resetType = null;
        this.value = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyCounterValueRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyCounterValueRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCounterValueRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyCounterValueRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyCounterValueRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCounterValueRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyCounterValueRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyCounterValueRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCounterValueRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyCounterValueRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyCounterValueRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyCounterValueRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyCounterValueRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    VerifyCounterValueRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    VerifyCounterValueRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    VerifyCounterValueRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyCounterValueRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCounterValueRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyCounterValueRequest.prototype.getResetType = function () {
        return this.resetType;
    };
    VerifyCounterValueRequest.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    VerifyCounterValueRequest.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    VerifyCounterValueRequest.prototype.getValue = function () {
        return this.value;
    };
    VerifyCounterValueRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyCounterValueRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyCounterValueRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyCounterValueRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCounterValueRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyCounterValueRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyCounterValueRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCounterValueRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyCounterValueRequest.fromDict = function (data) {
        return new VerifyCounterValueRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withCounterName(data["counterName"])
            .withVerifyType(data["verifyType"])
            .withResetType(data["resetType"])
            .withValue(data["value"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyCounterValueRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "counterName": this.getCounterName(),
            "verifyType": this.getVerifyType(),
            "resetType": this.getResetType(),
            "value": this.getValue(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyCounterValueRequest;
}());
exports.default = VerifyCounterValueRequest;
//# sourceMappingURL=VerifyCounterValueRequest.js.map