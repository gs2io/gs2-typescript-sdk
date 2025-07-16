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
var Gs2Guild = tslib_1.__importStar(require("../model"));
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
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
        this.receiveJoinRequestScript = null;
        this.leaveGuildScript = null;
        this.changeRoleScript = null;
        this.deleteGuildScript = null;
        this.logSetting = null;
    }
    UpdateNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNamespaceRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateNamespaceRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNamespaceRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateNamespaceRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNamespaceRequest.prototype.getChangeNotification = function () {
        return this.changeNotification;
    };
    UpdateNamespaceRequest.prototype.setChangeNotification = function (changeNotification) {
        this.changeNotification = changeNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withChangeNotification = function (changeNotification) {
        this.changeNotification = changeNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getJoinNotification = function () {
        return this.joinNotification;
    };
    UpdateNamespaceRequest.prototype.setJoinNotification = function (joinNotification) {
        this.joinNotification = joinNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withJoinNotification = function (joinNotification) {
        this.joinNotification = joinNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getLeaveNotification = function () {
        return this.leaveNotification;
    };
    UpdateNamespaceRequest.prototype.setLeaveNotification = function (leaveNotification) {
        this.leaveNotification = leaveNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withLeaveNotification = function (leaveNotification) {
        this.leaveNotification = leaveNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getChangeMemberNotification = function () {
        return this.changeMemberNotification;
    };
    UpdateNamespaceRequest.prototype.setChangeMemberNotification = function (changeMemberNotification) {
        this.changeMemberNotification = changeMemberNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withChangeMemberNotification = function (changeMemberNotification) {
        this.changeMemberNotification = changeMemberNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getReceiveRequestNotification = function () {
        return this.receiveRequestNotification;
    };
    UpdateNamespaceRequest.prototype.setReceiveRequestNotification = function (receiveRequestNotification) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withReceiveRequestNotification = function (receiveRequestNotification) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getRemoveRequestNotification = function () {
        return this.removeRequestNotification;
    };
    UpdateNamespaceRequest.prototype.setRemoveRequestNotification = function (removeRequestNotification) {
        this.removeRequestNotification = removeRequestNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withRemoveRequestNotification = function (removeRequestNotification) {
        this.removeRequestNotification = removeRequestNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCreateGuildScript = function () {
        return this.createGuildScript;
    };
    UpdateNamespaceRequest.prototype.setCreateGuildScript = function (createGuildScript) {
        this.createGuildScript = createGuildScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCreateGuildScript = function (createGuildScript) {
        this.createGuildScript = createGuildScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getUpdateGuildScript = function () {
        return this.updateGuildScript;
    };
    UpdateNamespaceRequest.prototype.setUpdateGuildScript = function (updateGuildScript) {
        this.updateGuildScript = updateGuildScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withUpdateGuildScript = function (updateGuildScript) {
        this.updateGuildScript = updateGuildScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getJoinGuildScript = function () {
        return this.joinGuildScript;
    };
    UpdateNamespaceRequest.prototype.setJoinGuildScript = function (joinGuildScript) {
        this.joinGuildScript = joinGuildScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withJoinGuildScript = function (joinGuildScript) {
        this.joinGuildScript = joinGuildScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getReceiveJoinRequestScript = function () {
        return this.receiveJoinRequestScript;
    };
    UpdateNamespaceRequest.prototype.setReceiveJoinRequestScript = function (receiveJoinRequestScript) {
        this.receiveJoinRequestScript = receiveJoinRequestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withReceiveJoinRequestScript = function (receiveJoinRequestScript) {
        this.receiveJoinRequestScript = receiveJoinRequestScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getLeaveGuildScript = function () {
        return this.leaveGuildScript;
    };
    UpdateNamespaceRequest.prototype.setLeaveGuildScript = function (leaveGuildScript) {
        this.leaveGuildScript = leaveGuildScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withLeaveGuildScript = function (leaveGuildScript) {
        this.leaveGuildScript = leaveGuildScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getChangeRoleScript = function () {
        return this.changeRoleScript;
    };
    UpdateNamespaceRequest.prototype.setChangeRoleScript = function (changeRoleScript) {
        this.changeRoleScript = changeRoleScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withChangeRoleScript = function (changeRoleScript) {
        this.changeRoleScript = changeRoleScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDeleteGuildScript = function () {
        return this.deleteGuildScript;
    };
    UpdateNamespaceRequest.prototype.setDeleteGuildScript = function (deleteGuildScript) {
        this.deleteGuildScript = deleteGuildScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDeleteGuildScript = function (deleteGuildScript) {
        this.deleteGuildScript = deleteGuildScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    UpdateNamespaceRequest.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    UpdateNamespaceRequest.fromDict = function (data) {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
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
            .withReceiveJoinRequestScript(Gs2Guild.ScriptSetting.fromDict(data["receiveJoinRequestScript"]))
            .withLeaveGuildScript(Gs2Guild.ScriptSetting.fromDict(data["leaveGuildScript"]))
            .withChangeRoleScript(Gs2Guild.ScriptSetting.fromDict(data["changeRoleScript"]))
            .withDeleteGuildScript(Gs2Guild.ScriptSetting.fromDict(data["deleteGuildScript"]))
            .withLogSetting(Gs2Guild.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        return {
            "namespaceName": this.getNamespaceName(),
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
            "receiveJoinRequestScript": (_k = this.getReceiveJoinRequestScript()) === null || _k === void 0 ? void 0 : _k.toDict(),
            "leaveGuildScript": (_l = this.getLeaveGuildScript()) === null || _l === void 0 ? void 0 : _l.toDict(),
            "changeRoleScript": (_m = this.getChangeRoleScript()) === null || _m === void 0 ? void 0 : _m.toDict(),
            "deleteGuildScript": (_o = this.getDeleteGuildScript()) === null || _o === void 0 ? void 0 : _o.toDict(),
            "logSetting": (_p = this.getLogSetting()) === null || _p === void 0 ? void 0 : _p.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map