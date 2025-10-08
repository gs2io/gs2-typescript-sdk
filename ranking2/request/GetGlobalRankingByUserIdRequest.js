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
var GetGlobalRankingByUserIdRequest = /** @class */ (function () {
    function GetGlobalRankingByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.userId = null;
        this.season = null;
        this.timeOffsetToken = null;
    }
    GetGlobalRankingByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetGlobalRankingByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetGlobalRankingByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetGlobalRankingByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetGlobalRankingByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetGlobalRankingByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetGlobalRankingByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetGlobalRankingByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetGlobalRankingByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetGlobalRankingByUserIdRequest.fromDict = function (data) {
        return new GetGlobalRankingByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withSeason(data["season"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetGlobalRankingByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "season": this.getSeason(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetGlobalRankingByUserIdRequest;
}());
exports.default = GetGlobalRankingByUserIdRequest;
//# sourceMappingURL=GetGlobalRankingByUserIdRequest.js.map