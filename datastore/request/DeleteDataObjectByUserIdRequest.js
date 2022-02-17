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
var DeleteDataObjectByUserIdRequest = /** @class */ (function () {
    function DeleteDataObjectByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.dataObjectName = null;
    }
    DeleteDataObjectByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteDataObjectByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteDataObjectByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteDataObjectByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteDataObjectByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteDataObjectByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteDataObjectByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteDataObjectByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteDataObjectByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteDataObjectByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteDataObjectByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteDataObjectByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteDataObjectByUserIdRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    DeleteDataObjectByUserIdRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DeleteDataObjectByUserIdRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DeleteDataObjectByUserIdRequest.fromDict = function (data) {
        return new DeleteDataObjectByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withDataObjectName(data["dataObjectName"]);
    };
    DeleteDataObjectByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "dataObjectName": this.getDataObjectName(),
        };
    };
    return DeleteDataObjectByUserIdRequest;
}());
exports.default = DeleteDataObjectByUserIdRequest;
//# sourceMappingURL=DeleteDataObjectByUserIdRequest.js.map