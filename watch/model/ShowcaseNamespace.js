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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:showcase:namespace:{namespaceName}";
var ShowcaseNamespace = /** @class */ (function () {
    function ShowcaseNamespace() {
        this.namespaceId = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.namespaceName = null;
        this.statistics = null;
        this.distributions = null;
        this.showcases = null;
    }
    ShowcaseNamespace.getRegion = function (grn) {
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
    ShowcaseNamespace.getOwnerId = function (grn) {
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
    ShowcaseNamespace.getYear = function (grn) {
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
    ShowcaseNamespace.getMonth = function (grn) {
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
    ShowcaseNamespace.getDay = function (grn) {
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
    ShowcaseNamespace.getNamespaceName = function (grn) {
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
    ShowcaseNamespace.isValid = function (grn) {
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
    ShowcaseNamespace.createGrn = function (region, ownerId, year, month, day, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    ShowcaseNamespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    ShowcaseNamespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    ShowcaseNamespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    ShowcaseNamespace.prototype.getYear = function () {
        return this.year;
    };
    ShowcaseNamespace.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    ShowcaseNamespace.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    ShowcaseNamespace.prototype.getMonth = function () {
        return this.month;
    };
    ShowcaseNamespace.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    ShowcaseNamespace.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    ShowcaseNamespace.prototype.getDay = function () {
        return this.day;
    };
    ShowcaseNamespace.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    ShowcaseNamespace.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    ShowcaseNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ShowcaseNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ShowcaseNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ShowcaseNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    ShowcaseNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ShowcaseNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ShowcaseNamespace.prototype.getDistributions = function () {
        return this.distributions;
    };
    ShowcaseNamespace.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ShowcaseNamespace.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ShowcaseNamespace.prototype.getShowcases = function () {
        return this.showcases;
    };
    ShowcaseNamespace.prototype.setShowcases = function (showcases) {
        this.showcases = showcases;
        return this;
    };
    ShowcaseNamespace.prototype.withShowcases = function (showcases) {
        this.showcases = showcases;
        return this;
    };
    ShowcaseNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(Gs2Watch.ShowcaseNamespaceStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.ShowcaseNamespaceDistributions.fromDict(data["distributions"]))
            .withShowcases(data.showcases ?
            data.showcases.map(function (item) {
                return Gs2Watch.ShowcaseShowcase.fromDict(item);
            }) : null);
    };
    ShowcaseNamespace.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceId": this.getNamespaceId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "showcases": this.getShowcases() ?
                this.getShowcases().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return ShowcaseNamespace;
}());
exports.default = ShowcaseNamespace;
//# sourceMappingURL=ShowcaseNamespace.js.map