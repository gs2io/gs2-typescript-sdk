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
var BonusRate_1 = (0, tslib_1.__importDefault)(require("./BonusRate"));
var grnFormat = "grn:gs2:{region}:{ownerId}:enhance:{namespaceName}:rateModel:{rateName}";
var RateModel = /** @class */ (function () {
    function RateModel() {
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
    }
    RateModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RateModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RateModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RateModel.getRateName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RateModel.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getRateName(grn) == null) {
            return false;
        }
        return true;
    };
    RateModel.createGrn = function (region, ownerId, namespaceName, rateName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rateName}', rateName !== null && rateName !== void 0 ? rateName : '');
    };
    RateModel.prototype.getRateModelId = function () {
        return this.rateModelId;
    };
    RateModel.prototype.setRateModelId = function (rateModelId) {
        this.rateModelId = rateModelId;
        return this;
    };
    RateModel.prototype.withRateModelId = function (rateModelId) {
        this.rateModelId = rateModelId;
        return this;
    };
    RateModel.prototype.getName = function () {
        return this.name;
    };
    RateModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RateModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RateModel.prototype.getDescription = function () {
        return this.description;
    };
    RateModel.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    RateModel.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    RateModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    RateModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RateModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RateModel.prototype.getTargetInventoryModelId = function () {
        return this.targetInventoryModelId;
    };
    RateModel.prototype.setTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    RateModel.prototype.withTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    RateModel.prototype.getAcquireExperienceSuffix = function () {
        return this.acquireExperienceSuffix;
    };
    RateModel.prototype.setAcquireExperienceSuffix = function (acquireExperienceSuffix) {
        this.acquireExperienceSuffix = acquireExperienceSuffix;
        return this;
    };
    RateModel.prototype.withAcquireExperienceSuffix = function (acquireExperienceSuffix) {
        this.acquireExperienceSuffix = acquireExperienceSuffix;
        return this;
    };
    RateModel.prototype.getMaterialInventoryModelId = function () {
        return this.materialInventoryModelId;
    };
    RateModel.prototype.setMaterialInventoryModelId = function (materialInventoryModelId) {
        this.materialInventoryModelId = materialInventoryModelId;
        return this;
    };
    RateModel.prototype.withMaterialInventoryModelId = function (materialInventoryModelId) {
        this.materialInventoryModelId = materialInventoryModelId;
        return this;
    };
    RateModel.prototype.getAcquireExperienceHierarchy = function () {
        return this.acquireExperienceHierarchy;
    };
    RateModel.prototype.setAcquireExperienceHierarchy = function (acquireExperienceHierarchy) {
        this.acquireExperienceHierarchy = acquireExperienceHierarchy;
        return this;
    };
    RateModel.prototype.withAcquireExperienceHierarchy = function (acquireExperienceHierarchy) {
        this.acquireExperienceHierarchy = acquireExperienceHierarchy;
        return this;
    };
    RateModel.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    RateModel.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    RateModel.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    RateModel.prototype.getBonusRates = function () {
        return this.bonusRates;
    };
    RateModel.prototype.setBonusRates = function (bonusRates) {
        this.bonusRates = bonusRates;
        return this;
    };
    RateModel.prototype.withBonusRates = function (bonusRates) {
        this.bonusRates = bonusRates;
        return this;
    };
    RateModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RateModel()
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
                return BonusRate_1.default.fromDict(item);
            }) : []);
    };
    RateModel.prototype.toDict = function () {
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
        };
    };
    return RateModel;
}());
exports.default = RateModel;
//# sourceMappingURL=RateModel.js.map