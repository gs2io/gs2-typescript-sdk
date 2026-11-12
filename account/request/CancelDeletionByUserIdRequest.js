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
var CancelDeletionByUserIdRequest = /** @class */ (function () {
    function CancelDeletionByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    CancelDeletionByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CancelDeletionByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CancelDeletionByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CancelDeletionByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CancelDeletionByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CancelDeletionByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CancelDeletionByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CancelDeletionByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CancelDeletionByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CancelDeletionByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CancelDeletionByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CancelDeletionByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CancelDeletionByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CancelDeletionByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CancelDeletionByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CancelDeletionByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CancelDeletionByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CancelDeletionByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CancelDeletionByUserIdRequest.fromDict = function (data) {
        return new CancelDeletionByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CancelDeletionByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CancelDeletionByUserIdRequest;
}());
exports.default = CancelDeletionByUserIdRequest;
//# sourceMappingURL=CancelDeletionByUserIdRequest.js.map