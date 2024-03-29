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
var DeleteProfileByUserIdRequest = /** @class */ (function () {
    function DeleteProfileByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DeleteProfileByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteProfileByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteProfileByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteProfileByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteProfileByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteProfileByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteProfileByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteProfileByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteProfileByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteProfileByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteProfileByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteProfileByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteProfileByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeleteProfileByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteProfileByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteProfileByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteProfileByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteProfileByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteProfileByUserIdRequest.fromDict = function (data) {
        return new DeleteProfileByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeleteProfileByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DeleteProfileByUserIdRequest;
}());
exports.default = DeleteProfileByUserIdRequest;
//# sourceMappingURL=DeleteProfileByUserIdRequest.js.map