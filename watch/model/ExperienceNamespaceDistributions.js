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
var tslib_1 = require("tslib");
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var ExperienceNamespaceDistributions = /** @class */ (function () {
    function ExperienceNamespaceDistributions() {
        this.addExperienceByExperience = null;
        this.addRankCapByExperience = null;
    }
    ExperienceNamespaceDistributions.prototype.getAddExperienceByExperience = function () {
        return this.addExperienceByExperience;
    };
    ExperienceNamespaceDistributions.prototype.setAddExperienceByExperience = function (addExperienceByExperience) {
        this.addExperienceByExperience = addExperienceByExperience;
        return this;
    };
    ExperienceNamespaceDistributions.prototype.withAddExperienceByExperience = function (addExperienceByExperience) {
        this.addExperienceByExperience = addExperienceByExperience;
        return this;
    };
    ExperienceNamespaceDistributions.prototype.getAddRankCapByExperience = function () {
        return this.addRankCapByExperience;
    };
    ExperienceNamespaceDistributions.prototype.setAddRankCapByExperience = function (addRankCapByExperience) {
        this.addRankCapByExperience = addRankCapByExperience;
        return this;
    };
    ExperienceNamespaceDistributions.prototype.withAddRankCapByExperience = function (addRankCapByExperience) {
        this.addRankCapByExperience = addRankCapByExperience;
        return this;
    };
    ExperienceNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceNamespaceDistributions()
            .withAddExperienceByExperience(Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistribution.fromDict(data["addExperienceByExperience"]))
            .withAddRankCapByExperience(Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistribution.fromDict(data["addRankCapByExperience"]));
    };
    ExperienceNamespaceDistributions.prototype.toDict = function () {
        var _a, _b;
        return {
            "addExperienceByExperience": (_a = this.getAddExperienceByExperience()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "addRankCapByExperience": (_b = this.getAddRankCapByExperience()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return ExperienceNamespaceDistributions;
}());
exports.default = ExperienceNamespaceDistributions;
//# sourceMappingURL=ExperienceNamespaceDistributions.js.map