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
var DeleteSubscribeRankingScoreByUserIdRequest = /** @class */ (function () {
    function DeleteSubscribeRankingScoreByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.userId = null;
        this.season = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteSubscribeRankingScoreByUserIdRequest.fromDict = function (data) {
        return new DeleteSubscribeRankingScoreByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withSeason(data["season"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeleteSubscribeRankingScoreByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "season": this.getSeason(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DeleteSubscribeRankingScoreByUserIdRequest;
}());
exports.default = DeleteSubscribeRankingScoreByUserIdRequest;
//# sourceMappingURL=DeleteSubscribeRankingScoreByUserIdRequest.js.map