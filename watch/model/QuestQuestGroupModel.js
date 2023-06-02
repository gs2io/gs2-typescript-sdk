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
var QuestQuestGroupModelStatistics_1 = tslib_1.__importDefault(require("./QuestQuestGroupModelStatistics"));
var QuestQuestGroupModelDistributions_1 = tslib_1.__importDefault(require("./QuestQuestGroupModelDistributions"));
var QuestQuestModel_1 = tslib_1.__importDefault(require("./QuestQuestModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:quest:namespace:{namespaceName}:questGroupModel:{questGroupName}";
var QuestQuestGroupModel = /** @class */ (function () {
    function QuestQuestGroupModel() {
        this.questGroupModelId = null;
        this.questGroupName = null;
        this.statistics = null;
        this.distributions = null;
        this.questModels = null;
    }
    QuestQuestGroupModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestGroupModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestGroupModel.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestGroupModel.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestGroupModel.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestGroupModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{questGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestGroupModel.getQuestGroupName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{questGroupName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestQuestGroupModel.isValid = function (grn) {
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
        return true;
    };
    QuestQuestGroupModel.createGrn = function (region, ownerId, year, month, day, namespaceName, questGroupName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{questGroupName}', questGroupName !== null && questGroupName !== void 0 ? questGroupName : '');
    };
    QuestQuestGroupModel.prototype.getQuestGroupModelId = function () {
        return this.questGroupModelId;
    };
    QuestQuestGroupModel.prototype.setQuestGroupModelId = function (questGroupModelId) {
        this.questGroupModelId = questGroupModelId;
        return this;
    };
    QuestQuestGroupModel.prototype.withQuestGroupModelId = function (questGroupModelId) {
        this.questGroupModelId = questGroupModelId;
        return this;
    };
    QuestQuestGroupModel.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    QuestQuestGroupModel.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    QuestQuestGroupModel.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    QuestQuestGroupModel.prototype.getStatistics = function () {
        return this.statistics;
    };
    QuestQuestGroupModel.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    QuestQuestGroupModel.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    QuestQuestGroupModel.prototype.getDistributions = function () {
        return this.distributions;
    };
    QuestQuestGroupModel.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    QuestQuestGroupModel.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    QuestQuestGroupModel.prototype.getQuestModels = function () {
        return this.questModels;
    };
    QuestQuestGroupModel.prototype.setQuestModels = function (questModels) {
        this.questModels = questModels;
        return this;
    };
    QuestQuestGroupModel.prototype.withQuestModels = function (questModels) {
        this.questModels = questModels;
        return this;
    };
    QuestQuestGroupModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestGroupModel()
            .withQuestGroupModelId(data["questGroupModelId"])
            .withQuestGroupName(data["questGroupName"])
            .withStatistics(QuestQuestGroupModelStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(QuestQuestGroupModelDistributions_1.default.fromDict(data["distributions"]))
            .withQuestModels(data.questModels ?
            data.questModels.map(function (item) {
                return QuestQuestModel_1.default.fromDict(item);
            }) : []);
    };
    QuestQuestGroupModel.prototype.toDict = function () {
        var _a, _b;
        return {
            "questGroupModelId": this.getQuestGroupModelId(),
            "questGroupName": this.getQuestGroupName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "questModels": this.getQuestModels() ?
                this.getQuestModels().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return QuestQuestGroupModel;
}());
exports.default = QuestQuestGroupModel;
//# sourceMappingURL=QuestQuestGroupModel.js.map