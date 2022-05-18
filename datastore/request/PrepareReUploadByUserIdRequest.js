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
var PrepareReUploadByUserIdRequest = /** @class */ (function () {
    function PrepareReUploadByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.dataObjectName = null;
        this.userId = null;
        this.contentType = null;
        this.duplicationAvoider = null;
    }
    PrepareReUploadByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareReUploadByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareReUploadByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareReUploadByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    PrepareReUploadByUserIdRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PrepareReUploadByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.getContentType = function () {
        return this.contentType;
    };
    PrepareReUploadByUserIdRequest.prototype.setContentType = function (contentType) {
        this.contentType = contentType;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.withContentType = function (contentType) {
        this.contentType = contentType;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PrepareReUploadByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareReUploadByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareReUploadByUserIdRequest.fromDict = function (data) {
        return new PrepareReUploadByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withDataObjectName(data["dataObjectName"])
            .withUserId(data["userId"])
            .withContentType(data["contentType"]);
    };
    PrepareReUploadByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "dataObjectName": this.getDataObjectName(),
            "userId": this.getUserId(),
            "contentType": this.getContentType(),
        };
    };
    return PrepareReUploadByUserIdRequest;
}());
exports.default = PrepareReUploadByUserIdRequest;
//# sourceMappingURL=PrepareReUploadByUserIdRequest.js.map