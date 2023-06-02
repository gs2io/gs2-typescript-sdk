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
var MissionMissionGroupModelStatistics = /** @class */ (function () {
    function MissionMissionGroupModelStatistics() {
        this.receive = null;
    }
    MissionMissionGroupModelStatistics.prototype.getReceive = function () {
        return this.receive;
    };
    MissionMissionGroupModelStatistics.prototype.setReceive = function (receive) {
        this.receive = receive;
        return this;
    };
    MissionMissionGroupModelStatistics.prototype.withReceive = function (receive) {
        this.receive = receive;
        return this;
    };
    MissionMissionGroupModelStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionMissionGroupModelStatistics()
            .withReceive(data["receive"]);
    };
    MissionMissionGroupModelStatistics.prototype.toDict = function () {
        return {
            "receive": this.getReceive(),
        };
    };
    return MissionMissionGroupModelStatistics;
}());
exports.default = MissionMissionGroupModelStatistics;
//# sourceMappingURL=MissionMissionGroupModelStatistics.js.map