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
var MatchmakingDurationSeconds_1 = tslib_1.__importDefault(require("./MatchmakingDurationSeconds"));
var MatchmakingRole = /** @class */ (function () {
    function MatchmakingRole() {
        this.roleName = null;
        this.successful = null;
        this.unsuccessful = null;
        this.successfulRate = null;
        this.durationSeconds = null;
    }
    MatchmakingRole.prototype.getRoleName = function () {
        return this.roleName;
    };
    MatchmakingRole.prototype.setRoleName = function (roleName) {
        this.roleName = roleName;
        return this;
    };
    MatchmakingRole.prototype.withRoleName = function (roleName) {
        this.roleName = roleName;
        return this;
    };
    MatchmakingRole.prototype.getSuccessful = function () {
        return this.successful;
    };
    MatchmakingRole.prototype.setSuccessful = function (successful) {
        this.successful = successful;
        return this;
    };
    MatchmakingRole.prototype.withSuccessful = function (successful) {
        this.successful = successful;
        return this;
    };
    MatchmakingRole.prototype.getUnsuccessful = function () {
        return this.unsuccessful;
    };
    MatchmakingRole.prototype.setUnsuccessful = function (unsuccessful) {
        this.unsuccessful = unsuccessful;
        return this;
    };
    MatchmakingRole.prototype.withUnsuccessful = function (unsuccessful) {
        this.unsuccessful = unsuccessful;
        return this;
    };
    MatchmakingRole.prototype.getSuccessfulRate = function () {
        return this.successfulRate;
    };
    MatchmakingRole.prototype.setSuccessfulRate = function (successfulRate) {
        this.successfulRate = successfulRate;
        return this;
    };
    MatchmakingRole.prototype.withSuccessfulRate = function (successfulRate) {
        this.successfulRate = successfulRate;
        return this;
    };
    MatchmakingRole.prototype.getDurationSeconds = function () {
        return this.durationSeconds;
    };
    MatchmakingRole.prototype.setDurationSeconds = function (durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    };
    MatchmakingRole.prototype.withDurationSeconds = function (durationSeconds) {
        this.durationSeconds = durationSeconds;
        return this;
    };
    MatchmakingRole.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MatchmakingRole()
            .withRoleName(data["roleName"])
            .withSuccessful(data["successful"])
            .withUnsuccessful(data["unsuccessful"])
            .withSuccessfulRate(data["successfulRate"])
            .withDurationSeconds(MatchmakingDurationSeconds_1.default.fromDict(data["durationSeconds"]));
    };
    MatchmakingRole.prototype.toDict = function () {
        var _a;
        return {
            "roleName": this.getRoleName(),
            "successful": this.getSuccessful(),
            "unsuccessful": this.getUnsuccessful(),
            "successfulRate": this.getSuccessfulRate(),
            "durationSeconds": (_a = this.getDurationSeconds()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return MatchmakingRole;
}());
exports.default = MatchmakingRole;
//# sourceMappingURL=MatchmakingRole.js.map