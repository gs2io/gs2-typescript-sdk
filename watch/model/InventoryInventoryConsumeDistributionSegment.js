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
var InventoryInventoryConsumeDistributionSegment = /** @class */ (function () {
    function InventoryInventoryConsumeDistributionSegment() {
        this.itemName = null;
        this.count = null;
    }
    InventoryInventoryConsumeDistributionSegment.prototype.getItemName = function () {
        return this.itemName;
    };
    InventoryInventoryConsumeDistributionSegment.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    InventoryInventoryConsumeDistributionSegment.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    InventoryInventoryConsumeDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    InventoryInventoryConsumeDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryInventoryConsumeDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryInventoryConsumeDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventoryConsumeDistributionSegment()
            .withItemName(data["itemName"])
            .withCount(data["count"]);
    };
    InventoryInventoryConsumeDistributionSegment.prototype.toDict = function () {
        return {
            "itemName": this.getItemName(),
            "count": this.getCount(),
        };
    };
    return InventoryInventoryConsumeDistributionSegment;
}());
exports.default = InventoryInventoryConsumeDistributionSegment;
//# sourceMappingURL=InventoryInventoryConsumeDistributionSegment.js.map