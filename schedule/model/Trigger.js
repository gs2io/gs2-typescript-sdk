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
var Trigger = /** @class */ (function () {
    function Trigger() {
        this.triggerId = null;
        this.name = null;
        this.userId = null;
        this.createdAt = null;
        this.expiresAt = null;
    }
    Trigger.prototype.getTriggerId = function () {
        return this.triggerId;
    };
    Trigger.prototype.setTriggerId = function (triggerId) {
        this.triggerId = triggerId;
        return this;
    };
    Trigger.prototype.withTriggerId = function (triggerId) {
        this.triggerId = triggerId;
        return this;
    };
    Trigger.prototype.getName = function () {
        return this.name;
    };
    Trigger.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Trigger.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Trigger.prototype.getUserId = function () {
        return this.userId;
    };
    Trigger.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Trigger.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Trigger.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Trigger.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Trigger.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Trigger.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    Trigger.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    Trigger.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    Trigger.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Trigger()
            .withTriggerId(data["triggerId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withCreatedAt(data["createdAt"])
            .withExpiresAt(data["expiresAt"]);
    };
    Trigger.prototype.toDict = function () {
        return {
            "triggerId": this.getTriggerId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "createdAt": this.getCreatedAt(),
            "expiresAt": this.getExpiresAt(),
        };
    };
    return Trigger;
}());
exports.default = Trigger;
//# sourceMappingURL=Trigger.js.map