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
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.currencyUsagePriority = null;
        this.description = null;
        this.transactionSetting = null;
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
    UpdateNamespaceRequest.prototype.getCurrencyUsagePriority = function () {
        return this.currencyUsagePriority;
    };
    UpdateNamespaceRequest.prototype.setCurrencyUsagePriority = function (currencyUsagePriority) {
        this.currencyUsagePriority = currencyUsagePriority;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCurrencyUsagePriority = function (currencyUsagePriority) {
        this.currencyUsagePriority = currencyUsagePriority;
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
    UpdateNamespaceRequest.prototype.getPlatformSetting = function () {
        return this.platformSetting;
    };
    UpdateNamespaceRequest.prototype.setPlatformSetting = function (platformSetting) {
        this.platformSetting = platformSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.withPlatformSetting = function (platformSetting) {
        this.platformSetting = platformSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDepositBalanceScript = function () {
        return this.depositBalanceScript;
    };
    UpdateNamespaceRequest.prototype.setDepositBalanceScript = function (depositBalanceScript) {
        this.depositBalanceScript = depositBalanceScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDepositBalanceScript = function (depositBalanceScript) {
        this.depositBalanceScript = depositBalanceScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getWithdrawBalanceScript = function () {
        return this.withdrawBalanceScript;
    };
    UpdateNamespaceRequest.prototype.setWithdrawBalanceScript = function (withdrawBalanceScript) {
        this.withdrawBalanceScript = withdrawBalanceScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withWithdrawBalanceScript = function (withdrawBalanceScript) {
        this.withdrawBalanceScript = withdrawBalanceScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getVerifyReceiptScript = function () {
        return this.verifyReceiptScript;
    };
    UpdateNamespaceRequest.prototype.setVerifyReceiptScript = function (verifyReceiptScript) {
        this.verifyReceiptScript = verifyReceiptScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withVerifyReceiptScript = function (verifyReceiptScript) {
        this.verifyReceiptScript = verifyReceiptScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getSubscribeScript = function () {
        return this.subscribeScript;
    };
    UpdateNamespaceRequest.prototype.setSubscribeScript = function (subscribeScript) {
        this.subscribeScript = subscribeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withSubscribeScript = function (subscribeScript) {
        this.subscribeScript = subscribeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getRenewScript = function () {
        return this.renewScript;
    };
    UpdateNamespaceRequest.prototype.setRenewScript = function (renewScript) {
        this.renewScript = renewScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withRenewScript = function (renewScript) {
        this.renewScript = renewScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getUnsubscribeScript = function () {
        return this.unsubscribeScript;
    };
    UpdateNamespaceRequest.prototype.setUnsubscribeScript = function (unsubscribeScript) {
        this.unsubscribeScript = unsubscribeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withUnsubscribeScript = function (unsubscribeScript) {
        this.unsubscribeScript = unsubscribeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getTakeOverScript = function () {
        return this.takeOverScript;
    };
    UpdateNamespaceRequest.prototype.setTakeOverScript = function (takeOverScript) {
        this.takeOverScript = takeOverScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withTakeOverScript = function (takeOverScript) {
        this.takeOverScript = takeOverScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getChangeSubscriptionStatusNotification = function () {
        return this.changeSubscriptionStatusNotification;
    };
    UpdateNamespaceRequest.prototype.setChangeSubscriptionStatusNotification = function (changeSubscriptionStatusNotification) {
        this.changeSubscriptionStatusNotification = changeSubscriptionStatusNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withChangeSubscriptionStatusNotification = function (changeSubscriptionStatusNotification) {
        this.changeSubscriptionStatusNotification = changeSubscriptionStatusNotification;
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
            .withCurrencyUsagePriority(data["currencyUsagePriority"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Money2.TransactionSetting.fromDict(data["transactionSetting"]))
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
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return {
            "namespaceName": this.getNamespaceName(),
            "currencyUsagePriority": this.getCurrencyUsagePriority(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "platformSetting": (_b = this.getPlatformSetting()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "depositBalanceScript": (_c = this.getDepositBalanceScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "withdrawBalanceScript": (_d = this.getWithdrawBalanceScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "verifyReceiptScript": (_e = this.getVerifyReceiptScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "subscribeScript": this.getSubscribeScript(),
            "renewScript": this.getRenewScript(),
            "unsubscribeScript": this.getUnsubscribeScript(),
            "takeOverScript": (_f = this.getTakeOverScript()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "changeSubscriptionStatusNotification": (_g = this.getChangeSubscriptionStatusNotification()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "logSetting": (_h = this.getLogSetting()) === null || _h === void 0 ? void 0 : _h.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map