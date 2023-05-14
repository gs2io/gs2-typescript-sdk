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
var InventoryInventory_1 = tslib_1.__importDefault(require("./InventoryInventory"));
var InventoryNamespace = /** @class */ (function () {
    function InventoryNamespace() {
        this.namespaceName = null;
        this.inventory = null;
    }
    InventoryNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    InventoryNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    InventoryNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    InventoryNamespace.prototype.getInventory = function () {
        return this.inventory;
    };
    InventoryNamespace.prototype.setInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    InventoryNamespace.prototype.withInventory = function (inventory) {
        this.inventory = inventory;
        return this;
    };
    InventoryNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespace()
            .withNamespaceName(data["namespaceName"])
            .withInventory(data.inventory ?
            data.inventory.map(function (item) {
                return InventoryInventory_1.default.fromDict(item);
            }) : []);
    };
    InventoryNamespace.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventory": this.getInventory() ?
                this.getInventory().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return InventoryNamespace;
}());
exports.default = InventoryNamespace;
//# sourceMappingURL=InventoryNamespace.js.map