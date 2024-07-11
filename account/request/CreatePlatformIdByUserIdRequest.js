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
var CreatePlatformIdByUserIdRequest = /** @class */ (function () {
    function CreatePlatformIdByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.type = null;
        this.userIdentifier = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    CreatePlatformIdByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreatePlatformIdByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreatePlatformIdByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreatePlatformIdByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CreatePlatformIdByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.getType = function () {
        return this.type;
    };
    CreatePlatformIdByUserIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    CreatePlatformIdByUserIdRequest.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CreatePlatformIdByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreatePlatformIdByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreatePlatformIdByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreatePlatformIdByUserIdRequest.fromDict = function (data) {
        return new CreatePlatformIdByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CreatePlatformIdByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CreatePlatformIdByUserIdRequest;
}());
exports.default = CreatePlatformIdByUserIdRequest;
//# sourceMappingURL=CreatePlatformIdByUserIdRequest.js.map