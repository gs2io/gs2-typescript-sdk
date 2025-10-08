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
var tslib_1 = require("tslib");
var Gs2Ranking2 = tslib_1.__importStar(require("../model"));
var ReceiveClusterRankingReceivedRewardByUserIdRequest = /** @class */ (function () {
    function ReceiveClusterRankingReceivedRewardByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rankingName = null;
        this.clusterName = null;
        this.season = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.fromDict = function (data) {
        return new ReceiveClusterRankingReceivedRewardByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withSeason(data["season"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Ranking2.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    ReceiveClusterRankingReceivedRewardByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "season": this.getSeason(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return ReceiveClusterRankingReceivedRewardByUserIdRequest;
}());
exports.default = ReceiveClusterRankingReceivedRewardByUserIdRequest;
//# sourceMappingURL=ReceiveClusterRankingReceivedRewardByUserIdRequest.js.map