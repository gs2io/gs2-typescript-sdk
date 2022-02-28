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
var grnFormat = "grn:gs2:{region}:{ownerId}:stamina:{namespaceName}:user:{userId}:stamina:{staminaName}";
var Stamina = /** @class */ (function () {
    function Stamina() {
        this.staminaId = null;
        this.staminaName = null;
        this.userId = null;
        this.value = null;
        this.maxValue = null;
        this.recoverIntervalMinutes = null;
        this.recoverValue = null;
        this.overflowValue = null;
        this.nextRecoverAt = null;
        this.lastRecoveredAt = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Stamina.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Stamina.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Stamina.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Stamina.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{staminaName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Stamina.getStaminaName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{staminaName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Stamina.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getUserId(grn) == null) {
            return false;
        }
        if (this.getStaminaName(grn) == null) {
            return false;
        }
        return true;
    };
    Stamina.createGrn = function (region, ownerId, namespaceName, userId, staminaName) {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (userId == null || userId === '') {
            return null;
        }
        if (staminaName == null || staminaName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName)
            .replace('{userId}', userId)
            .replace('{staminaName}', staminaName);
    };
    Stamina.prototype.getStaminaId = function () {
        return this.staminaId;
    };
    Stamina.prototype.setStaminaId = function (staminaId) {
        this.staminaId = staminaId;
        return this;
    };
    Stamina.prototype.withStaminaId = function (staminaId) {
        this.staminaId = staminaId;
        return this;
    };
    Stamina.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    Stamina.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    Stamina.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    Stamina.prototype.getUserId = function () {
        return this.userId;
    };
    Stamina.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Stamina.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Stamina.prototype.getValue = function () {
        return this.value;
    };
    Stamina.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    Stamina.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    Stamina.prototype.getMaxValue = function () {
        return this.maxValue;
    };
    Stamina.prototype.setMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        return this;
    };
    Stamina.prototype.withMaxValue = function (maxValue) {
        this.maxValue = maxValue;
        return this;
    };
    Stamina.prototype.getRecoverIntervalMinutes = function () {
        return this.recoverIntervalMinutes;
    };
    Stamina.prototype.setRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    Stamina.prototype.withRecoverIntervalMinutes = function (recoverIntervalMinutes) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    };
    Stamina.prototype.getRecoverValue = function () {
        return this.recoverValue;
    };
    Stamina.prototype.setRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    Stamina.prototype.withRecoverValue = function (recoverValue) {
        this.recoverValue = recoverValue;
        return this;
    };
    Stamina.prototype.getOverflowValue = function () {
        return this.overflowValue;
    };
    Stamina.prototype.setOverflowValue = function (overflowValue) {
        this.overflowValue = overflowValue;
        return this;
    };
    Stamina.prototype.withOverflowValue = function (overflowValue) {
        this.overflowValue = overflowValue;
        return this;
    };
    Stamina.prototype.getNextRecoverAt = function () {
        return this.nextRecoverAt;
    };
    Stamina.prototype.setNextRecoverAt = function (nextRecoverAt) {
        this.nextRecoverAt = nextRecoverAt;
        return this;
    };
    Stamina.prototype.withNextRecoverAt = function (nextRecoverAt) {
        this.nextRecoverAt = nextRecoverAt;
        return this;
    };
    Stamina.prototype.getLastRecoveredAt = function () {
        return this.lastRecoveredAt;
    };
    Stamina.prototype.setLastRecoveredAt = function (lastRecoveredAt) {
        this.lastRecoveredAt = lastRecoveredAt;
        return this;
    };
    Stamina.prototype.withLastRecoveredAt = function (lastRecoveredAt) {
        this.lastRecoveredAt = lastRecoveredAt;
        return this;
    };
    Stamina.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Stamina.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Stamina.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Stamina.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Stamina.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Stamina.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Stamina.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Stamina()
            .withStaminaId(data["staminaId"])
            .withStaminaName(data["staminaName"])
            .withUserId(data["userId"])
            .withValue(data["value"])
            .withMaxValue(data["maxValue"])
            .withRecoverIntervalMinutes(data["recoverIntervalMinutes"])
            .withRecoverValue(data["recoverValue"])
            .withOverflowValue(data["overflowValue"])
            .withNextRecoverAt(data["nextRecoverAt"])
            .withLastRecoveredAt(data["lastRecoveredAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Stamina.prototype.toDict = function () {
        return {
            "staminaId": this.getStaminaId(),
            "staminaName": this.getStaminaName(),
            "userId": this.getUserId(),
            "value": this.getValue(),
            "maxValue": this.getMaxValue(),
            "recoverIntervalMinutes": this.getRecoverIntervalMinutes(),
            "recoverValue": this.getRecoverValue(),
            "overflowValue": this.getOverflowValue(),
            "nextRecoverAt": this.getNextRecoverAt(),
            "lastRecoveredAt": this.getLastRecoveredAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Stamina;
}());
exports.default = Stamina;
//# sourceMappingURL=Stamina.js.map