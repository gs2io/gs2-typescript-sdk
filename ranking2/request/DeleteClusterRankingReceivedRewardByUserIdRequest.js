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
var DeleteClusterRankingReceivedRewardByUserIdRequest = /** @class */ (function () {
    function DeleteClusterRankingReceivedRewardByUserIdRequest() {
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
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.fromDict = function (data) {
        return new DeleteClusterRankingReceivedRewardByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withUserId(data["userId"])
            .withSeason(data["season"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeleteClusterRankingReceivedRewardByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "userId": this.getUserId(),
            "season": this.getSeason(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DeleteClusterRankingReceivedRewardByUserIdRequest;
}());
exports.default = DeleteClusterRankingReceivedRewardByUserIdRequest;
//# sourceMappingURL=DeleteClusterRankingReceivedRewardByUserIdRequest.js.map