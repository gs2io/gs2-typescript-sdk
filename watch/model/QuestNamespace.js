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
var QuestNamespaceStatistics_1 = tslib_1.__importDefault(require("./QuestNamespaceStatistics"));
var QuestNamespaceDistributions_1 = tslib_1.__importDefault(require("./QuestNamespaceDistributions"));
var QuestQuestGroupModel_1 = tslib_1.__importDefault(require("./QuestQuestGroupModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:quest:namespace:{namespaceName}";
var QuestNamespace = /** @class */ (function () {
    function QuestNamespace() {
        this.namespaceId = null;
        this.year = null;
        this.month = null;
        this.day = null;
        this.namespaceName = null;
        this.statistics = null;
        this.distributions = null;
        this.questGroupModels = null;
    }
    QuestNamespace.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestNamespace.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestNamespace.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestNamespace.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestNamespace.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestNamespace.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    QuestNamespace.isValid = function (grn) {
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
        return true;
    };
    QuestNamespace.createGrn = function (region, ownerId, year, month, day, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
    };
    QuestNamespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    QuestNamespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    QuestNamespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    QuestNamespace.prototype.getYear = function () {
        return this.year;
    };
    QuestNamespace.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    QuestNamespace.prototype.withYear = function (year) {
        this.year = year;
        return this;
    };
    QuestNamespace.prototype.getMonth = function () {
        return this.month;
    };
    QuestNamespace.prototype.setMonth = function (month) {
        this.month = month;
        return this;
    };
    QuestNamespace.prototype.withMonth = function (month) {
        this.month = month;
        return this;
    };
    QuestNamespace.prototype.getDay = function () {
        return this.day;
    };
    QuestNamespace.prototype.setDay = function (day) {
        this.day = day;
        return this;
    };
    QuestNamespace.prototype.withDay = function (day) {
        this.day = day;
        return this;
    };
    QuestNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    QuestNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QuestNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QuestNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    QuestNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    QuestNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    QuestNamespace.prototype.getDistributions = function () {
        return this.distributions;
    };
    QuestNamespace.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    QuestNamespace.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    QuestNamespace.prototype.getQuestGroupModels = function () {
        return this.questGroupModels;
    };
    QuestNamespace.prototype.setQuestGroupModels = function (questGroupModels) {
        this.questGroupModels = questGroupModels;
        return this;
    };
    QuestNamespace.prototype.withQuestGroupModels = function (questGroupModels) {
        this.questGroupModels = questGroupModels;
        return this;
    };
    QuestNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestNamespace()
            .withNamespaceId(data["namespaceId"])
            .withYear(data["year"])
            .withMonth(data["month"])
            .withDay(data["day"])
            .withNamespaceName(data["namespaceName"])
            .withStatistics(QuestNamespaceStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(QuestNamespaceDistributions_1.default.fromDict(data["distributions"]))
            .withQuestGroupModels(data.questGroupModels ?
            data.questGroupModels.map(function (item) {
                return QuestQuestGroupModel_1.default.fromDict(item);
            }) : []);
    };
    QuestNamespace.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceId": this.getNamespaceId(),
            "year": this.getYear(),
            "month": this.getMonth(),
            "day": this.getDay(),
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "questGroupModels": this.getQuestGroupModels() ?
                this.getQuestGroupModels().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return QuestNamespace;
}());
exports.default = QuestNamespace;
//# sourceMappingURL=QuestNamespace.js.map