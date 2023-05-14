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
var ExchangeRate = /** @class */ (function () {
    function ExchangeRate() {
        this.rateName = null;
        this.count = null;
    }
    ExchangeRate.prototype.getRateName = function () {
        return this.rateName;
    };
    ExchangeRate.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    ExchangeRate.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    ExchangeRate.prototype.getCount = function () {
        return this.count;
    };
    ExchangeRate.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeRate.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeRate.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeRate()
            .withRateName(data["rateName"])
            .withCount(data["count"]);
    };
    ExchangeRate.prototype.toDict = function () {
        return {
            "rateName": this.getRateName(),
            "count": this.getCount(),
        };
    };
    return ExchangeRate;
}());
exports.default = ExchangeRate;
//# sourceMappingURL=ExchangeRate.js.map