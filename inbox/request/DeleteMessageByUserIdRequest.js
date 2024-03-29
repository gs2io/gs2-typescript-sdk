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
var DeleteMessageByUserIdRequest = /** @class */ (function () {
    function DeleteMessageByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.messageName = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DeleteMessageByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteMessageByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteMessageByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteMessageByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteMessageByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.getMessageName = function () {
        return this.messageName;
    };
    DeleteMessageByUserIdRequest.prototype.setMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.withMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeleteMessageByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteMessageByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteMessageByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteMessageByUserIdRequest.fromDict = function (data) {
        return new DeleteMessageByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMessageName(data["messageName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeleteMessageByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "messageName": this.getMessageName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DeleteMessageByUserIdRequest;
}());
exports.default = DeleteMessageByUserIdRequest;
//# sourceMappingURL=DeleteMessageByUserIdRequest.js.map