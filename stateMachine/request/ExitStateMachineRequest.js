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
var ExitStateMachineRequest = /** @class */ (function () {
    function ExitStateMachineRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.statusName = null;
        this.duplicationAvoider = null;
    }
    ExitStateMachineRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ExitStateMachineRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ExitStateMachineRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ExitStateMachineRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ExitStateMachineRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ExitStateMachineRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ExitStateMachineRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ExitStateMachineRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExitStateMachineRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExitStateMachineRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ExitStateMachineRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ExitStateMachineRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ExitStateMachineRequest.prototype.getStatusName = function () {
        return this.statusName;
    };
    ExitStateMachineRequest.prototype.setStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    ExitStateMachineRequest.prototype.withStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    ExitStateMachineRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ExitStateMachineRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ExitStateMachineRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ExitStateMachineRequest.fromDict = function (data) {
        return new ExitStateMachineRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withStatusName(data["statusName"]);
    };
    ExitStateMachineRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "statusName": this.getStatusName(),
        };
    };
    return ExitStateMachineRequest;
}());
exports.default = ExitStateMachineRequest;
//# sourceMappingURL=ExitStateMachineRequest.js.map