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
var WeeklyActiveUsers_1 = tslib_1.__importDefault(require("./WeeklyActiveUsers"));
var MonthlyActiveUsers_1 = tslib_1.__importDefault(require("./MonthlyActiveUsers"));
var ReturningUserRatio_1 = tslib_1.__importDefault(require("./ReturningUserRatio"));
var FirstWeekLoginDays_1 = tslib_1.__importDefault(require("./FirstWeekLoginDays"));
var SessionDuration_1 = tslib_1.__importDefault(require("./SessionDuration"));
var GeneralMetrics = /** @class */ (function () {
    function GeneralMetrics() {
        this.dau = null;
        this.wau = null;
        this.mau = null;
        this.churnRate = null;
        this.returningUserRatio = null;
        this.firstWeekLoginDays = null;
        this.sessionDuration = null;
    }
    GeneralMetrics.prototype.getDau = function () {
        return this.dau;
    };
    GeneralMetrics.prototype.setDau = function (dau) {
        this.dau = dau;
        return this;
    };
    GeneralMetrics.prototype.withDau = function (dau) {
        this.dau = dau;
        return this;
    };
    GeneralMetrics.prototype.getWau = function () {
        return this.wau;
    };
    GeneralMetrics.prototype.setWau = function (wau) {
        this.wau = wau;
        return this;
    };
    GeneralMetrics.prototype.withWau = function (wau) {
        this.wau = wau;
        return this;
    };
    GeneralMetrics.prototype.getMau = function () {
        return this.mau;
    };
    GeneralMetrics.prototype.setMau = function (mau) {
        this.mau = mau;
        return this;
    };
    GeneralMetrics.prototype.withMau = function (mau) {
        this.mau = mau;
        return this;
    };
    GeneralMetrics.prototype.getChurnRate = function () {
        return this.churnRate;
    };
    GeneralMetrics.prototype.setChurnRate = function (churnRate) {
        this.churnRate = churnRate;
        return this;
    };
    GeneralMetrics.prototype.withChurnRate = function (churnRate) {
        this.churnRate = churnRate;
        return this;
    };
    GeneralMetrics.prototype.getReturningUserRatio = function () {
        return this.returningUserRatio;
    };
    GeneralMetrics.prototype.setReturningUserRatio = function (returningUserRatio) {
        this.returningUserRatio = returningUserRatio;
        return this;
    };
    GeneralMetrics.prototype.withReturningUserRatio = function (returningUserRatio) {
        this.returningUserRatio = returningUserRatio;
        return this;
    };
    GeneralMetrics.prototype.getFirstWeekLoginDays = function () {
        return this.firstWeekLoginDays;
    };
    GeneralMetrics.prototype.setFirstWeekLoginDays = function (firstWeekLoginDays) {
        this.firstWeekLoginDays = firstWeekLoginDays;
        return this;
    };
    GeneralMetrics.prototype.withFirstWeekLoginDays = function (firstWeekLoginDays) {
        this.firstWeekLoginDays = firstWeekLoginDays;
        return this;
    };
    GeneralMetrics.prototype.getSessionDuration = function () {
        return this.sessionDuration;
    };
    GeneralMetrics.prototype.setSessionDuration = function (sessionDuration) {
        this.sessionDuration = sessionDuration;
        return this;
    };
    GeneralMetrics.prototype.withSessionDuration = function (sessionDuration) {
        this.sessionDuration = sessionDuration;
        return this;
    };
    GeneralMetrics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GeneralMetrics()
            .withDau(data["dau"])
            .withWau(WeeklyActiveUsers_1.default.fromDict(data["wau"]))
            .withMau(MonthlyActiveUsers_1.default.fromDict(data["mau"]))
            .withChurnRate(data["churnRate"])
            .withReturningUserRatio(ReturningUserRatio_1.default.fromDict(data["returningUserRatio"]))
            .withFirstWeekLoginDays(FirstWeekLoginDays_1.default.fromDict(data["firstWeekLoginDays"]))
            .withSessionDuration(SessionDuration_1.default.fromDict(data["sessionDuration"]));
    };
    GeneralMetrics.prototype.toDict = function () {
        var _a, _b, _c, _d, _e;
        return {
            "dau": this.getDau(),
            "wau": (_a = this.getWau()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "mau": (_b = this.getMau()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "churnRate": this.getChurnRate(),
            "returningUserRatio": (_c = this.getReturningUserRatio()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "firstWeekLoginDays": (_d = this.getFirstWeekLoginDays()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "sessionDuration": (_e = this.getSessionDuration()) === null || _e === void 0 ? void 0 : _e.toDict(),
        };
    };
    return GeneralMetrics;
}());
exports.default = GeneralMetrics;
//# sourceMappingURL=GeneralMetrics.js.map