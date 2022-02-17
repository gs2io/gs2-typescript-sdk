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
var GetAwaitByUserIdRequest = /** @class */ (function () {
    function GetAwaitByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rateName = null;
        this.awaitName = null;
    }
    GetAwaitByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetAwaitByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAwaitByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAwaitByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetAwaitByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAwaitByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAwaitByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetAwaitByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAwaitByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAwaitByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetAwaitByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetAwaitByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetAwaitByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    GetAwaitByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetAwaitByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    GetAwaitByUserIdRequest.prototype.getAwaitName = function () {
        return this.awaitName;
    };
    GetAwaitByUserIdRequest.prototype.setAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    GetAwaitByUserIdRequest.prototype.withAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    GetAwaitByUserIdRequest.fromDict = function (data) {
        return new GetAwaitByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withAwaitName(data["awaitName"]);
    };
    GetAwaitByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "awaitName": this.getAwaitName(),
        };
    };
    return GetAwaitByUserIdRequest;
}());
exports.default = GetAwaitByUserIdRequest;
//# sourceMappingURL=GetAwaitByUserIdRequest.js.map