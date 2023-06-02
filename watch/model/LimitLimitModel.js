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
var LimitLimitModelStatistics_1 = tslib_1.__importDefault(require("./LimitLimitModelStatistics"));
var LimitLimitModelDistributions_1 = tslib_1.__importDefault(require("./LimitLimitModelDistributions"));
var LimitCounter_1 = tslib_1.__importDefault(require("./LimitCounter"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:limit:namespace:{namespaceName}:limitModel:{limitName}";
var LimitLimitModel = /** @class */ (function () {
    function LimitLimitModel() {
        this.limitModelId = null;
        this.limitName = null;
        this.statistics = null;
        this.distributions = null;
        this.counters = null;
    }
    LimitLimitModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitLimitModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitLimitModel.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitLimitModel.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitLimitModel.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitLimitModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{limitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitLimitModel.getLimitName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitLimitModel.isValid = function (grn) {
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
        if (this.getLimitName(grn) == null || this.getLimitName(grn) === '') {
            return false;
        }
        return true;
    };
    LimitLimitModel.createGrn = function (region, ownerId, year, month, day, namespaceName, limitName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{limitName}', limitName !== null && limitName !== void 0 ? limitName : '');
    };
    LimitLimitModel.prototype.getLimitModelId = function () {
        return this.limitModelId;
    };
    LimitLimitModel.prototype.setLimitModelId = function (limitModelId) {
        this.limitModelId = limitModelId;
        return this;
    };
    LimitLimitModel.prototype.withLimitModelId = function (limitModelId) {
        this.limitModelId = limitModelId;
        return this;
    };
    LimitLimitModel.prototype.getLimitName = function () {
        return this.limitName;
    };
    LimitLimitModel.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    LimitLimitModel.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    LimitLimitModel.prototype.getStatistics = function () {
        return this.statistics;
    };
    LimitLimitModel.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    LimitLimitModel.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    LimitLimitModel.prototype.getDistributions = function () {
        return this.distributions;
    };
    LimitLimitModel.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    LimitLimitModel.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    LimitLimitModel.prototype.getCounters = function () {
        return this.counters;
    };
    LimitLimitModel.prototype.setCounters = function (counters) {
        this.counters = counters;
        return this;
    };
    LimitLimitModel.prototype.withCounters = function (counters) {
        this.counters = counters;
        return this;
    };
    LimitLimitModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitLimitModel()
            .withLimitModelId(data["limitModelId"])
            .withLimitName(data["limitName"])
            .withStatistics(LimitLimitModelStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(LimitLimitModelDistributions_1.default.fromDict(data["distributions"]))
            .withCounters(data.counters ?
            data.counters.map(function (item) {
                return LimitCounter_1.default.fromDict(item);
            }) : []);
    };
    LimitLimitModel.prototype.toDict = function () {
        var _a, _b;
        return {
            "limitModelId": this.getLimitModelId(),
            "limitName": this.getLimitName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "counters": this.getCounters() ?
                this.getCounters().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return LimitLimitModel;
}());
exports.default = LimitLimitModel;
//# sourceMappingURL=LimitLimitModel.js.map