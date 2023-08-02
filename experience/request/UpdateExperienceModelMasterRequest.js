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
var Gs2Experience = tslib_1.__importStar(require("../model"));
var UpdateExperienceModelMasterRequest = /** @class */ (function () {
    function UpdateExperienceModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.experienceName = null;
        this.description = null;
        this.metadata = null;
        this.defaultExperience = null;
        this.defaultRankCap = null;
        this.maxRankCap = null;
        this.rankThresholdName = null;
        this.acquireActionRates = null;
    }
    UpdateExperienceModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateExperienceModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateExperienceModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateExperienceModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    UpdateExperienceModelMasterRequest.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateExperienceModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateExperienceModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.getDefaultExperience = function () {
        return this.defaultExperience;
    };
    UpdateExperienceModelMasterRequest.prototype.setDefaultExperience = function (defaultExperience) {
        this.defaultExperience = defaultExperience;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.withDefaultExperience = function (defaultExperience) {
        this.defaultExperience = defaultExperience;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.getDefaultRankCap = function () {
        return this.defaultRankCap;
    };
    UpdateExperienceModelMasterRequest.prototype.setDefaultRankCap = function (defaultRankCap) {
        this.defaultRankCap = defaultRankCap;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.withDefaultRankCap = function (defaultRankCap) {
        this.defaultRankCap = defaultRankCap;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.getMaxRankCap = function () {
        return this.maxRankCap;
    };
    UpdateExperienceModelMasterRequest.prototype.setMaxRankCap = function (maxRankCap) {
        this.maxRankCap = maxRankCap;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.withMaxRankCap = function (maxRankCap) {
        this.maxRankCap = maxRankCap;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.getRankThresholdName = function () {
        return this.rankThresholdName;
    };
    UpdateExperienceModelMasterRequest.prototype.setRankThresholdName = function (rankThresholdName) {
        this.rankThresholdName = rankThresholdName;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.withRankThresholdName = function (rankThresholdName) {
        this.rankThresholdName = rankThresholdName;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.getAcquireActionRates = function () {
        return this.acquireActionRates;
    };
    UpdateExperienceModelMasterRequest.prototype.setAcquireActionRates = function (acquireActionRates) {
        this.acquireActionRates = acquireActionRates;
        return this;
    };
    UpdateExperienceModelMasterRequest.prototype.withAcquireActionRates = function (acquireActionRates) {
        this.acquireActionRates = acquireActionRates;
        return this;
    };
    UpdateExperienceModelMasterRequest.fromDict = function (data) {
        return new UpdateExperienceModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withExperienceName(data["experienceName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDefaultExperience(data["defaultExperience"])
            .withDefaultRankCap(data["defaultRankCap"])
            .withMaxRankCap(data["maxRankCap"])
            .withRankThresholdName(data["rankThresholdName"])
            .withAcquireActionRates(data.acquireActionRates ?
            data.acquireActionRates.map(function (item) {
                return Gs2Experience.AcquireActionRate.fromDict(item);
            }) : []);
    };
    UpdateExperienceModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "experienceName": this.getExperienceName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "defaultExperience": this.getDefaultExperience(),
            "defaultRankCap": this.getDefaultRankCap(),
            "maxRankCap": this.getMaxRankCap(),
            "rankThresholdName": this.getRankThresholdName(),
            "acquireActionRates": this.getAcquireActionRates() ?
                this.getAcquireActionRates().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return UpdateExperienceModelMasterRequest;
}());
exports.default = UpdateExperienceModelMasterRequest;
//# sourceMappingURL=UpdateExperienceModelMasterRequest.js.map