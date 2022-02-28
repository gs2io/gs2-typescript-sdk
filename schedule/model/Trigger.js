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
var grnFormat = "grn:gs2:{region}:{ownerId}:schedule:{namespaceName}:user:{userId}:trigger:{triggerName}";
var Trigger = /** @class */ (function () {
    function Trigger() {
        this.triggerId = null;
        this.name = null;
        this.userId = null;
        this.createdAt = null;
        this.expiresAt = null;
    }
    Trigger.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{triggerName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Trigger.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{triggerName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Trigger.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{triggerName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Trigger.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{triggerName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Trigger.getTriggerName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{triggerName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Trigger.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getTriggerName(grn) == null || this.getTriggerName(grn) === '') {
            return false;
        }
        return true;
    };
    Trigger.createGrn = function (region, ownerId, namespaceName, userId, triggerName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{triggerName}', triggerName !== null && triggerName !== void 0 ? triggerName : '');
    };
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