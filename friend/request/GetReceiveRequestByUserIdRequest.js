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
var GetReceiveRequestByUserIdRequest = /** @class */ (function () {
    function GetReceiveRequestByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.fromUserId = null;
    }
    GetReceiveRequestByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetReceiveRequestByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReceiveRequestByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReceiveRequestByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetReceiveRequestByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReceiveRequestByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReceiveRequestByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetReceiveRequestByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReceiveRequestByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReceiveRequestByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetReceiveRequestByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetReceiveRequestByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetReceiveRequestByUserIdRequest.prototype.getFromUserId = function () {
        return this.fromUserId;
    };
    GetReceiveRequestByUserIdRequest.prototype.setFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    GetReceiveRequestByUserIdRequest.prototype.withFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    GetReceiveRequestByUserIdRequest.fromDict = function (data) {
        return new GetReceiveRequestByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withFromUserId(data["fromUserId"]);
    };
    GetReceiveRequestByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "fromUserId": this.getFromUserId(),
        };
    };
    return GetReceiveRequestByUserIdRequest;
}());
exports.default = GetReceiveRequestByUserIdRequest;
//# sourceMappingURL=GetReceiveRequestByUserIdRequest.js.map