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
var DoneUploadByUserIdRequest = /** @class */ (function () {
    function DoneUploadByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.dataObjectName = null;
        this.userId = null;
        this.duplicationAvoider = null;
    }
    DoneUploadByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DoneUploadByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoneUploadByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DoneUploadByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DoneUploadByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoneUploadByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DoneUploadByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DoneUploadByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoneUploadByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DoneUploadByUserIdRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    DoneUploadByUserIdRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DoneUploadByUserIdRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DoneUploadByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DoneUploadByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DoneUploadByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DoneUploadByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DoneUploadByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DoneUploadByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DoneUploadByUserIdRequest.fromDict = function (data) {
        return new DoneUploadByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withDataObjectName(data["dataObjectName"])
            .withUserId(data["userId"]);
    };
    DoneUploadByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "dataObjectName": this.getDataObjectName(),
            "userId": this.getUserId(),
        };
    };
    return DoneUploadByUserIdRequest;
}());
exports.default = DoneUploadByUserIdRequest;
//# sourceMappingURL=DoneUploadByUserIdRequest.js.map