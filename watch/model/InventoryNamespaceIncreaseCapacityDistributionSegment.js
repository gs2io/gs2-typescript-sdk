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
var InventoryNamespaceIncreaseCapacityDistributionSegment = /** @class */ (function () {
    function InventoryNamespaceIncreaseCapacityDistributionSegment() {
        this.inventoryName = null;
        this.count = null;
    }
    InventoryNamespaceIncreaseCapacityDistributionSegment.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    InventoryNamespaceIncreaseCapacityDistributionSegment.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionSegment.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    InventoryNamespaceIncreaseCapacityDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceIncreaseCapacityDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceIncreaseCapacityDistributionSegment()
            .withInventoryName(data["inventoryName"])
            .withCount(data["count"]);
    };
    InventoryNamespaceIncreaseCapacityDistributionSegment.prototype.toDict = function () {
        return {
            "inventoryName": this.getInventoryName(),
            "count": this.getCount(),
        };
    };
    return InventoryNamespaceIncreaseCapacityDistributionSegment;
}());
exports.default = InventoryNamespaceIncreaseCapacityDistributionSegment;
//# sourceMappingURL=InventoryNamespaceIncreaseCapacityDistributionSegment.js.map