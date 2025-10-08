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
var GetFirebaseTokenRequest = /** @class */ (function () {
    function GetFirebaseTokenRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
    }
    GetFirebaseTokenRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetFirebaseTokenRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFirebaseTokenRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFirebaseTokenRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetFirebaseTokenRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFirebaseTokenRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFirebaseTokenRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetFirebaseTokenRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFirebaseTokenRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFirebaseTokenRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetFirebaseTokenRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetFirebaseTokenRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetFirebaseTokenRequest.fromDict = function (data) {
        return new GetFirebaseTokenRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"]);
    };
    GetFirebaseTokenRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return GetFirebaseTokenRequest;
}());
exports.default = GetFirebaseTokenRequest;
//# sourceMappingURL=GetFirebaseTokenRequest.js.map