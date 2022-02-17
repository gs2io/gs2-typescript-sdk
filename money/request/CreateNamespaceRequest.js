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
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.priority = null;
        this.shareFree = null;
        this.currency = null;
        this.appleKey = null;
        this.googleKey = null;
        this.enableFakeReceipt = null;
        this.createWalletScript = null;
        this.depositScript = null;
        this.withdrawScript = null;
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
    CreateNamespaceRequest.prototype.getPriority = function () {
        return this.priority;
    };
    CreateNamespaceRequest.prototype.setPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    CreateNamespaceRequest.prototype.withPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    CreateNamespaceRequest.prototype.getShareFree = function () {
        return this.shareFree;
    };
    CreateNamespaceRequest.prototype.setShareFree = function (shareFree) {
        this.shareFree = shareFree;
        return this;
    };
    CreateNamespaceRequest.prototype.withShareFree = function (shareFree) {
        this.shareFree = shareFree;
        return this;
    };
    CreateNamespaceRequest.prototype.getCurrency = function () {
        return this.currency;
    };
    CreateNamespaceRequest.prototype.setCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    CreateNamespaceRequest.prototype.withCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    CreateNamespaceRequest.prototype.getAppleKey = function () {
        return this.appleKey;
    };
    CreateNamespaceRequest.prototype.setAppleKey = function (appleKey) {
        this.appleKey = appleKey;
        return this;
    };
    CreateNamespaceRequest.prototype.withAppleKey = function (appleKey) {
        this.appleKey = appleKey;
        return this;
    };
    CreateNamespaceRequest.prototype.getGoogleKey = function () {
        return this.googleKey;
    };
    CreateNamespaceRequest.prototype.setGoogleKey = function (googleKey) {
        this.googleKey = googleKey;
        return this;
    };
    CreateNamespaceRequest.prototype.withGoogleKey = function (googleKey) {
        this.googleKey = googleKey;
        return this;
    };
    CreateNamespaceRequest.prototype.getEnableFakeReceipt = function () {
        return this.enableFakeReceipt;
    };
    CreateNamespaceRequest.prototype.setEnableFakeReceipt = function (enableFakeReceipt) {
        this.enableFakeReceipt = enableFakeReceipt;
        return this;
    };
    CreateNamespaceRequest.prototype.withEnableFakeReceipt = function (enableFakeReceipt) {
        this.enableFakeReceipt = enableFakeReceipt;
        return this;
    };
    CreateNamespaceRequest.prototype.getCreateWalletScript = function () {
        return this.createWalletScript;
    };
    CreateNamespaceRequest.prototype.setCreateWalletScript = function (createWalletScript) {
        this.createWalletScript = createWalletScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withCreateWalletScript = function (createWalletScript) {
        this.createWalletScript = createWalletScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getDepositScript = function () {
        return this.depositScript;
    };
    CreateNamespaceRequest.prototype.setDepositScript = function (depositScript) {
        this.depositScript = depositScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withDepositScript = function (depositScript) {
        this.depositScript = depositScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getWithdrawScript = function () {
        return this.withdrawScript;
    };
    CreateNamespaceRequest.prototype.setWithdrawScript = function (withdrawScript) {
        this.withdrawScript = withdrawScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withWithdrawScript = function (withdrawScript) {
        this.withdrawScript = withdrawScript;
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
            .withPriority(data["priority"])
            .withShareFree(data["shareFree"])
            .withCurrency(data["currency"])
            .withAppleKey(data["appleKey"])
            .withGoogleKey(data["googleKey"])
            .withEnableFakeReceipt(data["enableFakeReceipt"])
            .withCreateWalletScript(Gs2Money.ScriptSetting.fromDict(data["createWalletScript"]))
            .withDepositScript(Gs2Money.ScriptSetting.fromDict(data["depositScript"]))
            .withWithdrawScript(Gs2Money.ScriptSetting.fromDict(data["withdrawScript"]))
            .withLogSetting(Gs2Money.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "priority": this.getPriority(),
            "shareFree": this.getShareFree(),
            "currency": this.getCurrency(),
            "appleKey": this.getAppleKey(),
            "googleKey": this.getGoogleKey(),
            "enableFakeReceipt": this.getEnableFakeReceipt(),
            "createWalletScript": (_a = this.getCreateWalletScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "depositScript": (_b = this.getDepositScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "withdrawScript": (_c = this.getWithdrawScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "logSetting": (_d = this.getLogSetting()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map