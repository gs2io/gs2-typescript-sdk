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
var MissionNamespaceIncreaseAmountDistributionSegment = /** @class */ (function () {
    function MissionNamespaceIncreaseAmountDistributionSegment() {
        this.counterName = null;
        this.sum = null;
    }
    MissionNamespaceIncreaseAmountDistributionSegment.prototype.getCounterName = function () {
        return this.counterName;
    };
    MissionNamespaceIncreaseAmountDistributionSegment.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionSegment.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionSegment.prototype.getSum = function () {
        return this.sum;
    };
    MissionNamespaceIncreaseAmountDistributionSegment.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionSegment.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    MissionNamespaceIncreaseAmountDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionNamespaceIncreaseAmountDistributionSegment()
            .withCounterName(data["counterName"])
            .withSum(data["sum"]);
    };
    MissionNamespaceIncreaseAmountDistributionSegment.prototype.toDict = function () {
        return {
            "counterName": this.getCounterName(),
            "sum": this.getSum(),
        };
    };
    return MissionNamespaceIncreaseAmountDistributionSegment;
}());
exports.default = MissionNamespaceIncreaseAmountDistributionSegment;
//# sourceMappingURL=MissionNamespaceIncreaseAmountDistributionSegment.js.map