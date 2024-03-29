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
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}";
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.inventoryId = null;
        this.inventoryName = null;
        this.userId = null;
        this.currentInventoryCapacityUsage = null;
        this.currentInventoryMaxCapacity = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Inventory.getRegion = function (grn) {
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
    Inventory.getOwnerId = function (grn) {
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
    Inventory.getNamespaceName = function (grn) {
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
    Inventory.getUserId = function (grn) {
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
    Inventory.getInventoryName = function (grn) {
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
    Inventory.isValid = function (grn) {
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
    Inventory.createGrn = function (region, ownerId, namespaceName, userId, inventoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '');
    };
    Inventory.prototype.getInventoryId = function () {
        return this.inventoryId;
    };
    Inventory.prototype.setInventoryId = function (inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    };
    Inventory.prototype.withInventoryId = function (inventoryId) {
        this.inventoryId = inventoryId;
        return this;
    };
    Inventory.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    Inventory.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    Inventory.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    Inventory.prototype.getUserId = function () {
        return this.userId;
    };
    Inventory.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Inventory.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Inventory.prototype.getCurrentInventoryCapacityUsage = function () {
        return this.currentInventoryCapacityUsage;
    };
    Inventory.prototype.setCurrentInventoryCapacityUsage = function (currentInventoryCapacityUsage) {
        this.currentInventoryCapacityUsage = currentInventoryCapacityUsage;
        return this;
    };
    Inventory.prototype.withCurrentInventoryCapacityUsage = function (currentInventoryCapacityUsage) {
        this.currentInventoryCapacityUsage = currentInventoryCapacityUsage;
        return this;
    };
    Inventory.prototype.getCurrentInventoryMaxCapacity = function () {
        return this.currentInventoryMaxCapacity;
    };
    Inventory.prototype.setCurrentInventoryMaxCapacity = function (currentInventoryMaxCapacity) {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    };
    Inventory.prototype.withCurrentInventoryMaxCapacity = function (currentInventoryMaxCapacity) {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    };
    Inventory.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Inventory.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Inventory.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Inventory.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Inventory.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Inventory.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Inventory.prototype.getRevision = function () {
        return this.revision;
    };
    Inventory.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Inventory.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Inventory.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Inventory()
            .withInventoryId(data["inventoryId"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withCurrentInventoryCapacityUsage(data["currentInventoryCapacityUsage"])
            .withCurrentInventoryMaxCapacity(data["currentInventoryMaxCapacity"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Inventory.prototype.toDict = function () {
        return {
            "inventoryId": this.getInventoryId(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "currentInventoryCapacityUsage": this.getCurrentInventoryCapacityUsage(),
            "currentInventoryMaxCapacity": this.getCurrentInventoryMaxCapacity(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Inventory;
}());
exports.default = Inventory;
//# sourceMappingURL=Inventory.js.map