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
var GetSubscribeRankingRequest = /** @class */ (function () {
    function GetSubscribeRankingRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.accessToken = null;
        this.season = null;
        this.scorerUserId = null;
    }
    GetSubscribeRankingRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSubscribeRankingRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRankingRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRankingRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSubscribeRankingRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRankingRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRankingRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSubscribeRankingRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRankingRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRankingRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetSubscribeRankingRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetSubscribeRankingRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetSubscribeRankingRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetSubscribeRankingRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSubscribeRankingRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetSubscribeRankingRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetSubscribeRankingRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetSubscribeRankingRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetSubscribeRankingRequest.prototype.getScorerUserId = function () {
        return this.scorerUserId;
    };
    GetSubscribeRankingRequest.prototype.setScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    GetSubscribeRankingRequest.prototype.withScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    GetSubscribeRankingRequest.fromDict = function (data) {
        return new GetSubscribeRankingRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withAccessToken(data["accessToken"])
            .withSeason(data["season"])
            .withScorerUserId(data["scorerUserId"]);
    };
    GetSubscribeRankingRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "accessToken": this.getAccessToken(),
            "season": this.getSeason(),
            "scorerUserId": this.getScorerUserId(),
        };
    };
    return GetSubscribeRankingRequest;
}());
exports.default = GetSubscribeRankingRequest;
//# sourceMappingURL=GetSubscribeRankingRequest.js.map