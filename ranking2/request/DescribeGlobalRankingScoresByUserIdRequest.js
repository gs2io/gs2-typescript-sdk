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
var DescribeGlobalRankingScoresByUserIdRequest = /** @class */ (function () {
    function DescribeGlobalRankingScoresByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rankingName = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
    }
    DescribeGlobalRankingScoresByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DescribeGlobalRankingScoresByUserIdRequest.fromDict = function (data) {
        return new DescribeGlobalRankingScoresByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRankingName(data["rankingName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DescribeGlobalRankingScoresByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rankingName": this.getRankingName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DescribeGlobalRankingScoresByUserIdRequest;
}());
exports.default = DescribeGlobalRankingScoresByUserIdRequest;
//# sourceMappingURL=DescribeGlobalRankingScoresByUserIdRequest.js.map