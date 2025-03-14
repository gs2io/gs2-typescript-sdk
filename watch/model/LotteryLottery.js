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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:lottery:namespace:{namespaceName}:lottery:{lotteryName}";
var LotteryLottery = /** @class */ (function () {
    function LotteryLottery() {
        this.lotteryId = null;
        this.lotteryName = null;
        this.statistics = null;
        this.distributions = null;
    }
    LotteryLottery.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLottery.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLottery.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLottery.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLottery.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLottery.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLottery.getLotteryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLottery.isValid = function (grn) {
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
        if (this.getLotteryName(grn) == null || this.getLotteryName(grn) === '') {
            return false;
        }
        return true;
    };
    LotteryLottery.createGrn = function (region, ownerId, year, month, day, namespaceName, lotteryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{lotteryName}', lotteryName !== null && lotteryName !== void 0 ? lotteryName : '');
    };
    LotteryLottery.prototype.getLotteryId = function () {
        return this.lotteryId;
    };
    LotteryLottery.prototype.setLotteryId = function (lotteryId) {
        this.lotteryId = lotteryId;
        return this;
    };
    LotteryLottery.prototype.withLotteryId = function (lotteryId) {
        this.lotteryId = lotteryId;
        return this;
    };
    LotteryLottery.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    LotteryLottery.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    LotteryLottery.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    LotteryLottery.prototype.getStatistics = function () {
        return this.statistics;
    };
    LotteryLottery.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    LotteryLottery.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    LotteryLottery.prototype.getDistributions = function () {
        return this.distributions;
    };
    LotteryLottery.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    LotteryLottery.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    LotteryLottery.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryLottery()
            .withLotteryId(data["lotteryId"])
            .withLotteryName(data["lotteryName"])
            .withStatistics(Gs2Watch.LotteryLotteryStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.LotteryLotteryDistributions.fromDict(data["distributions"]));
    };
    LotteryLottery.prototype.toDict = function () {
        var _a, _b;
        return {
            "lotteryId": this.getLotteryId(),
            "lotteryName": this.getLotteryName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return LotteryLottery;
}());
exports.default = LotteryLottery;
//# sourceMappingURL=LotteryLottery.js.map