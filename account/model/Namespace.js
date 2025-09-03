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
var Gs2Account = tslib_1.__importStar(require("../../account/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:account:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.transactionSetting = null;
        this.changePasswordIfTakeOver = null;
        this.differentUserIdForLoginAndDataRetention = null;
        this.createAccountScript = null;
        this.authenticationScript = null;
        this.createTakeOverScript = null;
        this.doTakeOverScript = null;
        this.banScript = null;
        this.unBanScript = null;
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
    Namespace.prototype.getChangePasswordIfTakeOver = function () {
        return this.changePasswordIfTakeOver;
    };
    Namespace.prototype.setChangePasswordIfTakeOver = function (changePasswordIfTakeOver) {
        this.changePasswordIfTakeOver = changePasswordIfTakeOver;
        return this;
    };
    Namespace.prototype.withChangePasswordIfTakeOver = function (changePasswordIfTakeOver) {
        this.changePasswordIfTakeOver = changePasswordIfTakeOver;
        return this;
    };
    Namespace.prototype.getDifferentUserIdForLoginAndDataRetention = function () {
        return this.differentUserIdForLoginAndDataRetention;
    };
    Namespace.prototype.setDifferentUserIdForLoginAndDataRetention = function (differentUserIdForLoginAndDataRetention) {
        this.differentUserIdForLoginAndDataRetention = differentUserIdForLoginAndDataRetention;
        return this;
    };
    Namespace.prototype.withDifferentUserIdForLoginAndDataRetention = function (differentUserIdForLoginAndDataRetention) {
        this.differentUserIdForLoginAndDataRetention = differentUserIdForLoginAndDataRetention;
        return this;
    };
    Namespace.prototype.getCreateAccountScript = function () {
        return this.createAccountScript;
    };
    Namespace.prototype.setCreateAccountScript = function (createAccountScript) {
        this.createAccountScript = createAccountScript;
        return this;
    };
    Namespace.prototype.withCreateAccountScript = function (createAccountScript) {
        this.createAccountScript = createAccountScript;
        return this;
    };
    Namespace.prototype.getAuthenticationScript = function () {
        return this.authenticationScript;
    };
    Namespace.prototype.setAuthenticationScript = function (authenticationScript) {
        this.authenticationScript = authenticationScript;
        return this;
    };
    Namespace.prototype.withAuthenticationScript = function (authenticationScript) {
        this.authenticationScript = authenticationScript;
        return this;
    };
    Namespace.prototype.getCreateTakeOverScript = function () {
        return this.createTakeOverScript;
    };
    Namespace.prototype.setCreateTakeOverScript = function (createTakeOverScript) {
        this.createTakeOverScript = createTakeOverScript;
        return this;
    };
    Namespace.prototype.withCreateTakeOverScript = function (createTakeOverScript) {
        this.createTakeOverScript = createTakeOverScript;
        return this;
    };
    Namespace.prototype.getDoTakeOverScript = function () {
        return this.doTakeOverScript;
    };
    Namespace.prototype.setDoTakeOverScript = function (doTakeOverScript) {
        this.doTakeOverScript = doTakeOverScript;
        return this;
    };
    Namespace.prototype.withDoTakeOverScript = function (doTakeOverScript) {
        this.doTakeOverScript = doTakeOverScript;
        return this;
    };
    Namespace.prototype.getBanScript = function () {
        return this.banScript;
    };
    Namespace.prototype.setBanScript = function (banScript) {
        this.banScript = banScript;
        return this;
    };
    Namespace.prototype.withBanScript = function (banScript) {
        this.banScript = banScript;
        return this;
    };
    Namespace.prototype.getUnBanScript = function () {
        return this.unBanScript;
    };
    Namespace.prototype.setUnBanScript = function (unBanScript) {
        this.unBanScript = unBanScript;
        return this;
    };
    Namespace.prototype.withUnBanScript = function (unBanScript) {
        this.unBanScript = unBanScript;
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
            .withTransactionSetting(Gs2Account.TransactionSetting.fromDict(data["transactionSetting"]))
            .withChangePasswordIfTakeOver(data["changePasswordIfTakeOver"])
            .withDifferentUserIdForLoginAndDataRetention(data["differentUserIdForLoginAndDataRetention"])
            .withCreateAccountScript(Gs2Account.ScriptSetting.fromDict(data["createAccountScript"]))
            .withAuthenticationScript(Gs2Account.ScriptSetting.fromDict(data["authenticationScript"]))
            .withCreateTakeOverScript(Gs2Account.ScriptSetting.fromDict(data["createTakeOverScript"]))
            .withDoTakeOverScript(Gs2Account.ScriptSetting.fromDict(data["doTakeOverScript"]))
            .withBanScript(Gs2Account.ScriptSetting.fromDict(data["banScript"]))
            .withUnBanScript(Gs2Account.ScriptSetting.fromDict(data["unBanScript"]))
            .withLogSetting(Gs2Account.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "changePasswordIfTakeOver": this.getChangePasswordIfTakeOver(),
            "differentUserIdForLoginAndDataRetention": this.getDifferentUserIdForLoginAndDataRetention(),
            "createAccountScript": (_b = this.getCreateAccountScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "authenticationScript": (_c = this.getAuthenticationScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "createTakeOverScript": (_d = this.getCreateTakeOverScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "doTakeOverScript": (_e = this.getDoTakeOverScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "banScript": (_f = this.getBanScript()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "unBanScript": (_g = this.getUnBanScript()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "logSetting": (_h = this.getLogSetting()) === null || _h === void 0 ? void 0 : _h.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map