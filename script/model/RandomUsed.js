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
var RandomUsed = /** @class */ (function () {
    function RandomUsed() {
        this.category = null;
        this.used = null;
    }
    RandomUsed.prototype.getCategory = function () {
        return this.category;
    };
    RandomUsed.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    RandomUsed.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    RandomUsed.prototype.getUsed = function () {
        return this.used;
    };
    RandomUsed.prototype.setUsed = function (used) {
        this.used = used;
        return this;
    };
    RandomUsed.prototype.withUsed = function (used) {
        this.used = used;
        return this;
    };
    RandomUsed.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RandomUsed()
            .withCategory(data["category"])
            .withUsed(data["used"]);
    };
    RandomUsed.prototype.toDict = function () {
        return {
            "category": this.getCategory(),
            "used": this.getUsed(),
        };
    };
    return RandomUsed;
}());
exports.default = RandomUsed;
//# sourceMappingURL=RandomUsed.js.map