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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:exchange:namespace:{namespaceName}";
var ExchangeNamespace = /** @class */ (function () {
    function ExchangeNamespace() {
        this.namespaceId = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.namespaceName = null;
        this.statistics = null;
        this.distributions = null;
        this.rateModels = null;
    }
    ExchangeNamespace.getRegion = function (grn) {
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
    ExchangeNamespace.getOwnerId = function (grn) {
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
    ExchangeNamespace.getYear = function (grn) {
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
    ExchangeNamespace.getMonth = function (grn) {
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
    ExchangeNamespace.getDay = function (grn) {
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
    ExchangeNamespace.getNamespaceName = function (grn) {
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
    ExchangeNamespace.isValid = function (grn) {
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
    ExchangeNamespace.createGrn = function (region, ownerId, year, month, day, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    ExchangeNamespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    ExchangeNamespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    ExchangeNamespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    ExchangeNamespace.prototype.getYear = function () {
        return this.year;
    };
    ExchangeNamespace.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    ExchangeNamespace.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    ExchangeNamespace.prototype.getMonth = function () {
        return this.month;
    };
    ExchangeNamespace.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    ExchangeNamespace.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    ExchangeNamespace.prototype.getDay = function () {
        return this.day;
    };
    ExchangeNamespace.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    ExchangeNamespace.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    ExchangeNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ExchangeNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExchangeNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExchangeNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    ExchangeNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ExchangeNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ExchangeNamespace.prototype.getDistributions = function () {
        return this.distributions;
    };
    ExchangeNamespace.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ExchangeNamespace.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ExchangeNamespace.prototype.getRateModels = function () {
        return this.rateModels;
    };
    ExchangeNamespace.prototype.setRateModels = function (rateModels) {
        this.rateModels = rateModels;
        return this;
    };
    ExchangeNamespace.prototype.withRateModels = function (rateModels) {
        this.rateModels = rateModels;
        return this;
    };
    ExchangeNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(Gs2Watch.ExchangeNamespaceStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.ExchangeNamespaceDistributions.fromDict(data["distributions"]))
            .withRateModels(data.rateModels ?
            data.rateModels.map(function (item) {
                return Gs2Watch.ExchangeRateModel.fromDict(item);
            }) : null);
    };
    ExchangeNamespace.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceId": this.getNamespaceId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "rateModels": this.getRateModels() ?
                this.getRateModels().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return ExchangeNamespace;
}());
exports.default = ExchangeNamespace;
//# sourceMappingURL=ExchangeNamespace.js.map