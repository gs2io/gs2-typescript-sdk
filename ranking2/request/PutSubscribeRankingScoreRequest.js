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
var PutSubscribeRankingScoreRequest = /** @class */ (function () {
    function PutSubscribeRankingScoreRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.accessToken = null;
        this.score = null;
        this.metadata = null;
        this.duplicationAvoider = null;
    }
    PutSubscribeRankingScoreRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PutSubscribeRankingScoreRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PutSubscribeRankingScoreRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PutSubscribeRankingScoreRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    PutSubscribeRankingScoreRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PutSubscribeRankingScoreRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.getScore = function () {
        return this.score;
    };
    PutSubscribeRankingScoreRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    PutSubscribeRankingScoreRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PutSubscribeRankingScoreRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutSubscribeRankingScoreRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutSubscribeRankingScoreRequest.fromDict = function (data) {
        return new PutSubscribeRankingScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withAccessToken(data["accessToken"])
            .withScore(data["score"])
            .withMetadata(data["metadata"]);
    };
    PutSubscribeRankingScoreRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "accessToken": this.getAccessToken(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
        };
    };
    return PutSubscribeRankingScoreRequest;
}());
exports.default = PutSubscribeRankingScoreRequest;
//# sourceMappingURL=PutSubscribeRankingScoreRequest.js.map