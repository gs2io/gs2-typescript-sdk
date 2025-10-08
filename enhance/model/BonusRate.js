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
var BonusRate = /** @class */ (function () {
    function BonusRate() {
        this.rate = null;
        this.weight = null;
    }
    BonusRate.prototype.getRate = function () {
        return this.rate;
    };
    BonusRate.prototype.setRate = function (rate) {
        this.rate = rate;
        return this;
    };
    BonusRate.prototype.withRate = function (rate) {
        this.rate = rate;
        return this;
    };
    BonusRate.prototype.getWeight = function () {
        return this.weight;
    };
    BonusRate.prototype.setWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    BonusRate.prototype.withWeight = function (weight) {
        this.weight = weight;
        return this;
    };
    BonusRate.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BonusRate()
            .withRate(data["rate"])
            .withWeight(data["weight"]);
    };
    BonusRate.prototype.toDict = function () {
        return {
            "rate": this.getRate(),
            "weight": this.getWeight(),
        };
    };
    return BonusRate;
}());
exports.default = BonusRate;
//# sourceMappingURL=BonusRate.js.map