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
var PutClusterRankingScoreByUserIdRequest = /** @class */ (function () {
    function PutClusterRankingScoreByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.clusterName = null;
        this.userId = null;
        this.score = null;
        this.metadata = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    PutClusterRankingScoreByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.getScore = function () {
        return this.score;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutClusterRankingScoreByUserIdRequest.fromDict = function (data) {
        return new PutClusterRankingScoreByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withUserId(data["userId"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    PutClusterRankingScoreByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "userId": this.getUserId(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return PutClusterRankingScoreByUserIdRequest;
}());
exports.default = PutClusterRankingScoreByUserIdRequest;
//# sourceMappingURL=PutClusterRankingScoreByUserIdRequest.js.map