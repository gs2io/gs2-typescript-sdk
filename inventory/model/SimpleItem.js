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
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:simple:inventory:{inventoryName}:item:{itemName}";
var SimpleItem = /** @class */ (function () {
    function SimpleItem() {
        this.itemId = null;
        this.userId = null;
        this.itemName = null;
        this.count = null;
    }
    SimpleItem.getRegion = function (grn) {
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
    SimpleItem.getOwnerId = function (grn) {
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
    SimpleItem.getNamespaceName = function (grn) {
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
    SimpleItem.getUserId = function (grn) {
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
    SimpleItem.getInventoryName = function (grn) {
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
    SimpleItem.getItemName = function (grn) {
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
    SimpleItem.isValid = function (grn) {
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
    SimpleItem.createGrn = function (region, ownerId, namespaceName, userId, inventoryName, itemName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '')
            .replace('{itemName}', itemName !== null && itemName !== void 0 ? itemName : '');
    };
    SimpleItem.prototype.getItemId = function () {
        return this.itemId;
    };
    SimpleItem.prototype.setItemId = function (itemId) {
        this.itemId = itemId;
        return this;
    };
    SimpleItem.prototype.withItemId = function (itemId) {
        this.itemId = itemId;
        return this;
    };
    SimpleItem.prototype.getUserId = function () {
        return this.userId;
    };
    SimpleItem.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SimpleItem.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SimpleItem.prototype.getItemName = function () {
        return this.itemName;
    };
    SimpleItem.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    SimpleItem.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    SimpleItem.prototype.getCount = function () {
        return this.count;
    };
    SimpleItem.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    SimpleItem.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    SimpleItem.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SimpleItem()
            .withItemId(data["itemId"])
            .withUserId(data["userId"])
            .withItemName(data["itemName"])
            .withCount(data["count"]);
    };
    SimpleItem.prototype.toDict = function () {
        return {
            "itemId": this.getItemId(),
            "userId": this.getUserId(),
            "itemName": this.getItemName(),
            "count": this.getCount(),
        };
    };
    return SimpleItem;
}());
exports.default = SimpleItem;
//# sourceMappingURL=SimpleItem.js.map