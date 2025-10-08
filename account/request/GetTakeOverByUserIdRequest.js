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
var GetTakeOverByUserIdRequest = /** @class */ (function () {
    function GetTakeOverByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.type = null;
        this.timeOffsetToken = null;
    }
    GetTakeOverByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetTakeOverByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTakeOverByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTakeOverByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetTakeOverByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTakeOverByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTakeOverByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetTakeOverByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTakeOverByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTakeOverByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetTakeOverByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetTakeOverByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetTakeOverByUserIdRequest.prototype.getType = function () {
        return this.type;
    };
    GetTakeOverByUserIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    GetTakeOverByUserIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    GetTakeOverByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetTakeOverByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetTakeOverByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetTakeOverByUserIdRequest.fromDict = function (data) {
        return new GetTakeOverByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetTakeOverByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetTakeOverByUserIdRequest;
}());
exports.default = GetTakeOverByUserIdRequest;
//# sourceMappingURL=GetTakeOverByUserIdRequest.js.map