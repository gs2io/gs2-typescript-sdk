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
var GetSeasonGatheringRequest = /** @class */ (function () {
    function GetSeasonGatheringRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
        this.season = null;
        this.tier = null;
        this.seasonGatheringName = null;
    }
    GetSeasonGatheringRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSeasonGatheringRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSeasonGatheringRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSeasonGatheringRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSeasonGatheringRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSeasonGatheringRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSeasonGatheringRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSeasonGatheringRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSeasonGatheringRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSeasonGatheringRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    GetSeasonGatheringRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    GetSeasonGatheringRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    GetSeasonGatheringRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetSeasonGatheringRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetSeasonGatheringRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetSeasonGatheringRequest.prototype.getTier = function () {
        return this.tier;
    };
    GetSeasonGatheringRequest.prototype.setTier = function (tier) {
        this.tier = tier;
        return this;
    };
    GetSeasonGatheringRequest.prototype.withTier = function (tier) {
        this.tier = tier;
        return this;
    };
    GetSeasonGatheringRequest.prototype.getSeasonGatheringName = function () {
        return this.seasonGatheringName;
    };
    GetSeasonGatheringRequest.prototype.setSeasonGatheringName = function (seasonGatheringName) {
        this.seasonGatheringName = seasonGatheringName;
        return this;
    };
    GetSeasonGatheringRequest.prototype.withSeasonGatheringName = function (seasonGatheringName) {
        this.seasonGatheringName = seasonGatheringName;
        return this;
    };
    GetSeasonGatheringRequest.fromDict = function (data) {
        return new GetSeasonGatheringRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"])
            .withSeason(data["season"])
            .withTier(data["tier"])
            .withSeasonGatheringName(data["seasonGatheringName"]);
    };
    GetSeasonGatheringRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
            "season": this.getSeason(),
            "tier": this.getTier(),
            "seasonGatheringName": this.getSeasonGatheringName(),
        };
    };
    return GetSeasonGatheringRequest;
}());
exports.default = GetSeasonGatheringRequest;
//# sourceMappingURL=GetSeasonGatheringRequest.js.map