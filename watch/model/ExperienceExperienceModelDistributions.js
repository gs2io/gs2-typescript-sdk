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
var ExperienceExperienceModelDistributions = /** @class */ (function () {
    function ExperienceExperienceModelDistributions() {
        this.addExperienceByUser = null;
        this.addExperienceAmountByUser = null;
        this.addRankCapByUser = null;
        this.addRankCapAmountByUser = null;
    }
    ExperienceExperienceModelDistributions.prototype.getAddExperienceByUser = function () {
        return this.addExperienceByUser;
    };
    ExperienceExperienceModelDistributions.prototype.setAddExperienceByUser = function (addExperienceByUser) {
        this.addExperienceByUser = addExperienceByUser;
        return this;
    };
    ExperienceExperienceModelDistributions.prototype.withAddExperienceByUser = function (addExperienceByUser) {
        this.addExperienceByUser = addExperienceByUser;
        return this;
    };
    ExperienceExperienceModelDistributions.prototype.getAddExperienceAmountByUser = function () {
        return this.addExperienceAmountByUser;
    };
    ExperienceExperienceModelDistributions.prototype.setAddExperienceAmountByUser = function (addExperienceAmountByUser) {
        this.addExperienceAmountByUser = addExperienceAmountByUser;
        return this;
    };
    ExperienceExperienceModelDistributions.prototype.withAddExperienceAmountByUser = function (addExperienceAmountByUser) {
        this.addExperienceAmountByUser = addExperienceAmountByUser;
        return this;
    };
    ExperienceExperienceModelDistributions.prototype.getAddRankCapByUser = function () {
        return this.addRankCapByUser;
    };
    ExperienceExperienceModelDistributions.prototype.setAddRankCapByUser = function (addRankCapByUser) {
        this.addRankCapByUser = addRankCapByUser;
        return this;
    };
    ExperienceExperienceModelDistributions.prototype.withAddRankCapByUser = function (addRankCapByUser) {
        this.addRankCapByUser = addRankCapByUser;
        return this;
    };
    ExperienceExperienceModelDistributions.prototype.getAddRankCapAmountByUser = function () {
        return this.addRankCapAmountByUser;
    };
    ExperienceExperienceModelDistributions.prototype.setAddRankCapAmountByUser = function (addRankCapAmountByUser) {
        this.addRankCapAmountByUser = addRankCapAmountByUser;
        return this;
    };
    ExperienceExperienceModelDistributions.prototype.withAddRankCapAmountByUser = function (addRankCapAmountByUser) {
        this.addRankCapAmountByUser = addRankCapAmountByUser;
        return this;
    };
    ExperienceExperienceModelDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceExperienceModelDistributions()
            .withAddExperienceByUser(Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistribution.fromDict(data["addExperienceByUser"]))
            .withAddExperienceAmountByUser(Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistribution.fromDict(data["addExperienceAmountByUser"]))
            .withAddRankCapByUser(Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistribution.fromDict(data["addRankCapByUser"]))
            .withAddRankCapAmountByUser(Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistribution.fromDict(data["addRankCapAmountByUser"]));
    };
    ExperienceExperienceModelDistributions.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "addExperienceByUser": (_a = this.getAddExperienceByUser()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "addExperienceAmountByUser": (_b = this.getAddExperienceAmountByUser()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "addRankCapByUser": (_c = this.getAddRankCapByUser()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "addRankCapAmountByUser": (_d = this.getAddRankCapAmountByUser()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return ExperienceExperienceModelDistributions;
}());
exports.default = ExperienceExperienceModelDistributions;
//# sourceMappingURL=ExperienceExperienceModelDistributions.js.map