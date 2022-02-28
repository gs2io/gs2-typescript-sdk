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
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getUserId(grn) == null) {
            return false;
        }
        if (this.getInventoryName(grn) == null) {
            return false;
        }
        if (this.getItemName(grn) == null) {
            return false;
        }
        if (this.getItemSetName(grn) == null) {
            return false;
        }
        return true;
    };
    ReferenceOf.createGrn = function (region, ownerId, namespaceName, userId, inventoryName, itemName, itemSetName) {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (userId == null || userId === '') {
            return null;
        }
        if (inventoryName == null || inventoryName === '') {
            return null;
        }
        if (itemName == null || itemName === '') {
            return null;
        }
        if (itemSetName == null || itemSetName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName)
            .replace('{userId}', userId)
            .replace('{inventoryName}', inventoryName)
            .replace('{itemName}', itemName)
            .replace('{itemSetName}', itemSetName);
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