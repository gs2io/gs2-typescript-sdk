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
var GetGlobalRankingReceivedRewardByUserIdRequest = /** @class */ (function () {
    function GetGlobalRankingReceivedRewardByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.userId = null;
        this.season = null;
        this.timeOffsetToken = null;
    }
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.fromDict = function (data) {
        return new GetGlobalRankingReceivedRewardByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withSeason(data["season"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetGlobalRankingReceivedRewardByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "season": this.getSeason(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetGlobalRankingReceivedRewardByUserIdRequest;
}());
exports.default = GetGlobalRankingReceivedRewardByUserIdRequest;
//# sourceMappingURL=GetGlobalRankingReceivedRewardByUserIdRequest.js.map