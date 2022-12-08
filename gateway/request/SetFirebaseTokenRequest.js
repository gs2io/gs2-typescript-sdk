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
var SetFirebaseTokenRequest = /** @class */ (function () {
    function SetFirebaseTokenRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.token = null;
        this.duplicationAvoider = null;
    }
    SetFirebaseTokenRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetFirebaseTokenRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetFirebaseTokenRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetFirebaseTokenRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetFirebaseTokenRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetFirebaseTokenRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetFirebaseTokenRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetFirebaseTokenRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetFirebaseTokenRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetFirebaseTokenRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SetFirebaseTokenRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetFirebaseTokenRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetFirebaseTokenRequest.prototype.getToken = function () {
        return this.token;
    };
    SetFirebaseTokenRequest.prototype.setToken = function (token) {
        this.token = token;
        return this;
    };
    SetFirebaseTokenRequest.prototype.withToken = function (token) {
        this.token = token;
        return this;
    };
    SetFirebaseTokenRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetFirebaseTokenRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetFirebaseTokenRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetFirebaseTokenRequest.fromDict = function (data) {
        return new SetFirebaseTokenRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withToken(data["token"]);
    };
    SetFirebaseTokenRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "token": this.getToken(),
        };
    };
    return SetFirebaseTokenRequest;
}());
exports.default = SetFirebaseTokenRequest;
//# sourceMappingURL=SetFirebaseTokenRequest.js.map