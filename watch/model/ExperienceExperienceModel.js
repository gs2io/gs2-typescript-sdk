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
var ExperienceExperienceModelStatistics_1 = tslib_1.__importDefault(require("./ExperienceExperienceModelStatistics"));
var ExperienceExperienceModelDistributions_1 = tslib_1.__importDefault(require("./ExperienceExperienceModelDistributions"));
var ExperienceStatus_1 = tslib_1.__importDefault(require("./ExperienceStatus"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:experience:namespace:{namespaceName}:experienceModel:{experienceName}";
var ExperienceExperienceModel = /** @class */ (function () {
    function ExperienceExperienceModel() {
        this.experienceModelId = null;
        this.experienceName = null;
        this.statistics = null;
        this.distributions = null;
        this.statuses = null;
    }
    ExperienceExperienceModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceExperienceModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceExperienceModel.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceExperienceModel.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceExperienceModel.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceExperienceModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{experienceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceExperienceModel.getExperienceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{experienceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceExperienceModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getExperienceName(grn) == null || this.getExperienceName(grn) === '') {
            return false;
        }
        return true;
    };
    ExperienceExperienceModel.createGrn = function (region, ownerId, year, month, day, namespaceName, experienceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{experienceName}', experienceName !== null && experienceName !== void 0 ? experienceName : '');
    };
    ExperienceExperienceModel.prototype.getExperienceModelId = function () {
        return this.experienceModelId;
    };
    ExperienceExperienceModel.prototype.setExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    ExperienceExperienceModel.prototype.withExperienceModelId = function (experienceModelId) {
        this.experienceModelId = experienceModelId;
        return this;
    };
    ExperienceExperienceModel.prototype.getExperienceName = function () {
        return this.experienceName;
    };
    ExperienceExperienceModel.prototype.setExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    ExperienceExperienceModel.prototype.withExperienceName = function (experienceName) {
        this.experienceName = experienceName;
        return this;
    };
    ExperienceExperienceModel.prototype.getStatistics = function () {
        return this.statistics;
    };
    ExperienceExperienceModel.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ExperienceExperienceModel.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ExperienceExperienceModel.prototype.getDistributions = function () {
        return this.distributions;
    };
    ExperienceExperienceModel.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ExperienceExperienceModel.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ExperienceExperienceModel.prototype.getStatuses = function () {
        return this.statuses;
    };
    ExperienceExperienceModel.prototype.setStatuses = function (statuses) {
        this.statuses = statuses;
        return this;
    };
    ExperienceExperienceModel.prototype.withStatuses = function (statuses) {
        this.statuses = statuses;
        return this;
    };
    ExperienceExperienceModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceExperienceModel()
            .withExperienceModelId(data["experienceModelId"])
            .withExperienceName(data["experienceName"])
            .withStatistics(ExperienceExperienceModelStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(ExperienceExperienceModelDistributions_1.default.fromDict(data["distributions"]))
            .withStatuses(data.statuses ?
            data.statuses.map(function (item) {
                return ExperienceStatus_1.default.fromDict(item);
            }) : []);
    };
    ExperienceExperienceModel.prototype.toDict = function () {
        var _a, _b;
        return {
            "experienceModelId": this.getExperienceModelId(),
            "experienceName": this.getExperienceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "statuses": this.getStatuses() ?
                this.getStatuses().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ExperienceExperienceModel;
}());
exports.default = ExperienceExperienceModel;
//# sourceMappingURL=ExperienceExperienceModel.js.map