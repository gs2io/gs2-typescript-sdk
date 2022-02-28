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
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}:itemSet:{itemSetName}";
var ItemSet = /** @class */ (function () {
    function ItemSet() {
        this.itemSetId = null;
        this.name = null;
        this.inventoryName = null;
        this.userId = null;
        this.itemName = null;
        this.count = null;
        this.referenceOf = null;
        this.sortValue = null;
        this.expiresAt = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    ItemSet.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*')
            .replace('{itemSetName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ItemSet.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*')
            .replace('{itemSetName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ItemSet.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*')
            .replace('{itemSetName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ItemSet.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*')
            .replace('{itemSetName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ItemSet.getInventoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '(.*)')
            .replace('{itemName}', '.*')
            .replace('{itemSetName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ItemSet.getItemName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '(.*)')
            .replace('{itemSetName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ItemSet.getItemSetName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*')
            .replace('{itemSetName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ItemSet.isValid = function (grn) {
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
        if (this.getItemName(grn) == null || this.getItemName(grn) === '') {
            return false;
        }
        if (this.getItemSetName(grn) == null || this.getItemSetName(grn) === '') {
            return false;
        }
        return true;
    };
    ItemSet.createGrn = function (region, ownerId, namespaceName, userId, inventoryName, itemName, itemSetName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '')
            .replace('{itemName}', itemName !== null && itemName !== void 0 ? itemName : '')
            .replace('{itemSetName}', itemSetName !== null && itemSetName !== void 0 ? itemSetName : '');
    };
    ItemSet.prototype.getItemSetId = function () {
        return this.itemSetId;
    };
    ItemSet.prototype.setItemSetId = function (itemSetId) {
        this.itemSetId = itemSetId;
        return this;
    };
    ItemSet.prototype.withItemSetId = function (itemSetId) {
        this.itemSetId = itemSetId;
        return this;
    };
    ItemSet.prototype.getName = function () {
        return this.name;
    };
    ItemSet.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ItemSet.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ItemSet.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    ItemSet.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ItemSet.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    ItemSet.prototype.getUserId = function () {
        return this.userId;
    };
    ItemSet.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ItemSet.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ItemSet.prototype.getItemName = function () {
        return this.itemName;
    };
    ItemSet.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    ItemSet.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    ItemSet.prototype.getCount = function () {
        return this.count;
    };
    ItemSet.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ItemSet.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ItemSet.prototype.getReferenceOf = function () {
        return this.referenceOf;
    };
    ItemSet.prototype.setReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    ItemSet.prototype.withReferenceOf = function (referenceOf) {
        this.referenceOf = referenceOf;
        return this;
    };
    ItemSet.prototype.getSortValue = function () {
        return this.sortValue;
    };
    ItemSet.prototype.setSortValue = function (sortValue) {
        this.sortValue = sortValue;
        return this;
    };
    ItemSet.prototype.withSortValue = function (sortValue) {
        this.sortValue = sortValue;
        return this;
    };
    ItemSet.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    ItemSet.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    ItemSet.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    ItemSet.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    ItemSet.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ItemSet.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ItemSet.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    ItemSet.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ItemSet.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ItemSet.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ItemSet()
            .withItemSetId(data["itemSetId"])
            .withName(data["name"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withCount(data["count"])
            .withReferenceOf(data.referenceOf ?
            data.referenceOf.map(function (item) {
                return item;
            }) : [])
            .withSortValue(data["sortValue"])
            .withExpiresAt(data["expiresAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    ItemSet.prototype.toDict = function () {
        return {
            "itemSetId": this.getItemSetId(),
            "name": this.getName(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "count": this.getCount(),
            "referenceOf": this.getReferenceOf() ?
                this.getReferenceOf().map(function (item) {
                    return item;
                }) : [],
            "sortValue": this.getSortValue(),
            "expiresAt": this.getExpiresAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return ItemSet;
}());
exports.default = ItemSet;
//# sourceMappingURL=ItemSet.js.map