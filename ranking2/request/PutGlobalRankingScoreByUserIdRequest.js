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
var PutGlobalRankingScoreByUserIdRequest = /** @class */ (function () {
    function PutGlobalRankingScoreByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.userId = null;
        this.score = null;
        this.metadata = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    PutGlobalRankingScoreByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.getScore = function () {
        return this.score;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutGlobalRankingScoreByUserIdRequest.fromDict = function (data) {
        return new PutGlobalRankingScoreByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    PutGlobalRankingScoreByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return PutGlobalRankingScoreByUserIdRequest;
}());
exports.default = PutGlobalRankingScoreByUserIdRequest;
//# sourceMappingURL=PutGlobalRankingScoreByUserIdRequest.js.map