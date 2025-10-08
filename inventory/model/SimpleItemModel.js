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
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:simple:model:{inventoryName}:item:{itemName}";
var SimpleItemModel = /** @class */ (function () {
    function SimpleItemModel() {
        this.itemModelId = null;
        this.name = null;
        this.metadata = null;
    }
    SimpleItemModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SimpleItemModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SimpleItemModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SimpleItemModel.getInventoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '(.*)')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SimpleItemModel.getItemName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    SimpleItemModel.isValid = function (grn) {
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
        if (this.getItemName(grn) == null || this.getItemName(grn) === '') {
            return false;
        }
        return true;
    };
    SimpleItemModel.createGrn = function (region, ownerId, namespaceName, inventoryName, itemName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '')
            .replace('{itemName}', itemName !== null && itemName !== void 0 ? itemName : '');
    };
    SimpleItemModel.prototype.getItemModelId = function () {
        return this.itemModelId;
    };
    SimpleItemModel.prototype.setItemModelId = function (itemModelId) {
        this.itemModelId = itemModelId;
        return this;
    };
    SimpleItemModel.prototype.withItemModelId = function (itemModelId) {
        this.itemModelId = itemModelId;
        return this;
    };
    SimpleItemModel.prototype.getName = function () {
        return this.name;
    };
    SimpleItemModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SimpleItemModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SimpleItemModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    SimpleItemModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SimpleItemModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SimpleItemModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SimpleItemModel()
            .withItemModelId(data["itemModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"]);
    };
    SimpleItemModel.prototype.toDict = function () {
        return {
            "itemModelId": this.getItemModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
        };
    };
    return SimpleItemModel;
}());
exports.default = SimpleItemModel;
//# sourceMappingURL=SimpleItemModel.js.map