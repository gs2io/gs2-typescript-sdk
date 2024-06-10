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
var DescribeClusterRankingReceivedRewardsByUserIdRequest = /** @class */ (function () {
    function DescribeClusterRankingReceivedRewardsByUserIdRequest() {
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
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.fromDict = function (data) {
        return new DescribeClusterRankingReceivedRewardsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withSeason(data["season"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeClusterRankingReceivedRewardsByUserIdRequest.prototype.toDict = function () {
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
    return DescribeClusterRankingReceivedRewardsByUserIdRequest;
}());
exports.default = DescribeClusterRankingReceivedRewardsByUserIdRequest;
//# sourceMappingURL=DescribeClusterRankingReceivedRewardsByUserIdRequest.js.map