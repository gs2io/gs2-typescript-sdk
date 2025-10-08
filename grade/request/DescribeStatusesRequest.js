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
var DescribeStatusesRequest = /** @class */ (function () {
    function DescribeStatusesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gradeName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeStatusesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeStatusesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStatusesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStatusesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeStatusesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStatusesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStatusesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeStatusesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStatusesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStatusesRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    DescribeStatusesRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    DescribeStatusesRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    DescribeStatusesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeStatusesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeStatusesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeStatusesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeStatusesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeStatusesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeStatusesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeStatusesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeStatusesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeStatusesRequest.fromDict = function (data) {
        return new DescribeStatusesRequest()
            .withNamespaceName(data["namespaceName"])
            .withGradeName(data["gradeName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeStatusesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gradeName": this.getGradeName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeStatusesRequest;
}());
exports.default = DescribeStatusesRequest;
//# sourceMappingURL=DescribeStatusesRequest.js.map