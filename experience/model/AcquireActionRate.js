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
        this.mode = null;
        this.rates = null;
        this.bigRates = null;
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
    AcquireActionRate.prototype.getMode = function () {
        return this.mode;
    };
    AcquireActionRate.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    AcquireActionRate.prototype.withMode = function (mode) {
        this.mode = mode;
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
    AcquireActionRate.prototype.getBigRates = function () {
        return this.bigRates;
    };
    AcquireActionRate.prototype.setBigRates = function (bigRates) {
        this.bigRates = bigRates;
        return this;
    };
    AcquireActionRate.prototype.withBigRates = function (bigRates) {
        this.bigRates = bigRates;
        return this;
    };
    AcquireActionRate.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcquireActionRate()
            .withName(data["name"])
            .withMode(data["mode"])
            .withRates(data.rates ?
            data.rates.map(function (item) {
                return item;
            }) : null)
            .withBigRates(data.bigRates ?
            data.bigRates.map(function (item) {
                return item;
            }) : null);
    };
    AcquireActionRate.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "mode": this.getMode(),
            "rates": this.getRates() ?
                this.getRates().map(function (item) {
                    return item;
                }) : null,
            "bigRates": this.getBigRates() ?
                this.getBigRates().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return AcquireActionRate;
}());
exports.default = AcquireActionRate;
//# sourceMappingURL=AcquireActionRate.js.map