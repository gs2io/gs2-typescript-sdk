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
var grnFormat = "grn:gs2:{region}:{ownerId}:quest:{namespaceName}:group:{questGroupName}";
var QuestGroupModelMaster = /** @class */ (function () {
    function QuestGroupModelMaster() {
        this.questGroupModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.challengePeriodEventId = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    QuestGroupModelMaster.getRegion = function (grn) {
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
    QuestGroupModelMaster.getOwnerId = function (grn) {
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
    QuestGroupModelMaster.getNamespaceName = function (grn) {
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
    QuestGroupModelMaster.getQuestGroupName = function (grn) {
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
    QuestGroupModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getQuestGroupName(grn) == null) {
            return false;
        }
        return true;
    };
    QuestGroupModelMaster.createGrn = function (region, ownerId, namespaceName, questGroupName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{questGroupName}', questGroupName !== null && questGroupName !== void 0 ? questGroupName : '');
    };
    QuestGroupModelMaster.prototype.getQuestGroupModelId = function () {
        return this.questGroupModelId;
    };
    QuestGroupModelMaster.prototype.setQuestGroupModelId = function (questGroupModelId) {
        this.questGroupModelId = questGroupModelId;
        return this;
    };
    QuestGroupModelMaster.prototype.withQuestGroupModelId = function (questGroupModelId) {
        this.questGroupModelId = questGroupModelId;
        return this;
    };
    QuestGroupModelMaster.prototype.getName = function () {
        return this.name;
    };
    QuestGroupModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    QuestGroupModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    QuestGroupModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    QuestGroupModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    QuestGroupModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    QuestGroupModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    QuestGroupModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    QuestGroupModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    QuestGroupModelMaster.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    QuestGroupModelMaster.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    QuestGroupModelMaster.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    QuestGroupModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    QuestGroupModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    QuestGroupModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    QuestGroupModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    QuestGroupModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    QuestGroupModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    QuestGroupModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestGroupModelMaster()
            .withQuestGroupModelId(data["questGroupModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    QuestGroupModelMaster.prototype.toDict = function () {
        return {
            "questGroupModelId": this.getQuestGroupModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return QuestGroupModelMaster;
}());
exports.default = QuestGroupModelMaster;
//# sourceMappingURL=QuestGroupModelMaster.js.map