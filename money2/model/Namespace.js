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
var Gs2Money2 = tslib_1.__importStar(require("../../money2/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.currencyUsagePriority = null;
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
    Namespace.prototype.getCurrencyUsagePriority = function () {
        return this.currencyUsagePriority;
    };
    Namespace.prototype.setCurrencyUsagePriority = function (currencyUsagePriority) {
        this.currencyUsagePriority = currencyUsagePriority;
        return this;
    };
    Namespace.prototype.withCurrencyUsagePriority = function (currencyUsagePriority) {
        this.currencyUsagePriority = currencyUsagePriority;
        return this;
    };
    Namespace.prototype.getSharedFreeCurrency = function () {
        return this.sharedFreeCurrency;
    };
    Namespace.prototype.setSharedFreeCurrency = function (sharedFreeCurrency) {
        this.sharedFreeCurrency = sharedFreeCurrency;
        return this;
    };
    Namespace.prototype.withSharedFreeCurrency = function (sharedFreeCurrency) {
        this.sharedFreeCurrency = sharedFreeCurrency;
        return this;
    };
    Namespace.prototype.getPlatformSetting = function () {
        return this.platformSetting;
    };
    Namespace.prototype.setPlatformSetting = function (platformSetting) {
        this.platformSetting = platformSetting;
        return this;
    };
    Namespace.prototype.withPlatformSetting = function (platformSetting) {
        this.platformSetting = platformSetting;
        return this;
    };
    Namespace.prototype.getDepositBalanceScript = function () {
        return this.depositBalanceScript;
    };
    Namespace.prototype.setDepositBalanceScript = function (depositBalanceScript) {
        this.depositBalanceScript = depositBalanceScript;
        return this;
    };
    Namespace.prototype.withDepositBalanceScript = function (depositBalanceScript) {
        this.depositBalanceScript = depositBalanceScript;
        return this;
    };
    Namespace.prototype.getWithdrawBalanceScript = function () {
        return this.withdrawBalanceScript;
    };
    Namespace.prototype.setWithdrawBalanceScript = function (withdrawBalanceScript) {
        this.withdrawBalanceScript = withdrawBalanceScript;
        return this;
    };
    Namespace.prototype.withWithdrawBalanceScript = function (withdrawBalanceScript) {
        this.withdrawBalanceScript = withdrawBalanceScript;
        return this;
    };
    Namespace.prototype.getVerifyReceiptScript = function () {
        return this.verifyReceiptScript;
    };
    Namespace.prototype.setVerifyReceiptScript = function (verifyReceiptScript) {
        this.verifyReceiptScript = verifyReceiptScript;
        return this;
    };
    Namespace.prototype.withVerifyReceiptScript = function (verifyReceiptScript) {
        this.verifyReceiptScript = verifyReceiptScript;
        return this;
    };
    Namespace.prototype.getSubscribeScript = function () {
        return this.subscribeScript;
    };
    Namespace.prototype.setSubscribeScript = function (subscribeScript) {
        this.subscribeScript = subscribeScript;
        return this;
    };
    Namespace.prototype.withSubscribeScript = function (subscribeScript) {
        this.subscribeScript = subscribeScript;
        return this;
    };
    Namespace.prototype.getRenewScript = function () {
        return this.renewScript;
    };
    Namespace.prototype.setRenewScript = function (renewScript) {
        this.renewScript = renewScript;
        return this;
    };
    Namespace.prototype.withRenewScript = function (renewScript) {
        this.renewScript = renewScript;
        return this;
    };
    Namespace.prototype.getUnsubscribeScript = function () {
        return this.unsubscribeScript;
    };
    Namespace.prototype.setUnsubscribeScript = function (unsubscribeScript) {
        this.unsubscribeScript = unsubscribeScript;
        return this;
    };
    Namespace.prototype.withUnsubscribeScript = function (unsubscribeScript) {
        this.unsubscribeScript = unsubscribeScript;
        return this;
    };
    Namespace.prototype.getTakeOverScript = function () {
        return this.takeOverScript;
    };
    Namespace.prototype.setTakeOverScript = function (takeOverScript) {
        this.takeOverScript = takeOverScript;
        return this;
    };
    Namespace.prototype.withTakeOverScript = function (takeOverScript) {
        this.takeOverScript = takeOverScript;
        return this;
    };
    Namespace.prototype.getChangeSubscriptionStatusNotification = function () {
        return this.changeSubscriptionStatusNotification;
    };
    Namespace.prototype.setChangeSubscriptionStatusNotification = function (changeSubscriptionStatusNotification) {
        this.changeSubscriptionStatusNotification = changeSubscriptionStatusNotification;
        return this;
    };
    Namespace.prototype.withChangeSubscriptionStatusNotification = function (changeSubscriptionStatusNotification) {
        this.changeSubscriptionStatusNotification = changeSubscriptionStatusNotification;
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
            .withCurrencyUsagePriority(data["currencyUsagePriority"])
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
            .withLogSetting(Gs2Money2.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "currencyUsagePriority": this.getCurrencyUsagePriority(),
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
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map