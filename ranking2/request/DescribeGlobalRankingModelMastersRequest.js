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
var DescribeGlobalRankingModelMastersRequest = /** @class */ (function () {
    function DescribeGlobalRankingModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeGlobalRankingModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGlobalRankingModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGlobalRankingModelMastersRequest.fromDict = function (data) {
        return new DescribeGlobalRankingModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeGlobalRankingModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeGlobalRankingModelMastersRequest;
}());
exports.default = DescribeGlobalRankingModelMastersRequest;
//# sourceMappingURL=DescribeGlobalRankingModelMastersRequest.js.map