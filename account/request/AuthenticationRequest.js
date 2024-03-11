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
var AuthenticationRequest = /** @class */ (function () {
    function AuthenticationRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.keyId = null;
        this.password = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AuthenticationRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AuthenticationRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AuthenticationRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AuthenticationRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AuthenticationRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AuthenticationRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AuthenticationRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AuthenticationRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AuthenticationRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AuthenticationRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AuthenticationRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AuthenticationRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AuthenticationRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AuthenticationRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AuthenticationRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AuthenticationRequest.prototype.getPassword = function () {
        return this.password;
    };
    AuthenticationRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    AuthenticationRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    AuthenticationRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AuthenticationRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AuthenticationRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AuthenticationRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AuthenticationRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AuthenticationRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AuthenticationRequest.fromDict = function (data) {
        return new AuthenticationRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withKeyId(data["keyId"])
            .withPassword(data["password"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AuthenticationRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "keyId": this.getKeyId(),
            "password": this.getPassword(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AuthenticationRequest;
}());
exports.default = AuthenticationRequest;
//# sourceMappingURL=AuthenticationRequest.js.map