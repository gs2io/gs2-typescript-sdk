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
var GetMessageByUserIdRequest = /** @class */ (function () {
    function GetMessageByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.messageName = null;
    }
    GetMessageByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMessageByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMessageByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMessageByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMessageByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMessageByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMessageByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMessageByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMessageByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMessageByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetMessageByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetMessageByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetMessageByUserIdRequest.prototype.getMessageName = function () {
        return this.messageName;
    };
    GetMessageByUserIdRequest.prototype.setMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    GetMessageByUserIdRequest.prototype.withMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    GetMessageByUserIdRequest.fromDict = function (data) {
        return new GetMessageByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMessageName(data["messageName"]);
    };
    GetMessageByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "messageName": this.getMessageName(),
        };
    };
    return GetMessageByUserIdRequest;
}());
exports.default = GetMessageByUserIdRequest;
//# sourceMappingURL=GetMessageByUserIdRequest.js.map