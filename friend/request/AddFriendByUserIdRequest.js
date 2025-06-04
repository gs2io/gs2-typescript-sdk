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
var AddFriendByUserIdRequest = /** @class */ (function () {
    function AddFriendByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.targetUserId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AddFriendByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddFriendByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddFriendByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddFriendByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddFriendByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddFriendByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddFriendByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddFriendByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddFriendByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddFriendByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AddFriendByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddFriendByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AddFriendByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    AddFriendByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    AddFriendByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    AddFriendByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AddFriendByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AddFriendByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AddFriendByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AddFriendByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddFriendByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddFriendByUserIdRequest.fromDict = function (data) {
        return new AddFriendByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AddFriendByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AddFriendByUserIdRequest;
}());
exports.default = AddFriendByUserIdRequest;
//# sourceMappingURL=AddFriendByUserIdRequest.js.map