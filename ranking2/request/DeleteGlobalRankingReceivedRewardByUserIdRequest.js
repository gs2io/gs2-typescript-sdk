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
var DeleteGlobalRankingReceivedRewardByUserIdRequest = /** @class */ (function () {
    function DeleteGlobalRankingReceivedRewardByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.userId = null;
        this.season = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.fromDict = function (data) {
        return new DeleteGlobalRankingReceivedRewardByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withSeason(data["season"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DeleteGlobalRankingReceivedRewardByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "season": this.getSeason(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DeleteGlobalRankingReceivedRewardByUserIdRequest;
}());
exports.default = DeleteGlobalRankingReceivedRewardByUserIdRequest;
//# sourceMappingURL=DeleteGlobalRankingReceivedRewardByUserIdRequest.js.map