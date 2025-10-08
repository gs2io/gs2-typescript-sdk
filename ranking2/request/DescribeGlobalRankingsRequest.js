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
var DescribeGlobalRankingsRequest = /** @class */ (function () {
    function DescribeGlobalRankingsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rankingName = null;
        this.season = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeGlobalRankingsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeGlobalRankingsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeGlobalRankingsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeGlobalRankingsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeGlobalRankingsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeGlobalRankingsRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.getSeason = function () {
        return this.season;
    };
    DescribeGlobalRankingsRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeGlobalRankingsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeGlobalRankingsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGlobalRankingsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGlobalRankingsRequest.fromDict = function (data) {
        return new DescribeGlobalRankingsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withSeason(data["season"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeGlobalRankingsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rankingName": this.getRankingName(),
            "season": this.getSeason(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeGlobalRankingsRequest;
}());
exports.default = DescribeGlobalRankingsRequest;
//# sourceMappingURL=DescribeGlobalRankingsRequest.js.map