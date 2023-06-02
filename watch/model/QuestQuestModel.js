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
var QuestQuestModelStatistics_1 = tslib_1.__importDefault(require("./QuestQuestModelStatistics"));
var QuestQuestModelDistributions_1 = tslib_1.__importDefault(require("./QuestQuestModelDistributions"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:quest:namespace:{namespaceName}:questGroupModel:{questGroupName}:questModel:{questName}";
var QuestQuestModel = /** @class */ (function () {
    function QuestQuestModel() {
        this.questModelId = null;
        this.questName = null;
        this.statistics = null;
        this.distributions = null;
    }
    QuestQuestModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestModel.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestModel.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestModel.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestModel.getQuestGroupName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '(.*)')
            .replace('{questName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestModel.getQuestName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*')
            .replace('{questName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
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
    QuestQuestModel.createGrn = function (region, ownerId, year, month, day, namespaceName, questGroupName, questName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{questGroupName}', questGroupName !== null && questGroupName !== void 0 ? questGroupName : '')
            .replace('{questName}', questName !== null && questName !== void 0 ? questName : '');
    };
    QuestQuestModel.prototype.getQuestModelId = function () {
        return this.questModelId;
    };
    QuestQuestModel.prototype.setQuestModelId = function (questModelId) {
        this.questModelId = questModelId;
        return this;
    };
    QuestQuestModel.prototype.withQuestModelId = function (questModelId) {
        this.questModelId = questModelId;
        return this;
    };
    QuestQuestModel.prototype.getQuestName = function () {
        return this.questName;
    };
    QuestQuestModel.prototype.setQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    QuestQuestModel.prototype.withQuestName = function (questName) {
        this.questName = questName;
        return this;
    };
    QuestQuestModel.prototype.getStatistics = function () {
        return this.statistics;
    };
    QuestQuestModel.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    QuestQuestModel.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    QuestQuestModel.prototype.getDistributions = function () {
        return this.distributions;
    };
    QuestQuestModel.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    QuestQuestModel.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    QuestQuestModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestModel()
            .withQuestModelId(data["questModelId"])
            .withQuestName(data["questName"])
            .withStatistics(QuestQuestModelStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(QuestQuestModelDistributions_1.default.fromDict(data["distributions"]));
    };
    QuestQuestModel.prototype.toDict = function () {
        var _a, _b;
        return {
            "questModelId": this.getQuestModelId(),
            "questName": this.getQuestName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return QuestQuestModel;
}());
exports.default = QuestQuestModel;
//# sourceMappingURL=QuestQuestModel.js.map