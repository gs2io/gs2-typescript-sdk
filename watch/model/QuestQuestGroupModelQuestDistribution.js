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
var QuestQuestGroupModelQuestDistributionStatistics_1 = tslib_1.__importDefault(require("./QuestQuestGroupModelQuestDistributionStatistics"));
var QuestQuestGroupModelQuestDistributionSegment_1 = tslib_1.__importDefault(require("./QuestQuestGroupModelQuestDistributionSegment"));
var QuestQuestGroupModelQuestDistribution = /** @class */ (function () {
    function QuestQuestGroupModelQuestDistribution() {
        this.statistics = null;
        this.distribution = null;
    }
    QuestQuestGroupModelQuestDistribution.prototype.getStatistics = function () {
        return this.statistics;
    };
    QuestQuestGroupModelQuestDistribution.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    QuestQuestGroupModelQuestDistribution.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    QuestQuestGroupModelQuestDistribution.prototype.getDistribution = function () {
        return this.distribution;
    };
    QuestQuestGroupModelQuestDistribution.prototype.setDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    QuestQuestGroupModelQuestDistribution.prototype.withDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    QuestQuestGroupModelQuestDistribution.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestGroupModelQuestDistribution()
            .withStatistics(QuestQuestGroupModelQuestDistributionStatistics_1.default.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
            data.distribution.map(function (item) {
                return QuestQuestGroupModelQuestDistributionSegment_1.default.fromDict(item);
            }) : []);
    };
    QuestQuestGroupModelQuestDistribution.prototype.toDict = function () {
        var _a;
        return {
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return QuestQuestGroupModelQuestDistribution;
}());
exports.default = QuestQuestGroupModelQuestDistribution;
//# sourceMappingURL=QuestQuestGroupModelQuestDistribution.js.map