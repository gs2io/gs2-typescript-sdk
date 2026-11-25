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
var VerifyFriendByUserIdRequest = /** @class */ (function () {
    function VerifyFriendByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.targetUserId = null;
        this.verifyType = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyFriendByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyFriendByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyFriendByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyFriendByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyFriendByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    VerifyFriendByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyFriendByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyFriendByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyFriendByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFriendByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFriendByUserIdRequest.fromDict = function (data) {
        return new VerifyFriendByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"])
            .withVerifyType(data["verifyType"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyFriendByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
            "verifyType": this.getVerifyType(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyFriendByUserIdRequest;
}());
exports.default = VerifyFriendByUserIdRequest;
//# sourceMappingURL=VerifyFriendByUserIdRequest.js.map