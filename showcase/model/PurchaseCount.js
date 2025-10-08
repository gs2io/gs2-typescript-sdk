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
var PurchaseCount = /** @class */ (function () {
    function PurchaseCount() {
        this.name = null;
        this.count = null;
    }
    PurchaseCount.prototype.getName = function () {
        return this.name;
    };
    PurchaseCount.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    PurchaseCount.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    PurchaseCount.prototype.getCount = function () {
        return this.count;
    };
    PurchaseCount.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    PurchaseCount.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    PurchaseCount.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new PurchaseCount()
            .withName(data["name"])
            .withCount(data["count"]);
    };
    PurchaseCount.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "count": this.getCount(),
        };
    };
    return PurchaseCount;
}());
exports.default = PurchaseCount;
//# sourceMappingURL=PurchaseCount.js.map