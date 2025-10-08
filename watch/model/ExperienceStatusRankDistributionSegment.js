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
var ExperienceStatusRankDistributionSegment = /** @class */ (function () {
    function ExperienceStatusRankDistributionSegment() {
        this.min = null;
        this.max = null;
        this.count = null;
    }
    ExperienceStatusRankDistributionSegment.prototype.getMin = function () {
        return this.min;
    };
    ExperienceStatusRankDistributionSegment.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ExperienceStatusRankDistributionSegment.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ExperienceStatusRankDistributionSegment.prototype.getMax = function () {
        return this.max;
    };
    ExperienceStatusRankDistributionSegment.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ExperienceStatusRankDistributionSegment.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ExperienceStatusRankDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    ExperienceStatusRankDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceStatusRankDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceStatusRankDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceStatusRankDistributionSegment()
            .withMin(data["min"])
            .withMax(data["max"])
            .withCount(data["count"]);
    };
    ExperienceStatusRankDistributionSegment.prototype.toDict = function () {
        return {
            "min": this.getMin(),
            "max": this.getMax(),
            "count": this.getCount(),
        };
    };
    return ExperienceStatusRankDistributionSegment;
}());
exports.default = ExperienceStatusRankDistributionSegment;
//# sourceMappingURL=ExperienceStatusRankDistributionSegment.js.map