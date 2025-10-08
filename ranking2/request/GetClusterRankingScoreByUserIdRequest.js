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
var GetClusterRankingScoreByUserIdRequest = /** @class */ (function () {
    function GetClusterRankingScoreByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.clusterName = null;
        this.userId = null;
        this.season = null;
        this.timeOffsetToken = null;
    }
    GetClusterRankingScoreByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetClusterRankingScoreByUserIdRequest.fromDict = function (data) {
        return new GetClusterRankingScoreByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withUserId(data["userId"])
            .withSeason(data["season"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetClusterRankingScoreByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "userId": this.getUserId(),
            "season": this.getSeason(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetClusterRankingScoreByUserIdRequest;
}());
exports.default = GetClusterRankingScoreByUserIdRequest;
//# sourceMappingURL=GetClusterRankingScoreByUserIdRequest.js.map