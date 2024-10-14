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
var VerifyGlobalRankingScoreRequest = /** @class */ (function () {
    function VerifyGlobalRankingScoreRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rankingName = null;
        this.verifyType = null;
        this.season = null;
        this.score = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyGlobalRankingScoreRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyGlobalRankingScoreRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyGlobalRankingScoreRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyGlobalRankingScoreRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyGlobalRankingScoreRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    VerifyGlobalRankingScoreRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyGlobalRankingScoreRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.getSeason = function () {
        return this.season;
    };
    VerifyGlobalRankingScoreRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.getScore = function () {
        return this.score;
    };
    VerifyGlobalRankingScoreRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyGlobalRankingScoreRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyGlobalRankingScoreRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyGlobalRankingScoreRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyGlobalRankingScoreRequest.fromDict = function (data) {
        return new VerifyGlobalRankingScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withVerifyType(data["verifyType"])
            .withSeason(data["season"])
            .withScore(data["score"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyGlobalRankingScoreRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rankingName": this.getRankingName(),
            "verifyType": this.getVerifyType(),
            "season": this.getSeason(),
            "score": this.getScore(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyGlobalRankingScoreRequest;
}());
exports.default = VerifyGlobalRankingScoreRequest;
//# sourceMappingURL=VerifyGlobalRankingScoreRequest.js.map