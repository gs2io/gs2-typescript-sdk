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
var GetAcceptVersionByUserIdRequest = /** @class */ (function () {
    function GetAcceptVersionByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.versionName = null;
    }
    GetAcceptVersionByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetAcceptVersionByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAcceptVersionByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetAcceptVersionByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetAcceptVersionByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAcceptVersionByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetAcceptVersionByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetAcceptVersionByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAcceptVersionByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetAcceptVersionByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetAcceptVersionByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetAcceptVersionByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetAcceptVersionByUserIdRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    GetAcceptVersionByUserIdRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    GetAcceptVersionByUserIdRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    GetAcceptVersionByUserIdRequest.fromDict = function (data) {
        return new GetAcceptVersionByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withVersionName(data["versionName"]);
    };
    GetAcceptVersionByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "versionName": this.getVersionName(),
        };
    };
    return GetAcceptVersionByUserIdRequest;
}());
exports.default = GetAcceptVersionByUserIdRequest;
//# sourceMappingURL=GetAcceptVersionByUserIdRequest.js.map