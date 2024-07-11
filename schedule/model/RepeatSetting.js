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
var RepeatSetting = /** @class */ (function () {
    function RepeatSetting() {
        this.repeatType = null;
        this.beginDayOfMonth = null;
        this.endDayOfMonth = null;
        this.beginDayOfWeek = null;
        this.endDayOfWeek = null;
        this.beginHour = null;
        this.endHour = null;
        this.anchorTimestamp = null;
        this.activeDays = null;
        this.inactiveDays = null;
    }
    RepeatSetting.prototype.getRepeatType = function () {
        return this.repeatType;
    };
    RepeatSetting.prototype.setRepeatType = function (repeatType) {
        this.repeatType = repeatType;
        return this;
    };
    RepeatSetting.prototype.withRepeatType = function (repeatType) {
        this.repeatType = repeatType;
        return this;
    };
    RepeatSetting.prototype.getBeginDayOfMonth = function () {
        return this.beginDayOfMonth;
    };
    RepeatSetting.prototype.setBeginDayOfMonth = function (beginDayOfMonth) {
        this.beginDayOfMonth = beginDayOfMonth;
        return this;
    };
    RepeatSetting.prototype.withBeginDayOfMonth = function (beginDayOfMonth) {
        this.beginDayOfMonth = beginDayOfMonth;
        return this;
    };
    RepeatSetting.prototype.getEndDayOfMonth = function () {
        return this.endDayOfMonth;
    };
    RepeatSetting.prototype.setEndDayOfMonth = function (endDayOfMonth) {
        this.endDayOfMonth = endDayOfMonth;
        return this;
    };
    RepeatSetting.prototype.withEndDayOfMonth = function (endDayOfMonth) {
        this.endDayOfMonth = endDayOfMonth;
        return this;
    };
    RepeatSetting.prototype.getBeginDayOfWeek = function () {
        return this.beginDayOfWeek;
    };
    RepeatSetting.prototype.setBeginDayOfWeek = function (beginDayOfWeek) {
        this.beginDayOfWeek = beginDayOfWeek;
        return this;
    };
    RepeatSetting.prototype.withBeginDayOfWeek = function (beginDayOfWeek) {
        this.beginDayOfWeek = beginDayOfWeek;
        return this;
    };
    RepeatSetting.prototype.getEndDayOfWeek = function () {
        return this.endDayOfWeek;
    };
    RepeatSetting.prototype.setEndDayOfWeek = function (endDayOfWeek) {
        this.endDayOfWeek = endDayOfWeek;
        return this;
    };
    RepeatSetting.prototype.withEndDayOfWeek = function (endDayOfWeek) {
        this.endDayOfWeek = endDayOfWeek;
        return this;
    };
    RepeatSetting.prototype.getBeginHour = function () {
        return this.beginHour;
    };
    RepeatSetting.prototype.setBeginHour = function (beginHour) {
        this.beginHour = beginHour;
        return this;
    };
    RepeatSetting.prototype.withBeginHour = function (beginHour) {
        this.beginHour = beginHour;
        return this;
    };
    RepeatSetting.prototype.getEndHour = function () {
        return this.endHour;
    };
    RepeatSetting.prototype.setEndHour = function (endHour) {
        this.endHour = endHour;
        return this;
    };
    RepeatSetting.prototype.withEndHour = function (endHour) {
        this.endHour = endHour;
        return this;
    };
    RepeatSetting.prototype.getAnchorTimestamp = function () {
        return this.anchorTimestamp;
    };
    RepeatSetting.prototype.setAnchorTimestamp = function (anchorTimestamp) {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    };
    RepeatSetting.prototype.withAnchorTimestamp = function (anchorTimestamp) {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    };
    RepeatSetting.prototype.getActiveDays = function () {
        return this.activeDays;
    };
    RepeatSetting.prototype.setActiveDays = function (activeDays) {
        this.activeDays = activeDays;
        return this;
    };
    RepeatSetting.prototype.withActiveDays = function (activeDays) {
        this.activeDays = activeDays;
        return this;
    };
    RepeatSetting.prototype.getInactiveDays = function () {
        return this.inactiveDays;
    };
    RepeatSetting.prototype.setInactiveDays = function (inactiveDays) {
        this.inactiveDays = inactiveDays;
        return this;
    };
    RepeatSetting.prototype.withInactiveDays = function (inactiveDays) {
        this.inactiveDays = inactiveDays;
        return this;
    };
    RepeatSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RepeatSetting()
            .withRepeatType(data["repeatType"])
            .withBeginDayOfMonth(data["beginDayOfMonth"])
            .withEndDayOfMonth(data["endDayOfMonth"])
            .withBeginDayOfWeek(data["beginDayOfWeek"])
            .withEndDayOfWeek(data["endDayOfWeek"])
            .withBeginHour(data["beginHour"])
            .withEndHour(data["endHour"])
            .withAnchorTimestamp(data["anchorTimestamp"])
            .withActiveDays(data["activeDays"])
            .withInactiveDays(data["inactiveDays"]);
    };
    RepeatSetting.prototype.toDict = function () {
        return {
            "repeatType": this.getRepeatType(),
            "beginDayOfMonth": this.getBeginDayOfMonth(),
            "endDayOfMonth": this.getEndDayOfMonth(),
            "beginDayOfWeek": this.getBeginDayOfWeek(),
            "endDayOfWeek": this.getEndDayOfWeek(),
            "beginHour": this.getBeginHour(),
            "endHour": this.getEndHour(),
            "anchorTimestamp": this.getAnchorTimestamp(),
            "activeDays": this.getActiveDays(),
            "inactiveDays": this.getInactiveDays(),
        };
    };
    return RepeatSetting;
}());
exports.default = RepeatSetting;
//# sourceMappingURL=RepeatSetting.js.map