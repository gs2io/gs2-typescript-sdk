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
var ScriptSetting_1 = (0, tslib_1.__importDefault)(require("./ScriptSetting"));
var LogSetting_1 = (0, tslib_1.__importDefault)(require("./LogSetting"));
var grnFormat = "grn:gs2:{region}:{ownerId}:account:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.changePasswordIfTakeOver = null;
        this.createAccountScript = null;
        this.authenticationScript = null;
        this.createTakeOverScript = null;
        this.doTakeOverScript = null;
        this.logSetting = null;
        this.createdAt = null;
        this.updatedAt = null;
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
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
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
    Namespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withChangePasswordIfTakeOver(data["changePasswordIfTakeOver"])
            .withCreateAccountScript(ScriptSetting_1.default.fromDict(data["createAccountScript"]))
            .withAuthenticationScript(ScriptSetting_1.default.fromDict(data["authenticationScript"]))
            .withCreateTakeOverScript(ScriptSetting_1.default.fromDict(data["createTakeOverScript"]))
            .withDoTakeOverScript(ScriptSetting_1.default.fromDict(data["doTakeOverScript"]))
            .withLogSetting(LogSetting_1.default.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c, _d, _e;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "changePasswordIfTakeOver": this.getChangePasswordIfTakeOver(),
            "createAccountScript": (_a = this.getCreateAccountScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "authenticationScript": (_b = this.getAuthenticationScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "createTakeOverScript": (_c = this.getCreateTakeOverScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "doTakeOverScript": (_d = this.getDoTakeOverScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "logSetting": (_e = this.getLogSetting()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map