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
var PrepareDownloadByUserIdAndDataObjectNameRequest = /** @class */ (function () {
    function PrepareDownloadByUserIdAndDataObjectNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.dataObjectName = null;
        this.duplicationAvoider = null;
    }
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.fromDict = function (data) {
        return new PrepareDownloadByUserIdAndDataObjectNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withDataObjectName(data["dataObjectName"]);
    };
    PrepareDownloadByUserIdAndDataObjectNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "dataObjectName": this.getDataObjectName(),
        };
    };
    return PrepareDownloadByUserIdAndDataObjectNameRequest;
}());
exports.default = PrepareDownloadByUserIdAndDataObjectNameRequest;
//# sourceMappingURL=PrepareDownloadByUserIdAndDataObjectNameRequest.js.map