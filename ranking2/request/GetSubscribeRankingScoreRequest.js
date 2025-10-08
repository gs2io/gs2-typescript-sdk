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
var GetSubscribeRankingScoreRequest = /** @class */ (function () {
    function GetSubscribeRankingScoreRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.accessToken = null;
        this.season = null;
    }
    GetSubscribeRankingScoreRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSubscribeRankingScoreRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRankingScoreRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRankingScoreRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSubscribeRankingScoreRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRankingScoreRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRankingScoreRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSubscribeRankingScoreRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRankingScoreRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRankingScoreRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetSubscribeRankingScoreRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetSubscribeRankingScoreRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetSubscribeRankingScoreRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetSubscribeRankingScoreRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSubscribeRankingScoreRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSubscribeRankingScoreRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetSubscribeRankingScoreRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetSubscribeRankingScoreRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetSubscribeRankingScoreRequest.fromDict = function (data) {
        return new GetSubscribeRankingScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withAccessToken(data["accessToken"])
            .withSeason(data["season"]);
    };
    GetSubscribeRankingScoreRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "accessToken": this.getAccessToken(),
            "season": this.getSeason(),
        };
    };
    return GetSubscribeRankingScoreRequest;
}());
exports.default = GetSubscribeRankingScoreRequest;
//# sourceMappingURL=GetSubscribeRankingScoreRequest.js.map