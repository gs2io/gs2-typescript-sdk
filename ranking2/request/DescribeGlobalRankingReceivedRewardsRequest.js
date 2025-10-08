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
var DescribeGlobalRankingReceivedRewardsRequest = /** @class */ (function () {
    function DescribeGlobalRankingReceivedRewardsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rankingName = null;
        this.season = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeGlobalRankingReceivedRewardsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.getSeason = function () {
        return this.season;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsRequest.fromDict = function (data) {
        return new DescribeGlobalRankingReceivedRewardsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withSeason(data["season"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeGlobalRankingReceivedRewardsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rankingName": this.getRankingName(),
            "season": this.getSeason(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeGlobalRankingReceivedRewardsRequest;
}());
exports.default = DescribeGlobalRankingReceivedRewardsRequest;
//# sourceMappingURL=DescribeGlobalRankingReceivedRewardsRequest.js.map