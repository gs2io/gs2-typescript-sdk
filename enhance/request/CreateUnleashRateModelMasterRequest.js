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
var Gs2Enhance = tslib_1.__importStar(require("../model"));
var CreateUnleashRateModelMasterRequest = /** @class */ (function () {
    function CreateUnleashRateModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.targetInventoryModelId = null;
        this.gradeModelId = null;
        this.gradeEntries = null;
    }
    CreateUnleashRateModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateUnleashRateModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateUnleashRateModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateUnleashRateModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateUnleashRateModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateUnleashRateModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateUnleashRateModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.getTargetInventoryModelId = function () {
        return this.targetInventoryModelId;
    };
    CreateUnleashRateModelMasterRequest.prototype.setTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.withTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.getGradeModelId = function () {
        return this.gradeModelId;
    };
    CreateUnleashRateModelMasterRequest.prototype.setGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.withGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.getGradeEntries = function () {
        return this.gradeEntries;
    };
    CreateUnleashRateModelMasterRequest.prototype.setGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    CreateUnleashRateModelMasterRequest.prototype.withGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    CreateUnleashRateModelMasterRequest.fromDict = function (data) {
        return new CreateUnleashRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTargetInventoryModelId(data["targetInventoryModelId"])
            .withGradeModelId(data["gradeModelId"])
            .withGradeEntries(data.gradeEntries ?
            data.gradeEntries.map(function (item) {
                return Gs2Enhance.UnleashRateEntryModel.fromDict(item);
            }) : []);
    };
    CreateUnleashRateModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "targetInventoryModelId": this.getTargetInventoryModelId(),
            "gradeModelId": this.getGradeModelId(),
            "gradeEntries": this.getGradeEntries() ?
                this.getGradeEntries().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return CreateUnleashRateModelMasterRequest;
}());
exports.default = CreateUnleashRateModelMasterRequest;
//# sourceMappingURL=CreateUnleashRateModelMasterRequest.js.map