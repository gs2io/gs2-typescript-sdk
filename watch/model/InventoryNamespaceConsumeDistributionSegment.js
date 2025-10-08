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
var InventoryNamespaceConsumeDistributionSegment = /** @class */ (function () {
    function InventoryNamespaceConsumeDistributionSegment() {
        this.inventoryName = null;
        this.count = null;
    }
    InventoryNamespaceConsumeDistributionSegment.prototype.getInventoryName = function () {
        return this.inventoryName;
    };
    InventoryNamespaceConsumeDistributionSegment.prototype.setInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    InventoryNamespaceConsumeDistributionSegment.prototype.withInventoryName = function (inventoryName) {
        this.inventoryName = inventoryName;
        return this;
    };
    InventoryNamespaceConsumeDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    InventoryNamespaceConsumeDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceConsumeDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryNamespaceConsumeDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryNamespaceConsumeDistributionSegment()
            .withInventoryName(data["inventoryName"])
            .withCount(data["count"]);
    };
    InventoryNamespaceConsumeDistributionSegment.prototype.toDict = function () {
        return {
            "inventoryName": this.getInventoryName(),
            "count": this.getCount(),
        };
    };
    return InventoryNamespaceConsumeDistributionSegment;
}());
exports.default = InventoryNamespaceConsumeDistributionSegment;
//# sourceMappingURL=InventoryNamespaceConsumeDistributionSegment.js.map