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
var DescribeDataObjectsRequest = /** @class */ (function () {
    function DescribeDataObjectsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.status = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeDataObjectsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeDataObjectsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDataObjectsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDataObjectsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeDataObjectsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDataObjectsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDataObjectsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeDataObjectsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDataObjectsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDataObjectsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeDataObjectsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeDataObjectsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeDataObjectsRequest.prototype.getStatus = function () {
        return this.status;
    };
    DescribeDataObjectsRequest.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    DescribeDataObjectsRequest.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    DescribeDataObjectsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeDataObjectsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDataObjectsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDataObjectsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeDataObjectsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDataObjectsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDataObjectsRequest.fromDict = function (data) {
        return new DescribeDataObjectsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withStatus(data["status"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeDataObjectsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "status": this.getStatus(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeDataObjectsRequest;
}());
exports.default = DescribeDataObjectsRequest;
//# sourceMappingURL=DescribeDataObjectsRequest.js.map