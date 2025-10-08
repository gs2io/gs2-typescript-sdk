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
var MissionMissionGroupModelReceiveDistributionSegment = /** @class */ (function () {
    function MissionMissionGroupModelReceiveDistributionSegment() {
        this.missionTaskName = null;
        this.count = null;
    }
    MissionMissionGroupModelReceiveDistributionSegment.prototype.getMissionTaskName = function () {
        return this.missionTaskName;
    };
    MissionMissionGroupModelReceiveDistributionSegment.prototype.setMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    MissionMissionGroupModelReceiveDistributionSegment.prototype.withMissionTaskName = function (missionTaskName) {
        this.missionTaskName = missionTaskName;
        return this;
    };
    MissionMissionGroupModelReceiveDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    MissionMissionGroupModelReceiveDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MissionMissionGroupModelReceiveDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MissionMissionGroupModelReceiveDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionMissionGroupModelReceiveDistributionSegment()
            .withMissionTaskName(data["missionTaskName"])
            .withCount(data["count"]);
    };
    MissionMissionGroupModelReceiveDistributionSegment.prototype.toDict = function () {
        return {
            "missionTaskName": this.getMissionTaskName(),
            "count": this.getCount(),
        };
    };
    return MissionMissionGroupModelReceiveDistributionSegment;
}());
exports.default = MissionMissionGroupModelReceiveDistributionSegment;
//# sourceMappingURL=MissionMissionGroupModelReceiveDistributionSegment.js.map