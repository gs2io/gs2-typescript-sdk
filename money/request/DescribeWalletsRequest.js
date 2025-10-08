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
var DescribeWalletsRequest = /** @class */ (function () {
    function DescribeWalletsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeWalletsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeWalletsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeWalletsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeWalletsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeWalletsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeWalletsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeWalletsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeWalletsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeWalletsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeWalletsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeWalletsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeWalletsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeWalletsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeWalletsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeWalletsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeWalletsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeWalletsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeWalletsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeWalletsRequest.fromDict = function (data) {
        return new DescribeWalletsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeWalletsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeWalletsRequest;
}());
exports.default = DescribeWalletsRequest;
//# sourceMappingURL=DescribeWalletsRequest.js.map