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
var SetRecoverValueByUserIdRequest = /** @class */ (function () {
    function SetRecoverValueByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.userId = null;
        this.recoverValue = null;
        this.duplicationAvoider = null;
    }
    SetRecoverValueByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetRecoverValueByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetRecoverValueByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetRecoverValueByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    SetRecoverValueByUserIdRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetRecoverValueByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.getRecoverValue = function () {
        return this.recoverValue;
    };
    SetRecoverValueByUserIdRequest.prototype.setRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.withRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetRecoverValueByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetRecoverValueByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetRecoverValueByUserIdRequest.fromDict = function (data) {
        return new SetRecoverValueByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withUserId(data["userId"])
            .withRecoverValue(data["recoverValue"]);
    };
    SetRecoverValueByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "userId": this.getUserId(),
            "recoverValue": this.getRecoverValue(),
        };
    };
    return SetRecoverValueByUserIdRequest;
}());
exports.default = SetRecoverValueByUserIdRequest;
//# sourceMappingURL=SetRecoverValueByUserIdRequest.js.map