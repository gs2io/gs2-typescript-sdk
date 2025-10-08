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
var Gs2Inventory = tslib_1.__importStar(require("../../inventory/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:simple:model:{inventoryName}";
var SimpleInventoryModel = /** @class */ (function () {
    function SimpleInventoryModel() {
        this.inventoryModelId = null;
        this.name = null;
        this.metadata = null;
        this.simpleItemModels = null;
    }
    SimpleInventoryModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SimpleInventoryModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SimpleInventoryModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SimpleInventoryModel.getInventoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SimpleInventoryModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getInventoryName(grn) == null || this.getInventoryName(grn) === '') {
            return false;
        }
        return true;
    };
    SimpleInventoryModel.createGrn = function (region, ownerId, namespaceName, inventoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '');
    };
    SimpleInventoryModel.prototype.getInventoryModelId = function () {
        return this.inventoryModelId;
    };
    SimpleInventoryModel.prototype.setInventoryModelId = function (inventoryModelId) {
        this.inventoryModelId = inventoryModelId;
        return this;
    };
    SimpleInventoryModel.prototype.withInventoryModelId = function (inventoryModelId) {
        this.inventoryModelId = inventoryModelId;
        return this;
    };
    SimpleInventoryModel.prototype.getName = function () {
        return this.name;
    };
    SimpleInventoryModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SimpleInventoryModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SimpleInventoryModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    SimpleInventoryModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SimpleInventoryModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SimpleInventoryModel.prototype.getSimpleItemModels = function () {
        return this.simpleItemModels;
    };
    SimpleInventoryModel.prototype.setSimpleItemModels = function (simpleItemModels) {
        this.simpleItemModels = simpleItemModels;
        return this;
    };
    SimpleInventoryModel.prototype.withSimpleItemModels = function (simpleItemModels) {
        this.simpleItemModels = simpleItemModels;
        return this;
    };
    SimpleInventoryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SimpleInventoryModel()
            .withInventoryModelId(data["inventoryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withSimpleItemModels(data.simpleItemModels ?
            data.simpleItemModels.map(function (item) {
                return Gs2Inventory.SimpleItemModel.fromDict(item);
            }) : null);
    };
    SimpleInventoryModel.prototype.toDict = function () {
        return {
            "inventoryModelId": this.getInventoryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "simpleItemModels": this.getSimpleItemModels() ?
                this.getSimpleItemModels().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return SimpleInventoryModel;
}());
exports.default = SimpleInventoryModel;
//# sourceMappingURL=SimpleInventoryModel.js.map