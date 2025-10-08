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
var OverrideBuffRate = /** @class */ (function () {
    function OverrideBuffRate() {
        this.name = null;
        this.rate = null;
    }
    OverrideBuffRate.prototype.getName = function () {
        return this.name;
    };
    OverrideBuffRate.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    OverrideBuffRate.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    OverrideBuffRate.prototype.getRate = function () {
        return this.rate;
    };
    OverrideBuffRate.prototype.setRate = function (rate) {
        this.rate = rate;
        return this;
    };
    OverrideBuffRate.prototype.withRate = function (rate) {
        this.rate = rate;
        return this;
    };
    OverrideBuffRate.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new OverrideBuffRate()
            .withName(data["name"])
            .withRate(data["rate"]);
    };
    OverrideBuffRate.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "rate": this.getRate(),
        };
    };
    return OverrideBuffRate;
}());
exports.default = OverrideBuffRate;
//# sourceMappingURL=OverrideBuffRate.js.map