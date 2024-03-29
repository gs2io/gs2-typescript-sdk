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
var SetFirebaseTokenByUserIdRequest = /** @class */ (function () {
    function SetFirebaseTokenByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.token = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SetFirebaseTokenByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetFirebaseTokenByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetFirebaseTokenByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetFirebaseTokenByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetFirebaseTokenByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.getToken = function () {
        return this.token;
    };
    SetFirebaseTokenByUserIdRequest.prototype.setToken = function (token) {
        this.token = token;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.withToken = function (token) {
        this.token = token;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SetFirebaseTokenByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetFirebaseTokenByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetFirebaseTokenByUserIdRequest.fromDict = function (data) {
        return new SetFirebaseTokenByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withToken(data["token"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SetFirebaseTokenByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "token": this.getToken(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SetFirebaseTokenByUserIdRequest;
}());
exports.default = SetFirebaseTokenByUserIdRequest;
//# sourceMappingURL=SetFirebaseTokenByUserIdRequest.js.map