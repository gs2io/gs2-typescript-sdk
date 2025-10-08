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
var DescribeRarityParameterStatusesRequest = /** @class */ (function () {
    function DescribeRarityParameterStatusesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.parameterName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeRarityParameterStatusesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeRarityParameterStatusesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeRarityParameterStatusesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeRarityParameterStatusesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeRarityParameterStatusesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.getParameterName = function () {
        return this.parameterName;
    };
    DescribeRarityParameterStatusesRequest.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeRarityParameterStatusesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeRarityParameterStatusesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRarityParameterStatusesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeRarityParameterStatusesRequest.fromDict = function (data) {
        return new DescribeRarityParameterStatusesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withParameterName(data["parameterName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeRarityParameterStatusesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "parameterName": this.getParameterName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeRarityParameterStatusesRequest;
}());
exports.default = DescribeRarityParameterStatusesRequest;
//# sourceMappingURL=DescribeRarityParameterStatusesRequest.js.map