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
var UnleashRateEntryModel_1 = tslib_1.__importDefault(require("./UnleashRateEntryModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:enhance:{namespaceName}:unleashRateModel:{rateName}";
var UnleashRateModel = /** @class */ (function () {
    function UnleashRateModel() {
        this.unleashRateModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.targetInventoryModelId = null;
        this.gradeModelId = null;
        this.gradeEntries = null;
    }
    UnleashRateModel.getRegion = function (grn) {
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
    UnleashRateModel.getOwnerId = function (grn) {
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
    UnleashRateModel.getNamespaceName = function (grn) {
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
    UnleashRateModel.getRateName = function (grn) {
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
    UnleashRateModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getRateName(grn) == null || this.getRateName(grn) === '') {
            return false;
        }
        return true;
    };
    UnleashRateModel.createGrn = function (region, ownerId, namespaceName, rateName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rateName}', rateName !== null && rateName !== void 0 ? rateName : '');
    };
    UnleashRateModel.prototype.getUnleashRateModelId = function () {
        return this.unleashRateModelId;
    };
    UnleashRateModel.prototype.setUnleashRateModelId = function (unleashRateModelId) {
        this.unleashRateModelId = unleashRateModelId;
        return this;
    };
    UnleashRateModel.prototype.withUnleashRateModelId = function (unleashRateModelId) {
        this.unleashRateModelId = unleashRateModelId;
        return this;
    };
    UnleashRateModel.prototype.getName = function () {
        return this.name;
    };
    UnleashRateModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    UnleashRateModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    UnleashRateModel.prototype.getDescription = function () {
        return this.description;
    };
    UnleashRateModel.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UnleashRateModel.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UnleashRateModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    UnleashRateModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UnleashRateModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UnleashRateModel.prototype.getTargetInventoryModelId = function () {
        return this.targetInventoryModelId;
    };
    UnleashRateModel.prototype.setTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    UnleashRateModel.prototype.withTargetInventoryModelId = function (targetInventoryModelId) {
        this.targetInventoryModelId = targetInventoryModelId;
        return this;
    };
    UnleashRateModel.prototype.getGradeModelId = function () {
        return this.gradeModelId;
    };
    UnleashRateModel.prototype.setGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    UnleashRateModel.prototype.withGradeModelId = function (gradeModelId) {
        this.gradeModelId = gradeModelId;
        return this;
    };
    UnleashRateModel.prototype.getGradeEntries = function () {
        return this.gradeEntries;
    };
    UnleashRateModel.prototype.setGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    UnleashRateModel.prototype.withGradeEntries = function (gradeEntries) {
        this.gradeEntries = gradeEntries;
        return this;
    };
    UnleashRateModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnleashRateModel()
            .withUnleashRateModelId(data["unleashRateModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTargetInventoryModelId(data["targetInventoryModelId"])
            .withGradeModelId(data["gradeModelId"])
            .withGradeEntries(data.gradeEntries ?
            data.gradeEntries.map(function (item) {
                return UnleashRateEntryModel_1.default.fromDict(item);
            }) : []);
    };
    UnleashRateModel.prototype.toDict = function () {
        return {
            "unleashRateModelId": this.getUnleashRateModelId(),
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
    return UnleashRateModel;
}());
exports.default = UnleashRateModel;
//# sourceMappingURL=UnleashRateModel.js.map