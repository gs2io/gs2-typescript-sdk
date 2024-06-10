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
var DescribeGlobalRankingScoresRequest = /** @class */ (function () {
    function DescribeGlobalRankingScoresRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rankingName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeGlobalRankingScoresRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeGlobalRankingScoresRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeGlobalRankingScoresRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeGlobalRankingScoresRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeGlobalRankingScoresRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeGlobalRankingScoresRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeGlobalRankingScoresRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeGlobalRankingScoresRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGlobalRankingScoresRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGlobalRankingScoresRequest.fromDict = function (data) {
        return new DescribeGlobalRankingScoresRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeGlobalRankingScoresRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rankingName": this.getRankingName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeGlobalRankingScoresRequest;
}());
exports.default = DescribeGlobalRankingScoresRequest;
//# sourceMappingURL=DescribeGlobalRankingScoresRequest.js.map