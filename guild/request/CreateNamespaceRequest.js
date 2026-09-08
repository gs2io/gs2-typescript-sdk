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
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.transactionSetting = null;
        this.transactionSettingV2 = null;
        this.changeNotification = null;
        this.joinNotification = null;
        this.leaveNotification = null;
        this.changeMemberNotification = null;
        this.changeMemberNotificationIgnoreChangeMetadata = null;
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
    CreateNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNamespaceRequest.prototype.getName = function () {
        return this.name;
    };
    CreateNamespaceRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateNamespaceRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateNamespaceRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateNamespaceRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNamespaceRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.getTransactionSettingV2 = function () {
        return this.transactionSettingV2;
    };
    CreateNamespaceRequest.prototype.setTransactionSettingV2 = function (transactionSettingV2) {
        this.transactionSettingV2 = transactionSettingV2;
        return this;
    };
    CreateNamespaceRequest.prototype.withTransactionSettingV2 = function (transactionSettingV2) {
        this.transactionSettingV2 = transactionSettingV2;
        return this;
    };
    CreateNamespaceRequest.prototype.getChangeNotification = function () {
        return this.changeNotification;
    };
    CreateNamespaceRequest.prototype.setChangeNotification = function (changeNotification) {
        this.changeNotification = changeNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangeNotification = function (changeNotification) {
        this.changeNotification = changeNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getJoinNotification = function () {
        return this.joinNotification;
    };
    CreateNamespaceRequest.prototype.setJoinNotification = function (joinNotification) {
        this.joinNotification = joinNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withJoinNotification = function (joinNotification) {
        this.joinNotification = joinNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getLeaveNotification = function () {
        return this.leaveNotification;
    };
    CreateNamespaceRequest.prototype.setLeaveNotification = function (leaveNotification) {
        this.leaveNotification = leaveNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withLeaveNotification = function (leaveNotification) {
        this.leaveNotification = leaveNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getChangeMemberNotification = function () {
        return this.changeMemberNotification;
    };
    CreateNamespaceRequest.prototype.setChangeMemberNotification = function (changeMemberNotification) {
        this.changeMemberNotification = changeMemberNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangeMemberNotification = function (changeMemberNotification) {
        this.changeMemberNotification = changeMemberNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getChangeMemberNotificationIgnoreChangeMetadata = function () {
        return this.changeMemberNotificationIgnoreChangeMetadata;
    };
    CreateNamespaceRequest.prototype.setChangeMemberNotificationIgnoreChangeMetadata = function (changeMemberNotificationIgnoreChangeMetadata) {
        this.changeMemberNotificationIgnoreChangeMetadata = changeMemberNotificationIgnoreChangeMetadata;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangeMemberNotificationIgnoreChangeMetadata = function (changeMemberNotificationIgnoreChangeMetadata) {
        this.changeMemberNotificationIgnoreChangeMetadata = changeMemberNotificationIgnoreChangeMetadata;
        return this;
    };
    CreateNamespaceRequest.prototype.getReceiveRequestNotification = function () {
        return this.receiveRequestNotification;
    };
    CreateNamespaceRequest.prototype.setReceiveRequestNotification = function (receiveRequestNotification) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withReceiveRequestNotification = function (receiveRequestNotification) {
        this.receiveRequestNotification = receiveRequestNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getRemoveRequestNotification = function () {
        return this.removeRequestNotification;
    };
    CreateNamespaceRequest.prototype.setRemoveRequestNotification = function (removeRequestNotification) {
        this.removeRequestNotification = removeRequestNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withRemoveRequestNotification = function (removeRequestNotification) {
        this.removeRequestNotification = removeRequestNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getCreateGuildScript = function () {
        return this.createGuildScript;
    };
    CreateNamespaceRequest.prototype.setCreateGuildScript = function (createGuildScript) {
        this.createGuildScript = createGuildScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withCreateGuildScript = function (createGuildScript) {
        this.createGuildScript = createGuildScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getUpdateGuildScript = function () {
        return this.updateGuildScript;
    };
    CreateNamespaceRequest.prototype.setUpdateGuildScript = function (updateGuildScript) {
        this.updateGuildScript = updateGuildScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withUpdateGuildScript = function (updateGuildScript) {
        this.updateGuildScript = updateGuildScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getJoinGuildScript = function () {
        return this.joinGuildScript;
    };
    CreateNamespaceRequest.prototype.setJoinGuildScript = function (joinGuildScript) {
        this.joinGuildScript = joinGuildScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withJoinGuildScript = function (joinGuildScript) {
        this.joinGuildScript = joinGuildScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getReceiveJoinRequestScript = function () {
        return this.receiveJoinRequestScript;
    };
    CreateNamespaceRequest.prototype.setReceiveJoinRequestScript = function (receiveJoinRequestScript) {
        this.receiveJoinRequestScript = receiveJoinRequestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withReceiveJoinRequestScript = function (receiveJoinRequestScript) {
        this.receiveJoinRequestScript = receiveJoinRequestScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getLeaveGuildScript = function () {
        return this.leaveGuildScript;
    };
    CreateNamespaceRequest.prototype.setLeaveGuildScript = function (leaveGuildScript) {
        this.leaveGuildScript = leaveGuildScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withLeaveGuildScript = function (leaveGuildScript) {
        this.leaveGuildScript = leaveGuildScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getChangeRoleScript = function () {
        return this.changeRoleScript;
    };
    CreateNamespaceRequest.prototype.setChangeRoleScript = function (changeRoleScript) {
        this.changeRoleScript = changeRoleScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangeRoleScript = function (changeRoleScript) {
        this.changeRoleScript = changeRoleScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getDeleteGuildScript = function () {
        return this.deleteGuildScript;
    };
    CreateNamespaceRequest.prototype.setDeleteGuildScript = function (deleteGuildScript) {
        this.deleteGuildScript = deleteGuildScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withDeleteGuildScript = function (deleteGuildScript) {
        this.deleteGuildScript = deleteGuildScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    CreateNamespaceRequest.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    CreateNamespaceRequest.fromDict = function (data) {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Guild.TransactionSetting.fromDict(data["transactionSetting"]))
            .withTransactionSettingV2(Gs2Guild.TransactionSettingV2.fromDict(data["transactionSettingV2"]))
            .withChangeNotification(Gs2Guild.NotificationSetting.fromDict(data["changeNotification"]))
            .withJoinNotification(Gs2Guild.NotificationSetting.fromDict(data["joinNotification"]))
            .withLeaveNotification(Gs2Guild.NotificationSetting.fromDict(data["leaveNotification"]))
            .withChangeMemberNotification(Gs2Guild.NotificationSetting.fromDict(data["changeMemberNotification"]))
            .withChangeMemberNotificationIgnoreChangeMetadata(data["changeMemberNotificationIgnoreChangeMetadata"])
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
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "transactionSettingV2": (_b = this.getTransactionSettingV2()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "changeNotification": (_c = this.getChangeNotification()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "joinNotification": (_d = this.getJoinNotification()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "leaveNotification": (_e = this.getLeaveNotification()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "changeMemberNotification": (_f = this.getChangeMemberNotification()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "changeMemberNotificationIgnoreChangeMetadata": this.getChangeMemberNotificationIgnoreChangeMetadata(),
            "receiveRequestNotification": (_g = this.getReceiveRequestNotification()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "removeRequestNotification": (_h = this.getRemoveRequestNotification()) === null || _h === void 0 ? void 0 : _h.toDict(),
            "createGuildScript": (_j = this.getCreateGuildScript()) === null || _j === void 0 ? void 0 : _j.toDict(),
            "updateGuildScript": (_k = this.getUpdateGuildScript()) === null || _k === void 0 ? void 0 : _k.toDict(),
            "joinGuildScript": (_l = this.getJoinGuildScript()) === null || _l === void 0 ? void 0 : _l.toDict(),
            "receiveJoinRequestScript": (_m = this.getReceiveJoinRequestScript()) === null || _m === void 0 ? void 0 : _m.toDict(),
            "leaveGuildScript": (_o = this.getLeaveGuildScript()) === null || _o === void 0 ? void 0 : _o.toDict(),
            "changeRoleScript": (_p = this.getChangeRoleScript()) === null || _p === void 0 ? void 0 : _p.toDict(),
            "deleteGuildScript": (_q = this.getDeleteGuildScript()) === null || _q === void 0 ? void 0 : _q.toDict(),
            "logSetting": (_r = this.getLogSetting()) === null || _r === void 0 ? void 0 : _r.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map