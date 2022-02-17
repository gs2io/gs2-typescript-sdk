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
import BonusRate from './BonusRate';
var RateModelMaster = /** @class */ (function () {
    function RateModelMaster() {
        this.rateModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.targetInventoryModelId = null;
        this.acquireExperienceSuffix = null;
        this.materialInventoryModelId = null;
        this.acquireExperienceHierarchy = null;
        this.experienceModelId = null;
        this.bonusRates = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    RateModelMaster.prototype.getRateModelId = function () {
        return this.rateModelId;
    };
    RateModelMaster.prototype.setRateModelId = function (rateModelId) {
        this.rateModelId = rateModelId;
        return this;
    };
    RateModelMaster.prototype.withRateModelId = function (rateModelId) {
        this.rateModelId = rateModelId;
        return this;
    };
    RateModelMaster.prototype.getName = function () {
        return this.name;
    };
    RateModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RateModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RateModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    RateModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    RateModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    RateModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    RateModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RateModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RateModelMaster.prototype.getTargetInventoryModelId = function () {
        return this.targetInventoryModelId;
    };
    RateModelMaster.prototype.setTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    RateModelMaster.prototype.withTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    RateModelMaster.prototype.getAcquireExperienceSuffix = function () {
        return this.acquireExperienceSuffix;
    };
    RateModelMaster.prototype.setAcquireExperienceSuffix = function (acquireExperienceSuffix) {
        this.acquireExperienceSuffix = acquireExperienceSuffix;
        return this;
    };
    RateModelMaster.prototype.withAcquireExperienceSuffix = function (acquireExperienceSuffix) {
        this.acquireExperienceSuffix = acquireExperienceSuffix;
        return this;
    };
    RateModelMaster.prototype.getMaterialInventoryModelId = function () {
        return this.materialInventoryModelId;
    };
    RateModelMaster.prototype.setMaterialInventoryModelId = function (materialInventoryModelId) {
        this.materialInventoryModelId = materialInventoryModelId;
        return this;
    };
    RateModelMaster.prototype.withMaterialInventoryModelId = function (materialInventoryModelId) {
        this.materialInventoryModelId = materialInventoryModelId;
        return this;
    };
    RateModelMaster.prototype.getAcquireExperienceHierarchy = function () {
        return this.acquireExperienceHierarchy;
    };
    RateModelMaster.prototype.setAcquireExperienceHierarchy = function (acquireExperienceHierarchy) {
        this.acquireExperienceHierarchy = acquireExperienceHierarchy;
        return this;
    };
    RateModelMaster.prototype.withAcquireExperienceHierarchy = function (acquireExperienceHierarchy) {
        this.acquireExperienceHierarchy = acquireExperienceHierarchy;
        return this;
    };
    RateModelMaster.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    RateModelMaster.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    RateModelMaster.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    RateModelMaster.prototype.getBonusRates = function () {
        return this.bonusRates;
    };
    RateModelMaster.prototype.setBonusRates = function (bonusRates) {
        this.bonusRates = bonusRates;
        return this;
    };
    RateModelMaster.prototype.withBonusRates = function (bonusRates) {
        this.bonusRates = bonusRates;
        return this;
    };
    RateModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    RateModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RateModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RateModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    RateModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RateModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RateModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RateModelMaster()
            .withRateModelId(data["rateModelId"])
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
                return BonusRate.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    RateModelMaster.prototype.toDict = function () {
        return {
            "rateModelId": this.getRateModelId(),
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
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return RateModelMaster;
}());
export default RateModelMaster;
//# sourceMappingURL=RateModelMaster.js.map