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
var MissionMissionGroupModelReceiveDistribution_1 = tslib_1.__importDefault(require("./MissionMissionGroupModelReceiveDistribution"));
var MissionMissionGroupModelDistributions = /** @class */ (function () {
    function MissionMissionGroupModelDistributions() {
        this.receive = null;
    }
    MissionMissionGroupModelDistributions.prototype.getReceive = function () {
        return this.receive;
    };
    MissionMissionGroupModelDistributions.prototype.setReceive = function (receive) {
        this.receive = receive;
        return this;
    };
    MissionMissionGroupModelDistributions.prototype.withReceive = function (receive) {
        this.receive = receive;
        return this;
    };
    MissionMissionGroupModelDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionMissionGroupModelDistributions()
            .withReceive(MissionMissionGroupModelReceiveDistribution_1.default.fromDict(data["receive"]));
    };
    MissionMissionGroupModelDistributions.prototype.toDict = function () {
        var _a;
        return {
            "receive": (_a = this.getReceive()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return MissionMissionGroupModelDistributions;
}());
exports.default = MissionMissionGroupModelDistributions;
//# sourceMappingURL=MissionMissionGroupModelDistributions.js.map