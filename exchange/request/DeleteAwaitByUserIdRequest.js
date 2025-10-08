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
var DeleteAwaitByUserIdRequest = /** @class */ (function () {
    function DeleteAwaitByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.awaitName = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DeleteAwaitByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteAwaitByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteAwaitByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteAwaitByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteAwaitByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.getAwaitName = function () {
        return this.awaitName;
    };
    DeleteAwaitByUserIdRequest.prototype.setAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.withAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeleteAwaitByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteAwaitByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteAwaitByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteAwaitByUserIdRequest.fromDict = function (data) {
        return new DeleteAwaitByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withAwaitName(data["awaitName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeleteAwaitByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "awaitName": this.getAwaitName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DeleteAwaitByUserIdRequest;
}());
exports.default = DeleteAwaitByUserIdRequest;
//# sourceMappingURL=DeleteAwaitByUserIdRequest.js.map