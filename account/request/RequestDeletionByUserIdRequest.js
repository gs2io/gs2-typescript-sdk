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
var RequestDeletionByUserIdRequest = /** @class */ (function () {
    function RequestDeletionByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    RequestDeletionByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RequestDeletionByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RequestDeletionByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RequestDeletionByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RequestDeletionByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RequestDeletionByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RequestDeletionByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RequestDeletionByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RequestDeletionByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RequestDeletionByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RequestDeletionByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RequestDeletionByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RequestDeletionByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    RequestDeletionByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RequestDeletionByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RequestDeletionByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RequestDeletionByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RequestDeletionByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RequestDeletionByUserIdRequest.fromDict = function (data) {
        return new RequestDeletionByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    RequestDeletionByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return RequestDeletionByUserIdRequest;
}());
exports.default = RequestDeletionByUserIdRequest;
//# sourceMappingURL=RequestDeletionByUserIdRequest.js.map