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
var PrepareUploadRequest = /** @class */ (function () {
    function PrepareUploadRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.name = null;
        this.contentType = null;
        this.scope = null;
        this.allowUserIds = null;
        this.updateIfExists = null;
    }
    PrepareUploadRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareUploadRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareUploadRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareUploadRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareUploadRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareUploadRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareUploadRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareUploadRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareUploadRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareUploadRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PrepareUploadRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PrepareUploadRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PrepareUploadRequest.prototype.getName = function () {
        return this.name;
    };
    PrepareUploadRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    PrepareUploadRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    PrepareUploadRequest.prototype.getContentType = function () {
        return this.contentType;
    };
    PrepareUploadRequest.prototype.setContentType = function (contentType) {
        this.contentType = contentType;
        return this;
    };
    PrepareUploadRequest.prototype.withContentType = function (contentType) {
        this.contentType = contentType;
        return this;
    };
    PrepareUploadRequest.prototype.getScope = function () {
        return this.scope;
    };
    PrepareUploadRequest.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    PrepareUploadRequest.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    PrepareUploadRequest.prototype.getAllowUserIds = function () {
        return this.allowUserIds;
    };
    PrepareUploadRequest.prototype.setAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    PrepareUploadRequest.prototype.withAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    PrepareUploadRequest.prototype.getUpdateIfExists = function () {
        return this.updateIfExists;
    };
    PrepareUploadRequest.prototype.setUpdateIfExists = function (updateIfExists) {
        this.updateIfExists = updateIfExists;
        return this;
    };
    PrepareUploadRequest.prototype.withUpdateIfExists = function (updateIfExists) {
        this.updateIfExists = updateIfExists;
        return this;
    };
    PrepareUploadRequest.fromDict = function (data) {
        return new PrepareUploadRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withName(data["name"])
            .withContentType(data["contentType"])
            .withScope(data["scope"])
            .withAllowUserIds(data.allowUserIds ?
            data.allowUserIds.map(function (item) {
                return item;
            }) : [])
            .withUpdateIfExists(data["updateIfExists"]);
    };
    PrepareUploadRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "name": this.getName(),
            "contentType": this.getContentType(),
            "scope": this.getScope(),
            "allowUserIds": this.getAllowUserIds() ?
                this.getAllowUserIds().map(function (item) {
                    return item;
                }) : [],
            "updateIfExists": this.getUpdateIfExists(),
        };
    };
    return PrepareUploadRequest;
}());
exports.default = PrepareUploadRequest;
//# sourceMappingURL=PrepareUploadRequest.js.map