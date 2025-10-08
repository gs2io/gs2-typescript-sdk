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
var StartStateMachineByUserIdRequest = /** @class */ (function () {
    function StartStateMachineByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.args = null;
        this.ttl = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    StartStateMachineByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    StartStateMachineByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    StartStateMachineByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    StartStateMachineByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    StartStateMachineByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.getArgs = function () {
        return this.args;
    };
    StartStateMachineByUserIdRequest.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.getTtl = function () {
        return this.ttl;
    };
    StartStateMachineByUserIdRequest.prototype.setTtl = function (ttl) {
        this.ttl = ttl;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.withTtl = function (ttl) {
        this.ttl = ttl;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    StartStateMachineByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    StartStateMachineByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    StartStateMachineByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    StartStateMachineByUserIdRequest.fromDict = function (data) {
        return new StartStateMachineByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withArgs(data["args"])
            .withTtl(data["ttl"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    StartStateMachineByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "args": this.getArgs(),
            "ttl": this.getTtl(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return StartStateMachineByUserIdRequest;
}());
exports.default = StartStateMachineByUserIdRequest;
//# sourceMappingURL=StartStateMachineByUserIdRequest.js.map