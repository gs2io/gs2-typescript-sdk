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
var Gs2Guild = tslib_1.__importStar(require("../../guild/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:guild:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.changeNotification = null;
        this.joinNotification = null;
        this.leaveNotification = null;
        this.changeMemberNotification = null;
        this.receiveRequestNotification = null;
        this.removeRequestNotification = null;
        this.createGuildScript = null;
        this.updateGuildScript = null;
        this.joinGuildScript = null;
        this.leaveGuildScript = null;
        this.changeRoleScript = null;
        this.logSetting = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
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
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        return true;
    };
    Namespace.createGrn = function (region, ownerId, namespaceName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '');
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
    Namespace.prototype.getChangeNotification = function () {
        return this.changeNotification;
    };
    Namespace.prototype.setChangeNotification = function (changeNotification) {
        this.changeNotification = changeNotification;
        return this;
    };
    Namespace.prototype.withChangeNotification = function (changeNotification) {
        this.changeNotification = changeNotification;
        return this;
    };
    Namespace.prototype.getJoinNotification = function () {
        return this.joinNotification;
    };
    Namespace.prototype.setJoinNotification = function (joinNotification) {
        this.joinNotification = joinNotification;
        return this;
    };
    Namespace.prototype.withJoinNotification = function (joinNotification) {
        this.joinNotification = joinNotification;
        return this;
    };
    Namespace.prototype.getLeaveNotification = function () {
        return this.leaveNotification;
    };
    Namespace.prototype.setLeaveNotification = function (leaveNotification) {
        this.leaveNotification = leaveNotification;
        return this;
    };
    Namespace.prototype.withLeaveNotification = function (leaveNotification) {
        this.leaveNotification = leaveNotification;
        return this;
    };
    Namespace.prototype.getChangeMemberNotification = function () {
        return this.changeMemberNotification;
    };
    Namespace.prototype.setChangeMemberNotification = function (changeMemberNotification) {
        this.changeMemberNotification = changeMemberNotification;
        return this;
    };
    Namespace.prototype.withChangeMemberNotification = function (changeMemberNotification) {
        this.changeMemberNotification = changeMemberNotification;
        return this;
    };
    Namespace.prototype.getReceiveRequestNotification = function () {
        return this.receiveRequestNotification;
    };
    Namespace.prototype.setReceiveRequestNotification = function (receiveRequestNotification) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    };
    Namespace.prototype.withReceiveRequestNotification = function (receiveRequestNotification) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    };
    Namespace.prototype.getRemoveRequestNotification = function () {
        return this.removeRequestNotification;
    };
    Namespace.prototype.setRemoveRequestNotification = function (removeRequestNotification) {
        this.removeRequestNotification = removeRequestNotification;
        return this;
    };
    Namespace.prototype.withRemoveRequestNotification = function (removeRequestNotification) {
        this.removeRequestNotification = removeRequestNotification;
        return this;
    };
    Namespace.prototype.getCreateGuildScript = function () {
        return this.createGuildScript;
    };
    Namespace.prototype.setCreateGuildScript = function (createGuildScript) {
        this.createGuildScript = createGuildScript;
        return this;
    };
    Namespace.prototype.withCreateGuildScript = function (createGuildScript) {
        this.createGuildScript = createGuildScript;
        return this;
    };
    Namespace.prototype.getUpdateGuildScript = function () {
        return this.updateGuildScript;
    };
    Namespace.prototype.setUpdateGuildScript = function (updateGuildScript) {
        this.updateGuildScript = updateGuildScript;
        return this;
    };
    Namespace.prototype.withUpdateGuildScript = function (updateGuildScript) {
        this.updateGuildScript = updateGuildScript;
        return this;
    };
    Namespace.prototype.getJoinGuildScript = function () {
        return this.joinGuildScript;
    };
    Namespace.prototype.setJoinGuildScript = function (joinGuildScript) {
        this.joinGuildScript = joinGuildScript;
        return this;
    };
    Namespace.prototype.withJoinGuildScript = function (joinGuildScript) {
        this.joinGuildScript = joinGuildScript;
        return this;
    };
    Namespace.prototype.getLeaveGuildScript = function () {
        return this.leaveGuildScript;
    };
    Namespace.prototype.setLeaveGuildScript = function (leaveGuildScript) {
        this.leaveGuildScript = leaveGuildScript;
        return this;
    };
    Namespace.prototype.withLeaveGuildScript = function (leaveGuildScript) {
        this.leaveGuildScript = leaveGuildScript;
        return this;
    };
    Namespace.prototype.getChangeRoleScript = function () {
        return this.changeRoleScript;
    };
    Namespace.prototype.setChangeRoleScript = function (changeRoleScript) {
        this.changeRoleScript = changeRoleScript;
        return this;
    };
    Namespace.prototype.withChangeRoleScript = function (changeRoleScript) {
        this.changeRoleScript = changeRoleScript;
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
    Namespace.prototype.getRevision = function () {
        return this.revision;
    };
    Namespace.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Namespace.prototype.withRevision = function (revision) {
        this.revision = revision;
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
            .withChangeNotification(Gs2Guild.NotificationSetting.fromDict(data["changeNotification"]))
            .withJoinNotification(Gs2Guild.NotificationSetting.fromDict(data["joinNotification"]))
            .withLeaveNotification(Gs2Guild.NotificationSetting.fromDict(data["leaveNotification"]))
            .withChangeMemberNotification(Gs2Guild.NotificationSetting.fromDict(data["changeMemberNotification"]))
            .withReceiveRequestNotification(Gs2Guild.NotificationSetting.fromDict(data["receiveRequestNotification"]))
            .withRemoveRequestNotification(Gs2Guild.NotificationSetting.fromDict(data["removeRequestNotification"]))
            .withCreateGuildScript(Gs2Guild.ScriptSetting.fromDict(data["createGuildScript"]))
            .withUpdateGuildScript(Gs2Guild.ScriptSetting.fromDict(data["updateGuildScript"]))
            .withJoinGuildScript(Gs2Guild.ScriptSetting.fromDict(data["joinGuildScript"]))
            .withLeaveGuildScript(Gs2Guild.ScriptSetting.fromDict(data["leaveGuildScript"]))
            .withChangeRoleScript(Gs2Guild.ScriptSetting.fromDict(data["changeRoleScript"]))
            .withLogSetting(Gs2Guild.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "changeNotification": (_a = this.getChangeNotification()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "joinNotification": (_b = this.getJoinNotification()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "leaveNotification": (_c = this.getLeaveNotification()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "changeMemberNotification": (_d = this.getChangeMemberNotification()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "receiveRequestNotification": (_e = this.getReceiveRequestNotification()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "removeRequestNotification": (_f = this.getRemoveRequestNotification()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "createGuildScript": (_g = this.getCreateGuildScript()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "updateGuildScript": (_h = this.getUpdateGuildScript()) === null || _h === void 0 ? void 0 : _h.toDict(),
            "joinGuildScript": (_j = this.getJoinGuildScript()) === null || _j === void 0 ? void 0 : _j.toDict(),
            "leaveGuildScript": (_k = this.getLeaveGuildScript()) === null || _k === void 0 ? void 0 : _k.toDict(),
            "changeRoleScript": (_l = this.getChangeRoleScript()) === null || _l === void 0 ? void 0 : _l.toDict(),
            "logSetting": (_m = this.getLogSetting()) === null || _m === void 0 ? void 0 : _m.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map