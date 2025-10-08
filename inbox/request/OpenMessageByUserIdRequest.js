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
var OpenMessageByUserIdRequest = /** @class */ (function () {
    function OpenMessageByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.messageName = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    OpenMessageByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    OpenMessageByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    OpenMessageByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    OpenMessageByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    OpenMessageByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.getMessageName = function () {
        return this.messageName;
    };
    OpenMessageByUserIdRequest.prototype.setMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.withMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    OpenMessageByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    OpenMessageByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    OpenMessageByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    OpenMessageByUserIdRequest.fromDict = function (data) {
        return new OpenMessageByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMessageName(data["messageName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    OpenMessageByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "messageName": this.getMessageName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return OpenMessageByUserIdRequest;
}());
exports.default = OpenMessageByUserIdRequest;
//# sourceMappingURL=OpenMessageByUserIdRequest.js.map