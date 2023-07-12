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
var DescribeReceiveStatusesRequest = /** @class */ (function () {
    function DescribeReceiveStatusesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeReceiveStatusesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeReceiveStatusesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReceiveStatusesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeReceiveStatusesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeReceiveStatusesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReceiveStatusesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeReceiveStatusesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeReceiveStatusesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReceiveStatusesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeReceiveStatusesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeReceiveStatusesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeReceiveStatusesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeReceiveStatusesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeReceiveStatusesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeReceiveStatusesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeReceiveStatusesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeReceiveStatusesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeReceiveStatusesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeReceiveStatusesRequest.fromDict = function (data) {
        return new DescribeReceiveStatusesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeReceiveStatusesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeReceiveStatusesRequest;
}());
exports.default = DescribeReceiveStatusesRequest;
//# sourceMappingURL=DescribeReceiveStatusesRequest.js.map