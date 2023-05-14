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
var QuestQuestDurationSeconds_1 = tslib_1.__importDefault(require("./QuestQuestDurationSeconds"));
var QuestQuestStatistics = /** @class */ (function () {
    function QuestQuestStatistics() {
        this.count = null;
        this.clearRate = null;
        this.durationSeconds = null;
    }
    QuestQuestStatistics.prototype.getCount = function () {
        return this.count;
    };
    QuestQuestStatistics.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    QuestQuestStatistics.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    QuestQuestStatistics.prototype.getClearRate = function () {
        return this.clearRate;
    };
    QuestQuestStatistics.prototype.setClearRate = function (clearRate) {
        this.clearRate = clearRate;
        return this;
    };
    QuestQuestStatistics.prototype.withClearRate = function (clearRate) {
        this.clearRate = clearRate;
        return this;
    };
    QuestQuestStatistics.prototype.getDurationSeconds = function () {
        return this.durationSeconds;
    };
    QuestQuestStatistics.prototype.setDurationSeconds = function (durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    };
    QuestQuestStatistics.prototype.withDurationSeconds = function (durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    };
    QuestQuestStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestStatistics()
            .withCount(data["count"])
            .withClearRate(data["clearRate"])
            .withDurationSeconds(QuestQuestDurationSeconds_1.default.fromDict(data["durationSeconds"]));
    };
    QuestQuestStatistics.prototype.toDict = function () {
        var _a;
        return {
            "count": this.getCount(),
            "clearRate": this.getClearRate(),
            "durationSeconds": (_a = this.getDurationSeconds()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return QuestQuestStatistics;
}());
exports.default = QuestQuestStatistics;
//# sourceMappingURL=QuestQuestStatistics.js.map