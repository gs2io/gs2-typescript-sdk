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
var ExchangeNamespaceExchangeByUserDistributionSegment = /** @class */ (function () {
    function ExchangeNamespaceExchangeByUserDistributionSegment() {
        this.min = null;
        this.max = null;
        this.count = null;
    }
    ExchangeNamespaceExchangeByUserDistributionSegment.prototype.getMin = function () {
        return this.min;
    };
    ExchangeNamespaceExchangeByUserDistributionSegment.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionSegment.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionSegment.prototype.getMax = function () {
        return this.max;
    };
    ExchangeNamespaceExchangeByUserDistributionSegment.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionSegment.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    ExchangeNamespaceExchangeByUserDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeNamespaceExchangeByUserDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespaceExchangeByUserDistributionSegment()
            .withMin(data["min"])
            .withMax(data["max"])
            .withCount(data["count"]);
    };
    ExchangeNamespaceExchangeByUserDistributionSegment.prototype.toDict = function () {
        return {
            "min": this.getMin(),
            "max": this.getMax(),
            "count": this.getCount(),
        };
    };
    return ExchangeNamespaceExchangeByUserDistributionSegment;
}());
exports.default = ExchangeNamespaceExchangeByUserDistributionSegment;
//# sourceMappingURL=ExchangeNamespaceExchangeByUserDistributionSegment.js.map