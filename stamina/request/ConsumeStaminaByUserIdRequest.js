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
var ConsumeStaminaByUserIdRequest = /** @class */ (function () {
    function ConsumeStaminaByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.userId = null;
        this.consumeValue = null;
        this.duplicationAvoider = null;
    }
    ConsumeStaminaByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ConsumeStaminaByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ConsumeStaminaByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ConsumeStaminaByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    ConsumeStaminaByUserIdRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ConsumeStaminaByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.getConsumeValue = function () {
        return this.consumeValue;
    };
    ConsumeStaminaByUserIdRequest.prototype.setConsumeValue = function (consumeValue) {
        this.consumeValue = consumeValue;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.withConsumeValue = function (consumeValue) {
        this.consumeValue = consumeValue;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ConsumeStaminaByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeStaminaByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ConsumeStaminaByUserIdRequest.fromDict = function (data) {
        return new ConsumeStaminaByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withUserId(data["userId"])
            .withConsumeValue(data["consumeValue"]);
    };
    ConsumeStaminaByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "userId": this.getUserId(),
            "consumeValue": this.getConsumeValue(),
        };
    };
    return ConsumeStaminaByUserIdRequest;
}());
exports.default = ConsumeStaminaByUserIdRequest;
//# sourceMappingURL=ConsumeStaminaByUserIdRequest.js.map