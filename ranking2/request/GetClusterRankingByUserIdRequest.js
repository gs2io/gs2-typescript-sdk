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
var GetClusterRankingByUserIdRequest = /** @class */ (function () {
    function GetClusterRankingByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.clusterName = null;
        this.userId = null;
        this.season = null;
        this.timeOffsetToken = null;
    }
    GetClusterRankingByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetClusterRankingByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetClusterRankingByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetClusterRankingByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetClusterRankingByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    GetClusterRankingByUserIdRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetClusterRankingByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetClusterRankingByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetClusterRankingByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetClusterRankingByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetClusterRankingByUserIdRequest.fromDict = function (data) {
        return new GetClusterRankingByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withUserId(data["userId"])
            .withSeason(data["season"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetClusterRankingByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "userId": this.getUserId(),
            "season": this.getSeason(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetClusterRankingByUserIdRequest;
}());
exports.default = GetClusterRankingByUserIdRequest;
//# sourceMappingURL=GetClusterRankingByUserIdRequest.js.map