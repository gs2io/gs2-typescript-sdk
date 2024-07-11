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
var DeletePlatformIdByUserIdRequest = /** @class */ (function () {
    function DeletePlatformIdByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.type = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DeletePlatformIdByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeletePlatformIdByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeletePlatformIdByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeletePlatformIdByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeletePlatformIdByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.getType = function () {
        return this.type;
    };
    DeletePlatformIdByUserIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeletePlatformIdByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeletePlatformIdByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeletePlatformIdByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeletePlatformIdByUserIdRequest.fromDict = function (data) {
        return new DeletePlatformIdByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeletePlatformIdByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DeletePlatformIdByUserIdRequest;
}());
exports.default = DeletePlatformIdByUserIdRequest;
//# sourceMappingURL=DeletePlatformIdByUserIdRequest.js.map