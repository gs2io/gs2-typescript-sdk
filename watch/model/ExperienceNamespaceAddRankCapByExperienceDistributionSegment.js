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
var ExperienceNamespaceAddRankCapByExperienceDistributionSegment = /** @class */ (function () {
    function ExperienceNamespaceAddRankCapByExperienceDistributionSegment() {
        this.experienceName = null;
        this.count = null;
    }
    ExperienceNamespaceAddRankCapByExperienceDistributionSegment.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    ExperienceNamespaceAddRankCapByExperienceDistributionSegment.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    ExperienceNamespaceAddRankCapByExperienceDistributionSegment.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    ExperienceNamespaceAddRankCapByExperienceDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    ExperienceNamespaceAddRankCapByExperienceDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceNamespaceAddRankCapByExperienceDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceNamespaceAddRankCapByExperienceDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceNamespaceAddRankCapByExperienceDistributionSegment()
            .withExperienceName(data["experienceName"])
            .withCount(data["count"]);
    };
    ExperienceNamespaceAddRankCapByExperienceDistributionSegment.prototype.toDict = function () {
        return {
            "experienceName": this.getExperienceName(),
            "count": this.getCount(),
        };
    };
    return ExperienceNamespaceAddRankCapByExperienceDistributionSegment;
}());
exports.default = ExperienceNamespaceAddRankCapByExperienceDistributionSegment;
//# sourceMappingURL=ExperienceNamespaceAddRankCapByExperienceDistributionSegment.js.map