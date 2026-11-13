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
var IssueTakeOverCodeByUserIdRequest = /** @class */ (function () {
    function IssueTakeOverCodeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.type = null;
        this.timeOffsetToken = null;
    }
    IssueTakeOverCodeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.getType = function () {
        return this.type;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    IssueTakeOverCodeByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    IssueTakeOverCodeByUserIdRequest.fromDict = function (data) {
        return new IssueTakeOverCodeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    IssueTakeOverCodeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return IssueTakeOverCodeByUserIdRequest;
}());
exports.default = IssueTakeOverCodeByUserIdRequest;
//# sourceMappingURL=IssueTakeOverCodeByUserIdRequest.js.map