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
var GetClusterRankingRequest = /** @class */ (function () {
    function GetClusterRankingRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rankingName = null;
        this.clusterName = null;
        this.accessToken = null;
        this.season = null;
    }
    GetClusterRankingRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetClusterRankingRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetClusterRankingRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetClusterRankingRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetClusterRankingRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetClusterRankingRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetClusterRankingRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetClusterRankingRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetClusterRankingRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetClusterRankingRequest.prototype.getRankingName = function () {
        return this.rankingName;
    };
    GetClusterRankingRequest.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetClusterRankingRequest.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    GetClusterRankingRequest.prototype.getClusterName = function () {
        return this.clusterName;
    };
    GetClusterRankingRequest.prototype.setClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    GetClusterRankingRequest.prototype.withClusterName = function (clusterName) {
        this.clusterName = clusterName;
        return this;
    };
    GetClusterRankingRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetClusterRankingRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetClusterRankingRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetClusterRankingRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetClusterRankingRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetClusterRankingRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetClusterRankingRequest.fromDict = function (data) {
        return new GetClusterRankingRequest()
            .withNamespaceName(data["namespaceName"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withAccessToken(data["accessToken"])
            .withSeason(data["season"]);
    };
    GetClusterRankingRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "accessToken": this.getAccessToken(),
            "season": this.getSeason(),
        };
    };
    return GetClusterRankingRequest;
}());
exports.default = GetClusterRankingRequest;
//# sourceMappingURL=GetClusterRankingRequest.js.map