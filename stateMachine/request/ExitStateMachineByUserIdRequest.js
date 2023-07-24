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
var ExitStateMachineByUserIdRequest = /** @class */ (function () {
    function ExitStateMachineByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.statusName = null;
        this.duplicationAvoider = null;
    }
    ExitStateMachineByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ExitStateMachineByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ExitStateMachineByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ExitStateMachineByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ExitStateMachineByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ExitStateMachineByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ExitStateMachineByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ExitStateMachineByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExitStateMachineByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExitStateMachineByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ExitStateMachineByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExitStateMachineByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ExitStateMachineByUserIdRequest.prototype.getStatusName = function () {
        return this.statusName;
    };
    ExitStateMachineByUserIdRequest.prototype.setStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    ExitStateMachineByUserIdRequest.prototype.withStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    ExitStateMachineByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ExitStateMachineByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ExitStateMachineByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ExitStateMachineByUserIdRequest.fromDict = function (data) {
        return new ExitStateMachineByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withStatusName(data["statusName"]);
    };
    ExitStateMachineByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "statusName": this.getStatusName(),
        };
    };
    return ExitStateMachineByUserIdRequest;
}());
exports.default = ExitStateMachineByUserIdRequest;
//# sourceMappingURL=ExitStateMachineByUserIdRequest.js.map