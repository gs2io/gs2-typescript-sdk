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
var DescribeSubscribeRankingScoresByUserIdRequest = /** @class */ (function () {
    function DescribeSubscribeRankingScoresByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rankingName = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeSubscribeRankingScoresByUserIdRequest.fromDict = function (data) {
        return new DescribeSubscribeRankingScoresByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRankingName(data["rankingName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeSubscribeRankingScoresByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rankingName": this.getRankingName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeSubscribeRankingScoresByUserIdRequest;
}());
exports.default = DescribeSubscribeRankingScoresByUserIdRequest;
//# sourceMappingURL=DescribeSubscribeRankingScoresByUserIdRequest.js.map