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
var VerifyTriggerRequest = /** @class */ (function () {
    function VerifyTriggerRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.triggerName = null;
        this.verifyType = null;
        this.elapsedMinutes = null;
        this.duplicationAvoider = null;
    }
    VerifyTriggerRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyTriggerRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyTriggerRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyTriggerRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyTriggerRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyTriggerRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyTriggerRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyTriggerRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyTriggerRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyTriggerRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyTriggerRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyTriggerRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyTriggerRequest.prototype.getTriggerName = function () {
        return this.triggerName;
    };
    VerifyTriggerRequest.prototype.setTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    VerifyTriggerRequest.prototype.withTriggerName = function (triggerName) {
        this.triggerName = triggerName;
        return this;
    };
    VerifyTriggerRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyTriggerRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyTriggerRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyTriggerRequest.prototype.getElapsedMinutes = function () {
        return this.elapsedMinutes;
    };
    VerifyTriggerRequest.prototype.setElapsedMinutes = function (elapsedMinutes) {
        this.elapsedMinutes = elapsedMinutes;
        return this;
    };
    VerifyTriggerRequest.prototype.withElapsedMinutes = function (elapsedMinutes) {
        this.elapsedMinutes = elapsedMinutes;
        return this;
    };
    VerifyTriggerRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyTriggerRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyTriggerRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyTriggerRequest.fromDict = function (data) {
        return new VerifyTriggerRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTriggerName(data["triggerName"])
            .withVerifyType(data["verifyType"])
            .withElapsedMinutes(data["elapsedMinutes"]);
    };
    VerifyTriggerRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "triggerName": this.getTriggerName(),
            "verifyType": this.getVerifyType(),
            "elapsedMinutes": this.getElapsedMinutes(),
        };
    };
    return VerifyTriggerRequest;
}());
exports.default = VerifyTriggerRequest;
//# sourceMappingURL=VerifyTriggerRequest.js.map