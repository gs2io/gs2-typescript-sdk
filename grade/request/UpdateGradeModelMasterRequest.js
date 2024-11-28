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
var Gs2Grade = tslib_1.__importStar(require("../model"));
var UpdateGradeModelMasterRequest = /** @class */ (function () {
    function UpdateGradeModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gradeName = null;
        this.description = null;
        this.metadata = null;
        this.defaultGrades = null;
        this.experienceModelId = null;
        this.gradeEntries = null;
        this.acquireActionRates = null;
    }
    UpdateGradeModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateGradeModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateGradeModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateGradeModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    UpdateGradeModelMasterRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateGradeModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateGradeModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.getDefaultGrades = function () {
        return this.defaultGrades;
    };
    UpdateGradeModelMasterRequest.prototype.setDefaultGrades = function (defaultGrades) {
        this.defaultGrades = defaultGrades;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.withDefaultGrades = function (defaultGrades) {
        this.defaultGrades = defaultGrades;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    UpdateGradeModelMasterRequest.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.getGradeEntries = function () {
        return this.gradeEntries;
    };
    UpdateGradeModelMasterRequest.prototype.setGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.withGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.getAcquireActionRates = function () {
        return this.acquireActionRates;
    };
    UpdateGradeModelMasterRequest.prototype.setAcquireActionRates = function (acquireActionRates) {
        this.acquireActionRates = acquireActionRates;
        return this;
    };
    UpdateGradeModelMasterRequest.prototype.withAcquireActionRates = function (acquireActionRates) {
        this.acquireActionRates = acquireActionRates;
        return this;
    };
    UpdateGradeModelMasterRequest.fromDict = function (data) {
        return new UpdateGradeModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withGradeName(data["gradeName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDefaultGrades(data.defaultGrades ?
            data.defaultGrades.map(function (item) {
                return Gs2Grade.DefaultGradeModel.fromDict(item);
            }) : null)
            .withExperienceModelId(data["experienceModelId"])
            .withGradeEntries(data.gradeEntries ?
            data.gradeEntries.map(function (item) {
                return Gs2Grade.GradeEntryModel.fromDict(item);
            }) : null)
            .withAcquireActionRates(data.acquireActionRates ?
            data.acquireActionRates.map(function (item) {
                return Gs2Grade.AcquireActionRate.fromDict(item);
            }) : null);
    };
    UpdateGradeModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gradeName": this.getGradeName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "defaultGrades": this.getDefaultGrades() ?
                this.getDefaultGrades().map(function (item) {
                    return item.toDict();
                }) : null,
            "experienceModelId": this.getExperienceModelId(),
            "gradeEntries": this.getGradeEntries() ?
                this.getGradeEntries().map(function (item) {
                    return item.toDict();
                }) : null,
            "acquireActionRates": this.getAcquireActionRates() ?
                this.getAcquireActionRates().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return UpdateGradeModelMasterRequest;
}());
exports.default = UpdateGradeModelMasterRequest;
//# sourceMappingURL=UpdateGradeModelMasterRequest.js.map