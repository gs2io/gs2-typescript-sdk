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
var PutGlobalRankingScoreRequest = /** @class */ (function () {
    function PutGlobalRankingScoreRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.accessToken = null;
        this.score = null;
        this.metadata = null;
        this.duplicationAvoider = null;
    }
    PutGlobalRankingScoreRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PutGlobalRankingScoreRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PutGlobalRankingScoreRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PutGlobalRankingScoreRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    PutGlobalRankingScoreRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PutGlobalRankingScoreRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.getScore = function () {
        return this.score;
    };
    PutGlobalRankingScoreRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    PutGlobalRankingScoreRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PutGlobalRankingScoreRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutGlobalRankingScoreRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutGlobalRankingScoreRequest.fromDict = function (data) {
        return new PutGlobalRankingScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withAccessToken(data["accessToken"])
            .withScore(data["score"])
            .withMetadata(data["metadata"]);
    };
    PutGlobalRankingScoreRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "accessToken": this.getAccessToken(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
        };
    };
    return PutGlobalRankingScoreRequest;
}());
exports.default = PutGlobalRankingScoreRequest;
//# sourceMappingURL=PutGlobalRankingScoreRequest.js.map