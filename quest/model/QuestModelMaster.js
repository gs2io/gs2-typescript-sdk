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
var QuestModelMaster = /** @class */ (function () {
    function QuestModelMaster() {
        this.questModelId = null;
        this.questGroupName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.contents = null;
        this.challengePeriodEventId = null;
        this.consumeActions = null;
        this.failedAcquireActions = null;
        this.premiseQuestNames = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    QuestModelMaster.getRegion = function (grn) {
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
    QuestModelMaster.getOwnerId = function (grn) {
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
    QuestModelMaster.getNamespaceName = function (grn) {
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
    QuestModelMaster.getQuestGroupName = function (grn) {
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
    QuestModelMaster.getQuestName = function (grn) {
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
    QuestModelMaster.isValid = function (grn) {
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
    QuestModelMaster.createGrn = function (region, ownerId, namespaceName, questGroupName, questName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{questGroupName}', questGroupName !== null && questGroupName !== void 0 ? questGroupName : '')
            .replace('{questName}', questName !== null && questName !== void 0 ? questName : '');
    };
    QuestModelMaster.prototype.getQuestModelId = function () {
        return this.questModelId;
    };
    QuestModelMaster.prototype.setQuestModelId = function (questModelId) {
        this.questModelId = questModelId;
        return this;
    };
    QuestModelMaster.prototype.withQuestModelId = function (questModelId) {
        this.questModelId = questModelId;
        return this;
    };
    QuestModelMaster.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    QuestModelMaster.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    QuestModelMaster.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    QuestModelMaster.prototype.getName = function () {
        return this.name;
    };
    QuestModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    QuestModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    QuestModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    QuestModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    QuestModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    QuestModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    QuestModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    QuestModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    QuestModelMaster.prototype.getContents = function () {
        return this.contents;
    };
    QuestModelMaster.prototype.setContents = function (contents) {
        this.contents = contents;
        return this;
    };
    QuestModelMaster.prototype.withContents = function (contents) {
        this.contents = contents;
        return this;
    };
    QuestModelMaster.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    QuestModelMaster.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    QuestModelMaster.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    QuestModelMaster.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    QuestModelMaster.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    QuestModelMaster.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    QuestModelMaster.prototype.getFailedAcquireActions = function () {
        return this.failedAcquireActions;
    };
    QuestModelMaster.prototype.setFailedAcquireActions = function (failedAcquireActions) {
        this.failedAcquireActions = failedAcquireActions;
        return this;
    };
    QuestModelMaster.prototype.withFailedAcquireActions = function (failedAcquireActions) {
        this.failedAcquireActions = failedAcquireActions;
        return this;
    };
    QuestModelMaster.prototype.getPremiseQuestNames = function () {
        return this.premiseQuestNames;
    };
    QuestModelMaster.prototype.setPremiseQuestNames = function (premiseQuestNames) {
        this.premiseQuestNames = premiseQuestNames;
        return this;
    };
    QuestModelMaster.prototype.withPremiseQuestNames = function (premiseQuestNames) {
        this.premiseQuestNames = premiseQuestNames;
        return this;
    };
    QuestModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    QuestModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    QuestModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    QuestModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    QuestModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    QuestModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    QuestModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestModelMaster()
            .withQuestModelId(data["questModelId"])
            .withQuestGroupName(data["questGroupName"])
            .withName(data["name"])
            .withDescription(data["description"])
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
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    QuestModelMaster.prototype.toDict = function () {
        return {
            "questModelId": this.getQuestModelId(),
            "questGroupName": this.getQuestGroupName(),
            "name": this.getName(),
            "description": this.getDescription(),
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
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return QuestModelMaster;
}());
exports.default = QuestModelMaster;
//# sourceMappingURL=QuestModelMaster.js.map