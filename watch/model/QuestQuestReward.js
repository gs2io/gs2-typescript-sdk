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
var QuestQuestRewardStatistics_1 = tslib_1.__importDefault(require("./QuestQuestRewardStatistics"));
var QuestQuestReward = /** @class */ (function () {
    function QuestQuestReward() {
        this.action = null;
        this.request = null;
        this.count = null;
        this.statistics = null;
    }
    QuestQuestReward.prototype.getAction = function () {
        return this.action;
    };
    QuestQuestReward.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    QuestQuestReward.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    QuestQuestReward.prototype.getRequest = function () {
        return this.request;
    };
    QuestQuestReward.prototype.setRequest = function (request) {
        this.request = request;
        return this;
    };
    QuestQuestReward.prototype.withRequest = function (request) {
        this.request = request;
        return this;
    };
    QuestQuestReward.prototype.getCount = function () {
        return this.count;
    };
    QuestQuestReward.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    QuestQuestReward.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    QuestQuestReward.prototype.getStatistics = function () {
        return this.statistics;
    };
    QuestQuestReward.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    QuestQuestReward.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    QuestQuestReward.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestReward()
            .withAction(data["action"])
            .withRequest(data["request"])
            .withCount(data["count"])
            .withStatistics(QuestQuestRewardStatistics_1.default.fromDict(data["statistics"]));
    };
    QuestQuestReward.prototype.toDict = function () {
        var _a;
        return {
            "action": this.getAction(),
            "request": this.getRequest(),
            "count": this.getCount(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return QuestQuestReward;
}());
exports.default = QuestQuestReward;
//# sourceMappingURL=QuestQuestReward.js.map