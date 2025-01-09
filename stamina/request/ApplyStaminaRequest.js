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
var ApplyStaminaRequest = /** @class */ (function () {
    function ApplyStaminaRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.accessToken = null;
        this.duplicationAvoider = null;
    }
    ApplyStaminaRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ApplyStaminaRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ApplyStaminaRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ApplyStaminaRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ApplyStaminaRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ApplyStaminaRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ApplyStaminaRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ApplyStaminaRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ApplyStaminaRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ApplyStaminaRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    ApplyStaminaRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    ApplyStaminaRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    ApplyStaminaRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ApplyStaminaRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ApplyStaminaRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ApplyStaminaRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ApplyStaminaRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ApplyStaminaRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ApplyStaminaRequest.fromDict = function (data) {
        return new ApplyStaminaRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withAccessToken(data["accessToken"]);
    };
    ApplyStaminaRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return ApplyStaminaRequest;
}());
exports.default = ApplyStaminaRequest;
//# sourceMappingURL=ApplyStaminaRequest.js.map