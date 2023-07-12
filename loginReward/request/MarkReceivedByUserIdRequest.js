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
var MarkReceivedByUserIdRequest = /** @class */ (function () {
    function MarkReceivedByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
        this.userId = null;
        this.stepNumber = null;
        this.duplicationAvoider = null;
    }
    MarkReceivedByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    MarkReceivedByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    MarkReceivedByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    MarkReceivedByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    MarkReceivedByUserIdRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    MarkReceivedByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.getStepNumber = function () {
        return this.stepNumber;
    };
    MarkReceivedByUserIdRequest.prototype.setStepNumber = function (stepNumber) {
        this.stepNumber = stepNumber;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.withStepNumber = function (stepNumber) {
        this.stepNumber = stepNumber;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    MarkReceivedByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MarkReceivedByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MarkReceivedByUserIdRequest.fromDict = function (data) {
        return new MarkReceivedByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withUserId(data["userId"])
            .withStepNumber(data["stepNumber"]);
    };
    MarkReceivedByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "userId": this.getUserId(),
            "stepNumber": this.getStepNumber(),
        };
    };
    return MarkReceivedByUserIdRequest;
}());
exports.default = MarkReceivedByUserIdRequest;
//# sourceMappingURL=MarkReceivedByUserIdRequest.js.map