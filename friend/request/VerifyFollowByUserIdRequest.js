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
var VerifyFollowByUserIdRequest = /** @class */ (function () {
    function VerifyFollowByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.targetUserId = null;
        this.verifyType = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyFollowByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyFollowByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyFollowByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyFollowByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyFollowByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    VerifyFollowByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyFollowByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyFollowByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyFollowByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFollowByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFollowByUserIdRequest.fromDict = function (data) {
        return new VerifyFollowByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"])
            .withVerifyType(data["verifyType"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyFollowByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
            "verifyType": this.getVerifyType(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyFollowByUserIdRequest;
}());
exports.default = VerifyFollowByUserIdRequest;
//# sourceMappingURL=VerifyFollowByUserIdRequest.js.map