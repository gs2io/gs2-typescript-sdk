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
var VerifySubscribeRankingScoreRequest = /** @class */ (function () {
    function VerifySubscribeRankingScoreRequest() {
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
    VerifySubscribeRankingScoreRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifySubscribeRankingScoreRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifySubscribeRankingScoreRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifySubscribeRankingScoreRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifySubscribeRankingScoreRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    VerifySubscribeRankingScoreRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifySubscribeRankingScoreRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.getSeason = function () {
        return this.season;
    };
    VerifySubscribeRankingScoreRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.getScore = function () {
        return this.score;
    };
    VerifySubscribeRankingScoreRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifySubscribeRankingScoreRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifySubscribeRankingScoreRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifySubscribeRankingScoreRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifySubscribeRankingScoreRequest.fromDict = function (data) {
        return new VerifySubscribeRankingScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withVerifyType(data["verifyType"])
            .withSeason(data["season"])
            .withScore(data["score"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifySubscribeRankingScoreRequest.prototype.toDict = function () {
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
    return VerifySubscribeRankingScoreRequest;
}());
exports.default = VerifySubscribeRankingScoreRequest;
//# sourceMappingURL=VerifySubscribeRankingScoreRequest.js.map