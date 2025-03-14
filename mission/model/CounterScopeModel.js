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
var Gs2Mission = tslib_1.__importStar(require("../../mission/model"));
var CounterScopeModel = /** @class */ (function () {
    function CounterScopeModel() {
        this.scopeType = null;
        this.resetType = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
        this.conditionName = null;
        this.condition = null;
        this.anchorTimestamp = null;
        this.days = null;
    }
    CounterScopeModel.prototype.getScopeType = function () {
        return this.scopeType;
    };
    CounterScopeModel.prototype.setScopeType = function (scopeType) {
        this.scopeType = scopeType;
        return this;
    };
    CounterScopeModel.prototype.withScopeType = function (scopeType) {
        this.scopeType = scopeType;
        return this;
    };
    CounterScopeModel.prototype.getResetType = function () {
        return this.resetType;
    };
    CounterScopeModel.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    CounterScopeModel.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    CounterScopeModel.prototype.getResetDayOfMonth = function () {
        return this.resetDayOfMonth;
    };
    CounterScopeModel.prototype.setResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    CounterScopeModel.prototype.withResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    CounterScopeModel.prototype.getResetDayOfWeek = function () {
        return this.resetDayOfWeek;
    };
    CounterScopeModel.prototype.setResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    CounterScopeModel.prototype.withResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    CounterScopeModel.prototype.getResetHour = function () {
        return this.resetHour;
    };
    CounterScopeModel.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    CounterScopeModel.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    CounterScopeModel.prototype.getConditionName = function () {
        return this.conditionName;
    };
    CounterScopeModel.prototype.setConditionName = function (conditionName) {
        this.conditionName = conditionName;
        return this;
    };
    CounterScopeModel.prototype.withConditionName = function (conditionName) {
        this.conditionName = conditionName;
        return this;
    };
    CounterScopeModel.prototype.getCondition = function () {
        return this.condition;
    };
    CounterScopeModel.prototype.setCondition = function (condition) {
        this.condition = condition;
        return this;
    };
    CounterScopeModel.prototype.withCondition = function (condition) {
        this.condition = condition;
        return this;
    };
    CounterScopeModel.prototype.getAnchorTimestamp = function () {
        return this.anchorTimestamp;
    };
    CounterScopeModel.prototype.setAnchorTimestamp = function (anchorTimestamp) {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    };
    CounterScopeModel.prototype.withAnchorTimestamp = function (anchorTimestamp) {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    };
    CounterScopeModel.prototype.getDays = function () {
        return this.days;
    };
    CounterScopeModel.prototype.setDays = function (days) {
        this.days = days;
        return this;
    };
    CounterScopeModel.prototype.withDays = function (days) {
        this.days = days;
        return this;
    };
    CounterScopeModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CounterScopeModel()
            .withScopeType(data["scopeType"])
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"])
            .withConditionName(data["conditionName"])
            .withCondition(Gs2Mission.VerifyAction.fromDict(data["condition"]))
            .withAnchorTimestamp(data["anchorTimestamp"])
            .withDays(data["days"]);
    };
    CounterScopeModel.prototype.toDict = function () {
        var _a;
        return {
            "scopeType": this.getScopeType(),
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
            "conditionName": this.getConditionName(),
            "condition": (_a = this.getCondition()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "anchorTimestamp": this.getAnchorTimestamp(),
            "days": this.getDays(),
        };
    };
    return CounterScopeModel;
}());
exports.default = CounterScopeModel;
//# sourceMappingURL=CounterScopeModel.js.map