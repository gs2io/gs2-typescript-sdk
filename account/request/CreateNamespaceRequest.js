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
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.changePasswordIfTakeOver = null;
        this.differentUserIdForLoginAndDataRetention = null;
        this.createAccountScript = null;
        this.authenticationScript = null;
        this.createTakeOverScript = null;
        this.doTakeOverScript = null;
        this.banScript = null;
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
    CreateNamespaceRequest.prototype.getChangePasswordIfTakeOver = function () {
        return this.changePasswordIfTakeOver;
    };
    CreateNamespaceRequest.prototype.setChangePasswordIfTakeOver = function (changePasswordIfTakeOver) {
        this.changePasswordIfTakeOver = changePasswordIfTakeOver;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangePasswordIfTakeOver = function (changePasswordIfTakeOver) {
        this.changePasswordIfTakeOver = changePasswordIfTakeOver;
        return this;
    };
    CreateNamespaceRequest.prototype.getDifferentUserIdForLoginAndDataRetention = function () {
        return this.differentUserIdForLoginAndDataRetention;
    };
    CreateNamespaceRequest.prototype.setDifferentUserIdForLoginAndDataRetention = function (differentUserIdForLoginAndDataRetention) {
        this.differentUserIdForLoginAndDataRetention = differentUserIdForLoginAndDataRetention;
        return this;
    };
    CreateNamespaceRequest.prototype.withDifferentUserIdForLoginAndDataRetention = function (differentUserIdForLoginAndDataRetention) {
        this.differentUserIdForLoginAndDataRetention = differentUserIdForLoginAndDataRetention;
        return this;
    };
    CreateNamespaceRequest.prototype.getCreateAccountScript = function () {
        return this.createAccountScript;
    };
    CreateNamespaceRequest.prototype.setCreateAccountScript = function (createAccountScript) {
        this.createAccountScript = createAccountScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withCreateAccountScript = function (createAccountScript) {
        this.createAccountScript = createAccountScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getAuthenticationScript = function () {
        return this.authenticationScript;
    };
    CreateNamespaceRequest.prototype.setAuthenticationScript = function (authenticationScript) {
        this.authenticationScript = authenticationScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withAuthenticationScript = function (authenticationScript) {
        this.authenticationScript = authenticationScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getCreateTakeOverScript = function () {
        return this.createTakeOverScript;
    };
    CreateNamespaceRequest.prototype.setCreateTakeOverScript = function (createTakeOverScript) {
        this.createTakeOverScript = createTakeOverScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withCreateTakeOverScript = function (createTakeOverScript) {
        this.createTakeOverScript = createTakeOverScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getDoTakeOverScript = function () {
        return this.doTakeOverScript;
    };
    CreateNamespaceRequest.prototype.setDoTakeOverScript = function (doTakeOverScript) {
        this.doTakeOverScript = doTakeOverScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withDoTakeOverScript = function (doTakeOverScript) {
        this.doTakeOverScript = doTakeOverScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getBanScript = function () {
        return this.banScript;
    };
    CreateNamespaceRequest.prototype.setBanScript = function (banScript) {
        this.banScript = banScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withBanScript = function (banScript) {
        this.banScript = banScript;
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
            .withChangePasswordIfTakeOver(data["changePasswordIfTakeOver"])
            .withDifferentUserIdForLoginAndDataRetention(data["differentUserIdForLoginAndDataRetention"])
            .withCreateAccountScript(Gs2Account.ScriptSetting.fromDict(data["createAccountScript"]))
            .withAuthenticationScript(Gs2Account.ScriptSetting.fromDict(data["authenticationScript"]))
            .withCreateTakeOverScript(Gs2Account.ScriptSetting.fromDict(data["createTakeOverScript"]))
            .withDoTakeOverScript(Gs2Account.ScriptSetting.fromDict(data["doTakeOverScript"]))
            .withBanScript(Gs2Account.ScriptSetting.fromDict(data["banScript"]))
            .withLogSetting(Gs2Account.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "changePasswordIfTakeOver": this.getChangePasswordIfTakeOver(),
            "differentUserIdForLoginAndDataRetention": this.getDifferentUserIdForLoginAndDataRetention(),
            "createAccountScript": (_a = this.getCreateAccountScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "authenticationScript": (_b = this.getAuthenticationScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "createTakeOverScript": (_c = this.getCreateTakeOverScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "doTakeOverScript": (_d = this.getDoTakeOverScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "banScript": (_e = this.getBanScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "logSetting": (_f = this.getLogSetting()) === null || _f === void 0 ? void 0 : _f.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map