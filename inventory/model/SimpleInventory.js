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
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:simple:inventory:{inventoryName}";
var SimpleInventory = /** @class */ (function () {
    function SimpleInventory() {
        this.inventoryId = null;
        this.inventoryName = null;
        this.userId = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    SimpleInventory.getRegion = function (grn) {
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
    SimpleInventory.getOwnerId = function (grn) {
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
    SimpleInventory.getNamespaceName = function (grn) {
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
    SimpleInventory.getUserId = function (grn) {
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
    SimpleInventory.getInventoryName = function (grn) {
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
    SimpleInventory.isValid = function (grn) {
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
    SimpleInventory.createGrn = function (region, ownerId, namespaceName, userId, inventoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '');
    };
    SimpleInventory.prototype.getInventoryId = function () {
        return this.inventoryId;
    };
    SimpleInventory.prototype.setInventoryId = function (inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    };
    SimpleInventory.prototype.withInventoryId = function (inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    };
    SimpleInventory.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    SimpleInventory.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    SimpleInventory.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    SimpleInventory.prototype.getUserId = function () {
        return this.userId;
    };
    SimpleInventory.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SimpleInventory.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SimpleInventory.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SimpleInventory.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SimpleInventory.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SimpleInventory.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SimpleInventory.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SimpleInventory.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SimpleInventory.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SimpleInventory()
            .withInventoryId(data["inventoryId"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    SimpleInventory.prototype.toDict = function () {
        return {
            "inventoryId": this.getInventoryId(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return SimpleInventory;
}());
exports.default = SimpleInventory;
//# sourceMappingURL=SimpleInventory.js.map