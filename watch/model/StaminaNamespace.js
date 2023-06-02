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
var StaminaNamespaceStatistics_1 = tslib_1.__importDefault(require("./StaminaNamespaceStatistics"));
var StaminaNamespaceDistributions_1 = tslib_1.__importDefault(require("./StaminaNamespaceDistributions"));
var StaminaStaminaModel_1 = tslib_1.__importDefault(require("./StaminaStaminaModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:stamina:namespace:{namespaceName}";
var StaminaNamespace = /** @class */ (function () {
    function StaminaNamespace() {
        this.namespaceId = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.namespaceName = null;
        this.statistics = null;
        this.distributions = null;
        this.staminaModels = null;
    }
    StaminaNamespace.getRegion = function (grn) {
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
    StaminaNamespace.getOwnerId = function (grn) {
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
    StaminaNamespace.getYear = function (grn) {
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
    StaminaNamespace.getMonth = function (grn) {
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
    StaminaNamespace.getDay = function (grn) {
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
    StaminaNamespace.getNamespaceName = function (grn) {
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
    StaminaNamespace.isValid = function (grn) {
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
    StaminaNamespace.createGrn = function (region, ownerId, year, month, day, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    StaminaNamespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    StaminaNamespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    StaminaNamespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    StaminaNamespace.prototype.getYear = function () {
        return this.year;
    };
    StaminaNamespace.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    StaminaNamespace.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    StaminaNamespace.prototype.getMonth = function () {
        return this.month;
    };
    StaminaNamespace.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    StaminaNamespace.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    StaminaNamespace.prototype.getDay = function () {
        return this.day;
    };
    StaminaNamespace.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    StaminaNamespace.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    StaminaNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    StaminaNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    StaminaNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    StaminaNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    StaminaNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    StaminaNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    StaminaNamespace.prototype.getDistributions = function () {
        return this.distributions;
    };
    StaminaNamespace.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    StaminaNamespace.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    StaminaNamespace.prototype.getStaminaModels = function () {
        return this.staminaModels;
    };
    StaminaNamespace.prototype.setStaminaModels = function (staminaModels) {
        this.staminaModels = staminaModels;
        return this;
    };
    StaminaNamespace.prototype.withStaminaModels = function (staminaModels) {
        this.staminaModels = staminaModels;
        return this;
    };
    StaminaNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(StaminaNamespaceStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(StaminaNamespaceDistributions_1.default.fromDict(data["distributions"]))
            .withStaminaModels(data.staminaModels ?
            data.staminaModels.map(function (item) {
                return StaminaStaminaModel_1.default.fromDict(item);
            }) : []);
    };
    StaminaNamespace.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceId": this.getNamespaceId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "staminaModels": this.getStaminaModels() ?
                this.getStaminaModels().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return StaminaNamespace;
}());
exports.default = StaminaNamespace;
//# sourceMappingURL=StaminaNamespace.js.map