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
var DictionaryNamespaceStatistics_1 = tslib_1.__importDefault(require("./DictionaryNamespaceStatistics"));
var DictionaryNamespaceDistributions_1 = tslib_1.__importDefault(require("./DictionaryNamespaceDistributions"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:dictionary:namespace:{namespaceName}";
var DictionaryNamespace = /** @class */ (function () {
    function DictionaryNamespace() {
        this.namespaceId = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.namespaceName = null;
        this.statistics = null;
        this.distributions = null;
    }
    DictionaryNamespace.getRegion = function (grn) {
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
    DictionaryNamespace.getOwnerId = function (grn) {
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
    DictionaryNamespace.getYear = function (grn) {
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
    DictionaryNamespace.getMonth = function (grn) {
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
    DictionaryNamespace.getDay = function (grn) {
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
    DictionaryNamespace.getNamespaceName = function (grn) {
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
    DictionaryNamespace.isValid = function (grn) {
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
    DictionaryNamespace.createGrn = function (region, ownerId, year, month, day, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    DictionaryNamespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    DictionaryNamespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    DictionaryNamespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    DictionaryNamespace.prototype.getYear = function () {
        return this.year;
    };
    DictionaryNamespace.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    DictionaryNamespace.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    DictionaryNamespace.prototype.getMonth = function () {
        return this.month;
    };
    DictionaryNamespace.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    DictionaryNamespace.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    DictionaryNamespace.prototype.getDay = function () {
        return this.day;
    };
    DictionaryNamespace.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    DictionaryNamespace.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    DictionaryNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DictionaryNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DictionaryNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DictionaryNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    DictionaryNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    DictionaryNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    DictionaryNamespace.prototype.getDistributions = function () {
        return this.distributions;
    };
    DictionaryNamespace.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    DictionaryNamespace.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    DictionaryNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DictionaryNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(DictionaryNamespaceStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(DictionaryNamespaceDistributions_1.default.fromDict(data["distributions"]));
    };
    DictionaryNamespace.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceId": this.getNamespaceId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return DictionaryNamespace;
}());
exports.default = DictionaryNamespace;
//# sourceMappingURL=DictionaryNamespace.js.map