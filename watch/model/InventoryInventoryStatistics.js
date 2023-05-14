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
var InventoryInventoryStatistics = /** @class */ (function () {
    function InventoryInventoryStatistics() {
        this.currentInventoryMaxCapacity = null;
        this.count = null;
    }
    InventoryInventoryStatistics.prototype.getCurrentInventoryMaxCapacity = function () {
        return this.currentInventoryMaxCapacity;
    };
    InventoryInventoryStatistics.prototype.setCurrentInventoryMaxCapacity = function (currentInventoryMaxCapacity) {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    };
    InventoryInventoryStatistics.prototype.withCurrentInventoryMaxCapacity = function (currentInventoryMaxCapacity) {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    };
    InventoryInventoryStatistics.prototype.getCount = function () {
        return this.count;
    };
    InventoryInventoryStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryInventoryStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    InventoryInventoryStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryInventoryStatistics()
            .withCurrentInventoryMaxCapacity(data["currentInventoryMaxCapacity"])
            .withCount(data["count"]);
    };
    InventoryInventoryStatistics.prototype.toDict = function () {
        return {
            "currentInventoryMaxCapacity": this.getCurrentInventoryMaxCapacity(),
            "count": this.getCount(),
        };
    };
    return InventoryInventoryStatistics;
}());
exports.default = InventoryInventoryStatistics;
//# sourceMappingURL=InventoryInventoryStatistics.js.map