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
var GeneralDauWauMauHistory = /** @class */ (function () {
    function GeneralDauWauMauHistory() {
        this.dau = null;
        this.wauLast7Days = null;
        this.wauTargetWeekSunday = null;
        this.wauTargetWeekMonday = null;
        this.mauLast30Days = null;
        this.mauTargetMonth = null;
    }
    GeneralDauWauMauHistory.prototype.getDau = function () {
        return this.dau;
    };
    GeneralDauWauMauHistory.prototype.setDau = function (dau) {
        this.dau = dau;
        return this;
    };
    GeneralDauWauMauHistory.prototype.withDau = function (dau) {
        this.dau = dau;
        return this;
    };
    GeneralDauWauMauHistory.prototype.getWauLast7Days = function () {
        return this.wauLast7Days;
    };
    GeneralDauWauMauHistory.prototype.setWauLast7Days = function (wauLast7Days) {
        this.wauLast7Days = wauLast7Days;
        return this;
    };
    GeneralDauWauMauHistory.prototype.withWauLast7Days = function (wauLast7Days) {
        this.wauLast7Days = wauLast7Days;
        return this;
    };
    GeneralDauWauMauHistory.prototype.getWauTargetWeekSunday = function () {
        return this.wauTargetWeekSunday;
    };
    GeneralDauWauMauHistory.prototype.setWauTargetWeekSunday = function (wauTargetWeekSunday) {
        this.wauTargetWeekSunday = wauTargetWeekSunday;
        return this;
    };
    GeneralDauWauMauHistory.prototype.withWauTargetWeekSunday = function (wauTargetWeekSunday) {
        this.wauTargetWeekSunday = wauTargetWeekSunday;
        return this;
    };
    GeneralDauWauMauHistory.prototype.getWauTargetWeekMonday = function () {
        return this.wauTargetWeekMonday;
    };
    GeneralDauWauMauHistory.prototype.setWauTargetWeekMonday = function (wauTargetWeekMonday) {
        this.wauTargetWeekMonday = wauTargetWeekMonday;
        return this;
    };
    GeneralDauWauMauHistory.prototype.withWauTargetWeekMonday = function (wauTargetWeekMonday) {
        this.wauTargetWeekMonday = wauTargetWeekMonday;
        return this;
    };
    GeneralDauWauMauHistory.prototype.getMauLast30Days = function () {
        return this.mauLast30Days;
    };
    GeneralDauWauMauHistory.prototype.setMauLast30Days = function (mauLast30Days) {
        this.mauLast30Days = mauLast30Days;
        return this;
    };
    GeneralDauWauMauHistory.prototype.withMauLast30Days = function (mauLast30Days) {
        this.mauLast30Days = mauLast30Days;
        return this;
    };
    GeneralDauWauMauHistory.prototype.getMauTargetMonth = function () {
        return this.mauTargetMonth;
    };
    GeneralDauWauMauHistory.prototype.setMauTargetMonth = function (mauTargetMonth) {
        this.mauTargetMonth = mauTargetMonth;
        return this;
    };
    GeneralDauWauMauHistory.prototype.withMauTargetMonth = function (mauTargetMonth) {
        this.mauTargetMonth = mauTargetMonth;
        return this;
    };
    GeneralDauWauMauHistory.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GeneralDauWauMauHistory()
            .withDau(data["dau"])
            .withWauLast7Days(data["wauLast7Days"])
            .withWauTargetWeekSunday(data["wauTargetWeekSunday"])
            .withWauTargetWeekMonday(data["wauTargetWeekMonday"])
            .withMauLast30Days(data["mauLast30Days"])
            .withMauTargetMonth(data["mauTargetMonth"]);
    };
    GeneralDauWauMauHistory.prototype.toDict = function () {
        return {
            "dau": this.getDau(),
            "wauLast7Days": this.getWauLast7Days(),
            "wauTargetWeekSunday": this.getWauTargetWeekSunday(),
            "wauTargetWeekMonday": this.getWauTargetWeekMonday(),
            "mauLast30Days": this.getMauLast30Days(),
            "mauTargetMonth": this.getMauTargetMonth(),
        };
    };
    return GeneralDauWauMauHistory;
}());
exports.default = GeneralDauWauMauHistory;
//# sourceMappingURL=GeneralDauWauMauHistory.js.map