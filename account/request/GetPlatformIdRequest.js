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
var GetPlatformIdRequest = /** @class */ (function () {
    function GetPlatformIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.type = null;
    }
    GetPlatformIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPlatformIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPlatformIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPlatformIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPlatformIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPlatformIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPlatformIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPlatformIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPlatformIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPlatformIdRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetPlatformIdRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetPlatformIdRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetPlatformIdRequest.prototype.getType = function () {
        return this.type;
    };
    GetPlatformIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    GetPlatformIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    GetPlatformIdRequest.fromDict = function (data) {
        return new GetPlatformIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withType(data["type"]);
    };
    GetPlatformIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "type": this.getType(),
        };
    };
    return GetPlatformIdRequest;
}());
exports.default = GetPlatformIdRequest;
//# sourceMappingURL=GetPlatformIdRequest.js.map