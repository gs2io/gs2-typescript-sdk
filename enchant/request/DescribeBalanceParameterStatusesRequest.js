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
var DescribeBalanceParameterStatusesRequest = /** @class */ (function () {
    function DescribeBalanceParameterStatusesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.parameterName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeBalanceParameterStatusesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBalanceParameterStatusesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBalanceParameterStatusesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeBalanceParameterStatusesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeBalanceParameterStatusesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    DescribeBalanceParameterStatusesRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeBalanceParameterStatusesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeBalanceParameterStatusesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBalanceParameterStatusesRequest.fromDict = function (data) {
        return new DescribeBalanceParameterStatusesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withParameterName(data["parameterName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeBalanceParameterStatusesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "parameterName": this.getParameterName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeBalanceParameterStatusesRequest;
}());
exports.default = DescribeBalanceParameterStatusesRequest;
//# sourceMappingURL=DescribeBalanceParameterStatusesRequest.js.map