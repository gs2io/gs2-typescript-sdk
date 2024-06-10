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
var DescribeGlobalRankingReceivedRewardsByUserIdRequest = /** @class */ (function () {
    function DescribeGlobalRankingReceivedRewardsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rankingName = null;
        this.season = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.fromDict = function (data) {
        return new DescribeGlobalRankingReceivedRewardsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRankingName(data["rankingName"])
            .withSeason(data["season"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeGlobalRankingReceivedRewardsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rankingName": this.getRankingName(),
            "season": this.getSeason(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeGlobalRankingReceivedRewardsByUserIdRequest;
}());
exports.default = DescribeGlobalRankingReceivedRewardsByUserIdRequest;
//# sourceMappingURL=DescribeGlobalRankingReceivedRewardsByUserIdRequest.js.map