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
var CounterScopeModel = /** @class */ (function () {
    function CounterScopeModel() {
        this.resetType = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
    }
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
    CounterScopeModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CounterScopeModel()
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"]);
    };
    CounterScopeModel.prototype.toDict = function () {
        return {
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
        };
    };
    return CounterScopeModel;
}());
exports.default = CounterScopeModel;
//# sourceMappingURL=CounterScopeModel.js.map