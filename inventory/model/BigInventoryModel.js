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
var BigItemModel_1 = tslib_1.__importDefault(require("./BigItemModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:big:model:{inventoryName}";
var BigInventoryModel = /** @class */ (function () {
    function BigInventoryModel() {
        this.inventoryModelId = null;
        this.name = null;
        this.metadata = null;
        this.bigItemModels = null;
    }
    BigInventoryModel.getRegion = function (grn) {
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
    BigInventoryModel.getOwnerId = function (grn) {
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
    BigInventoryModel.getNamespaceName = function (grn) {
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
    BigInventoryModel.getInventoryName = function (grn) {
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
    BigInventoryModel.isValid = function (grn) {
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
    BigInventoryModel.createGrn = function (region, ownerId, namespaceName, inventoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '');
    };
    BigInventoryModel.prototype.getInventoryModelId = function () {
        return this.inventoryModelId;
    };
    BigInventoryModel.prototype.setInventoryModelId = function (inventoryModelId) {
        this.inventoryModelId = inventoryModelId;
        return this;
    };
    BigInventoryModel.prototype.withInventoryModelId = function (inventoryModelId) {
        this.inventoryModelId = inventoryModelId;
        return this;
    };
    BigInventoryModel.prototype.getName = function () {
        return this.name;
    };
    BigInventoryModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    BigInventoryModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    BigInventoryModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    BigInventoryModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BigInventoryModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BigInventoryModel.prototype.getBigItemModels = function () {
        return this.bigItemModels;
    };
    BigInventoryModel.prototype.setBigItemModels = function (bigItemModels) {
        this.bigItemModels = bigItemModels;
        return this;
    };
    BigInventoryModel.prototype.withBigItemModels = function (bigItemModels) {
        this.bigItemModels = bigItemModels;
        return this;
    };
    BigInventoryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BigInventoryModel()
            .withInventoryModelId(data["inventoryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withBigItemModels(data.bigItemModels ?
            data.bigItemModels.map(function (item) {
                return BigItemModel_1.default.fromDict(item);
            }) : []);
    };
    BigInventoryModel.prototype.toDict = function () {
        return {
            "inventoryModelId": this.getInventoryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "bigItemModels": this.getBigItemModels() ?
                this.getBigItemModels().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return BigInventoryModel;
}());
exports.default = BigInventoryModel;
//# sourceMappingURL=BigInventoryModel.js.map