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
var ReceiveGlobalRankingReceivedRewardByUserIdRequest = /** @class */ (function () {
    function ReceiveGlobalRankingReceivedRewardByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rankingName = null;
        this.season = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.fromDict = function (data) {
        return new ReceiveGlobalRankingReceivedRewardByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRankingName(data["rankingName"])
            .withSeason(data["season"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Ranking2.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    ReceiveGlobalRankingReceivedRewardByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rankingName": this.getRankingName(),
            "season": this.getSeason(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return ReceiveGlobalRankingReceivedRewardByUserIdRequest;
}());
exports.default = ReceiveGlobalRankingReceivedRewardByUserIdRequest;
//# sourceMappingURL=ReceiveGlobalRankingReceivedRewardByUserIdRequest.js.map