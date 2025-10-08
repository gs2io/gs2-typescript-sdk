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
var DecreaseMaxValueRequest = /** @class */ (function () {
    function DecreaseMaxValueRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.accessToken = null;
        this.decreaseValue = null;
        this.duplicationAvoider = null;
    }
    DecreaseMaxValueRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecreaseMaxValueRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaxValueRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaxValueRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecreaseMaxValueRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaxValueRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaxValueRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DecreaseMaxValueRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseMaxValueRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseMaxValueRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    DecreaseMaxValueRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    DecreaseMaxValueRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    DecreaseMaxValueRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DecreaseMaxValueRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DecreaseMaxValueRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DecreaseMaxValueRequest.prototype.getDecreaseValue = function () {
        return this.decreaseValue;
    };
    DecreaseMaxValueRequest.prototype.setDecreaseValue = function (decreaseValue) {
        this.decreaseValue = decreaseValue;
        return this;
    };
    DecreaseMaxValueRequest.prototype.withDecreaseValue = function (decreaseValue) {
        this.decreaseValue = decreaseValue;
        return this;
    };
    DecreaseMaxValueRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DecreaseMaxValueRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseMaxValueRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseMaxValueRequest.fromDict = function (data) {
        return new DecreaseMaxValueRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withAccessToken(data["accessToken"])
            .withDecreaseValue(data["decreaseValue"]);
    };
    DecreaseMaxValueRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "accessToken": this.getAccessToken(),
            "decreaseValue": this.getDecreaseValue(),
        };
    };
    return DecreaseMaxValueRequest;
}());
exports.default = DecreaseMaxValueRequest;
//# sourceMappingURL=DecreaseMaxValueRequest.js.map