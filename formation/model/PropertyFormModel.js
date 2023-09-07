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
var SlotModel_1 = tslib_1.__importDefault(require("./SlotModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:formation:{namespaceName}:model:propertyForm:{propertyFormModelName}";
var PropertyFormModel = /** @class */ (function () {
    function PropertyFormModel() {
        this.propertyFormModelId = null;
        this.name = null;
        this.metadata = null;
        this.slots = null;
    }
    PropertyFormModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{propertyFormModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyFormModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{propertyFormModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyFormModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{propertyFormModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyFormModel.getPropertyFormModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{propertyFormModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    PropertyFormModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getPropertyFormModelName(grn) == null || this.getPropertyFormModelName(grn) === '') {
            return false;
        }
        return true;
    };
    PropertyFormModel.createGrn = function (region, ownerId, namespaceName, propertyFormModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{propertyFormModelName}', propertyFormModelName !== null && propertyFormModelName !== void 0 ? propertyFormModelName : '');
    };
    PropertyFormModel.prototype.getPropertyFormModelId = function () {
        return this.propertyFormModelId;
    };
    PropertyFormModel.prototype.setPropertyFormModelId = function (propertyFormModelId) {
        this.propertyFormModelId = propertyFormModelId;
        return this;
    };
    PropertyFormModel.prototype.withPropertyFormModelId = function (propertyFormModelId) {
        this.propertyFormModelId = propertyFormModelId;
        return this;
    };
    PropertyFormModel.prototype.getName = function () {
        return this.name;
    };
    PropertyFormModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    PropertyFormModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    PropertyFormModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    PropertyFormModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PropertyFormModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    PropertyFormModel.prototype.getSlots = function () {
        return this.slots;
    };
    PropertyFormModel.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    PropertyFormModel.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    PropertyFormModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new PropertyFormModel()
            .withPropertyFormModelId(data["propertyFormModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return SlotModel_1.default.fromDict(item);
            }) : []);
    };
    PropertyFormModel.prototype.toDict = function () {
        return {
            "propertyFormModelId": this.getPropertyFormModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return PropertyFormModel;
}());
exports.default = PropertyFormModel;
//# sourceMappingURL=PropertyFormModel.js.map