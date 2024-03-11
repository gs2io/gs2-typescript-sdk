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
var DecreaseMaxValueByUserIdRequest = /** @class */ (function () {
    function DecreaseMaxValueByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.userId = null;
        this.decreaseValue = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DecreaseMaxValueByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecreaseMaxValueByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecreaseMaxValueByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DecreaseMaxValueByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    DecreaseMaxValueByUserIdRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DecreaseMaxValueByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.getDecreaseValue = function () {
        return this.decreaseValue;
    };
    DecreaseMaxValueByUserIdRequest.prototype.setDecreaseValue = function (decreaseValue) {
        this.decreaseValue = decreaseValue;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.withDecreaseValue = function (decreaseValue) {
        this.decreaseValue = decreaseValue;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DecreaseMaxValueByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DecreaseMaxValueByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseMaxValueByUserIdRequest.fromDict = function (data) {
        return new DecreaseMaxValueByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withUserId(data["userId"])
            .withDecreaseValue(data["decreaseValue"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DecreaseMaxValueByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "userId": this.getUserId(),
            "decreaseValue": this.getDecreaseValue(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DecreaseMaxValueByUserIdRequest;
}());
exports.default = DecreaseMaxValueByUserIdRequest;
//# sourceMappingURL=DecreaseMaxValueByUserIdRequest.js.map