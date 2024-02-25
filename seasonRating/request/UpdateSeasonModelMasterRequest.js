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
var tslib_1 = require("tslib");
var Gs2SeasonRating = tslib_1.__importStar(require("../model"));
var UpdateSeasonModelMasterRequest = /** @class */ (function () {
    function UpdateSeasonModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
        this.description = null;
        this.metadata = null;
        this.tiers = null;
        this.experienceModelId = null;
    }
    UpdateSeasonModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateSeasonModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateSeasonModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateSeasonModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    UpdateSeasonModelMasterRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateSeasonModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateSeasonModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.getTiers = function () {
        return this.tiers;
    };
    UpdateSeasonModelMasterRequest.prototype.setTiers = function (tiers) {
        this.tiers = tiers;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.withTiers = function (tiers) {
        this.tiers = tiers;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    UpdateSeasonModelMasterRequest.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    UpdateSeasonModelMasterRequest.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    UpdateSeasonModelMasterRequest.fromDict = function (data) {
        return new UpdateSeasonModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTiers(data.tiers ?
            data.tiers.map(function (item) {
                return Gs2SeasonRating.TierModel.fromDict(item);
            }) : [])
            .withExperienceModelId(data["experienceModelId"]);
    };
    UpdateSeasonModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "tiers": this.getTiers() ?
                this.getTiers().map(function (item) {
                    return item.toDict();
                }) : [],
            "experienceModelId": this.getExperienceModelId(),
        };
    };
    return UpdateSeasonModelMasterRequest;
}());
exports.default = UpdateSeasonModelMasterRequest;
//# sourceMappingURL=UpdateSeasonModelMasterRequest.js.map