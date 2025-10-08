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
var DescribeEntriesRequest = /** @class */ (function () {
    function DescribeEntriesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeEntriesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeEntriesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeEntriesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeEntriesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeEntriesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeEntriesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeEntriesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeEntriesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeEntriesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeEntriesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeEntriesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeEntriesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeEntriesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeEntriesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeEntriesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeEntriesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeEntriesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeEntriesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeEntriesRequest.fromDict = function (data) {
        return new DescribeEntriesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeEntriesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeEntriesRequest;
}());
exports.default = DescribeEntriesRequest;
//# sourceMappingURL=DescribeEntriesRequest.js.map