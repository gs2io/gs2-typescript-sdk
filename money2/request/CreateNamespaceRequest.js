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
var Gs2Money2 = tslib_1.__importStar(require("../model"));
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.currencyUsagePriority = null;
        this.description = null;
        this.sharedFreeCurrency = null;
        this.platformSetting = null;
        this.depositBalanceScript = null;
        this.withdrawBalanceScript = null;
        this.verifyReceiptScript = null;
        this.subscribeScript = null;
        this.renewScript = null;
        this.unsubscribeScript = null;
        this.takeOverScript = null;
        this.changeSubscriptionStatusNotification = null;
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
    CreateNamespaceRequest.prototype.getCurrencyUsagePriority = function () {
        return this.currencyUsagePriority;
    };
    CreateNamespaceRequest.prototype.setCurrencyUsagePriority = function (currencyUsagePriority) {
        this.currencyUsagePriority = currencyUsagePriority;
        return this;
    };
    CreateNamespaceRequest.prototype.withCurrencyUsagePriority = function (currencyUsagePriority) {
        this.currencyUsagePriority = currencyUsagePriority;
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
    CreateNamespaceRequest.prototype.getSharedFreeCurrency = function () {
        return this.sharedFreeCurrency;
    };
    CreateNamespaceRequest.prototype.setSharedFreeCurrency = function (sharedFreeCurrency) {
        this.sharedFreeCurrency = sharedFreeCurrency;
        return this;
    };
    CreateNamespaceRequest.prototype.withSharedFreeCurrency = function (sharedFreeCurrency) {
        this.sharedFreeCurrency = sharedFreeCurrency;
        return this;
    };
    CreateNamespaceRequest.prototype.getPlatformSetting = function () {
        return this.platformSetting;
    };
    CreateNamespaceRequest.prototype.setPlatformSetting = function (platformSetting) {
        this.platformSetting = platformSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.withPlatformSetting = function (platformSetting) {
        this.platformSetting = platformSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.getDepositBalanceScript = function () {
        return this.depositBalanceScript;
    };
    CreateNamespaceRequest.prototype.setDepositBalanceScript = function (depositBalanceScript) {
        this.depositBalanceScript = depositBalanceScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withDepositBalanceScript = function (depositBalanceScript) {
        this.depositBalanceScript = depositBalanceScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getWithdrawBalanceScript = function () {
        return this.withdrawBalanceScript;
    };
    CreateNamespaceRequest.prototype.setWithdrawBalanceScript = function (withdrawBalanceScript) {
        this.withdrawBalanceScript = withdrawBalanceScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withWithdrawBalanceScript = function (withdrawBalanceScript) {
        this.withdrawBalanceScript = withdrawBalanceScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getVerifyReceiptScript = function () {
        return this.verifyReceiptScript;
    };
    CreateNamespaceRequest.prototype.setVerifyReceiptScript = function (verifyReceiptScript) {
        this.verifyReceiptScript = verifyReceiptScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withVerifyReceiptScript = function (verifyReceiptScript) {
        this.verifyReceiptScript = verifyReceiptScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getSubscribeScript = function () {
        return this.subscribeScript;
    };
    CreateNamespaceRequest.prototype.setSubscribeScript = function (subscribeScript) {
        this.subscribeScript = subscribeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withSubscribeScript = function (subscribeScript) {
        this.subscribeScript = subscribeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getRenewScript = function () {
        return this.renewScript;
    };
    CreateNamespaceRequest.prototype.setRenewScript = function (renewScript) {
        this.renewScript = renewScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withRenewScript = function (renewScript) {
        this.renewScript = renewScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getUnsubscribeScript = function () {
        return this.unsubscribeScript;
    };
    CreateNamespaceRequest.prototype.setUnsubscribeScript = function (unsubscribeScript) {
        this.unsubscribeScript = unsubscribeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withUnsubscribeScript = function (unsubscribeScript) {
        this.unsubscribeScript = unsubscribeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getTakeOverScript = function () {
        return this.takeOverScript;
    };
    CreateNamespaceRequest.prototype.setTakeOverScript = function (takeOverScript) {
        this.takeOverScript = takeOverScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withTakeOverScript = function (takeOverScript) {
        this.takeOverScript = takeOverScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getChangeSubscriptionStatusNotification = function () {
        return this.changeSubscriptionStatusNotification;
    };
    CreateNamespaceRequest.prototype.setChangeSubscriptionStatusNotification = function (changeSubscriptionStatusNotification) {
        this.changeSubscriptionStatusNotification = changeSubscriptionStatusNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangeSubscriptionStatusNotification = function (changeSubscriptionStatusNotification) {
        this.changeSubscriptionStatusNotification = changeSubscriptionStatusNotification;
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
            .withCurrencyUsagePriority(data["currencyUsagePriority"])
            .withDescription(data["description"])
            .withSharedFreeCurrency(data["sharedFreeCurrency"])
            .withPlatformSetting(Gs2Money2.PlatformSetting.fromDict(data["platformSetting"]))
            .withDepositBalanceScript(Gs2Money2.ScriptSetting.fromDict(data["depositBalanceScript"]))
            .withWithdrawBalanceScript(Gs2Money2.ScriptSetting.fromDict(data["withdrawBalanceScript"]))
            .withVerifyReceiptScript(Gs2Money2.ScriptSetting.fromDict(data["verifyReceiptScript"]))
            .withSubscribeScript(data["subscribeScript"])
            .withRenewScript(data["renewScript"])
            .withUnsubscribeScript(data["unsubscribeScript"])
            .withTakeOverScript(Gs2Money2.ScriptSetting.fromDict(data["takeOverScript"]))
            .withChangeSubscriptionStatusNotification(Gs2Money2.NotificationSetting.fromDict(data["changeSubscriptionStatusNotification"]))
            .withLogSetting(Gs2Money2.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            "name": this.getName(),
            "currencyUsagePriority": this.getCurrencyUsagePriority(),
            "description": this.getDescription(),
            "sharedFreeCurrency": this.getSharedFreeCurrency(),
            "platformSetting": (_a = this.getPlatformSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "depositBalanceScript": (_b = this.getDepositBalanceScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "withdrawBalanceScript": (_c = this.getWithdrawBalanceScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "verifyReceiptScript": (_d = this.getVerifyReceiptScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "subscribeScript": this.getSubscribeScript(),
            "renewScript": this.getRenewScript(),
            "unsubscribeScript": this.getUnsubscribeScript(),
            "takeOverScript": (_e = this.getTakeOverScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "changeSubscriptionStatusNotification": (_f = this.getChangeSubscriptionStatusNotification()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "logSetting": (_g = this.getLogSetting()) === null || _g === void 0 ? void 0 : _g.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map