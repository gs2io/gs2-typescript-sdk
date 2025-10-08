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
var CreateGradeModelMasterRequest = /** @class */ (function () {
    function CreateGradeModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.defaultGrades = null;
        this.experienceModelId = null;
        this.gradeEntries = null;
        this.acquireActionRates = null;
    }
    CreateGradeModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateGradeModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateGradeModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateGradeModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateGradeModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateGradeModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateGradeModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.getDefaultGrades = function () {
        return this.defaultGrades;
    };
    CreateGradeModelMasterRequest.prototype.setDefaultGrades = function (defaultGrades) {
        this.defaultGrades = defaultGrades;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.withDefaultGrades = function (defaultGrades) {
        this.defaultGrades = defaultGrades;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    CreateGradeModelMasterRequest.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.getGradeEntries = function () {
        return this.gradeEntries;
    };
    CreateGradeModelMasterRequest.prototype.setGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.withGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.getAcquireActionRates = function () {
        return this.acquireActionRates;
    };
    CreateGradeModelMasterRequest.prototype.setAcquireActionRates = function (acquireActionRates) {
        this.acquireActionRates = acquireActionRates;
        return this;
    };
    CreateGradeModelMasterRequest.prototype.withAcquireActionRates = function (acquireActionRates) {
        this.acquireActionRates = acquireActionRates;
        return this;
    };
    CreateGradeModelMasterRequest.fromDict = function (data) {
        return new CreateGradeModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
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
    CreateGradeModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
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
    return CreateGradeModelMasterRequest;
}());
exports.default = CreateGradeModelMasterRequest;
//# sourceMappingURL=CreateGradeModelMasterRequest.js.map