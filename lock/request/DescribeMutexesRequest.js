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
var DescribeMutexesRequest = /** @class */ (function () {
    function DescribeMutexesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeMutexesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeMutexesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMutexesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMutexesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeMutexesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMutexesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMutexesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeMutexesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMutexesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMutexesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeMutexesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeMutexesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeMutexesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeMutexesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMutexesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMutexesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeMutexesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMutexesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMutexesRequest.fromDict = function (data) {
        return new DescribeMutexesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeMutexesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeMutexesRequest;
}());
exports.default = DescribeMutexesRequest;
//# sourceMappingURL=DescribeMutexesRequest.js.map