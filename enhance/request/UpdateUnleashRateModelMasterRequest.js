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
var UpdateUnleashRateModelMasterRequest = /** @class */ (function () {
    function UpdateUnleashRateModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.description = null;
        this.metadata = null;
        this.targetInventoryModelId = null;
        this.gradeModelId = null;
        this.gradeEntries = null;
    }
    UpdateUnleashRateModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateUnleashRateModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateUnleashRateModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateUnleashRateModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    UpdateUnleashRateModelMasterRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateUnleashRateModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateUnleashRateModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.getTargetInventoryModelId = function () {
        return this.targetInventoryModelId;
    };
    UpdateUnleashRateModelMasterRequest.prototype.setTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.withTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.getGradeModelId = function () {
        return this.gradeModelId;
    };
    UpdateUnleashRateModelMasterRequest.prototype.setGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.withGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.getGradeEntries = function () {
        return this.gradeEntries;
    };
    UpdateUnleashRateModelMasterRequest.prototype.setGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.prototype.withGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    UpdateUnleashRateModelMasterRequest.fromDict = function (data) {
        return new UpdateUnleashRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTargetInventoryModelId(data["targetInventoryModelId"])
            .withGradeModelId(data["gradeModelId"])
            .withGradeEntries(data.gradeEntries ?
            data.gradeEntries.map(function (item) {
                return Gs2Enhance.UnleashRateEntryModel.fromDict(item);
            }) : []);
    };
    UpdateUnleashRateModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
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
    return UpdateUnleashRateModelMasterRequest;
}());
exports.default = UpdateUnleashRateModelMasterRequest;
//# sourceMappingURL=UpdateUnleashRateModelMasterRequest.js.map