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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:mission:namespace:{namespaceName}:missionGroupModel:{missionGroupName}:missionTaskModel:{missionTaskName}";
var MissionMissionTaskModel = /** @class */ (function () {
    function MissionMissionTaskModel() {
        this.missionTaskModelId = null;
        this.missionTaskName = null;
    }
    MissionMissionTaskModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionTaskModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionTaskModel.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionTaskModel.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionTaskModel.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionTaskModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionTaskModel.getMissionGroupName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '(.*)')
            .replace('{missionTaskName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionTaskModel.getMissionTaskName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{missionGroupName}', '.*')
            .replace('{missionTaskName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MissionMissionTaskModel.isValid = function (grn) {
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
        if (this.getMissionTaskName(grn) == null || this.getMissionTaskName(grn) === '') {
            return false;
        }
        return true;
    };
    MissionMissionTaskModel.createGrn = function (region, ownerId, year, month, day, namespaceName, missionGroupName, missionTaskName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{missionGroupName}', missionGroupName !== null && missionGroupName !== void 0 ? missionGroupName : '')
            .replace('{missionTaskName}', missionTaskName !== null && missionTaskName !== void 0 ? missionTaskName : '');
    };
    MissionMissionTaskModel.prototype.getMissionTaskModelId = function () {
        return this.missionTaskModelId;
    };
    MissionMissionTaskModel.prototype.setMissionTaskModelId = function (missionTaskModelId) {
        this.missionTaskModelId = missionTaskModelId;
        return this;
    };
    MissionMissionTaskModel.prototype.withMissionTaskModelId = function (missionTaskModelId) {
        this.missionTaskModelId = missionTaskModelId;
        return this;
    };
    MissionMissionTaskModel.prototype.getMissionTaskName = function () {
        return this.missionTaskName;
    };
    MissionMissionTaskModel.prototype.setMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    MissionMissionTaskModel.prototype.withMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    MissionMissionTaskModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionMissionTaskModel()
            .withMissionTaskModelId(data["missionTaskModelId"])
            .withMissionTaskName(data["missionTaskName"]);
    };
    MissionMissionTaskModel.prototype.toDict = function () {
        return {
            "missionTaskModelId": this.getMissionTaskModelId(),
            "missionTaskName": this.getMissionTaskName(),
        };
    };
    return MissionMissionTaskModel;
}());
exports.default = MissionMissionTaskModel;
//# sourceMappingURL=MissionMissionTaskModel.js.map