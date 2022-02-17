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
var DescribeTriggersRequest = /** @class */ (function () {
    function DescribeTriggersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeTriggersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeTriggersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeTriggersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeTriggersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeTriggersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeTriggersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeTriggersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeTriggersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeTriggersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeTriggersRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeTriggersRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeTriggersRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeTriggersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeTriggersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeTriggersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeTriggersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeTriggersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeTriggersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeTriggersRequest.fromDict = function (data) {
        return new DescribeTriggersRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeTriggersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeTriggersRequest;
}());
exports.default = DescribeTriggersRequest;
//# sourceMappingURL=DescribeTriggersRequest.js.map