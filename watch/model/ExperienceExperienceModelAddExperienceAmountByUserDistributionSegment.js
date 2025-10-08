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
var ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment = /** @class */ (function () {
    function ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment() {
        this.min = null;
        this.max = null;
        this.count = null;
    }
    ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment.prototype.getMin = function () {
        return this.min;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment.prototype.setMin = function (min) {
        this.min = min;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment.prototype.withMin = function (min) {
        this.min = min;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment.prototype.getMax = function () {
        return this.max;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment.prototype.setMax = function (max) {
        this.max = max;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment.prototype.withMax = function (max) {
        this.max = max;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment()
            .withMin(data["min"])
            .withMax(data["max"])
            .withCount(data["count"]);
    };
    ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment.prototype.toDict = function () {
        return {
            "min": this.getMin(),
            "max": this.getMax(),
            "count": this.getCount(),
        };
    };
    return ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment;
}());
exports.default = ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment;
//# sourceMappingURL=ExperienceExperienceModelAddExperienceAmountByUserDistributionSegment.js.map