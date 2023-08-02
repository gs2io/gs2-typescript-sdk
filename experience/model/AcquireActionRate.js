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
var AcquireActionRate = /** @class */ (function () {
    function AcquireActionRate() {
        this.name = null;
        this.rates = null;
    }
    AcquireActionRate.prototype.getName = function () {
        return this.name;
    };
    AcquireActionRate.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    AcquireActionRate.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    AcquireActionRate.prototype.getRates = function () {
        return this.rates;
    };
    AcquireActionRate.prototype.setRates = function (rates) {
        this.rates = rates;
        return this;
    };
    AcquireActionRate.prototype.withRates = function (rates) {
        this.rates = rates;
        return this;
    };
    AcquireActionRate.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcquireActionRate()
            .withName(data["name"])
            .withRates(data.rates ?
            data.rates.map(function (item) {
                return item;
            }) : []);
    };
    AcquireActionRate.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "rates": this.getRates() ?
                this.getRates().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return AcquireActionRate;
}());
exports.default = AcquireActionRate;
//# sourceMappingURL=AcquireActionRate.js.map