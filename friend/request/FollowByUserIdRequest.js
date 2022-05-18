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
var FollowByUserIdRequest = /** @class */ (function () {
    function FollowByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.targetUserId = null;
        this.duplicationAvoider = null;
    }
    FollowByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    FollowByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FollowByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FollowByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    FollowByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FollowByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FollowByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    FollowByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FollowByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FollowByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    FollowByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FollowByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FollowByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    FollowByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    FollowByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    FollowByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    FollowByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    FollowByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    FollowByUserIdRequest.fromDict = function (data) {
        return new FollowByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"]);
    };
    FollowByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return FollowByUserIdRequest;
}());
exports.default = FollowByUserIdRequest;
//# sourceMappingURL=FollowByUserIdRequest.js.map