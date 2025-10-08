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
var GetClusterRankingScoreRequest = /** @class */ (function () {
    function GetClusterRankingScoreRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.clusterName = null;
        this.accessToken = null;
        this.season = null;
    }
    GetClusterRankingScoreRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetClusterRankingScoreRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetClusterRankingScoreRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetClusterRankingScoreRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetClusterRankingScoreRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    GetClusterRankingScoreRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetClusterRankingScoreRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetClusterRankingScoreRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetClusterRankingScoreRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetClusterRankingScoreRequest.fromDict = function (data) {
        return new GetClusterRankingScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withAccessToken(data["accessToken"])
            .withSeason(data["season"]);
    };
    GetClusterRankingScoreRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "accessToken": this.getAccessToken(),
            "season": this.getSeason(),
        };
    };
    return GetClusterRankingScoreRequest;
}());
exports.default = GetClusterRankingScoreRequest;
//# sourceMappingURL=GetClusterRankingScoreRequest.js.map