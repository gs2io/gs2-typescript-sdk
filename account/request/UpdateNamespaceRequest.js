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
var Gs2Account = tslib_1.__importStar(require("../model"));
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.changePasswordIfTakeOver = null;
        this.createAccountScript = null;
        this.authenticationScript = null;
        this.createTakeOverScript = null;
        this.doTakeOverScript = null;
        this.banScript = null;
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
    UpdateNamespaceRequest.prototype.getChangePasswordIfTakeOver = function () {
        return this.changePasswordIfTakeOver;
    };
    UpdateNamespaceRequest.prototype.setChangePasswordIfTakeOver = function (changePasswordIfTakeOver) {
        this.changePasswordIfTakeOver = changePasswordIfTakeOver;
        return this;
    };
    UpdateNamespaceRequest.prototype.withChangePasswordIfTakeOver = function (changePasswordIfTakeOver) {
        this.changePasswordIfTakeOver = changePasswordIfTakeOver;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCreateAccountScript = function () {
        return this.createAccountScript;
    };
    UpdateNamespaceRequest.prototype.setCreateAccountScript = function (createAccountScript) {
        this.createAccountScript = createAccountScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCreateAccountScript = function (createAccountScript) {
        this.createAccountScript = createAccountScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAuthenticationScript = function () {
        return this.authenticationScript;
    };
    UpdateNamespaceRequest.prototype.setAuthenticationScript = function (authenticationScript) {
        this.authenticationScript = authenticationScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAuthenticationScript = function (authenticationScript) {
        this.authenticationScript = authenticationScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCreateTakeOverScript = function () {
        return this.createTakeOverScript;
    };
    UpdateNamespaceRequest.prototype.setCreateTakeOverScript = function (createTakeOverScript) {
        this.createTakeOverScript = createTakeOverScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCreateTakeOverScript = function (createTakeOverScript) {
        this.createTakeOverScript = createTakeOverScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDoTakeOverScript = function () {
        return this.doTakeOverScript;
    };
    UpdateNamespaceRequest.prototype.setDoTakeOverScript = function (doTakeOverScript) {
        this.doTakeOverScript = doTakeOverScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDoTakeOverScript = function (doTakeOverScript) {
        this.doTakeOverScript = doTakeOverScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getBanScript = function () {
        return this.banScript;
    };
    UpdateNamespaceRequest.prototype.setBanScript = function (banScript) {
        this.banScript = banScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withBanScript = function (banScript) {
        this.banScript = banScript;
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
            .withChangePasswordIfTakeOver(data["changePasswordIfTakeOver"])
            .withCreateAccountScript(Gs2Account.ScriptSetting.fromDict(data["createAccountScript"]))
            .withAuthenticationScript(Gs2Account.ScriptSetting.fromDict(data["authenticationScript"]))
            .withCreateTakeOverScript(Gs2Account.ScriptSetting.fromDict(data["createTakeOverScript"]))
            .withDoTakeOverScript(Gs2Account.ScriptSetting.fromDict(data["doTakeOverScript"]))
            .withBanScript(Gs2Account.ScriptSetting.fromDict(data["banScript"]))
            .withLogSetting(Gs2Account.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "changePasswordIfTakeOver": this.getChangePasswordIfTakeOver(),
            "createAccountScript": (_a = this.getCreateAccountScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "authenticationScript": (_b = this.getAuthenticationScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "createTakeOverScript": (_c = this.getCreateTakeOverScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "doTakeOverScript": (_d = this.getDoTakeOverScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "banScript": (_e = this.getBanScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "logSetting": (_f = this.getLogSetting()) === null || _f === void 0 ? void 0 : _f.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map