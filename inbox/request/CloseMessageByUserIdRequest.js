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
var CloseMessageByUserIdRequest = /** @class */ (function () {
    function CloseMessageByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.messageName = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    CloseMessageByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CloseMessageByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CloseMessageByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CloseMessageByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CloseMessageByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.getMessageName = function () {
        return this.messageName;
    };
    CloseMessageByUserIdRequest.prototype.setMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.withMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CloseMessageByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CloseMessageByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CloseMessageByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CloseMessageByUserIdRequest.fromDict = function (data) {
        return new CloseMessageByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMessageName(data["messageName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CloseMessageByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "messageName": this.getMessageName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CloseMessageByUserIdRequest;
}());
exports.default = CloseMessageByUserIdRequest;
//# sourceMappingURL=CloseMessageByUserIdRequest.js.map