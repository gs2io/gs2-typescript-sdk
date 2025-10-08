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
var ExchangeNamespaceExchangeDistributionSegment = /** @class */ (function () {
    function ExchangeNamespaceExchangeDistributionSegment() {
        this.rateName = null;
        this.count = null;
    }
    ExchangeNamespaceExchangeDistributionSegment.prototype.getRateName = function () {
        return this.rateName;
    };
    ExchangeNamespaceExchangeDistributionSegment.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    ExchangeNamespaceExchangeDistributionSegment.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    ExchangeNamespaceExchangeDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    ExchangeNamespaceExchangeDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeNamespaceExchangeDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExchangeNamespaceExchangeDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespaceExchangeDistributionSegment()
            .withRateName(data["rateName"])
            .withCount(data["count"]);
    };
    ExchangeNamespaceExchangeDistributionSegment.prototype.toDict = function () {
        return {
            "rateName": this.getRateName(),
            "count": this.getCount(),
        };
    };
    return ExchangeNamespaceExchangeDistributionSegment;
}());
exports.default = ExchangeNamespaceExchangeDistributionSegment;
//# sourceMappingURL=ExchangeNamespaceExchangeDistributionSegment.js.map