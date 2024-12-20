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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:limit:namespace:{namespaceName}";
var LimitNamespace = /** @class */ (function () {
    function LimitNamespace() {
        this.namespaceId = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.namespaceName = null;
        this.statistics = null;
        this.distributions = null;
        this.limitModels = null;
    }
    LimitNamespace.getRegion = function (grn) {
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
    LimitNamespace.getOwnerId = function (grn) {
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
    LimitNamespace.getYear = function (grn) {
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
    LimitNamespace.getMonth = function (grn) {
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
    LimitNamespace.getDay = function (grn) {
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
    LimitNamespace.getNamespaceName = function (grn) {
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
    LimitNamespace.isValid = function (grn) {
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
    LimitNamespace.createGrn = function (region, ownerId, year, month, day, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    LimitNamespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    LimitNamespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    LimitNamespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    LimitNamespace.prototype.getYear = function () {
        return this.year;
    };
    LimitNamespace.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    LimitNamespace.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    LimitNamespace.prototype.getMonth = function () {
        return this.month;
    };
    LimitNamespace.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    LimitNamespace.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    LimitNamespace.prototype.getDay = function () {
        return this.day;
    };
    LimitNamespace.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    LimitNamespace.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    LimitNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    LimitNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    LimitNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    LimitNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    LimitNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    LimitNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    LimitNamespace.prototype.getDistributions = function () {
        return this.distributions;
    };
    LimitNamespace.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    LimitNamespace.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    LimitNamespace.prototype.getLimitModels = function () {
        return this.limitModels;
    };
    LimitNamespace.prototype.setLimitModels = function (limitModels) {
        this.limitModels = limitModels;
        return this;
    };
    LimitNamespace.prototype.withLimitModels = function (limitModels) {
        this.limitModels = limitModels;
        return this;
    };
    LimitNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(Gs2Watch.LimitNamespaceStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.LimitNamespaceDistributions.fromDict(data["distributions"]))
            .withLimitModels(data.limitModels ?
            data.limitModels.map(function (item) {
                return Gs2Watch.LimitLimitModel.fromDict(item);
            }) : null);
    };
    LimitNamespace.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceId": this.getNamespaceId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "limitModels": this.getLimitModels() ?
                this.getLimitModels().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return LimitNamespace;
}());
exports.default = LimitNamespace;
//# sourceMappingURL=LimitNamespace.js.map