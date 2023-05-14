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
var QuestQuest_1 = tslib_1.__importDefault(require("./QuestQuest"));
var QuestQuestGroup = /** @class */ (function () {
    function QuestQuestGroup() {
        this.name = null;
        this.quest = null;
    }
    QuestQuestGroup.prototype.getName = function () {
        return this.name;
    };
    QuestQuestGroup.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    QuestQuestGroup.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    QuestQuestGroup.prototype.getQuest = function () {
        return this.quest;
    };
    QuestQuestGroup.prototype.setQuest = function (quest) {
        this.quest = quest;
        return this;
    };
    QuestQuestGroup.prototype.withQuest = function (quest) {
        this.quest = quest;
        return this;
    };
    QuestQuestGroup.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestGroup()
            .withName(data["name"])
            .withQuest(data.quest ?
            data.quest.map(function (item) {
                return QuestQuest_1.default.fromDict(item);
            }) : []);
    };
    QuestQuestGroup.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "quest": this.getQuest() ?
                this.getQuest().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return QuestQuestGroup;
}());
exports.default = QuestQuestGroup;
//# sourceMappingURL=QuestQuestGroup.js.map