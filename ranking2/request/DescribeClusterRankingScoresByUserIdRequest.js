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
var DescribeClusterRankingScoresByUserIdRequest = /** @class */ (function () {
    function DescribeClusterRankingScoresByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rankingName = null;
        this.clusterName = null;
        this.season = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeClusterRankingScoresByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeClusterRankingScoresByUserIdRequest.fromDict = function (data) {
        return new DescribeClusterRankingScoresByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withSeason(data["season"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeClusterRankingScoresByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "season": this.getSeason(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeClusterRankingScoresByUserIdRequest;
}());
exports.default = DescribeClusterRankingScoresByUserIdRequest;
//# sourceMappingURL=DescribeClusterRankingScoresByUserIdRequest.js.map