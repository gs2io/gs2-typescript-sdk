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
        this.transactionSetting = null;
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
    UpdateNamespaceRequest.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    UpdateNamespaceRequest.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
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
    UpdateNamespaceRequest.prototype.getChangeMemberNotificationIgnoreChangeMetadata = function () {
        return this.changeMemberNotificationIgnoreChangeMetadata;
    };
    UpdateNamespaceRequest.prototype.setChangeMemberNotificationIgnoreChangeMetadata = function (changeMemberNotificationIgnoreChangeMetadata) {
        this.changeMemberNotificationIgnoreChangeMetadata = changeMemberNotificationIgnoreChangeMetadata;
        return this;
    };
    UpdateNamespaceRequest.prototype.withChangeMemberNotificationIgnoreChangeMetadata = function (changeMemberNotificationIgnoreChangeMetadata) {
        this.changeMemberNotificationIgnoreChangeMetadata = changeMemberNotificationIgnoreChangeMetadata;
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
            .withTransactionSetting(Gs2Guild.TransactionSetting.fromDict(data["transactionSetting"]))
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
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "changeNotification": (_b = this.getChangeNotification()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "joinNotification": (_c = this.getJoinNotification()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "leaveNotification": (_d = this.getLeaveNotification()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "changeMemberNotification": (_e = this.getChangeMemberNotification()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "changeMemberNotificationIgnoreChangeMetadata": this.getChangeMemberNotificationIgnoreChangeMetadata(),
            "receiveRequestNotification": (_f = this.getReceiveRequestNotification()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "removeRequestNotification": (_g = this.getRemoveRequestNotification()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "createGuildScript": (_h = this.getCreateGuildScript()) === null || _h === void 0 ? void 0 : _h.toDict(),
            "updateGuildScript": (_j = this.getUpdateGuildScript()) === null || _j === void 0 ? void 0 : _j.toDict(),
            "joinGuildScript": (_k = this.getJoinGuildScript()) === null || _k === void 0 ? void 0 : _k.toDict(),
            "receiveJoinRequestScript": (_l = this.getReceiveJoinRequestScript()) === null || _l === void 0 ? void 0 : _l.toDict(),
            "leaveGuildScript": (_m = this.getLeaveGuildScript()) === null || _m === void 0 ? void 0 : _m.toDict(),
            "changeRoleScript": (_o = this.getChangeRoleScript()) === null || _o === void 0 ? void 0 : _o.toDict(),
            "deleteGuildScript": (_p = this.getDeleteGuildScript()) === null || _p === void 0 ? void 0 : _p.toDict(),
            "logSetting": (_q = this.getLogSetting()) === null || _q === void 0 ? void 0 : _q.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map