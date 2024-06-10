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
var DescribeSubscribeRankingModelMastersRequest = /** @class */ (function () {
    function DescribeSubscribeRankingModelMastersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSubscribeRankingModelMastersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSubscribeRankingModelMastersRequest.fromDict = function (data) {
        return new DescribeSubscribeRankingModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSubscribeRankingModelMastersRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSubscribeRankingModelMastersRequest;
}());
exports.default = DescribeSubscribeRankingModelMastersRequest;
//# sourceMappingURL=DescribeSubscribeRankingModelMastersRequest.js.map