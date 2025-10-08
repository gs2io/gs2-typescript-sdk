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
var ExperienceNamespaceAddExperienceByExperienceDistributionSegment = /** @class */ (function () {
    function ExperienceNamespaceAddExperienceByExperienceDistributionSegment() {
        this.experienceName = null;
        this.count = null;
    }
    ExperienceNamespaceAddExperienceByExperienceDistributionSegment.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    ExperienceNamespaceAddExperienceByExperienceDistributionSegment.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    ExperienceNamespaceAddExperienceByExperienceDistributionSegment.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    ExperienceNamespaceAddExperienceByExperienceDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    ExperienceNamespaceAddExperienceByExperienceDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceNamespaceAddExperienceByExperienceDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    ExperienceNamespaceAddExperienceByExperienceDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceNamespaceAddExperienceByExperienceDistributionSegment()
            .withExperienceName(data["experienceName"])
            .withCount(data["count"]);
    };
    ExperienceNamespaceAddExperienceByExperienceDistributionSegment.prototype.toDict = function () {
        return {
            "experienceName": this.getExperienceName(),
            "count": this.getCount(),
        };
    };
    return ExperienceNamespaceAddExperienceByExperienceDistributionSegment;
}());
exports.default = ExperienceNamespaceAddExperienceByExperienceDistributionSegment;
//# sourceMappingURL=ExperienceNamespaceAddExperienceByExperienceDistributionSegment.js.map