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
var CancelDeletionRequest = /** @class */ (function () {
    function CancelDeletionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.password = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    CancelDeletionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CancelDeletionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CancelDeletionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CancelDeletionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CancelDeletionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CancelDeletionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CancelDeletionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CancelDeletionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CancelDeletionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CancelDeletionRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CancelDeletionRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CancelDeletionRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CancelDeletionRequest.prototype.getPassword = function () {
        return this.password;
    };
    CancelDeletionRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    CancelDeletionRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    CancelDeletionRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CancelDeletionRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CancelDeletionRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CancelDeletionRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CancelDeletionRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CancelDeletionRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CancelDeletionRequest.fromDict = function (data) {
        return new CancelDeletionRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPassword(data["password"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CancelDeletionRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "password": this.getPassword(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CancelDeletionRequest;
}());
exports.default = CancelDeletionRequest;
//# sourceMappingURL=CancelDeletionRequest.js.map