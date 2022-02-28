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
var ScriptSetting_1 = (0, tslib_1.__importDefault)(require("./ScriptSetting"));
var NotificationSetting_1 = (0, tslib_1.__importDefault)(require("./NotificationSetting"));
var LogSetting_1 = (0, tslib_1.__importDefault)(require("./LogSetting"));
var grnFormat = "grn:gs2:{region}:{ownerId}:mission:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.missionCompleteScript = null;
        this.counterIncrementScript = null;
        this.receiveRewardsScript = null;
        this.queueNamespaceId = null;
        this.keyId = null;
        this.completeNotification = null;
        this.logSetting = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Namespace.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Namespace.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Namespace.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Namespace.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        return true;
    };
    Namespace.createGrn = function (region, ownerId, namespaceName) {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName);
    };
    Namespace.prototype.getNamespaceId = function () {
        return this.namespaceId;
    };
    Namespace.prototype.setNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    Namespace.prototype.withNamespaceId = function (namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    };
    Namespace.prototype.getName = function () {
        return this.name;
    };
    Namespace.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Namespace.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Namespace.prototype.getDescription = function () {
        return this.description;
    };
    Namespace.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    Namespace.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    Namespace.prototype.getMissionCompleteScript = function () {
        return this.missionCompleteScript;
    };
    Namespace.prototype.setMissionCompleteScript = function (missionCompleteScript) {
        this.missionCompleteScript = missionCompleteScript;
        return this;
    };
    Namespace.prototype.withMissionCompleteScript = function (missionCompleteScript) {
        this.missionCompleteScript = missionCompleteScript;
        return this;
    };
    Namespace.prototype.getCounterIncrementScript = function () {
        return this.counterIncrementScript;
    };
    Namespace.prototype.setCounterIncrementScript = function (counterIncrementScript) {
        this.counterIncrementScript = counterIncrementScript;
        return this;
    };
    Namespace.prototype.withCounterIncrementScript = function (counterIncrementScript) {
        this.counterIncrementScript = counterIncrementScript;
        return this;
    };
    Namespace.prototype.getReceiveRewardsScript = function () {
        return this.receiveRewardsScript;
    };
    Namespace.prototype.setReceiveRewardsScript = function (receiveRewardsScript) {
        this.receiveRewardsScript = receiveRewardsScript;
        return this;
    };
    Namespace.prototype.withReceiveRewardsScript = function (receiveRewardsScript) {
        this.receiveRewardsScript = receiveRewardsScript;
        return this;
    };
    Namespace.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    Namespace.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    Namespace.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    Namespace.prototype.getKeyId = function () {
        return this.keyId;
    };
    Namespace.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    Namespace.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    Namespace.prototype.getCompleteNotification = function () {
        return this.completeNotification;
    };
    Namespace.prototype.setCompleteNotification = function (completeNotification) {
        this.completeNotification = completeNotification;
        return this;
    };
    Namespace.prototype.withCompleteNotification = function (completeNotification) {
        this.completeNotification = completeNotification;
        return this;
    };
    Namespace.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    Namespace.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    Namespace.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    Namespace.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Namespace.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Namespace.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Namespace.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Namespace.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Namespace.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Namespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMissionCompleteScript(ScriptSetting_1.default.fromDict(data["missionCompleteScript"]))
            .withCounterIncrementScript(ScriptSetting_1.default.fromDict(data["counterIncrementScript"]))
            .withReceiveRewardsScript(ScriptSetting_1.default.fromDict(data["receiveRewardsScript"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withCompleteNotification(NotificationSetting_1.default.fromDict(data["completeNotification"]))
            .withLogSetting(LogSetting_1.default.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d, _e;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "missionCompleteScript": (_a = this.getMissionCompleteScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "counterIncrementScript": (_b = this.getCounterIncrementScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "receiveRewardsScript": (_c = this.getReceiveRewardsScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "completeNotification": (_d = this.getCompleteNotification()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "logSetting": (_e = this.getLogSetting()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map