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
var QuestNamespaceQuestDistributionSegment = /** @class */ (function () {
    function QuestNamespaceQuestDistributionSegment() {
        this.questGroupName = null;
        this.count = null;
    }
    QuestNamespaceQuestDistributionSegment.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    QuestNamespaceQuestDistributionSegment.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    QuestNamespaceQuestDistributionSegment.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    QuestNamespaceQuestDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    QuestNamespaceQuestDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    QuestNamespaceQuestDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    QuestNamespaceQuestDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestNamespaceQuestDistributionSegment()
            .withQuestGroupName(data["questGroupName"])
            .withCount(data["count"]);
    };
    QuestNamespaceQuestDistributionSegment.prototype.toDict = function () {
        return {
            "questGroupName": this.getQuestGroupName(),
            "count": this.getCount(),
        };
    };
    return QuestNamespaceQuestDistributionSegment;
}());
exports.default = QuestNamespaceQuestDistributionSegment;
//# sourceMappingURL=QuestNamespaceQuestDistributionSegment.js.map