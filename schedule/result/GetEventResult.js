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
var Gs2Schedule = tslib_1.__importStar(require("../model"));
var GetEventResult = /** @class */ (function () {
    function GetEventResult() {
        this.item = null;
        this.inSchedule = null;
        this.scheduleStartAt = null;
        this.scheduleEndAt = null;
        this.repeatSchedule = null;
    }
    GetEventResult.prototype.getItem = function () {
        return this.item;
    };
    GetEventResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetEventResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetEventResult.prototype.getInSchedule = function () {
        return this.inSchedule;
    };
    GetEventResult.prototype.setInSchedule = function (inSchedule) {
        this.inSchedule = inSchedule;
        return this;
    };
    GetEventResult.prototype.withInSchedule = function (inSchedule) {
        this.inSchedule = inSchedule;
        return this;
    };
    GetEventResult.prototype.getScheduleStartAt = function () {
        return this.scheduleStartAt;
    };
    GetEventResult.prototype.setScheduleStartAt = function (scheduleStartAt) {
        this.scheduleStartAt = scheduleStartAt;
        return this;
    };
    GetEventResult.prototype.withScheduleStartAt = function (scheduleStartAt) {
        this.scheduleStartAt = scheduleStartAt;
        return this;
    };
    GetEventResult.prototype.getScheduleEndAt = function () {
        return this.scheduleEndAt;
    };
    GetEventResult.prototype.setScheduleEndAt = function (scheduleEndAt) {
        this.scheduleEndAt = scheduleEndAt;
        return this;
    };
    GetEventResult.prototype.withScheduleEndAt = function (scheduleEndAt) {
        this.scheduleEndAt = scheduleEndAt;
        return this;
    };
    GetEventResult.prototype.getRepeatSchedule = function () {
        return this.repeatSchedule;
    };
    GetEventResult.prototype.setRepeatSchedule = function (repeatSchedule) {
        this.repeatSchedule = repeatSchedule;
        return this;
    };
    GetEventResult.prototype.withRepeatSchedule = function (repeatSchedule) {
        this.repeatSchedule = repeatSchedule;
        return this;
    };
    GetEventResult.fromDict = function (data) {
        return new GetEventResult()
            .withItem(Gs2Schedule.Event.fromDict(data["item"]))
            .withInSchedule(data["inSchedule"])
            .withScheduleStartAt(data["scheduleStartAt"])
            .withScheduleEndAt(data["scheduleEndAt"])
            .withRepeatSchedule(Gs2Schedule.RepeatSchedule.fromDict(data["repeatSchedule"]));
    };
    GetEventResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "inSchedule": this.getInSchedule(),
            "scheduleStartAt": this.getScheduleStartAt(),
            "scheduleEndAt": this.getScheduleEndAt(),
            "repeatSchedule": (_b = this.getRepeatSchedule()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return GetEventResult;
}());
exports.default = GetEventResult;
//# sourceMappingURL=GetEventResult.js.map