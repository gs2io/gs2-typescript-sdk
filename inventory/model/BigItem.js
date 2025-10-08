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
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:big:inventory:{inventoryName}:item:{itemName}";
var BigItem = /** @class */ (function () {
    function BigItem() {
        this.itemId = null;
        this.userId = null;
        this.itemName = null;
        this.count = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    BigItem.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BigItem.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BigItem.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BigItem.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BigItem.getInventoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '(.*)')
            .replace('{itemName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BigItem.getItemName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{inventoryName}', '.*')
            .replace('{itemName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BigItem.isValid = function (grn) {
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
        return true;
    };
    BigItem.createGrn = function (region, ownerId, namespaceName, userId, inventoryName, itemName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '')
            .replace('{itemName}', itemName !== null && itemName !== void 0 ? itemName : '');
    };
    BigItem.prototype.getItemId = function () {
        return this.itemId;
    };
    BigItem.prototype.setItemId = function (itemId) {
        this.itemId = itemId;
        return this;
    };
    BigItem.prototype.withItemId = function (itemId) {
        this.itemId = itemId;
        return this;
    };
    BigItem.prototype.getUserId = function () {
        return this.userId;
    };
    BigItem.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BigItem.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BigItem.prototype.getItemName = function () {
        return this.itemName;
    };
    BigItem.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    BigItem.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    BigItem.prototype.getCount = function () {
        return this.count;
    };
    BigItem.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    BigItem.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    BigItem.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    BigItem.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BigItem.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BigItem.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    BigItem.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BigItem.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BigItem.prototype.getRevision = function () {
        return this.revision;
    };
    BigItem.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    BigItem.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    BigItem.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BigItem()
            .withItemId(data["itemId"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withCount(data["count"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    BigItem.prototype.toDict = function () {
        return {
            "itemId": this.getItemId(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "count": this.getCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return BigItem;
}());
exports.default = BigItem;
//# sourceMappingURL=BigItem.js.map