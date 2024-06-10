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
var DescribeClusterRankingsRequest = /** @class */ (function () {
    function DescribeClusterRankingsRequest() {
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
    DescribeClusterRankingsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeClusterRankingsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeClusterRankingsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeClusterRankingsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeClusterRankingsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DescribeClusterRankingsRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    DescribeClusterRankingsRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.getSeason = function () {
        return this.season;
    };
    DescribeClusterRankingsRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeClusterRankingsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeClusterRankingsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeClusterRankingsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeClusterRankingsRequest.fromDict = function (data) {
        return new DescribeClusterRankingsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withSeason(data["season"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeClusterRankingsRequest.prototype.toDict = function () {
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
    return DescribeClusterRankingsRequest;
}());
exports.default = DescribeClusterRankingsRequest;
//# sourceMappingURL=DescribeClusterRankingsRequest.js.map