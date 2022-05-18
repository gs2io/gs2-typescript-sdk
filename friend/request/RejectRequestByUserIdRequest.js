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
var RejectRequestByUserIdRequest = /** @class */ (function () {
    function RejectRequestByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.fromUserId = null;
        this.duplicationAvoider = null;
    }
    RejectRequestByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RejectRequestByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RejectRequestByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RejectRequestByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RejectRequestByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RejectRequestByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RejectRequestByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RejectRequestByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RejectRequestByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RejectRequestByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RejectRequestByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RejectRequestByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RejectRequestByUserIdRequest.prototype.getFromUserId = function () {
        return this.fromUserId;
    };
    RejectRequestByUserIdRequest.prototype.setFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    RejectRequestByUserIdRequest.prototype.withFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    RejectRequestByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RejectRequestByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RejectRequestByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RejectRequestByUserIdRequest.fromDict = function (data) {
        return new RejectRequestByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withFromUserId(data["fromUserId"]);
    };
    RejectRequestByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "fromUserId": this.getFromUserId(),
        };
    };
    return RejectRequestByUserIdRequest;
}());
exports.default = RejectRequestByUserIdRequest;
//# sourceMappingURL=RejectRequestByUserIdRequest.js.map