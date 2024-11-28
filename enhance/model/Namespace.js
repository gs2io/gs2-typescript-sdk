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
var Gs2Enhance = tslib_1.__importStar(require("../../enhance/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:enhance:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.transactionSetting = null;
        this.enhanceScript = null;
        this.logSetting = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.enableDirectEnhance = null;
        this.queueNamespaceId = null;
        this.keyId = null;
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
    Namespace.prototype.getEnhanceScript = function () {
        return this.enhanceScript;
    };
    Namespace.prototype.setEnhanceScript = function (enhanceScript) {
        this.enhanceScript = enhanceScript;
        return this;
    };
    Namespace.prototype.withEnhanceScript = function (enhanceScript) {
        this.enhanceScript = enhanceScript;
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
    /** @deprecated */
    Namespace.prototype.getEnableDirectEnhance = function () {
        return this.enableDirectEnhance;
    };
    /** @deprecated */
    Namespace.prototype.setEnableDirectEnhance = function (enableDirectEnhance) {
        this.enableDirectEnhance = enableDirectEnhance;
        return this;
    };
    /** @deprecated */
    Namespace.prototype.withEnableDirectEnhance = function (enableDirectEnhance) {
        this.enableDirectEnhance = enableDirectEnhance;
        return this;
    };
    /** @deprecated */
    Namespace.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    /** @deprecated */
    Namespace.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    /** @deprecated */
    Namespace.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    /** @deprecated */
    Namespace.prototype.getKeyId = function () {
        return this.keyId;
    };
    /** @deprecated */
    Namespace.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    /** @deprecated */
    Namespace.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
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
            .withTransactionSetting(Gs2Enhance.TransactionSetting.fromDict(data["transactionSetting"]))
            .withEnhanceScript(Gs2Enhance.ScriptSetting.fromDict(data["enhanceScript"]))
            .withLogSetting(Gs2Enhance.LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withEnableDirectEnhance(data["enableDirectEnhance"])
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withRevision(data["revision"]);
    };
    Namespace.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "enhanceScript": (_b = this.getEnhanceScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "logSetting": (_c = this.getLogSetting()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "enableDirectEnhance": this.getEnableDirectEnhance(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "revision": this.getRevision(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map