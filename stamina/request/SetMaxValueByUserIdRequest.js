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
var SetMaxValueByUserIdRequest = /** @class */ (function () {
    function SetMaxValueByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.userId = null;
        this.maxValue = null;
        this.duplicationAvoider = null;
    }
    SetMaxValueByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetMaxValueByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetMaxValueByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetMaxValueByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    SetMaxValueByUserIdRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetMaxValueByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.getMaxValue = function () {
        return this.maxValue;
    };
    SetMaxValueByUserIdRequest.prototype.setMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.withMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetMaxValueByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetMaxValueByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetMaxValueByUserIdRequest.fromDict = function (data) {
        return new SetMaxValueByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withUserId(data["userId"])
            .withMaxValue(data["maxValue"]);
    };
    SetMaxValueByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "userId": this.getUserId(),
            "maxValue": this.getMaxValue(),
        };
    };
    return SetMaxValueByUserIdRequest;
}());
exports.default = SetMaxValueByUserIdRequest;
//# sourceMappingURL=SetMaxValueByUserIdRequest.js.map