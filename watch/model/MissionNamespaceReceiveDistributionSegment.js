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
var MissionNamespaceReceiveDistributionSegment = /** @class */ (function () {
    function MissionNamespaceReceiveDistributionSegment() {
        this.missionGroupName = null;
        this.count = null;
    }
    MissionNamespaceReceiveDistributionSegment.prototype.getMissionGroupName = function () {
        return this.missionGroupName;
    };
    MissionNamespaceReceiveDistributionSegment.prototype.setMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    MissionNamespaceReceiveDistributionSegment.prototype.withMissionGroupName = function (missionGroupName) {
        this.missionGroupName = missionGroupName;
        return this;
    };
    MissionNamespaceReceiveDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    MissionNamespaceReceiveDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MissionNamespaceReceiveDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MissionNamespaceReceiveDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionNamespaceReceiveDistributionSegment()
            .withMissionGroupName(data["missionGroupName"])
            .withCount(data["count"]);
    };
    MissionNamespaceReceiveDistributionSegment.prototype.toDict = function () {
        return {
            "missionGroupName": this.getMissionGroupName(),
            "count": this.getCount(),
        };
    };
    return MissionNamespaceReceiveDistributionSegment;
}());
exports.default = MissionNamespaceReceiveDistributionSegment;
//# sourceMappingURL=MissionNamespaceReceiveDistributionSegment.js.map