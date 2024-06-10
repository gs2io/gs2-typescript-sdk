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
var PutSubscribeRankingScoreByUserIdRequest = /** @class */ (function () {
    function PutSubscribeRankingScoreByUserIdRequest() {
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
    PutSubscribeRankingScoreByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.getScore = function () {
        return this.score;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.setScore = function (score) {
        this.score = score;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.withScore = function (score) {
        this.score = score;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PutSubscribeRankingScoreByUserIdRequest.fromDict = function (data) {
        return new PutSubscribeRankingScoreByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    PutSubscribeRankingScoreByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return PutSubscribeRankingScoreByUserIdRequest;
}());
exports.default = PutSubscribeRankingScoreByUserIdRequest;
//# sourceMappingURL=PutSubscribeRankingScoreByUserIdRequest.js.map