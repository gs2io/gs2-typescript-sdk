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
var PrepareReUploadRequest = /** @class */ (function () {
    function PrepareReUploadRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.dataObjectName = null;
        this.accessToken = null;
        this.contentType = null;
        this.duplicationAvoider = null;
    }
    PrepareReUploadRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareReUploadRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareReUploadRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareReUploadRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareReUploadRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareReUploadRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareReUploadRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareReUploadRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareReUploadRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareReUploadRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    PrepareReUploadRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    PrepareReUploadRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    PrepareReUploadRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PrepareReUploadRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PrepareReUploadRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PrepareReUploadRequest.prototype.getContentType = function () {
        return this.contentType;
    };
    PrepareReUploadRequest.prototype.setContentType = function (contentType) {
        this.contentType = contentType;
        return this;
    };
    PrepareReUploadRequest.prototype.withContentType = function (contentType) {
        this.contentType = contentType;
        return this;
    };
    PrepareReUploadRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PrepareReUploadRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareReUploadRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareReUploadRequest.fromDict = function (data) {
        return new PrepareReUploadRequest()
            .withNamespaceName(data["namespaceName"])
            .withDataObjectName(data["dataObjectName"])
            .withAccessToken(data["accessToken"])
            .withContentType(data["contentType"]);
    };
    PrepareReUploadRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "dataObjectName": this.getDataObjectName(),
            "accessToken": this.getAccessToken(),
            "contentType": this.getContentType(),
        };
    };
    return PrepareReUploadRequest;
}());
exports.default = PrepareReUploadRequest;
//# sourceMappingURL=PrepareReUploadRequest.js.map