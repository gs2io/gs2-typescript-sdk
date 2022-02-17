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
var UnregisterBlackListByUserIdRequest = /** @class */ (function () {
    function UnregisterBlackListByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.targetUserId = null;
    }
    UnregisterBlackListByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UnregisterBlackListByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnregisterBlackListByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnregisterBlackListByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UnregisterBlackListByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnregisterBlackListByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnregisterBlackListByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UnregisterBlackListByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnregisterBlackListByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnregisterBlackListByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UnregisterBlackListByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UnregisterBlackListByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UnregisterBlackListByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    UnregisterBlackListByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    UnregisterBlackListByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    UnregisterBlackListByUserIdRequest.fromDict = function (data) {
        return new UnregisterBlackListByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"]);
    };
    UnregisterBlackListByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return UnregisterBlackListByUserIdRequest;
}());
exports.default = UnregisterBlackListByUserIdRequest;
//# sourceMappingURL=UnregisterBlackListByUserIdRequest.js.map