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
var VerifyAction_1 = tslib_1.__importDefault(require("./VerifyAction"));
var CounterScopeModel = /** @class */ (function () {
    function CounterScopeModel() {
        this.scopeType = null;
        this.resetType = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
        this.conditionName = null;
        this.condition = null;
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
            .withCondition(VerifyAction_1.default.fromDict(data["condition"]));
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
        };
    };
    return CounterScopeModel;
}());
exports.default = CounterScopeModel;
//# sourceMappingURL=CounterScopeModel.js.map