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
var VerifySubscribeRankingScoreByUserIdRequest = /** @class */ (function () {
    function VerifySubscribeRankingScoreByUserIdRequest() {
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
    VerifySubscribeRankingScoreByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.getScore = function () {
        return this.score;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifySubscribeRankingScoreByUserIdRequest.fromDict = function (data) {
        return new VerifySubscribeRankingScoreByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRankingName(data["rankingName"])
            .withVerifyType(data["verifyType"])
            .withSeason(data["season"])
            .withScore(data["score"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifySubscribeRankingScoreByUserIdRequest.prototype.toDict = function () {
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
    return VerifySubscribeRankingScoreByUserIdRequest;
}());
exports.default = VerifySubscribeRankingScoreByUserIdRequest;
//# sourceMappingURL=VerifySubscribeRankingScoreByUserIdRequest.js.map