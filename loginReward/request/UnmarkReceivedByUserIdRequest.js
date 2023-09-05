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
var UnmarkReceivedByUserIdRequest = /** @class */ (function () {
    function UnmarkReceivedByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
        this.userId = null;
        this.stepNumber = null;
        this.duplicationAvoider = null;
    }
    UnmarkReceivedByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UnmarkReceivedByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UnmarkReceivedByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UnmarkReceivedByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    UnmarkReceivedByUserIdRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UnmarkReceivedByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.getStepNumber = function () {
        return this.stepNumber;
    };
    UnmarkReceivedByUserIdRequest.prototype.setStepNumber = function (stepNumber) {
        this.stepNumber = stepNumber;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.withStepNumber = function (stepNumber) {
        this.stepNumber = stepNumber;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UnmarkReceivedByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnmarkReceivedByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnmarkReceivedByUserIdRequest.fromDict = function (data) {
        return new UnmarkReceivedByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withUserId(data["userId"])
            .withStepNumber(data["stepNumber"]);
    };
    UnmarkReceivedByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "userId": this.getUserId(),
            "stepNumber": this.getStepNumber(),
        };
    };
    return UnmarkReceivedByUserIdRequest;
}());
exports.default = UnmarkReceivedByUserIdRequest;
//# sourceMappingURL=UnmarkReceivedByUserIdRequest.js.map