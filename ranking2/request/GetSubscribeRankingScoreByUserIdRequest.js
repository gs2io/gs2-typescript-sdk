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
var GetSubscribeRankingScoreByUserIdRequest = /** @class */ (function () {
    function GetSubscribeRankingScoreByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.userId = null;
        this.season = null;
        this.timeOffsetToken = null;
    }
    GetSubscribeRankingScoreByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetSubscribeRankingScoreByUserIdRequest.fromDict = function (data) {
        return new GetSubscribeRankingScoreByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withSeason(data["season"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetSubscribeRankingScoreByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "season": this.getSeason(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetSubscribeRankingScoreByUserIdRequest;
}());
exports.default = GetSubscribeRankingScoreByUserIdRequest;
//# sourceMappingURL=GetSubscribeRankingScoreByUserIdRequest.js.map