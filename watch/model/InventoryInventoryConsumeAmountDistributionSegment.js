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
var InventoryInventoryConsumeAmountDistributionSegment = /** @class */ (function () {
    function InventoryInventoryConsumeAmountDistributionSegment() {
        this.itemName = null;
        this.sum = null;
    }
    InventoryInventoryConsumeAmountDistributionSegment.prototype.getItemName = function () {
        return this.itemName;
    };
    InventoryInventoryConsumeAmountDistributionSegment.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionSegment.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionSegment.prototype.getSum = function () {
        return this.sum;
    };
    InventoryInventoryConsumeAmountDistributionSegment.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionSegment.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    InventoryInventoryConsumeAmountDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventoryConsumeAmountDistributionSegment()
            .withItemName(data["itemName"])
            .withSum(data["sum"]);
    };
    InventoryInventoryConsumeAmountDistributionSegment.prototype.toDict = function () {
        return {
            "itemName": this.getItemName(),
            "sum": this.getSum(),
        };
    };
    return InventoryInventoryConsumeAmountDistributionSegment;
}());
exports.default = InventoryInventoryConsumeAmountDistributionSegment;
//# sourceMappingURL=InventoryInventoryConsumeAmountDistributionSegment.js.map