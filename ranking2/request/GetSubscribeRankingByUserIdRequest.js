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
var GetSubscribeRankingByUserIdRequest = /** @class */ (function () {
    function GetSubscribeRankingByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.userId = null;
        this.season = null;
        this.scorerUserId = null;
        this.timeOffsetToken = null;
    }
    GetSubscribeRankingByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSubscribeRankingByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSubscribeRankingByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSubscribeRankingByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetSubscribeRankingByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetSubscribeRankingByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetSubscribeRankingByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.getScorerUserId = function () {
        return this.scorerUserId;
    };
    GetSubscribeRankingByUserIdRequest.prototype.setScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.withScorerUserId = function (scorerUserId) {
        this.scorerUserId = scorerUserId;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetSubscribeRankingByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetSubscribeRankingByUserIdRequest.fromDict = function (data) {
        return new GetSubscribeRankingByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withSeason(data["season"])
            .withScorerUserId(data["scorerUserId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetSubscribeRankingByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "season": this.getSeason(),
            "scorerUserId": this.getScorerUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetSubscribeRankingByUserIdRequest;
}());
exports.default = GetSubscribeRankingByUserIdRequest;
//# sourceMappingURL=GetSubscribeRankingByUserIdRequest.js.map