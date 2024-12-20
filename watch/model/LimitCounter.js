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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:limit:namespace:{namespaceName}:limitModel:{limitName}:counter:{counterName}";
var LimitCounter = /** @class */ (function () {
    function LimitCounter() {
        this.counterId = null;
        this.limitName = null;
        this.counterName = null;
        this.statistics = null;
        this.distributions = null;
    }
    LimitCounter.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitCounter.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitCounter.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitCounter.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitCounter.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitCounter.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitCounter.getLimitName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '(.*)')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitCounter.getCounterName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitCounter.isValid = function (grn) {
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
        if (this.getCounterName(grn) == null || this.getCounterName(grn) === '') {
            return false;
        }
        return true;
    };
    LimitCounter.createGrn = function (region, ownerId, year, month, day, namespaceName, limitName, counterName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{limitName}', limitName !== null && limitName !== void 0 ? limitName : '')
            .replace('{counterName}', counterName !== null && counterName !== void 0 ? counterName : '');
    };
    LimitCounter.prototype.getCounterId = function () {
        return this.counterId;
    };
    LimitCounter.prototype.setCounterId = function (counterId) {
        this.counterId = counterId;
        return this;
    };
    LimitCounter.prototype.withCounterId = function (counterId) {
        this.counterId = counterId;
        return this;
    };
    LimitCounter.prototype.getLimitName = function () {
        return this.limitName;
    };
    LimitCounter.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    LimitCounter.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    LimitCounter.prototype.getCounterName = function () {
        return this.counterName;
    };
    LimitCounter.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    LimitCounter.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    LimitCounter.prototype.getStatistics = function () {
        return this.statistics;
    };
    LimitCounter.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    LimitCounter.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    LimitCounter.prototype.getDistributions = function () {
        return this.distributions;
    };
    LimitCounter.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    LimitCounter.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    LimitCounter.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitCounter()
            .withCounterId(data["counterId"])
            .withLimitName(data["limitName"])
            .withCounterName(data["counterName"])
            .withStatistics(Gs2Watch.LimitCounterStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.LimitCounterDistributions.fromDict(data["distributions"]));
    };
    LimitCounter.prototype.toDict = function () {
        var _a, _b;
        return {
            "counterId": this.getCounterId(),
            "limitName": this.getLimitName(),
            "counterName": this.getCounterName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return LimitCounter;
}());
exports.default = LimitCounter;
//# sourceMappingURL=LimitCounter.js.map