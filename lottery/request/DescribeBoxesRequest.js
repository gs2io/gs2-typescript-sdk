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
var DescribeBoxesRequest = /** @class */ (function () {
    function DescribeBoxesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeBoxesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBoxesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBoxesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBoxesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBoxesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBoxesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBoxesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeBoxesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBoxesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBoxesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeBoxesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeBoxesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeBoxesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeBoxesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBoxesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBoxesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeBoxesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBoxesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBoxesRequest.fromDict = function (data) {
        return new DescribeBoxesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeBoxesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeBoxesRequest;
}());
exports.default = DescribeBoxesRequest;
//# sourceMappingURL=DescribeBoxesRequest.js.map