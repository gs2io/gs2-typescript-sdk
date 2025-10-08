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
var RecoverStaminaByUserIdRequest = /** @class */ (function () {
    function RecoverStaminaByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.userId = null;
        this.recoverValue = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    RecoverStaminaByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RecoverStaminaByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RecoverStaminaByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RecoverStaminaByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    RecoverStaminaByUserIdRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RecoverStaminaByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.getRecoverValue = function () {
        return this.recoverValue;
    };
    RecoverStaminaByUserIdRequest.prototype.setRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.withRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    RecoverStaminaByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RecoverStaminaByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RecoverStaminaByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RecoverStaminaByUserIdRequest.fromDict = function (data) {
        return new RecoverStaminaByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withUserId(data["userId"])
            .withRecoverValue(data["recoverValue"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    RecoverStaminaByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "userId": this.getUserId(),
            "recoverValue": this.getRecoverValue(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return RecoverStaminaByUserIdRequest;
}());
exports.default = RecoverStaminaByUserIdRequest;
//# sourceMappingURL=RecoverStaminaByUserIdRequest.js.map