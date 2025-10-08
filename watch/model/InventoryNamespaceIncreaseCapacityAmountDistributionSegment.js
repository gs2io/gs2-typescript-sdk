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
var InventoryNamespaceIncreaseCapacityAmountDistributionSegment = /** @class */ (function () {
    function InventoryNamespaceIncreaseCapacityAmountDistributionSegment() {
        this.inventoryName = null;
        this.sum = null;
    }
    InventoryNamespaceIncreaseCapacityAmountDistributionSegment.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    InventoryNamespaceIncreaseCapacityAmountDistributionSegment.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    InventoryNamespaceIncreaseCapacityAmountDistributionSegment.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    InventoryNamespaceIncreaseCapacityAmountDistributionSegment.prototype.getSum = function () {
        return this.sum;
    };
    InventoryNamespaceIncreaseCapacityAmountDistributionSegment.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    InventoryNamespaceIncreaseCapacityAmountDistributionSegment.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    InventoryNamespaceIncreaseCapacityAmountDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceIncreaseCapacityAmountDistributionSegment()
            .withInventoryName(data["inventoryName"])
            .withSum(data["sum"]);
    };
    InventoryNamespaceIncreaseCapacityAmountDistributionSegment.prototype.toDict = function () {
        return {
            "inventoryName": this.getInventoryName(),
            "sum": this.getSum(),
        };
    };
    return InventoryNamespaceIncreaseCapacityAmountDistributionSegment;
}());
exports.default = InventoryNamespaceIncreaseCapacityAmountDistributionSegment;
//# sourceMappingURL=InventoryNamespaceIncreaseCapacityAmountDistributionSegment.js.map