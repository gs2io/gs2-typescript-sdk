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
import * as Gs2Enhance from '../model';
var CreateRateModelMasterRequest = /** @class */ (function () {
    function CreateRateModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.targetInventoryModelId = null;
        this.acquireExperienceSuffix = null;
        this.materialInventoryModelId = null;
        this.acquireExperienceHierarchy = null;
        this.experienceModelId = null;
        this.bonusRates = null;
    }
    CreateRateModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateRateModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateRateModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateRateModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateRateModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateRateModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateRateModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getTargetInventoryModelId = function () {
        return this.targetInventoryModelId;
    };
    CreateRateModelMasterRequest.prototype.setTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getAcquireExperienceSuffix = function () {
        return this.acquireExperienceSuffix;
    };
    CreateRateModelMasterRequest.prototype.setAcquireExperienceSuffix = function (acquireExperienceSuffix) {
        this.acquireExperienceSuffix = acquireExperienceSuffix;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withAcquireExperienceSuffix = function (acquireExperienceSuffix) {
        this.acquireExperienceSuffix = acquireExperienceSuffix;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getMaterialInventoryModelId = function () {
        return this.materialInventoryModelId;
    };
    CreateRateModelMasterRequest.prototype.setMaterialInventoryModelId = function (materialInventoryModelId) {
        this.materialInventoryModelId = materialInventoryModelId;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withMaterialInventoryModelId = function (materialInventoryModelId) {
        this.materialInventoryModelId = materialInventoryModelId;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getAcquireExperienceHierarchy = function () {
        return this.acquireExperienceHierarchy;
    };
    CreateRateModelMasterRequest.prototype.setAcquireExperienceHierarchy = function (acquireExperienceHierarchy) {
        this.acquireExperienceHierarchy = acquireExperienceHierarchy;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withAcquireExperienceHierarchy = function (acquireExperienceHierarchy) {
        this.acquireExperienceHierarchy = acquireExperienceHierarchy;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    CreateRateModelMasterRequest.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getBonusRates = function () {
        return this.bonusRates;
    };
    CreateRateModelMasterRequest.prototype.setBonusRates = function (bonusRates) {
        this.bonusRates = bonusRates;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withBonusRates = function (bonusRates) {
        this.bonusRates = bonusRates;
        return this;
    };
    CreateRateModelMasterRequest.fromDict = function (data) {
        return new CreateRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
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
    CreateRateModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
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
    return CreateRateModelMasterRequest;
}());
export default CreateRateModelMasterRequest;
//# sourceMappingURL=CreateRateModelMasterRequest.js.map