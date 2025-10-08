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
var DeletePlatformIdRequest = /** @class */ (function () {
    function DeletePlatformIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.type = null;
        this.userIdentifier = null;
        this.duplicationAvoider = null;
    }
    DeletePlatformIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeletePlatformIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePlatformIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeletePlatformIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeletePlatformIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePlatformIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeletePlatformIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeletePlatformIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePlatformIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeletePlatformIdRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeletePlatformIdRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeletePlatformIdRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeletePlatformIdRequest.prototype.getType = function () {
        return this.type;
    };
    DeletePlatformIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    DeletePlatformIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    DeletePlatformIdRequest.prototype.getUserIdentifier = function () {
        return this.userIdentifier;
    };
    DeletePlatformIdRequest.prototype.setUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    DeletePlatformIdRequest.prototype.withUserIdentifier = function (userIdentifier) {
        this.userIdentifier = userIdentifier;
        return this;
    };
    DeletePlatformIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeletePlatformIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeletePlatformIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeletePlatformIdRequest.fromDict = function (data) {
        return new DeletePlatformIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"]);
    };
    DeletePlatformIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
        };
    };
    return DeletePlatformIdRequest;
}());
exports.default = DeletePlatformIdRequest;
//# sourceMappingURL=DeletePlatformIdRequest.js.map