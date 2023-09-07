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
var BigItem_1 = tslib_1.__importDefault(require("./BigItem"));
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:big:inventory:{inventoryName}";
var BigInventory = /** @class */ (function () {
    function BigInventory() {
        this.inventoryId = null;
        this.inventoryName = null;
        this.userId = null;
        this.bigItems = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    BigInventory.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BigInventory.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BigInventory.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BigInventory.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{inventoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BigInventory.getInventoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BigInventory.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getInventoryName(grn) == null || this.getInventoryName(grn) === '') {
            return false;
        }
        return true;
    };
    BigInventory.createGrn = function (region, ownerId, namespaceName, userId, inventoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '');
    };
    BigInventory.prototype.getInventoryId = function () {
        return this.inventoryId;
    };
    BigInventory.prototype.setInventoryId = function (inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    };
    BigInventory.prototype.withInventoryId = function (inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    };
    BigInventory.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    BigInventory.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    BigInventory.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    BigInventory.prototype.getUserId = function () {
        return this.userId;
    };
    BigInventory.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BigInventory.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BigInventory.prototype.getBigItems = function () {
        return this.bigItems;
    };
    BigInventory.prototype.setBigItems = function (bigItems) {
        this.bigItems = bigItems;
        return this;
    };
    BigInventory.prototype.withBigItems = function (bigItems) {
        this.bigItems = bigItems;
        return this;
    };
    BigInventory.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    BigInventory.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BigInventory.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BigInventory.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    BigInventory.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BigInventory.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BigInventory.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BigInventory()
            .withInventoryId(data["inventoryId"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withBigItems(data.bigItems ?
            data.bigItems.map(function (item) {
                return BigItem_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    BigInventory.prototype.toDict = function () {
        return {
            "inventoryId": this.getInventoryId(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "bigItems": this.getBigItems() ?
                this.getBigItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return BigInventory;
}());
exports.default = BigInventory;
//# sourceMappingURL=BigInventory.js.map