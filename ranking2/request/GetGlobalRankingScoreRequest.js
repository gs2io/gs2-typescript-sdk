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
var GetGlobalRankingScoreRequest = /** @class */ (function () {
    function GetGlobalRankingScoreRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.accessToken = null;
        this.season = null;
    }
    GetGlobalRankingScoreRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGlobalRankingScoreRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalRankingScoreRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalRankingScoreRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGlobalRankingScoreRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalRankingScoreRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalRankingScoreRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGlobalRankingScoreRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalRankingScoreRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalRankingScoreRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetGlobalRankingScoreRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetGlobalRankingScoreRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetGlobalRankingScoreRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetGlobalRankingScoreRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetGlobalRankingScoreRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetGlobalRankingScoreRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetGlobalRankingScoreRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetGlobalRankingScoreRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetGlobalRankingScoreRequest.fromDict = function (data) {
        return new GetGlobalRankingScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withAccessToken(data["accessToken"])
            .withSeason(data["season"]);
    };
    GetGlobalRankingScoreRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "accessToken": this.getAccessToken(),
            "season": this.getSeason(),
        };
    };
    return GetGlobalRankingScoreRequest;
}());
exports.default = GetGlobalRankingScoreRequest;
//# sourceMappingURL=GetGlobalRankingScoreRequest.js.map