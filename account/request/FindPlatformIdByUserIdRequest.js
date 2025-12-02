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
var FindPlatformIdByUserIdRequest = /** @class */ (function () {
    function FindPlatformIdByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.type = null;
        this.userIdentifier = null;
        this.dontResolveDataOwner = null;
        this.timeOffsetToken = null;
    }
    FindPlatformIdByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    FindPlatformIdByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    FindPlatformIdByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    FindPlatformIdByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    FindPlatformIdByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.getType = function () {
        return this.type;
    };
    FindPlatformIdByUserIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    FindPlatformIdByUserIdRequest.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.getDontResolveDataOwner = function () {
        return this.dontResolveDataOwner;
    };
    FindPlatformIdByUserIdRequest.prototype.setDontResolveDataOwner = function (dontResolveDataOwner) {
        this.dontResolveDataOwner = dontResolveDataOwner;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.withDontResolveDataOwner = function (dontResolveDataOwner) {
        this.dontResolveDataOwner = dontResolveDataOwner;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    FindPlatformIdByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    FindPlatformIdByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    FindPlatformIdByUserIdRequest.fromDict = function (data) {
        return new FindPlatformIdByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"])
            .withDontResolveDataOwner(data["dontResolveDataOwner"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    FindPlatformIdByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
            "dontResolveDataOwner": this.getDontResolveDataOwner(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return FindPlatformIdByUserIdRequest;
}());
exports.default = FindPlatformIdByUserIdRequest;
//# sourceMappingURL=FindPlatformIdByUserIdRequest.js.map