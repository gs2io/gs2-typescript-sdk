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
var VerifyClusterRankingScoreRequest = /** @class */ (function () {
    function VerifyClusterRankingScoreRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rankingName = null;
        this.clusterName = null;
        this.verifyType = null;
        this.season = null;
        this.score = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.duplicationAvoider = null;
    }
    VerifyClusterRankingScoreRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyClusterRankingScoreRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyClusterRankingScoreRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyClusterRankingScoreRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyClusterRankingScoreRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    VerifyClusterRankingScoreRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    VerifyClusterRankingScoreRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyClusterRankingScoreRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.getSeason = function () {
        return this.season;
    };
    VerifyClusterRankingScoreRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.getScore = function () {
        return this.score;
    };
    VerifyClusterRankingScoreRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    VerifyClusterRankingScoreRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyClusterRankingScoreRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyClusterRankingScoreRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyClusterRankingScoreRequest.fromDict = function (data) {
        return new VerifyClusterRankingScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withVerifyType(data["verifyType"])
            .withSeason(data["season"])
            .withScore(data["score"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    };
    VerifyClusterRankingScoreRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "verifyType": this.getVerifyType(),
            "season": this.getSeason(),
            "score": this.getScore(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    };
    return VerifyClusterRankingScoreRequest;
}());
exports.default = VerifyClusterRankingScoreRequest;
//# sourceMappingURL=VerifyClusterRankingScoreRequest.js.map