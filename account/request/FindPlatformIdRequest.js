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
var FindPlatformIdRequest = /** @class */ (function () {
    function FindPlatformIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.type = null;
        this.userIdentifier = null;
    }
    FindPlatformIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    FindPlatformIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FindPlatformIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FindPlatformIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    FindPlatformIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FindPlatformIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FindPlatformIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    FindPlatformIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FindPlatformIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FindPlatformIdRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    FindPlatformIdRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    FindPlatformIdRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    FindPlatformIdRequest.prototype.getType = function () {
        return this.type;
    };
    FindPlatformIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    FindPlatformIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    FindPlatformIdRequest.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    FindPlatformIdRequest.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    FindPlatformIdRequest.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    FindPlatformIdRequest.fromDict = function (data) {
        return new FindPlatformIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"]);
    };
    FindPlatformIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
        };
    };
    return FindPlatformIdRequest;
}());
exports.default = FindPlatformIdRequest;
//# sourceMappingURL=FindPlatformIdRequest.js.map