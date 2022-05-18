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
var RunByUserIdRequest = /** @class */ (function () {
    function RunByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.duplicationAvoider = null;
    }
    RunByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RunByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RunByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RunByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RunByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RunByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RunByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RunByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RunByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RunByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RunByUserIdRequest.fromDict = function (data) {
        return new RunByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"]);
    };
    RunByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
        };
    };
    return RunByUserIdRequest;
}());
exports.default = RunByUserIdRequest;
//# sourceMappingURL=RunByUserIdRequest.js.map