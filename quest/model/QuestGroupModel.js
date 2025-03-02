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
var Gs2Quest = tslib_1.__importStar(require("../../quest/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}";
var QuestGroupModel = /** @class */ (function () {
    function QuestGroupModel() {
        this.questGroupModelId = null;
        this.name = null;
        this.metadata = null;
        this.quests = null;
        this.challengePeriodEventId = null;
    }
    QuestGroupModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestGroupModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestGroupModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{questGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestGroupModel.getQuestGroupName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestGroupModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getQuestGroupName(grn) == null || this.getQuestGroupName(grn) === '') {
            return false;
        }
        return true;
    };
    QuestGroupModel.createGrn = function (region, ownerId, namespaceName, questGroupName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{questGroupName}', questGroupName !== null && questGroupName !== void 0 ? questGroupName : '');
    };
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
                return Gs2Quest.QuestModel.fromDict(item);
            }) : null)
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
                }) : null,
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    };
    return QuestGroupModel;
}());
exports.default = QuestGroupModel;
//# sourceMappingURL=QuestGroupModel.js.map