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
var VerifyClusterRankingScoreByUserIdRequest = /** @class */ (function () {
    function VerifyClusterRankingScoreByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rankingName = null;
        this.clusterName = null;
        this.verifyType = null;
        this.season = null;
        this.score = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyClusterRankingScoreByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.getScore = function () {
        return this.score;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyClusterRankingScoreByUserIdRequest.fromDict = function (data) {
        return new VerifyClusterRankingScoreByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withVerifyType(data["verifyType"])
            .withSeason(data["season"])
            .withScore(data["score"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyClusterRankingScoreByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "verifyType": this.getVerifyType(),
            "season": this.getSeason(),
            "score": this.getScore(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyClusterRankingScoreByUserIdRequest;
}());
exports.default = VerifyClusterRankingScoreByUserIdRequest;
//# sourceMappingURL=VerifyClusterRankingScoreByUserIdRequest.js.map