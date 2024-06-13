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
var DeleteSeasonGatheringRequest = /** @class */ (function () {
    function DeleteSeasonGatheringRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
        this.season = null;
        this.tier = null;
        this.seasonGatheringName = null;
    }
    DeleteSeasonGatheringRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteSeasonGatheringRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteSeasonGatheringRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteSeasonGatheringRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    DeleteSeasonGatheringRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.getSeason = function () {
        return this.season;
    };
    DeleteSeasonGatheringRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.getTier = function () {
        return this.tier;
    };
    DeleteSeasonGatheringRequest.prototype.setTier = function (tier) {
        this.tier = tier;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.withTier = function (tier) {
        this.tier = tier;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.getSeasonGatheringName = function () {
        return this.seasonGatheringName;
    };
    DeleteSeasonGatheringRequest.prototype.setSeasonGatheringName = function (seasonGatheringName) {
        this.seasonGatheringName = seasonGatheringName;
        return this;
    };
    DeleteSeasonGatheringRequest.prototype.withSeasonGatheringName = function (seasonGatheringName) {
        this.seasonGatheringName = seasonGatheringName;
        return this;
    };
    DeleteSeasonGatheringRequest.fromDict = function (data) {
        return new DeleteSeasonGatheringRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"])
            .withSeason(data["season"])
            .withTier(data["tier"])
            .withSeasonGatheringName(data["seasonGatheringName"]);
    };
    DeleteSeasonGatheringRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
            "season": this.getSeason(),
            "tier": this.getTier(),
            "seasonGatheringName": this.getSeasonGatheringName(),
        };
    };
    return DeleteSeasonGatheringRequest;
}());
exports.default = DeleteSeasonGatheringRequest;
//# sourceMappingURL=DeleteSeasonGatheringRequest.js.map