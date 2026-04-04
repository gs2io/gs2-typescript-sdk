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
var NumericRange = /** @class */ (function () {
    function NumericRange() {
        this.min = null;
        this.max = null;
    }
    NumericRange.prototype.getMin = function () {
        return this.min;
    };
    NumericRange.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    NumericRange.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    NumericRange.prototype.getMax = function () {
        return this.max;
    };
    NumericRange.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    NumericRange.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    NumericRange.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new NumericRange()
            .withMin(data["min"])
            .withMax(data["max"]);
    };
    NumericRange.prototype.toDict = function () {
        return {
            "min": this.getMin(),
            "max": this.getMax(),
        };
    };
    return NumericRange;
}());
exports.default = NumericRange;
//# sourceMappingURL=NumericRange.js.map