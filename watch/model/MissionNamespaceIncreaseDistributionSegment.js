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
var MissionNamespaceIncreaseDistributionSegment = /** @class */ (function () {
    function MissionNamespaceIncreaseDistributionSegment() {
        this.counterName = null;
        this.count = null;
    }
    MissionNamespaceIncreaseDistributionSegment.prototype.getCounterName = function () {
        return this.counterName;
    };
    MissionNamespaceIncreaseDistributionSegment.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    MissionNamespaceIncreaseDistributionSegment.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    MissionNamespaceIncreaseDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    MissionNamespaceIncreaseDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MissionNamespaceIncreaseDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MissionNamespaceIncreaseDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionNamespaceIncreaseDistributionSegment()
            .withCounterName(data["counterName"])
            .withCount(data["count"]);
    };
    MissionNamespaceIncreaseDistributionSegment.prototype.toDict = function () {
        return {
            "counterName": this.getCounterName(),
            "count": this.getCount(),
        };
    };
    return MissionNamespaceIncreaseDistributionSegment;
}());
exports.default = MissionNamespaceIncreaseDistributionSegment;
//# sourceMappingURL=MissionNamespaceIncreaseDistributionSegment.js.map