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
var DescribeSubscribeRankingScoresRequest = /** @class */ (function () {
    function DescribeSubscribeRankingScoresRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rankingName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSubscribeRankingScoresRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSubscribeRankingScoresRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSubscribeRankingScoresRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSubscribeRankingScoresRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeSubscribeRankingScoresRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeSubscribeRankingScoresRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSubscribeRankingScoresRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSubscribeRankingScoresRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSubscribeRankingScoresRequest.fromDict = function (data) {
        return new DescribeSubscribeRankingScoresRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSubscribeRankingScoresRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rankingName": this.getRankingName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSubscribeRankingScoresRequest;
}());
exports.default = DescribeSubscribeRankingScoresRequest;
//# sourceMappingURL=DescribeSubscribeRankingScoresRequest.js.map