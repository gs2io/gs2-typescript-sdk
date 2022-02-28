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
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}:user:{userId}:inventory:{inventoryName}:item:{itemName}:itemSet:{itemSetName}:referenceOf";
var ReferenceOf = /** @class */ (function () {
    function ReferenceOf() {
        this.referenceOfId = null;
        this.name = null;
    }
    ReferenceOf.getRegion = function (grn) {
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
    ReferenceOf.getOwnerId = function (grn) {
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
    ReferenceOf.getNamespaceName = function (grn) {
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
    ReferenceOf.getUserId = function (grn) {
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
    ReferenceOf.getInventoryName = function (grn) {
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
    ReferenceOf.getItemName = function (grn) {
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
    ReferenceOf.getItemSetName = function (grn) {
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
    ReferenceOf.isValid = function (grn) {
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
    ReferenceOf.createGrn = function (region, ownerId, namespaceName, userId, inventoryName, itemName, itemSetName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{inventoryName}', inventoryName !== null && inventoryName !== void 0 ? inventoryName : '')
            .replace('{itemName}', itemName !== null && itemName !== void 0 ? itemName : '')
            .replace('{itemSetName}', itemSetName !== null && itemSetName !== void 0 ? itemSetName : '');
    };
    ReferenceOf.prototype.getReferenceOfId = function () {
        return this.referenceOfId;
    };
    ReferenceOf.prototype.setReferenceOfId = function (referenceOfId) {
        this.referenceOfId = referenceOfId;
        return this;
    };
    ReferenceOf.prototype.withReferenceOfId = function (referenceOfId) {
        this.referenceOfId = referenceOfId;
        return this;
    };
    ReferenceOf.prototype.getName = function () {
        return this.name;
    };
    ReferenceOf.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ReferenceOf.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ReferenceOf.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ReferenceOf()
            .withReferenceOfId(data["referenceOfId"])
            .withName(data["name"]);
    };
    ReferenceOf.prototype.toDict = function () {
        return {
            "referenceOfId": this.getReferenceOfId(),
            "name": this.getName(),
        };
    };
    return ReferenceOf;
}());
exports.default = ReferenceOf;
//# sourceMappingURL=ReferenceOf.js.map