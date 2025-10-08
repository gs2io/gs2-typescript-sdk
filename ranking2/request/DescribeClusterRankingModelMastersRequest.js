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
var DescribeClusterRankingModelMastersRequest = /** @class */ (function () {
    function DescribeClusterRankingModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.namePrefix = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeClusterRankingModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeClusterRankingModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeClusterRankingModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeClusterRankingModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeClusterRankingModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeClusterRankingModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeClusterRankingModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeClusterRankingModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeClusterRankingModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeClusterRankingModelMastersRequest.prototype.getNamePrefix = function () {
        return this.namePrefix;
    };
    DescribeClusterRankingModelMastersRequest.prototype.setNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeClusterRankingModelMastersRequest.prototype.withNamePrefix = function (namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    };
    DescribeClusterRankingModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeClusterRankingModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeClusterRankingModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeClusterRankingModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeClusterRankingModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeClusterRankingModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeClusterRankingModelMastersRequest.fromDict = function (data) {
        return new DescribeClusterRankingModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withNamePrefix(data["namePrefix"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeClusterRankingModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "namePrefix": this.getNamePrefix(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeClusterRankingModelMastersRequest;
}());
exports.default = DescribeClusterRankingModelMastersRequest;
//# sourceMappingURL=DescribeClusterRankingModelMastersRequest.js.map