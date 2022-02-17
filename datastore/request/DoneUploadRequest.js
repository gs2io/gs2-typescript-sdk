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
var DoneUploadRequest = /** @class */ (function () {
    function DoneUploadRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.dataObjectName = null;
        this.accessToken = null;
    }
    DoneUploadRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DoneUploadRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoneUploadRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoneUploadRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DoneUploadRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoneUploadRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoneUploadRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DoneUploadRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoneUploadRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoneUploadRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    DoneUploadRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DoneUploadRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DoneUploadRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DoneUploadRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DoneUploadRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DoneUploadRequest.fromDict = function (data) {
        return new DoneUploadRequest()
            .withNamespaceName(data["namespaceName"])
            .withDataObjectName(data["dataObjectName"])
            .withAccessToken(data["accessToken"]);
    };
    DoneUploadRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "dataObjectName": this.getDataObjectName(),
            "accessToken": this.getAccessToken(),
        };
    };
    return DoneUploadRequest;
}());
exports.default = DoneUploadRequest;
//# sourceMappingURL=DoneUploadRequest.js.map