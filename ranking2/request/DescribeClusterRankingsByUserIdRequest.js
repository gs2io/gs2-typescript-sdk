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
var DescribeClusterRankingsByUserIdRequest = /** @class */ (function () {
    function DescribeClusterRankingsByUserIdRequest() {
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
    DescribeClusterRankingsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeClusterRankingsByUserIdRequest.fromDict = function (data) {
        return new DescribeClusterRankingsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withSeason(data["season"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeClusterRankingsByUserIdRequest.prototype.toDict = function () {
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
    return DescribeClusterRankingsByUserIdRequest;
}());
exports.default = DescribeClusterRankingsByUserIdRequest;
//# sourceMappingURL=DescribeClusterRankingsByUserIdRequest.js.map