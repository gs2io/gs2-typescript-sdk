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
var CreatePlatformIdRequest = /** @class */ (function () {
    function CreatePlatformIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.type = null;
        this.userIdentifier = null;
        this.duplicationAvoider = null;
    }
    CreatePlatformIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreatePlatformIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreatePlatformIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreatePlatformIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreatePlatformIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreatePlatformIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreatePlatformIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreatePlatformIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreatePlatformIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreatePlatformIdRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    CreatePlatformIdRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreatePlatformIdRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreatePlatformIdRequest.prototype.getType = function () {
        return this.type;
    };
    CreatePlatformIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    CreatePlatformIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    CreatePlatformIdRequest.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    CreatePlatformIdRequest.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    CreatePlatformIdRequest.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    CreatePlatformIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreatePlatformIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreatePlatformIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreatePlatformIdRequest.fromDict = function (data) {
        return new CreatePlatformIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"]);
    };
    CreatePlatformIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
        };
    };
    return CreatePlatformIdRequest;
}());
exports.default = CreatePlatformIdRequest;
//# sourceMappingURL=CreatePlatformIdRequest.js.map