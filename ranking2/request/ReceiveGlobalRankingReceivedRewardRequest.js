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
var ReceiveGlobalRankingReceivedRewardRequest = /** @class */ (function () {
    function ReceiveGlobalRankingReceivedRewardRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rankingName = null;
        this.season = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    ReceiveGlobalRankingReceivedRewardRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.getSeason = function () {
        return this.season;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.getConfig = function () {
        return this.config;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveGlobalRankingReceivedRewardRequest.fromDict = function (data) {
        return new ReceiveGlobalRankingReceivedRewardRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withSeason(data["season"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Ranking2.Config.fromDict(item);
            }) : null);
    };
    ReceiveGlobalRankingReceivedRewardRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rankingName": this.getRankingName(),
            "season": this.getSeason(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return ReceiveGlobalRankingReceivedRewardRequest;
}());
exports.default = ReceiveGlobalRankingReceivedRewardRequest;
//# sourceMappingURL=ReceiveGlobalRankingReceivedRewardRequest.js.map