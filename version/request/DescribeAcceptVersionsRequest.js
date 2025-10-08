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
var DescribeAcceptVersionsRequest = /** @class */ (function () {
    function DescribeAcceptVersionsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeAcceptVersionsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeAcceptVersionsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeAcceptVersionsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeAcceptVersionsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeAcceptVersionsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeAcceptVersionsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeAcceptVersionsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeAcceptVersionsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeAcceptVersionsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeAcceptVersionsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeAcceptVersionsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeAcceptVersionsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeAcceptVersionsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeAcceptVersionsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeAcceptVersionsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeAcceptVersionsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeAcceptVersionsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeAcceptVersionsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeAcceptVersionsRequest.fromDict = function (data) {
        return new DescribeAcceptVersionsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeAcceptVersionsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeAcceptVersionsRequest;
}());
exports.default = DescribeAcceptVersionsRequest;
//# sourceMappingURL=DescribeAcceptVersionsRequest.js.map