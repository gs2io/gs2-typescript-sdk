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
var DescribeMatchmakingSeasonGatheringsRequest = /** @class */ (function () {
    function DescribeMatchmakingSeasonGatheringsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
        this.season = null;
        this.tier = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeMatchmakingSeasonGatheringsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.getSeason = function () {
        return this.season;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.getTier = function () {
        return this.tier;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.setTier = function (tier) {
        this.tier = tier;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.withTier = function (tier) {
        this.tier = tier;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeMatchmakingSeasonGatheringsRequest.fromDict = function (data) {
        return new DescribeMatchmakingSeasonGatheringsRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"])
            .withSeason(data["season"])
            .withTier(data["tier"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeMatchmakingSeasonGatheringsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
            "season": this.getSeason(),
            "tier": this.getTier(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeMatchmakingSeasonGatheringsRequest;
}());
exports.default = DescribeMatchmakingSeasonGatheringsRequest;
//# sourceMappingURL=DescribeMatchmakingSeasonGatheringsRequest.js.map