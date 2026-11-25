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
var VerifyFriendCountByUserIdRequest = /** @class */ (function () {
    function VerifyFriendCountByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.verifyType = null;
        this.count = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyFriendCountByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyFriendCountByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyFriendCountByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyFriendCountByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyFriendCountByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyFriendCountByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifyFriendCountByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyFriendCountByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyFriendCountByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFriendCountByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFriendCountByUserIdRequest.fromDict = function (data) {
        return new VerifyFriendCountByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withVerifyType(data["verifyType"])
            .withCount(data["count"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyFriendCountByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "verifyType": this.getVerifyType(),
            "count": this.getCount(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyFriendCountByUserIdRequest;
}());
exports.default = VerifyFriendCountByUserIdRequest;
//# sourceMappingURL=VerifyFriendCountByUserIdRequest.js.map