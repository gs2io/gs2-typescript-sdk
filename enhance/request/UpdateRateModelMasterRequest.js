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
var Gs2Enhance = (0, tslib_1.__importStar)(require("../model"));
var UpdateRateModelMasterRequest = /** @class */ (function () {
    function UpdateRateModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.description = null;
        this.metadata = null;
        this.targetInventoryModelId = null;
        this.acquireExperienceSuffix = null;
        this.materialInventoryModelId = null;
        this.acquireExperienceHierarchy = null;
        this.experienceModelId = null;
        this.bonusRates = null;
    }
    UpdateRateModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateRateModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateRateModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateRateModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    UpdateRateModelMasterRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateRateModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateRateModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getTargetInventoryModelId = function () {
        return this.targetInventoryModelId;
    };
    UpdateRateModelMasterRequest.prototype.setTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getAcquireExperienceSuffix = function () {
        return this.acquireExperienceSuffix;
    };
    UpdateRateModelMasterRequest.prototype.setAcquireExperienceSuffix = function (acquireExperienceSuffix) {
        this.acquireExperienceSuffix = acquireExperienceSuffix;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withAcquireExperienceSuffix = function (acquireExperienceSuffix) {
        this.acquireExperienceSuffix = acquireExperienceSuffix;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getMaterialInventoryModelId = function () {
        return this.materialInventoryModelId;
    };
    UpdateRateModelMasterRequest.prototype.setMaterialInventoryModelId = function (materialInventoryModelId) {
        this.materialInventoryModelId = materialInventoryModelId;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withMaterialInventoryModelId = function (materialInventoryModelId) {
        this.materialInventoryModelId = materialInventoryModelId;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getAcquireExperienceHierarchy = function () {
        return this.acquireExperienceHierarchy;
    };
    UpdateRateModelMasterRequest.prototype.setAcquireExperienceHierarchy = function (acquireExperienceHierarchy) {
        this.acquireExperienceHierarchy = acquireExperienceHierarchy;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withAcquireExperienceHierarchy = function (acquireExperienceHierarchy) {
        this.acquireExperienceHierarchy = acquireExperienceHierarchy;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    UpdateRateModelMasterRequest.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getBonusRates = function () {
        return this.bonusRates;
    };
    UpdateRateModelMasterRequest.prototype.setBonusRates = function (bonusRates) {
        this.bonusRates = bonusRates;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withBonusRates = function (bonusRates) {
        this.bonusRates = bonusRates;
        return this;
    };
    UpdateRateModelMasterRequest.fromDict = function (data) {
        return new UpdateRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTargetInventoryModelId(data["targetInventoryModelId"])
            .withAcquireExperienceSuffix(data["acquireExperienceSuffix"])
            .withMaterialInventoryModelId(data["materialInventoryModelId"])
            .withAcquireExperienceHierarchy(data.acquireExperienceHierarchy ?
            data.acquireExperienceHierarchy.map(function (item) {
                return item;
            }) : [])
            .withExperienceModelId(data["experienceModelId"])
            .withBonusRates(data.bonusRates ?
            data.bonusRates.map(function (item) {
                return Gs2Enhance.BonusRate.fromDict(item);
            }) : []);
    };
    UpdateRateModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "targetInventoryModelId": this.getTargetInventoryModelId(),
            "acquireExperienceSuffix": this.getAcquireExperienceSuffix(),
            "materialInventoryModelId": this.getMaterialInventoryModelId(),
            "acquireExperienceHierarchy": this.getAcquireExperienceHierarchy() ?
                this.getAcquireExperienceHierarchy().map(function (item) {
                    return item;
                }) : [],
            "experienceModelId": this.getExperienceModelId(),
            "bonusRates": this.getBonusRates() ?
                this.getBonusRates().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return UpdateRateModelMasterRequest;
}());
exports.default = UpdateRateModelMasterRequest;
//# sourceMappingURL=UpdateRateModelMasterRequest.js.map