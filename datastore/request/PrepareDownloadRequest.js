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
var PrepareDownloadRequest = /** @class */ (function () {
    function PrepareDownloadRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.dataObjectId = null;
        this.duplicationAvoider = null;
    }
    PrepareDownloadRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareDownloadRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareDownloadRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareDownloadRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PrepareDownloadRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PrepareDownloadRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PrepareDownloadRequest.prototype.getDataObjectId = function () {
        return this.dataObjectId;
    };
    PrepareDownloadRequest.prototype.setDataObjectId = function (dataObjectId) {
        this.dataObjectId = dataObjectId;
        return this;
    };
    PrepareDownloadRequest.prototype.withDataObjectId = function (dataObjectId) {
        this.dataObjectId = dataObjectId;
        return this;
    };
    PrepareDownloadRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PrepareDownloadRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareDownloadRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareDownloadRequest.fromDict = function (data) {
        return new PrepareDownloadRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withDataObjectId(data["dataObjectId"]);
    };
    PrepareDownloadRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "dataObjectId": this.getDataObjectId(),
        };
    };
    return PrepareDownloadRequest;
}());
exports.default = PrepareDownloadRequest;
//# sourceMappingURL=PrepareDownloadRequest.js.map