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
var GetPlatformIdByUserIdRequest = /** @class */ (function () {
    function GetPlatformIdByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.type = null;
        this.timeOffsetToken = null;
    }
    GetPlatformIdByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPlatformIdByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPlatformIdByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPlatformIdByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPlatformIdByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPlatformIdByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPlatformIdByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPlatformIdByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPlatformIdByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPlatformIdByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetPlatformIdByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetPlatformIdByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetPlatformIdByUserIdRequest.prototype.getType = function () {
        return this.type;
    };
    GetPlatformIdByUserIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    GetPlatformIdByUserIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    GetPlatformIdByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetPlatformIdByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetPlatformIdByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetPlatformIdByUserIdRequest.fromDict = function (data) {
        return new GetPlatformIdByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetPlatformIdByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetPlatformIdByUserIdRequest;
}());
exports.default = GetPlatformIdByUserIdRequest;
//# sourceMappingURL=GetPlatformIdByUserIdRequest.js.map