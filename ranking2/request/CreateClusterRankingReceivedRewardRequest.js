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
var CreateClusterRankingReceivedRewardRequest = /** @class */ (function () {
    function CreateClusterRankingReceivedRewardRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.clusterName = null;
        this.accessToken = null;
        this.season = null;
        this.duplicationAvoider = null;
    }
    CreateClusterRankingReceivedRewardRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.getSeason = function () {
        return this.season;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateClusterRankingReceivedRewardRequest.fromDict = function (data) {
        return new CreateClusterRankingReceivedRewardRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withAccessToken(data["accessToken"])
            .withSeason(data["season"]);
    };
    CreateClusterRankingReceivedRewardRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "accessToken": this.getAccessToken(),
            "season": this.getSeason(),
        };
    };
    return CreateClusterRankingReceivedRewardRequest;
}());
exports.default = CreateClusterRankingReceivedRewardRequest;
//# sourceMappingURL=CreateClusterRankingReceivedRewardRequest.js.map