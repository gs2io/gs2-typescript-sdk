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
var ConsumeCount = /** @class */ (function () {
    function ConsumeCount() {
        this.itemName = null;
        this.count = null;
    }
    ConsumeCount.prototype.getItemName = function () {
        return this.itemName;
    };
    ConsumeCount.prototype.setItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    ConsumeCount.prototype.withItemName = function (itemName) {
        this.itemName = itemName;
        return this;
    };
    ConsumeCount.prototype.getCount = function () {
        return this.count;
    };
    ConsumeCount.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ConsumeCount.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ConsumeCount.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ConsumeCount()
            .withItemName(data["itemName"])
            .withCount(data["count"]);
    };
    ConsumeCount.prototype.toDict = function () {
        return {
            "itemName": this.getItemName(),
            "count": this.getCount(),
        };
    };
    return ConsumeCount;
}());
exports.default = ConsumeCount;
//# sourceMappingURL=ConsumeCount.js.map