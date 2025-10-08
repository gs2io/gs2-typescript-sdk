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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:exchange:namespace:{namespaceName}:rateModel:{rateName}";
var ExchangeRateModel = /** @class */ (function () {
    function ExchangeRateModel() {
        this.rateModelId = null;
        this.rateName = null;
        this.statistics = null;
        this.distributions = null;
    }
    ExchangeRateModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExchangeRateModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExchangeRateModel.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExchangeRateModel.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExchangeRateModel.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExchangeRateModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExchangeRateModel.getRateName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ExchangeRateModel.isValid = function (grn) {
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
        if (this.getRateName(grn) == null || this.getRateName(grn) === '') {
            return false;
        }
        return true;
    };
    ExchangeRateModel.createGrn = function (region, ownerId, year, month, day, namespaceName, rateName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rateName}', rateName !== null && rateName !== void 0 ? rateName : '');
    };
    ExchangeRateModel.prototype.getRateModelId = function () {
        return this.rateModelId;
    };
    ExchangeRateModel.prototype.setRateModelId = function (rateModelId) {
        this.rateModelId = rateModelId;
        return this;
    };
    ExchangeRateModel.prototype.withRateModelId = function (rateModelId) {
        this.rateModelId = rateModelId;
        return this;
    };
    ExchangeRateModel.prototype.getRateName = function () {
        return this.rateName;
    };
    ExchangeRateModel.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    ExchangeRateModel.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    ExchangeRateModel.prototype.getStatistics = function () {
        return this.statistics;
    };
    ExchangeRateModel.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ExchangeRateModel.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ExchangeRateModel.prototype.getDistributions = function () {
        return this.distributions;
    };
    ExchangeRateModel.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ExchangeRateModel.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ExchangeRateModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeRateModel()
            .withRateModelId(data["rateModelId"])
            .withRateName(data["rateName"])
            .withStatistics(Gs2Watch.ExchangeRateModelStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.ExchangeRateModelDistributions.fromDict(data["distributions"]));
    };
    ExchangeRateModel.prototype.toDict = function () {
        var _a, _b;
        return {
            "rateModelId": this.getRateModelId(),
            "rateName": this.getRateName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return ExchangeRateModel;
}());
exports.default = ExchangeRateModel;
//# sourceMappingURL=ExchangeRateModel.js.map