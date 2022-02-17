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
var Gs2Money = (0, tslib_1.__importStar)(require("../model"));
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.priority = null;
        this.appleKey = null;
        this.googleKey = null;
        this.enableFakeReceipt = null;
        this.createWalletScript = null;
        this.depositScript = null;
        this.withdrawScript = null;
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
    UpdateNamespaceRequest.prototype.getPriority = function () {
        return this.priority;
    };
    UpdateNamespaceRequest.prototype.setPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    UpdateNamespaceRequest.prototype.withPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAppleKey = function () {
        return this.appleKey;
    };
    UpdateNamespaceRequest.prototype.setAppleKey = function (appleKey) {
        this.appleKey = appleKey;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAppleKey = function (appleKey) {
        this.appleKey = appleKey;
        return this;
    };
    UpdateNamespaceRequest.prototype.getGoogleKey = function () {
        return this.googleKey;
    };
    UpdateNamespaceRequest.prototype.setGoogleKey = function (googleKey) {
        this.googleKey = googleKey;
        return this;
    };
    UpdateNamespaceRequest.prototype.withGoogleKey = function (googleKey) {
        this.googleKey = googleKey;
        return this;
    };
    UpdateNamespaceRequest.prototype.getEnableFakeReceipt = function () {
        return this.enableFakeReceipt;
    };
    UpdateNamespaceRequest.prototype.setEnableFakeReceipt = function (enableFakeReceipt) {
        this.enableFakeReceipt = enableFakeReceipt;
        return this;
    };
    UpdateNamespaceRequest.prototype.withEnableFakeReceipt = function (enableFakeReceipt) {
        this.enableFakeReceipt = enableFakeReceipt;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCreateWalletScript = function () {
        return this.createWalletScript;
    };
    UpdateNamespaceRequest.prototype.setCreateWalletScript = function (createWalletScript) {
        this.createWalletScript = createWalletScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCreateWalletScript = function (createWalletScript) {
        this.createWalletScript = createWalletScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDepositScript = function () {
        return this.depositScript;
    };
    UpdateNamespaceRequest.prototype.setDepositScript = function (depositScript) {
        this.depositScript = depositScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDepositScript = function (depositScript) {
        this.depositScript = depositScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getWithdrawScript = function () {
        return this.withdrawScript;
    };
    UpdateNamespaceRequest.prototype.setWithdrawScript = function (withdrawScript) {
        this.withdrawScript = withdrawScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withWithdrawScript = function (withdrawScript) {
        this.withdrawScript = withdrawScript;
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
            .withPriority(data["priority"])
            .withAppleKey(data["appleKey"])
            .withGoogleKey(data["googleKey"])
            .withEnableFakeReceipt(data["enableFakeReceipt"])
            .withCreateWalletScript(Gs2Money.ScriptSetting.fromDict(data["createWalletScript"]))
            .withDepositScript(Gs2Money.ScriptSetting.fromDict(data["depositScript"]))
            .withWithdrawScript(Gs2Money.ScriptSetting.fromDict(data["withdrawScript"]))
            .withLogSetting(Gs2Money.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "priority": this.getPriority(),
            "appleKey": this.getAppleKey(),
            "googleKey": this.getGoogleKey(),
            "enableFakeReceipt": this.getEnableFakeReceipt(),
            "createWalletScript": (_a = this.getCreateWalletScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "depositScript": (_b = this.getDepositScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "withdrawScript": (_c = this.getWithdrawScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "logSetting": (_d = this.getLogSetting()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map