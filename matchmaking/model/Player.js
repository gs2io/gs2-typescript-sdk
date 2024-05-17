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
var Attribute_1 = tslib_1.__importDefault(require("./Attribute"));
var Player = /** @class */ (function () {
    function Player() {
        this.userId = null;
        this.attributes = null;
        this.roleName = null;
        this.denyUserIds = null;
        this.createdAt = null;
    }
    Player.prototype.getUserId = function () {
        return this.userId;
    };
    Player.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Player.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Player.prototype.getAttributes = function () {
        return this.attributes;
    };
    Player.prototype.setAttributes = function (attributes) {
        this.attributes = attributes;
        return this;
    };
    Player.prototype.withAttributes = function (attributes) {
        this.attributes = attributes;
        return this;
    };
    Player.prototype.getRoleName = function () {
        return this.roleName;
    };
    Player.prototype.setRoleName = function (roleName) {
        this.roleName = roleName;
        return this;
    };
    Player.prototype.withRoleName = function (roleName) {
        this.roleName = roleName;
        return this;
    };
    Player.prototype.getDenyUserIds = function () {
        return this.denyUserIds;
    };
    Player.prototype.setDenyUserIds = function (denyUserIds) {
        this.denyUserIds = denyUserIds;
        return this;
    };
    Player.prototype.withDenyUserIds = function (denyUserIds) {
        this.denyUserIds = denyUserIds;
        return this;
    };
    Player.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Player.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Player.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Player.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Player()
            .withUserId(data["userId"])
            .withAttributes(data.attributes ?
            data.attributes.map(function (item) {
                return Attribute_1.default.fromDict(item);
            }) : [])
            .withRoleName(data["roleName"])
            .withDenyUserIds(data.denyUserIds ?
            data.denyUserIds.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"]);
    };
    Player.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "attributes": this.getAttributes() ?
                this.getAttributes().map(function (item) {
                    return item.toDict();
                }) : [],
            "roleName": this.getRoleName(),
            "denyUserIds": this.getDenyUserIds() ?
                this.getDenyUserIds().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
        };
    };
    return Player;
}());
exports.default = Player;
//# sourceMappingURL=Player.js.map