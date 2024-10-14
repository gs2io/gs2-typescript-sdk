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
var VerifyGlobalRankingScoreByUserIdRequest = /** @class */ (function () {
    function VerifyGlobalRankingScoreByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rankingName = null;
        this.verifyType = null;
        this.season = null;
        this.score = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyGlobalRankingScoreByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.getScore = function () {
        return this.score;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyGlobalRankingScoreByUserIdRequest.fromDict = function (data) {
        return new VerifyGlobalRankingScoreByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRankingName(data["rankingName"])
            .withVerifyType(data["verifyType"])
            .withSeason(data["season"])
            .withScore(data["score"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyGlobalRankingScoreByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rankingName": this.getRankingName(),
            "verifyType": this.getVerifyType(),
            "season": this.getSeason(),
            "score": this.getScore(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyGlobalRankingScoreByUserIdRequest;
}());
exports.default = VerifyGlobalRankingScoreByUserIdRequest;
//# sourceMappingURL=VerifyGlobalRankingScoreByUserIdRequest.js.map