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
var FormationNamespaceStatistics_1 = tslib_1.__importDefault(require("./FormationNamespaceStatistics"));
var FormationNamespaceDistributions_1 = tslib_1.__importDefault(require("./FormationNamespaceDistributions"));
var FormationMold_1 = tslib_1.__importDefault(require("./FormationMold"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:formation:namespace:{namespaceName}";
var FormationNamespace = /** @class */ (function () {
    function FormationNamespace() {
        this.namespaceId = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.namespaceName = null;
        this.statistics = null;
        this.distributions = null;
        this.molds = null;
    }
    FormationNamespace.getRegion = function (grn) {
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
    FormationNamespace.getOwnerId = function (grn) {
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
    FormationNamespace.getYear = function (grn) {
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
    FormationNamespace.getMonth = function (grn) {
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
    FormationNamespace.getDay = function (grn) {
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
    FormationNamespace.getNamespaceName = function (grn) {
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
    FormationNamespace.isValid = function (grn) {
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
    FormationNamespace.createGrn = function (region, ownerId, year, month, day, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    FormationNamespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    FormationNamespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    FormationNamespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    FormationNamespace.prototype.getYear = function () {
        return this.year;
    };
    FormationNamespace.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    FormationNamespace.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    FormationNamespace.prototype.getMonth = function () {
        return this.month;
    };
    FormationNamespace.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    FormationNamespace.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    FormationNamespace.prototype.getDay = function () {
        return this.day;
    };
    FormationNamespace.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    FormationNamespace.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    FormationNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    FormationNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FormationNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FormationNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    FormationNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    FormationNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    FormationNamespace.prototype.getDistributions = function () {
        return this.distributions;
    };
    FormationNamespace.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    FormationNamespace.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    FormationNamespace.prototype.getMolds = function () {
        return this.molds;
    };
    FormationNamespace.prototype.setMolds = function (molds) {
        this.molds = molds;
        return this;
    };
    FormationNamespace.prototype.withMolds = function (molds) {
        this.molds = molds;
        return this;
    };
    FormationNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(FormationNamespaceStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(FormationNamespaceDistributions_1.default.fromDict(data["distributions"]))
            .withMolds(data.molds ?
            data.molds.map(function (item) {
                return FormationMold_1.default.fromDict(item);
            }) : []);
    };
    FormationNamespace.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceId": this.getNamespaceId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "molds": this.getMolds() ?
                this.getMolds().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return FormationNamespace;
}());
exports.default = FormationNamespace;
//# sourceMappingURL=FormationNamespace.js.map