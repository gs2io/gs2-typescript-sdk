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
var GetGlobalRankingReceivedRewardRequest = /** @class */ (function () {
    function GetGlobalRankingReceivedRewardRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.accessToken = null;
        this.season = null;
    }
    GetGlobalRankingReceivedRewardRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetGlobalRankingReceivedRewardRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetGlobalRankingReceivedRewardRequest.fromDict = function (data) {
        return new GetGlobalRankingReceivedRewardRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withAccessToken(data["accessToken"])
            .withSeason(data["season"]);
    };
    GetGlobalRankingReceivedRewardRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "accessToken": this.getAccessToken(),
            "season": this.getSeason(),
        };
    };
    return GetGlobalRankingReceivedRewardRequest;
}());
exports.default = GetGlobalRankingReceivedRewardRequest;
//# sourceMappingURL=GetGlobalRankingReceivedRewardRequest.js.map