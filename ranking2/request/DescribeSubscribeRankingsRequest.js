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
var DescribeSubscribeRankingsRequest = /** @class */ (function () {
    function DescribeSubscribeRankingsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rankingName = null;
        this.season = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSubscribeRankingsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSubscribeRankingsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSubscribeRankingsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSubscribeRankingsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeSubscribeRankingsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeSubscribeRankingsRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.getSeason = function () {
        return this.season;
    };
    DescribeSubscribeRankingsRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSubscribeRankingsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSubscribeRankingsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSubscribeRankingsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSubscribeRankingsRequest.fromDict = function (data) {
        return new DescribeSubscribeRankingsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withSeason(data["season"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSubscribeRankingsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rankingName": this.getRankingName(),
            "season": this.getSeason(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSubscribeRankingsRequest;
}());
exports.default = DescribeSubscribeRankingsRequest;
//# sourceMappingURL=DescribeSubscribeRankingsRequest.js.map