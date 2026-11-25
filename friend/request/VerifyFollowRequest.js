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
var VerifyFollowRequest = /** @class */ (function () {
    function VerifyFollowRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.targetUserId = null;
        this.verifyType = null;
        this.duplicationAvoider = null;
    }
    VerifyFollowRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyFollowRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFollowRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFollowRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyFollowRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFollowRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFollowRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyFollowRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFollowRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFollowRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyFollowRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyFollowRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyFollowRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    VerifyFollowRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    VerifyFollowRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    VerifyFollowRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyFollowRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFollowRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFollowRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyFollowRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFollowRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFollowRequest.fromDict = function (data) {
        return new VerifyFollowRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTargetUserId(data["targetUserId"])
            .withVerifyType(data["verifyType"]);
    };
    VerifyFollowRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "targetUserId": this.getTargetUserId(),
            "verifyType": this.getVerifyType(),
        };
    };
    return VerifyFollowRequest;
}());
exports.default = VerifyFollowRequest;
//# sourceMappingURL=VerifyFollowRequest.js.map