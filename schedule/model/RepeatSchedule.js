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
var RepeatSchedule = /** @class */ (function () {
    function RepeatSchedule() {
        this.repeatCount = null;
        this.currentRepeatStartAt = null;
        this.currentRepeatEndAt = null;
        this.lastRepeatEndAt = null;
        this.nextRepeatStartAt = null;
    }
    RepeatSchedule.prototype.getRepeatCount = function () {
        return this.repeatCount;
    };
    RepeatSchedule.prototype.setRepeatCount = function (repeatCount) {
        this.repeatCount = repeatCount;
        return this;
    };
    RepeatSchedule.prototype.withRepeatCount = function (repeatCount) {
        this.repeatCount = repeatCount;
        return this;
    };
    RepeatSchedule.prototype.getCurrentRepeatStartAt = function () {
        return this.currentRepeatStartAt;
    };
    RepeatSchedule.prototype.setCurrentRepeatStartAt = function (currentRepeatStartAt) {
        this.currentRepeatStartAt = currentRepeatStartAt;
        return this;
    };
    RepeatSchedule.prototype.withCurrentRepeatStartAt = function (currentRepeatStartAt) {
        this.currentRepeatStartAt = currentRepeatStartAt;
        return this;
    };
    RepeatSchedule.prototype.getCurrentRepeatEndAt = function () {
        return this.currentRepeatEndAt;
    };
    RepeatSchedule.prototype.setCurrentRepeatEndAt = function (currentRepeatEndAt) {
        this.currentRepeatEndAt = currentRepeatEndAt;
        return this;
    };
    RepeatSchedule.prototype.withCurrentRepeatEndAt = function (currentRepeatEndAt) {
        this.currentRepeatEndAt = currentRepeatEndAt;
        return this;
    };
    RepeatSchedule.prototype.getLastRepeatEndAt = function () {
        return this.lastRepeatEndAt;
    };
    RepeatSchedule.prototype.setLastRepeatEndAt = function (lastRepeatEndAt) {
        this.lastRepeatEndAt = lastRepeatEndAt;
        return this;
    };
    RepeatSchedule.prototype.withLastRepeatEndAt = function (lastRepeatEndAt) {
        this.lastRepeatEndAt = lastRepeatEndAt;
        return this;
    };
    RepeatSchedule.prototype.getNextRepeatStartAt = function () {
        return this.nextRepeatStartAt;
    };
    RepeatSchedule.prototype.setNextRepeatStartAt = function (nextRepeatStartAt) {
        this.nextRepeatStartAt = nextRepeatStartAt;
        return this;
    };
    RepeatSchedule.prototype.withNextRepeatStartAt = function (nextRepeatStartAt) {
        this.nextRepeatStartAt = nextRepeatStartAt;
        return this;
    };
    RepeatSchedule.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RepeatSchedule()
            .withRepeatCount(data["repeatCount"])
            .withCurrentRepeatStartAt(data["currentRepeatStartAt"])
            .withCurrentRepeatEndAt(data["currentRepeatEndAt"])
            .withLastRepeatEndAt(data["lastRepeatEndAt"])
            .withNextRepeatStartAt(data["nextRepeatStartAt"]);
    };
    RepeatSchedule.prototype.toDict = function () {
        return {
            "repeatCount": this.getRepeatCount(),
            "currentRepeatStartAt": this.getCurrentRepeatStartAt(),
            "currentRepeatEndAt": this.getCurrentRepeatEndAt(),
            "lastRepeatEndAt": this.getLastRepeatEndAt(),
            "nextRepeatStartAt": this.getNextRepeatStartAt(),
        };
    };
    return RepeatSchedule;
}());
exports.default = RepeatSchedule;
//# sourceMappingURL=RepeatSchedule.js.map