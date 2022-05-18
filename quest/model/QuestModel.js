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
var AcquireAction_1 = tslib_1.__importDefault(require("./AcquireAction"));
var Contents_1 = tslib_1.__importDefault(require("./Contents"));
var ConsumeAction_1 = tslib_1.__importDefault(require("./ConsumeAction"));
var grnFormat = "grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}:quest:{questName}";
var QuestModel = /** @class */ (function () {
    function QuestModel() {
        this.questModelId = null;
        this.name = null;
        this.metadata = null;
        this.contents = null;
        this.challengePeriodEventId = null;
        this.consumeActions = null;
        this.failedAcquireActions = null;
        this.premiseQuestNames = null;
    }
    QuestModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestModel.getQuestGroupName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '(.*)')
            .replace('{questName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestModel.getQuestName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestModel.isValid = function (grn) {
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
        if (this.getQuestName(grn) == null || this.getQuestName(grn) === '') {
            return false;
        }
        return true;
    };
    QuestModel.createGrn = function (region, ownerId, namespaceName, questGroupName, questName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{questGroupName}', questGroupName !== null && questGroupName !== void 0 ? questGroupName : '')
            .replace('{questName}', questName !== null && questName !== void 0 ? questName : '');
    };
    QuestModel.prototype.getQuestModelId = function () {
        return this.questModelId;
    };
    QuestModel.prototype.setQuestModelId = function (questModelId) {
        this.questModelId = questModelId;
        return this;
    };
    QuestModel.prototype.withQuestModelId = function (questModelId) {
        this.questModelId = questModelId;
        return this;
    };
    QuestModel.prototype.getName = function () {
        return this.name;
    };
    QuestModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    QuestModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    QuestModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    QuestModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    QuestModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    QuestModel.prototype.getContents = function () {
        return this.contents;
    };
    QuestModel.prototype.setContents = function (contents) {
        this.contents = contents;
        return this;
    };
    QuestModel.prototype.withContents = function (contents) {
        this.contents = contents;
        return this;
    };
    QuestModel.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    QuestModel.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    QuestModel.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    QuestModel.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    QuestModel.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    QuestModel.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    QuestModel.prototype.getFailedAcquireActions = function () {
        return this.failedAcquireActions;
    };
    QuestModel.prototype.setFailedAcquireActions = function (failedAcquireActions) {
        this.failedAcquireActions = failedAcquireActions;
        return this;
    };
    QuestModel.prototype.withFailedAcquireActions = function (failedAcquireActions) {
        this.failedAcquireActions = failedAcquireActions;
        return this;
    };
    QuestModel.prototype.getPremiseQuestNames = function () {
        return this.premiseQuestNames;
    };
    QuestModel.prototype.setPremiseQuestNames = function (premiseQuestNames) {
        this.premiseQuestNames = premiseQuestNames;
        return this;
    };
    QuestModel.prototype.withPremiseQuestNames = function (premiseQuestNames) {
        this.premiseQuestNames = premiseQuestNames;
        return this;
    };
    QuestModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestModel()
            .withQuestModelId(data["questModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withContents(data.contents ?
            data.contents.map(function (item) {
                return Contents_1.default.fromDict(item);
            }) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return ConsumeAction_1.default.fromDict(item);
            }) : [])
            .withFailedAcquireActions(data.failedAcquireActions ?
            data.failedAcquireActions.map(function (item) {
                return AcquireAction_1.default.fromDict(item);
            }) : [])
            .withPremiseQuestNames(data.premiseQuestNames ?
            data.premiseQuestNames.map(function (item) {
                return item;
            }) : []);
    };
    QuestModel.prototype.toDict = function () {
        return {
            "questModelId": this.getQuestModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "contents": this.getContents() ?
                this.getContents().map(function (item) {
                    return item.toDict();
                }) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "failedAcquireActions": this.getFailedAcquireActions() ?
                this.getFailedAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "premiseQuestNames": this.getPremiseQuestNames() ?
                this.getPremiseQuestNames().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return QuestModel;
}());
exports.default = QuestModel;
//# sourceMappingURL=QuestModel.js.map