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
var CreateExperienceModelMasterRequest = /** @class */ (function () {
    function CreateExperienceModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.defaultExperience = null;
        this.defaultRankCap = null;
        this.maxRankCap = null;
        this.rankThresholdName = null;
    }
    CreateExperienceModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateExperienceModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateExperienceModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateExperienceModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateExperienceModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateExperienceModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateExperienceModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.getDefaultExperience = function () {
        return this.defaultExperience;
    };
    CreateExperienceModelMasterRequest.prototype.setDefaultExperience = function (defaultExperience) {
        this.defaultExperience = defaultExperience;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.withDefaultExperience = function (defaultExperience) {
        this.defaultExperience = defaultExperience;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.getDefaultRankCap = function () {
        return this.defaultRankCap;
    };
    CreateExperienceModelMasterRequest.prototype.setDefaultRankCap = function (defaultRankCap) {
        this.defaultRankCap = defaultRankCap;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.withDefaultRankCap = function (defaultRankCap) {
        this.defaultRankCap = defaultRankCap;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.getMaxRankCap = function () {
        return this.maxRankCap;
    };
    CreateExperienceModelMasterRequest.prototype.setMaxRankCap = function (maxRankCap) {
        this.maxRankCap = maxRankCap;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.withMaxRankCap = function (maxRankCap) {
        this.maxRankCap = maxRankCap;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.getRankThresholdName = function () {
        return this.rankThresholdName;
    };
    CreateExperienceModelMasterRequest.prototype.setRankThresholdName = function (rankThresholdName) {
        this.rankThresholdName = rankThresholdName;
        return this;
    };
    CreateExperienceModelMasterRequest.prototype.withRankThresholdName = function (rankThresholdName) {
        this.rankThresholdName = rankThresholdName;
        return this;
    };
    CreateExperienceModelMasterRequest.fromDict = function (data) {
        return new CreateExperienceModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDefaultExperience(data["defaultExperience"])
            .withDefaultRankCap(data["defaultRankCap"])
            .withMaxRankCap(data["maxRankCap"])
            .withRankThresholdName(data["rankThresholdName"]);
    };
    CreateExperienceModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "defaultExperience": this.getDefaultExperience(),
            "defaultRankCap": this.getDefaultRankCap(),
            "maxRankCap": this.getMaxRankCap(),
            "rankThresholdName": this.getRankThresholdName(),
        };
    };
    return CreateExperienceModelMasterRequest;
}());
export default CreateExperienceModelMasterRequest;
//# sourceMappingURL=CreateExperienceModelMasterRequest.js.map