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
var VerifyStaminaMaxValueRequest = /** @class */ (function () {
    function VerifyStaminaMaxValueRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.staminaName = null;
        this.verifyType = null;
        this.value = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyStaminaMaxValueRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStaminaMaxValueRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStaminaMaxValueRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyStaminaMaxValueRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyStaminaMaxValueRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    VerifyStaminaMaxValueRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyStaminaMaxValueRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.getValue = function () {
        return this.value;
    };
    VerifyStaminaMaxValueRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyStaminaMaxValueRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyStaminaMaxValueRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStaminaMaxValueRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStaminaMaxValueRequest.fromDict = function (data) {
        return new VerifyStaminaMaxValueRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withStaminaName(data["staminaName"])
            .withVerifyType(data["verifyType"])
            .withValue(data["value"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyStaminaMaxValueRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "staminaName": this.getStaminaName(),
            "verifyType": this.getVerifyType(),
            "value": this.getValue(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyStaminaMaxValueRequest;
}());
exports.default = VerifyStaminaMaxValueRequest;
//# sourceMappingURL=VerifyStaminaMaxValueRequest.js.map