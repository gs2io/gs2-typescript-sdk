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
var CreateGlobalRankingReceivedRewardRequest = /** @class */ (function () {
    function CreateGlobalRankingReceivedRewardRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.accessToken = null;
        this.season = null;
        this.duplicationAvoider = null;
    }
    CreateGlobalRankingReceivedRewardRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.getSeason = function () {
        return this.season;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateGlobalRankingReceivedRewardRequest.fromDict = function (data) {
        return new CreateGlobalRankingReceivedRewardRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withAccessToken(data["accessToken"])
            .withSeason(data["season"]);
    };
    CreateGlobalRankingReceivedRewardRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "accessToken": this.getAccessToken(),
            "season": this.getSeason(),
        };
    };
    return CreateGlobalRankingReceivedRewardRequest;
}());
exports.default = CreateGlobalRankingReceivedRewardRequest;
//# sourceMappingURL=CreateGlobalRankingReceivedRewardRequest.js.map