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
var VerifyFriendRequest = /** @class */ (function () {
    function VerifyFriendRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.targetUserId = null;
        this.verifyType = null;
        this.duplicationAvoider = null;
    }
    VerifyFriendRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyFriendRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFriendRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFriendRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyFriendRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFriendRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFriendRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyFriendRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFriendRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFriendRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyFriendRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyFriendRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyFriendRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    VerifyFriendRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    VerifyFriendRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    VerifyFriendRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyFriendRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFriendRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFriendRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyFriendRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFriendRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFriendRequest.fromDict = function (data) {
        return new VerifyFriendRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTargetUserId(data["targetUserId"])
            .withVerifyType(data["verifyType"]);
    };
    VerifyFriendRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "targetUserId": this.getTargetUserId(),
            "verifyType": this.getVerifyType(),
        };
    };
    return VerifyFriendRequest;
}());
exports.default = VerifyFriendRequest;
//# sourceMappingURL=VerifyFriendRequest.js.map