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
var QuestQuestGroupModelQuestDistributionSegment = /** @class */ (function () {
    function QuestQuestGroupModelQuestDistributionSegment() {
        this.questName = null;
        this.count = null;
    }
    QuestQuestGroupModelQuestDistributionSegment.prototype.getQuestName = function () {
        return this.questName;
    };
    QuestQuestGroupModelQuestDistributionSegment.prototype.setQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    QuestQuestGroupModelQuestDistributionSegment.prototype.withQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    QuestQuestGroupModelQuestDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    QuestQuestGroupModelQuestDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    QuestQuestGroupModelQuestDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    QuestQuestGroupModelQuestDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestGroupModelQuestDistributionSegment()
            .withQuestName(data["questName"])
            .withCount(data["count"]);
    };
    QuestQuestGroupModelQuestDistributionSegment.prototype.toDict = function () {
        return {
            "questName": this.getQuestName(),
            "count": this.getCount(),
        };
    };
    return QuestQuestGroupModelQuestDistributionSegment;
}());
exports.default = QuestQuestGroupModelQuestDistributionSegment;
//# sourceMappingURL=QuestQuestGroupModelQuestDistributionSegment.js.map