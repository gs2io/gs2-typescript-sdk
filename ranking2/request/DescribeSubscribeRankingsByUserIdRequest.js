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
var DescribeSubscribeRankingsByUserIdRequest = /** @class */ (function () {
    function DescribeSubscribeRankingsByUserIdRequest() {
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
    DescribeSubscribeRankingsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeSubscribeRankingsByUserIdRequest.fromDict = function (data) {
        return new DescribeSubscribeRankingsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRankingName(data["rankingName"])
            .withSeason(data["season"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeSubscribeRankingsByUserIdRequest.prototype.toDict = function () {
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
    return DescribeSubscribeRankingsByUserIdRequest;
}());
exports.default = DescribeSubscribeRankingsByUserIdRequest;
//# sourceMappingURL=DescribeSubscribeRankingsByUserIdRequest.js.map