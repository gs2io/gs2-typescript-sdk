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
var DeleteClusterRankingScoreByUserIdRequest = /** @class */ (function () {
    function DeleteClusterRankingScoreByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.clusterName = null;
        this.userId = null;
        this.season = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DeleteClusterRankingScoreByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteClusterRankingScoreByUserIdRequest.fromDict = function (data) {
        return new DeleteClusterRankingScoreByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withUserId(data["userId"])
            .withSeason(data["season"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeleteClusterRankingScoreByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "userId": this.getUserId(),
            "season": this.getSeason(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DeleteClusterRankingScoreByUserIdRequest;
}());
exports.default = DeleteClusterRankingScoreByUserIdRequest;
//# sourceMappingURL=DeleteClusterRankingScoreByUserIdRequest.js.map