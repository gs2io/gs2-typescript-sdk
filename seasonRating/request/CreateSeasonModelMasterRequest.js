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
var CreateSeasonModelMasterRequest = /** @class */ (function () {
    function CreateSeasonModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.tiers = null;
        this.experienceModelId = null;
        this.challengePeriodEventId = null;
    }
    CreateSeasonModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateSeasonModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateSeasonModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateSeasonModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateSeasonModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateSeasonModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateSeasonModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.getTiers = function () {
        return this.tiers;
    };
    CreateSeasonModelMasterRequest.prototype.setTiers = function (tiers) {
        this.tiers = tiers;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.withTiers = function (tiers) {
        this.tiers = tiers;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    CreateSeasonModelMasterRequest.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    CreateSeasonModelMasterRequest.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CreateSeasonModelMasterRequest.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CreateSeasonModelMasterRequest.fromDict = function (data) {
        return new CreateSeasonModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTiers(data.tiers ?
            data.tiers.map(function (item) {
                return Gs2SeasonRating.TierModel.fromDict(item);
            }) : null)
            .withExperienceModelId(data["experienceModelId"])
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    };
    CreateSeasonModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "tiers": this.getTiers() ?
                this.getTiers().map(function (item) {
                    return item.toDict();
                }) : null,
            "experienceModelId": this.getExperienceModelId(),
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    };
    return CreateSeasonModelMasterRequest;
}());
exports.default = CreateSeasonModelMasterRequest;
//# sourceMappingURL=CreateSeasonModelMasterRequest.js.map