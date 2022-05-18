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
var PrepareUploadByUserIdRequest = /** @class */ (function () {
    function PrepareUploadByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.name = null;
        this.contentType = null;
        this.scope = null;
        this.allowUserIds = null;
        this.updateIfExists = null;
        this.duplicationAvoider = null;
    }
    PrepareUploadByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareUploadByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareUploadByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareUploadByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PrepareUploadByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.getName = function () {
        return this.name;
    };
    PrepareUploadByUserIdRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.getContentType = function () {
        return this.contentType;
    };
    PrepareUploadByUserIdRequest.prototype.setContentType = function (contentType) {
        this.contentType = contentType;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.withContentType = function (contentType) {
        this.contentType = contentType;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.getScope = function () {
        return this.scope;
    };
    PrepareUploadByUserIdRequest.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.getAllowUserIds = function () {
        return this.allowUserIds;
    };
    PrepareUploadByUserIdRequest.prototype.setAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.withAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.getUpdateIfExists = function () {
        return this.updateIfExists;
    };
    PrepareUploadByUserIdRequest.prototype.setUpdateIfExists = function (updateIfExists) {
        this.updateIfExists = updateIfExists;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.withUpdateIfExists = function (updateIfExists) {
        this.updateIfExists = updateIfExists;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PrepareUploadByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareUploadByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareUploadByUserIdRequest.fromDict = function (data) {
        return new PrepareUploadByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withName(data["name"])
            .withContentType(data["contentType"])
            .withScope(data["scope"])
            .withAllowUserIds(data.allowUserIds ?
            data.allowUserIds.map(function (item) {
                return item;
            }) : [])
            .withUpdateIfExists(data["updateIfExists"]);
    };
    PrepareUploadByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
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
    return PrepareUploadByUserIdRequest;
}());
exports.default = PrepareUploadByUserIdRequest;
//# sourceMappingURL=PrepareUploadByUserIdRequest.js.map