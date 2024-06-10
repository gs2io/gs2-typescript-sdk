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
var DescribeClusterRankingReceivedRewardsRequest = /** @class */ (function () {
    function DescribeClusterRankingReceivedRewardsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rankingName = null;
        this.clusterName = null;
        this.season = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeClusterRankingReceivedRewardsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.getSeason = function () {
        return this.season;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeClusterRankingReceivedRewardsRequest.fromDict = function (data) {
        return new DescribeClusterRankingReceivedRewardsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withSeason(data["season"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeClusterRankingReceivedRewardsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "season": this.getSeason(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeClusterRankingReceivedRewardsRequest;
}());
exports.default = DescribeClusterRankingReceivedRewardsRequest;
//# sourceMappingURL=DescribeClusterRankingReceivedRewardsRequest.js.map