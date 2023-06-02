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
var RankingNamespaceStatistics_1 = tslib_1.__importDefault(require("./RankingNamespaceStatistics"));
var RankingNamespaceDistributions_1 = tslib_1.__importDefault(require("./RankingNamespaceDistributions"));
var RankingCategoryModel_1 = tslib_1.__importDefault(require("./RankingCategoryModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:ranking:namespace:{namespaceName}";
var RankingNamespace = /** @class */ (function () {
    function RankingNamespace() {
        this.namespaceId = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.namespaceName = null;
        this.statistics = null;
        this.distributions = null;
        this.categoryModels = null;
    }
    RankingNamespace.getRegion = function (grn) {
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
    RankingNamespace.getOwnerId = function (grn) {
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
    RankingNamespace.getYear = function (grn) {
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
    RankingNamespace.getMonth = function (grn) {
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
    RankingNamespace.getDay = function (grn) {
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
    RankingNamespace.getNamespaceName = function (grn) {
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
    RankingNamespace.isValid = function (grn) {
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
    RankingNamespace.createGrn = function (region, ownerId, year, month, day, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    RankingNamespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    RankingNamespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    RankingNamespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    RankingNamespace.prototype.getYear = function () {
        return this.year;
    };
    RankingNamespace.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    RankingNamespace.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    RankingNamespace.prototype.getMonth = function () {
        return this.month;
    };
    RankingNamespace.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    RankingNamespace.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    RankingNamespace.prototype.getDay = function () {
        return this.day;
    };
    RankingNamespace.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    RankingNamespace.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    RankingNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RankingNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RankingNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RankingNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    RankingNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    RankingNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    RankingNamespace.prototype.getDistributions = function () {
        return this.distributions;
    };
    RankingNamespace.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    RankingNamespace.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    RankingNamespace.prototype.getCategoryModels = function () {
        return this.categoryModels;
    };
    RankingNamespace.prototype.setCategoryModels = function (categoryModels) {
        this.categoryModels = categoryModels;
        return this;
    };
    RankingNamespace.prototype.withCategoryModels = function (categoryModels) {
        this.categoryModels = categoryModels;
        return this;
    };
    RankingNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(RankingNamespaceStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(RankingNamespaceDistributions_1.default.fromDict(data["distributions"]))
            .withCategoryModels(data.categoryModels ?
            data.categoryModels.map(function (item) {
                return RankingCategoryModel_1.default.fromDict(item);
            }) : []);
    };
    RankingNamespace.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceId": this.getNamespaceId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "categoryModels": this.getCategoryModels() ?
                this.getCategoryModels().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return RankingNamespace;
}());
exports.default = RankingNamespace;
//# sourceMappingURL=RankingNamespace.js.map