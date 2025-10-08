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
var AttributeRange = /** @class */ (function () {
    function AttributeRange() {
        this.name = null;
        this.min = null;
        this.max = null;
    }
    AttributeRange.prototype.getName = function () {
        return this.name;
    };
    AttributeRange.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    AttributeRange.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    AttributeRange.prototype.getMin = function () {
        return this.min;
    };
    AttributeRange.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    AttributeRange.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    AttributeRange.prototype.getMax = function () {
        return this.max;
    };
    AttributeRange.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    AttributeRange.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    AttributeRange.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AttributeRange()
            .withName(data["name"])
            .withMin(data["min"])
            .withMax(data["max"]);
    };
    AttributeRange.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "min": this.getMin(),
            "max": this.getMax(),
        };
    };
    return AttributeRange;
}());
exports.default = AttributeRange;
//# sourceMappingURL=AttributeRange.js.map