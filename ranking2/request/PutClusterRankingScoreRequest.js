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
var PutClusterRankingScoreRequest = /** @class */ (function () {
    function PutClusterRankingScoreRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.clusterName = null;
        this.accessToken = null;
        this.score = null;
        this.metadata = null;
        this.duplicationAvoider = null;
    }
    PutClusterRankingScoreRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PutClusterRankingScoreRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PutClusterRankingScoreRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PutClusterRankingScoreRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    PutClusterRankingScoreRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    PutClusterRankingScoreRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PutClusterRankingScoreRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.getScore = function () {
        return this.score;
    };
    PutClusterRankingScoreRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    PutClusterRankingScoreRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PutClusterRankingScoreRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutClusterRankingScoreRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutClusterRankingScoreRequest.fromDict = function (data) {
        return new PutClusterRankingScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withAccessToken(data["accessToken"])
            .withScore(data["score"])
            .withMetadata(data["metadata"]);
    };
    PutClusterRankingScoreRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "accessToken": this.getAccessToken(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
        };
    };
    return PutClusterRankingScoreRequest;
}());
exports.default = PutClusterRankingScoreRequest;
//# sourceMappingURL=PutClusterRankingScoreRequest.js.map