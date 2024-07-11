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
var DescribePlatformIdsRequest = /** @class */ (function () {
    function DescribePlatformIdsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribePlatformIdsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribePlatformIdsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePlatformIdsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePlatformIdsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribePlatformIdsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePlatformIdsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePlatformIdsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribePlatformIdsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePlatformIdsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribePlatformIdsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribePlatformIdsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribePlatformIdsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribePlatformIdsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribePlatformIdsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePlatformIdsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePlatformIdsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribePlatformIdsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePlatformIdsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePlatformIdsRequest.fromDict = function (data) {
        return new DescribePlatformIdsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribePlatformIdsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribePlatformIdsRequest;
}());
exports.default = DescribePlatformIdsRequest;
//# sourceMappingURL=DescribePlatformIdsRequest.js.map