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
var GetAwaitRequest = /** @class */ (function () {
    function GetAwaitRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.awaitName = null;
    }
    GetAwaitRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetAwaitRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAwaitRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAwaitRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetAwaitRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAwaitRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAwaitRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetAwaitRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAwaitRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAwaitRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetAwaitRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetAwaitRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetAwaitRequest.prototype.getAwaitName = function () {
        return this.awaitName;
    };
    GetAwaitRequest.prototype.setAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    GetAwaitRequest.prototype.withAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    GetAwaitRequest.fromDict = function (data) {
        return new GetAwaitRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withAwaitName(data["awaitName"]);
    };
    GetAwaitRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "awaitName": this.getAwaitName(),
        };
    };
    return GetAwaitRequest;
}());
exports.default = GetAwaitRequest;
//# sourceMappingURL=GetAwaitRequest.js.map