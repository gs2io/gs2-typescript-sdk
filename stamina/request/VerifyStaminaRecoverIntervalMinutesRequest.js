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
var VerifyStaminaRecoverIntervalMinutesRequest = /** @class */ (function () {
    function VerifyStaminaRecoverIntervalMinutesRequest() {
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
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.getValue = function () {
        return this.value;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyStaminaRecoverIntervalMinutesRequest.fromDict = function (data) {
        return new VerifyStaminaRecoverIntervalMinutesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withStaminaName(data["staminaName"])
            .withVerifyType(data["verifyType"])
            .withValue(data["value"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyStaminaRecoverIntervalMinutesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "staminaName": this.getStaminaName(),
            "verifyType": this.getVerifyType(),
            "value": this.getValue(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyStaminaRecoverIntervalMinutesRequest;
}());
exports.default = VerifyStaminaRecoverIntervalMinutesRequest;
//# sourceMappingURL=VerifyStaminaRecoverIntervalMinutesRequest.js.map