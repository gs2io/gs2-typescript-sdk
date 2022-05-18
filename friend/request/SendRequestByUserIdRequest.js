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
var SendRequestByUserIdRequest = /** @class */ (function () {
    function SendRequestByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.targetUserId = null;
        this.duplicationAvoider = null;
    }
    SendRequestByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SendRequestByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendRequestByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendRequestByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SendRequestByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendRequestByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendRequestByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SendRequestByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendRequestByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendRequestByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SendRequestByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendRequestByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendRequestByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    SendRequestByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    SendRequestByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    SendRequestByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SendRequestByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SendRequestByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SendRequestByUserIdRequest.fromDict = function (data) {
        return new SendRequestByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"]);
    };
    SendRequestByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return SendRequestByUserIdRequest;
}());
exports.default = SendRequestByUserIdRequest;
//# sourceMappingURL=SendRequestByUserIdRequest.js.map