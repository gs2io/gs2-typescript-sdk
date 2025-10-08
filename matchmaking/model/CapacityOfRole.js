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
var Gs2Matchmaking = tslib_1.__importStar(require("../../matchmaking/model"));
var CapacityOfRole = /** @class */ (function () {
    function CapacityOfRole() {
        this.roleName = null;
        this.roleAliases = null;
        this.capacity = null;
        this.participants = null;
    }
    CapacityOfRole.prototype.getRoleName = function () {
        return this.roleName;
    };
    CapacityOfRole.prototype.setRoleName = function (roleName) {
        this.roleName = roleName;
        return this;
    };
    CapacityOfRole.prototype.withRoleName = function (roleName) {
        this.roleName = roleName;
        return this;
    };
    CapacityOfRole.prototype.getRoleAliases = function () {
        return this.roleAliases;
    };
    CapacityOfRole.prototype.setRoleAliases = function (roleAliases) {
        this.roleAliases = roleAliases;
        return this;
    };
    CapacityOfRole.prototype.withRoleAliases = function (roleAliases) {
        this.roleAliases = roleAliases;
        return this;
    };
    CapacityOfRole.prototype.getCapacity = function () {
        return this.capacity;
    };
    CapacityOfRole.prototype.setCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    CapacityOfRole.prototype.withCapacity = function (capacity) {
        this.capacity = capacity;
        return this;
    };
    CapacityOfRole.prototype.getParticipants = function () {
        return this.participants;
    };
    CapacityOfRole.prototype.setParticipants = function (participants) {
        this.participants = participants;
        return this;
    };
    CapacityOfRole.prototype.withParticipants = function (participants) {
        this.participants = participants;
        return this;
    };
    CapacityOfRole.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CapacityOfRole()
            .withRoleName(data["roleName"])
            .withRoleAliases(data.roleAliases ?
            data.roleAliases.map(function (item) {
                return item;
            }) : null)
            .withCapacity(data["capacity"])
            .withParticipants(data.participants ?
            data.participants.map(function (item) {
                return Gs2Matchmaking.Player.fromDict(item);
            }) : null);
    };
    CapacityOfRole.prototype.toDict = function () {
        return {
            "roleName": this.getRoleName(),
            "roleAliases": this.getRoleAliases() ?
                this.getRoleAliases().map(function (item) {
                    return item;
                }) : null,
            "capacity": this.getCapacity(),
            "participants": this.getParticipants() ?
                this.getParticipants().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return CapacityOfRole;
}());
exports.default = CapacityOfRole;
//# sourceMappingURL=CapacityOfRole.js.map