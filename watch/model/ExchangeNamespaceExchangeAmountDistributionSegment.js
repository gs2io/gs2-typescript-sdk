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
var ExchangeNamespaceExchangeAmountDistributionSegment = /** @class */ (function () {
    function ExchangeNamespaceExchangeAmountDistributionSegment() {
        this.rateName = null;
        this.sum = null;
    }
    ExchangeNamespaceExchangeAmountDistributionSegment.prototype.getRateName = function () {
        return this.rateName;
    };
    ExchangeNamespaceExchangeAmountDistributionSegment.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionSegment.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionSegment.prototype.getSum = function () {
        return this.sum;
    };
    ExchangeNamespaceExchangeAmountDistributionSegment.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionSegment.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    ExchangeNamespaceExchangeAmountDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespaceExchangeAmountDistributionSegment()
            .withRateName(data["rateName"])
            .withSum(data["sum"]);
    };
    ExchangeNamespaceExchangeAmountDistributionSegment.prototype.toDict = function () {
        return {
            "rateName": this.getRateName(),
            "sum": this.getSum(),
        };
    };
    return ExchangeNamespaceExchangeAmountDistributionSegment;
}());
exports.default = ExchangeNamespaceExchangeAmountDistributionSegment;
//# sourceMappingURL=ExchangeNamespaceExchangeAmountDistributionSegment.js.map