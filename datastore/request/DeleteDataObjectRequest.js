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
var DeleteDataObjectRequest = /** @class */ (function () {
    function DeleteDataObjectRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.dataObjectName = null;
    }
    DeleteDataObjectRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteDataObjectRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteDataObjectRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteDataObjectRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteDataObjectRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteDataObjectRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteDataObjectRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteDataObjectRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteDataObjectRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteDataObjectRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DeleteDataObjectRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteDataObjectRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DeleteDataObjectRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    DeleteDataObjectRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DeleteDataObjectRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DeleteDataObjectRequest.fromDict = function (data) {
        return new DeleteDataObjectRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withDataObjectName(data["dataObjectName"]);
    };
    DeleteDataObjectRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "dataObjectName": this.getDataObjectName(),
        };
    };
    return DeleteDataObjectRequest;
}());
exports.default = DeleteDataObjectRequest;
//# sourceMappingURL=DeleteDataObjectRequest.js.map