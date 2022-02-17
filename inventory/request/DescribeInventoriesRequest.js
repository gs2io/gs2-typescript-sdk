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
var DescribeInventoriesRequest = /** @class */ (function () {
    function DescribeInventoriesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeInventoriesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeInventoriesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeInventoriesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeInventoriesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeInventoriesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeInventoriesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeInventoriesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeInventoriesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeInventoriesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeInventoriesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeInventoriesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeInventoriesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeInventoriesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeInventoriesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeInventoriesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeInventoriesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeInventoriesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeInventoriesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeInventoriesRequest.fromDict = function (data) {
        return new DescribeInventoriesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeInventoriesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeInventoriesRequest;
}());
exports.default = DescribeInventoriesRequest;
//# sourceMappingURL=DescribeInventoriesRequest.js.map