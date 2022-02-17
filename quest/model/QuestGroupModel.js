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
var QuestModel_1 = (0, tslib_1.__importDefault)(require("./QuestModel"));
var QuestGroupModel = /** @class */ (function () {
    function QuestGroupModel() {
        this.questGroupModelId = null;
        this.name = null;
        this.metadata = null;
        this.quests = null;
        this.challengePeriodEventId = null;
    }
    QuestGroupModel.prototype.getQuestGroupModelId = function () {
        return this.questGroupModelId;
    };
    QuestGroupModel.prototype.setQuestGroupModelId = function (questGroupModelId) {
        this.questGroupModelId = questGroupModelId;
        return this;
    };
    QuestGroupModel.prototype.withQuestGroupModelId = function (questGroupModelId) {
        this.questGroupModelId = questGroupModelId;
        return this;
    };
    QuestGroupModel.prototype.getName = function () {
        return this.name;
    };
    QuestGroupModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    QuestGroupModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    QuestGroupModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    QuestGroupModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    QuestGroupModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    QuestGroupModel.prototype.getQuests = function () {
        return this.quests;
    };
    QuestGroupModel.prototype.setQuests = function (quests) {
        this.quests = quests;
        return this;
    };
    QuestGroupModel.prototype.withQuests = function (quests) {
        this.quests = quests;
        return this;
    };
    QuestGroupModel.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    QuestGroupModel.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    QuestGroupModel.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    QuestGroupModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestGroupModel()
            .withQuestGroupModelId(data["questGroupModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withQuests(data.quests ?
            data.quests.map(function (item) {
                return QuestModel_1.default.fromDict(item);
            }) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    };
    QuestGroupModel.prototype.toDict = function () {
        return {
            "questGroupModelId": this.getQuestGroupModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "quests": this.getQuests() ?
                this.getQuests().map(function (item) {
                    return item.toDict();
                }) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    };
    return QuestGroupModel;
}());
exports.default = QuestGroupModel;
//# sourceMappingURL=QuestGroupModel.js.map