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
var MarkReceivedRequest = /** @class */ (function () {
    function MarkReceivedRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
        this.accessToken = null;
        this.stepNumber = null;
        this.duplicationAvoider = null;
    }
    MarkReceivedRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    MarkReceivedRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkReceivedRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkReceivedRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    MarkReceivedRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkReceivedRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkReceivedRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    MarkReceivedRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MarkReceivedRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MarkReceivedRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    MarkReceivedRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    MarkReceivedRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    MarkReceivedRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    MarkReceivedRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    MarkReceivedRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    MarkReceivedRequest.prototype.getStepNumber = function () {
        return this.stepNumber;
    };
    MarkReceivedRequest.prototype.setStepNumber = function (stepNumber) {
        this.stepNumber = stepNumber;
        return this;
    };
    MarkReceivedRequest.prototype.withStepNumber = function (stepNumber) {
        this.stepNumber = stepNumber;
        return this;
    };
    MarkReceivedRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    MarkReceivedRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MarkReceivedRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MarkReceivedRequest.fromDict = function (data) {
        return new MarkReceivedRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withAccessToken(data["accessToken"])
            .withStepNumber(data["stepNumber"]);
    };
    MarkReceivedRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "accessToken": this.getAccessToken(),
            "stepNumber": this.getStepNumber(),
        };
    };
    return MarkReceivedRequest;
}());
exports.default = MarkReceivedRequest;
//# sourceMappingURL=MarkReceivedRequest.js.map