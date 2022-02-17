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
var GetFollowByUserIdRequest = /** @class */ (function () {
    function GetFollowByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.targetUserId = null;
        this.withProfile = null;
    }
    GetFollowByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetFollowByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFollowByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFollowByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetFollowByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFollowByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFollowByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetFollowByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFollowByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFollowByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetFollowByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetFollowByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetFollowByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    GetFollowByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    GetFollowByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    GetFollowByUserIdRequest.prototype.getWithProfile = function () {
        return this.withProfile;
    };
    GetFollowByUserIdRequest.prototype.setWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    GetFollowByUserIdRequest.prototype.withWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    GetFollowByUserIdRequest.fromDict = function (data) {
        return new GetFollowByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"])
            .withWithProfile(data["withProfile"]);
    };
    GetFollowByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
            "withProfile": this.getWithProfile(),
        };
    };
    return GetFollowByUserIdRequest;
}());
exports.default = GetFollowByUserIdRequest;
//# sourceMappingURL=GetFollowByUserIdRequest.js.map