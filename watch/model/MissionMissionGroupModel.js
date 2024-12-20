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
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:mission:namespace:{namespaceName}:missionGroupModel:{missionGroupName}";
var MissionMissionGroupModel = /** @class */ (function () {
    function MissionMissionGroupModel() {
        this.missionGroupModelId = null;
        this.missionGroupName = null;
        this.statistics = null;
        this.distributions = null;
    }
    MissionMissionGroupModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionGroupModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionGroupModel.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionGroupModel.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionGroupModel.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionGroupModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{missionGroupName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionGroupModel.getMissionGroupName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionGroupModel.isValid = function (grn) {
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
        if (this.getMissionGroupName(grn) == null || this.getMissionGroupName(grn) === '') {
            return false;
        }
        return true;
    };
    MissionMissionGroupModel.createGrn = function (region, ownerId, year, month, day, namespaceName, missionGroupName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{missionGroupName}', missionGroupName !== null && missionGroupName !== void 0 ? missionGroupName : '');
    };
    MissionMissionGroupModel.prototype.getMissionGroupModelId = function () {
        return this.missionGroupModelId;
    };
    MissionMissionGroupModel.prototype.setMissionGroupModelId = function (missionGroupModelId) {
        this.missionGroupModelId = missionGroupModelId;
        return this;
    };
    MissionMissionGroupModel.prototype.withMissionGroupModelId = function (missionGroupModelId) {
        this.missionGroupModelId = missionGroupModelId;
        return this;
    };
    MissionMissionGroupModel.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    MissionMissionGroupModel.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    MissionMissionGroupModel.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    MissionMissionGroupModel.prototype.getStatistics = function () {
        return this.statistics;
    };
    MissionMissionGroupModel.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MissionMissionGroupModel.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MissionMissionGroupModel.prototype.getDistributions = function () {
        return this.distributions;
    };
    MissionMissionGroupModel.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    MissionMissionGroupModel.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    MissionMissionGroupModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionMissionGroupModel()
            .withMissionGroupModelId(data["missionGroupModelId"])
            .withMissionGroupName(data["missionGroupName"])
            .withStatistics(Gs2Watch.MissionMissionGroupModelStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.MissionMissionGroupModelDistributions.fromDict(data["distributions"]));
    };
    MissionMissionGroupModel.prototype.toDict = function () {
        var _a, _b;
        return {
            "missionGroupModelId": this.getMissionGroupModelId(),
            "missionGroupName": this.getMissionGroupName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return MissionMissionGroupModel;
}());
exports.default = MissionMissionGroupModel;
//# sourceMappingURL=MissionMissionGroupModel.js.map