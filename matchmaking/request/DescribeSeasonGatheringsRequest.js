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
var DescribeSeasonGatheringsRequest = /** @class */ (function () {
    function DescribeSeasonGatheringsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
        this.season = null;
        this.tier = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSeasonGatheringsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSeasonGatheringsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSeasonGatheringsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSeasonGatheringsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    DescribeSeasonGatheringsRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.getSeason = function () {
        return this.season;
    };
    DescribeSeasonGatheringsRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.getTier = function () {
        return this.tier;
    };
    DescribeSeasonGatheringsRequest.prototype.setTier = function (tier) {
        this.tier = tier;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.withTier = function (tier) {
        this.tier = tier;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSeasonGatheringsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSeasonGatheringsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSeasonGatheringsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSeasonGatheringsRequest.fromDict = function (data) {
        return new DescribeSeasonGatheringsRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"])
            .withSeason(data["season"])
            .withTier(data["tier"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSeasonGatheringsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
            "season": this.getSeason(),
            "tier": this.getTier(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSeasonGatheringsRequest;
}());
exports.default = DescribeSeasonGatheringsRequest;
//# sourceMappingURL=DescribeSeasonGatheringsRequest.js.map