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
var ReceiveClusterRankingReceivedRewardRequest = /** @class */ (function () {
    function ReceiveClusterRankingReceivedRewardRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rankingName = null;
        this.clusterName = null;
        this.season = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    ReceiveClusterRankingReceivedRewardRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.getSeason = function () {
        return this.season;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.getConfig = function () {
        return this.config;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReceiveClusterRankingReceivedRewardRequest.fromDict = function (data) {
        return new ReceiveClusterRankingReceivedRewardRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withSeason(data["season"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Ranking2.Config.fromDict(item);
            }) : null);
    };
    ReceiveClusterRankingReceivedRewardRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "season": this.getSeason(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return ReceiveClusterRankingReceivedRewardRequest;
}());
exports.default = ReceiveClusterRankingReceivedRewardRequest;
//# sourceMappingURL=ReceiveClusterRankingReceivedRewardRequest.js.map