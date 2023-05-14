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
var ShowcaseBuyQuantityDistribution_1 = tslib_1.__importDefault(require("./ShowcaseBuyQuantityDistribution"));
var ShowcaseDisplayItem = /** @class */ (function () {
    function ShowcaseDisplayItem() {
        this.displayItemId = null;
        this.quantityDistribution = null;
    }
    ShowcaseDisplayItem.prototype.getDisplayItemId = function () {
        return this.displayItemId;
    };
    ShowcaseDisplayItem.prototype.setDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    ShowcaseDisplayItem.prototype.withDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    ShowcaseDisplayItem.prototype.getQuantityDistribution = function () {
        return this.quantityDistribution;
    };
    ShowcaseDisplayItem.prototype.setQuantityDistribution = function (quantityDistribution) {
        this.quantityDistribution = quantityDistribution;
        return this;
    };
    ShowcaseDisplayItem.prototype.withQuantityDistribution = function (quantityDistribution) {
        this.quantityDistribution = quantityDistribution;
        return this;
    };
    ShowcaseDisplayItem.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseDisplayItem()
            .withDisplayItemId(data["displayItemId"])
            .withQuantityDistribution(data.quantityDistribution ?
            data.quantityDistribution.map(function (item) {
                return ShowcaseBuyQuantityDistribution_1.default.fromDict(item);
            }) : []);
    };
    ShowcaseDisplayItem.prototype.toDict = function () {
        return {
            "displayItemId": this.getDisplayItemId(),
            "quantityDistribution": this.getQuantityDistribution() ?
                this.getQuantityDistribution().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ShowcaseDisplayItem;
}());
exports.default = ShowcaseDisplayItem;
//# sourceMappingURL=ShowcaseDisplayItem.js.map