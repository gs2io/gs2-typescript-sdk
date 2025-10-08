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
var InventoryInventoryAcquireDistributionSegment = /** @class */ (function () {
    function InventoryInventoryAcquireDistributionSegment() {
        this.itemName = null;
        this.count = null;
    }
    InventoryInventoryAcquireDistributionSegment.prototype.getItemName = function () {
        return this.itemName;
    };
    InventoryInventoryAcquireDistributionSegment.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    InventoryInventoryAcquireDistributionSegment.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    InventoryInventoryAcquireDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    InventoryInventoryAcquireDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryInventoryAcquireDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryInventoryAcquireDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventoryAcquireDistributionSegment()
            .withItemName(data["itemName"])
            .withCount(data["count"]);
    };
    InventoryInventoryAcquireDistributionSegment.prototype.toDict = function () {
        return {
            "itemName": this.getItemName(),
            "count": this.getCount(),
        };
    };
    return InventoryInventoryAcquireDistributionSegment;
}());
exports.default = InventoryInventoryAcquireDistributionSegment;
//# sourceMappingURL=InventoryInventoryAcquireDistributionSegment.js.map