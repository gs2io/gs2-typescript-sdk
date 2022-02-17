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
var UpdateDataObjectByUserIdRequest = /** @class */ (function () {
    function UpdateDataObjectByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.dataObjectName = null;
        this.userId = null;
        this.scope = null;
        this.allowUserIds = null;
    }
    UpdateDataObjectByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateDataObjectByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateDataObjectByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateDataObjectByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    UpdateDataObjectByUserIdRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UpdateDataObjectByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.getScope = function () {
        return this.scope;
    };
    UpdateDataObjectByUserIdRequest.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.getAllowUserIds = function () {
        return this.allowUserIds;
    };
    UpdateDataObjectByUserIdRequest.prototype.setAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    UpdateDataObjectByUserIdRequest.prototype.withAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    UpdateDataObjectByUserIdRequest.fromDict = function (data) {
        return new UpdateDataObjectByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withDataObjectName(data["dataObjectName"])
            .withUserId(data["userId"])
            .withScope(data["scope"])
            .withAllowUserIds(data.allowUserIds ?
            data.allowUserIds.map(function (item) {
                return item;
            }) : []);
    };
    UpdateDataObjectByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "dataObjectName": this.getDataObjectName(),
            "userId": this.getUserId(),
            "scope": this.getScope(),
            "allowUserIds": this.getAllowUserIds() ?
                this.getAllowUserIds().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return UpdateDataObjectByUserIdRequest;
}());
exports.default = UpdateDataObjectByUserIdRequest;
//# sourceMappingURL=UpdateDataObjectByUserIdRequest.js.map