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
var InventoryNamespaceAcquireAmountDistributionSegment = /** @class */ (function () {
    function InventoryNamespaceAcquireAmountDistributionSegment() {
        this.inventoryName = null;
        this.sum = null;
    }
    InventoryNamespaceAcquireAmountDistributionSegment.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    InventoryNamespaceAcquireAmountDistributionSegment.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionSegment.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionSegment.prototype.getSum = function () {
        return this.sum;
    };
    InventoryNamespaceAcquireAmountDistributionSegment.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionSegment.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    InventoryNamespaceAcquireAmountDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceAcquireAmountDistributionSegment()
            .withInventoryName(data["inventoryName"])
            .withSum(data["sum"]);
    };
    InventoryNamespaceAcquireAmountDistributionSegment.prototype.toDict = function () {
        return {
            "inventoryName": this.getInventoryName(),
            "sum": this.getSum(),
        };
    };
    return InventoryNamespaceAcquireAmountDistributionSegment;
}());
exports.default = InventoryNamespaceAcquireAmountDistributionSegment;
//# sourceMappingURL=InventoryNamespaceAcquireAmountDistributionSegment.js.map