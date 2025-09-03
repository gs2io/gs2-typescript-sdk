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
var Gs2Money = tslib_1.__importStar(require("../../money/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:money:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.transactionSetting = null;
        this.priority = null;
        this.shareFree = null;
        this.currency = null;
        this.appleKey = null;
        this.googleKey = null;
        this.enableFakeReceipt = null;
        this.createWalletScript = null;
        this.depositScript = null;
        this.withdrawScript = null;
        this.balance = null;
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
    Namespace.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    Namespace.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    Namespace.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    Namespace.prototype.getPriority = function () {
        return this.priority;
    };
    Namespace.prototype.setPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    Namespace.prototype.withPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    Namespace.prototype.getShareFree = function () {
        return this.shareFree;
    };
    Namespace.prototype.setShareFree = function (shareFree) {
        this.shareFree = shareFree;
        return this;
    };
    Namespace.prototype.withShareFree = function (shareFree) {
        this.shareFree = shareFree;
        return this;
    };
    Namespace.prototype.getCurrency = function () {
        return this.currency;
    };
    Namespace.prototype.setCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    Namespace.prototype.withCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    Namespace.prototype.getAppleKey = function () {
        return this.appleKey;
    };
    Namespace.prototype.setAppleKey = function (appleKey) {
        this.appleKey = appleKey;
        return this;
    };
    Namespace.prototype.withAppleKey = function (appleKey) {
        this.appleKey = appleKey;
        return this;
    };
    Namespace.prototype.getGoogleKey = function () {
        return this.googleKey;
    };
    Namespace.prototype.setGoogleKey = function (googleKey) {
        this.googleKey = googleKey;
        return this;
    };
    Namespace.prototype.withGoogleKey = function (googleKey) {
        this.googleKey = googleKey;
        return this;
    };
    Namespace.prototype.getEnableFakeReceipt = function () {
        return this.enableFakeReceipt;
    };
    Namespace.prototype.setEnableFakeReceipt = function (enableFakeReceipt) {
        this.enableFakeReceipt = enableFakeReceipt;
        return this;
    };
    Namespace.prototype.withEnableFakeReceipt = function (enableFakeReceipt) {
        this.enableFakeReceipt = enableFakeReceipt;
        return this;
    };
    Namespace.prototype.getCreateWalletScript = function () {
        return this.createWalletScript;
    };
    Namespace.prototype.setCreateWalletScript = function (createWalletScript) {
        this.createWalletScript = createWalletScript;
        return this;
    };
    Namespace.prototype.withCreateWalletScript = function (createWalletScript) {
        this.createWalletScript = createWalletScript;
        return this;
    };
    Namespace.prototype.getDepositScript = function () {
        return this.depositScript;
    };
    Namespace.prototype.setDepositScript = function (depositScript) {
        this.depositScript = depositScript;
        return this;
    };
    Namespace.prototype.withDepositScript = function (depositScript) {
        this.depositScript = depositScript;
        return this;
    };
    Namespace.prototype.getWithdrawScript = function () {
        return this.withdrawScript;
    };
    Namespace.prototype.setWithdrawScript = function (withdrawScript) {
        this.withdrawScript = withdrawScript;
        return this;
    };
    Namespace.prototype.withWithdrawScript = function (withdrawScript) {
        this.withdrawScript = withdrawScript;
        return this;
    };
    Namespace.prototype.getBalance = function () {
        return this.balance;
    };
    Namespace.prototype.setBalance = function (balance) {
        this.balance = balance;
        return this;
    };
    Namespace.prototype.withBalance = function (balance) {
        this.balance = balance;
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
            .withTransactionSetting(Gs2Money.TransactionSetting.fromDict(data["transactionSetting"]))
            .withPriority(data["priority"])
            .withShareFree(data["shareFree"])
            .withCurrency(data["currency"])
            .withAppleKey(data["appleKey"])
            .withGoogleKey(data["googleKey"])
            .withEnableFakeReceipt(data["enableFakeReceipt"])
            .withCreateWalletScript(Gs2Money.ScriptSetting.fromDict(data["createWalletScript"]))
            .withDepositScript(Gs2Money.ScriptSetting.fromDict(data["depositScript"]))
            .withWithdrawScript(Gs2Money.ScriptSetting.fromDict(data["withdrawScript"]))
            .withBalance(data["balance"])
            .withLogSetting(Gs2Money.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d, _e;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "priority": this.getPriority(),
            "shareFree": this.getShareFree(),
            "currency": this.getCurrency(),
            "appleKey": this.getAppleKey(),
            "googleKey": this.getGoogleKey(),
            "enableFakeReceipt": this.getEnableFakeReceipt(),
            "createWalletScript": (_b = this.getCreateWalletScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "depositScript": (_c = this.getDepositScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "withdrawScript": (_d = this.getWithdrawScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "balance": this.getBalance(),
            "logSetting": (_e = this.getLogSetting()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map