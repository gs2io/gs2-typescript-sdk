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
var VerifyFriendCountRequest = /** @class */ (function () {
    function VerifyFriendCountRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.verifyType = null;
        this.count = null;
        this.duplicationAvoider = null;
    }
    VerifyFriendCountRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyFriendCountRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFriendCountRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFriendCountRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyFriendCountRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFriendCountRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFriendCountRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyFriendCountRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFriendCountRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFriendCountRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyFriendCountRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyFriendCountRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyFriendCountRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyFriendCountRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFriendCountRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFriendCountRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifyFriendCountRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyFriendCountRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyFriendCountRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyFriendCountRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFriendCountRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFriendCountRequest.fromDict = function (data) {
        return new VerifyFriendCountRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withVerifyType(data["verifyType"])
            .withCount(data["count"]);
    };
    VerifyFriendCountRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "verifyType": this.getVerifyType(),
            "count": this.getCount(),
        };
    };
    return VerifyFriendCountRequest;
}());
exports.default = VerifyFriendCountRequest;
//# sourceMappingURL=VerifyFriendCountRequest.js.map