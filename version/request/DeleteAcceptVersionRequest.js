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
var DeleteAcceptVersionRequest = /** @class */ (function () {
    function DeleteAcceptVersionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.versionName = null;
    }
    DeleteAcceptVersionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteAcceptVersionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAcceptVersionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAcceptVersionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteAcceptVersionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAcceptVersionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAcceptVersionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteAcceptVersionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteAcceptVersionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteAcceptVersionRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteAcceptVersionRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteAcceptVersionRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteAcceptVersionRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    DeleteAcceptVersionRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    DeleteAcceptVersionRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    DeleteAcceptVersionRequest.fromDict = function (data) {
        return new DeleteAcceptVersionRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withVersionName(data["versionName"]);
    };
    DeleteAcceptVersionRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "versionName": this.getVersionName(),
        };
    };
    return DeleteAcceptVersionRequest;
}());
exports.default = DeleteAcceptVersionRequest;
//# sourceMappingURL=DeleteAcceptVersionRequest.js.map