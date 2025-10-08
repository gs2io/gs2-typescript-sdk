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
var GetAcceptVersionRequest = /** @class */ (function () {
    function GetAcceptVersionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.versionName = null;
    }
    GetAcceptVersionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetAcceptVersionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAcceptVersionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAcceptVersionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetAcceptVersionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAcceptVersionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAcceptVersionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetAcceptVersionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAcceptVersionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAcceptVersionRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetAcceptVersionRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetAcceptVersionRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetAcceptVersionRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    GetAcceptVersionRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    GetAcceptVersionRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    GetAcceptVersionRequest.fromDict = function (data) {
        return new GetAcceptVersionRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withVersionName(data["versionName"]);
    };
    GetAcceptVersionRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "versionName": this.getVersionName(),
        };
    };
    return GetAcceptVersionRequest;
}());
exports.default = GetAcceptVersionRequest;
//# sourceMappingURL=GetAcceptVersionRequest.js.map