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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:experience:namespace:{namespaceName}";
var ExperienceNamespace = /** @class */ (function () {
    function ExperienceNamespace() {
        this.namespaceId = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.namespaceName = null;
        this.statistics = null;
        this.distributions = null;
        this.experienceModels = null;
    }
    ExperienceNamespace.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceNamespace.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceNamespace.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceNamespace.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceNamespace.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceNamespace.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExperienceNamespace.isValid = function (grn) {
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
        return true;
    };
    ExperienceNamespace.createGrn = function (region, ownerId, year, month, day, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    ExperienceNamespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    ExperienceNamespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    ExperienceNamespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    ExperienceNamespace.prototype.getYear = function () {
        return this.year;
    };
    ExperienceNamespace.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    ExperienceNamespace.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    ExperienceNamespace.prototype.getMonth = function () {
        return this.month;
    };
    ExperienceNamespace.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    ExperienceNamespace.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    ExperienceNamespace.prototype.getDay = function () {
        return this.day;
    };
    ExperienceNamespace.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    ExperienceNamespace.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    ExperienceNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ExperienceNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExperienceNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExperienceNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    ExperienceNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ExperienceNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ExperienceNamespace.prototype.getDistributions = function () {
        return this.distributions;
    };
    ExperienceNamespace.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ExperienceNamespace.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ExperienceNamespace.prototype.getExperienceModels = function () {
        return this.experienceModels;
    };
    ExperienceNamespace.prototype.setExperienceModels = function (experienceModels) {
        this.experienceModels = experienceModels;
        return this;
    };
    ExperienceNamespace.prototype.withExperienceModels = function (experienceModels) {
        this.experienceModels = experienceModels;
        return this;
    };
    ExperienceNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(Gs2Watch.ExperienceNamespaceStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.ExperienceNamespaceDistributions.fromDict(data["distributions"]))
            .withExperienceModels(data.experienceModels ?
            data.experienceModels.map(function (item) {
                return Gs2Watch.ExperienceExperienceModel.fromDict(item);
            }) : null);
    };
    ExperienceNamespace.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceId": this.getNamespaceId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "experienceModels": this.getExperienceModels() ?
                this.getExperienceModels().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return ExperienceNamespace;
}());
exports.default = ExperienceNamespace;
//# sourceMappingURL=ExperienceNamespace.js.map