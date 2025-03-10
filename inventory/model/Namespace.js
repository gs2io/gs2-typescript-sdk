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
var Gs2Inventory = tslib_1.__importStar(require("../../inventory/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:inventory:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.acquireScript = null;
        this.overflowScript = null;
        this.consumeScript = null;
        this.simpleItemAcquireScript = null;
        this.simpleItemConsumeScript = null;
        this.bigItemAcquireScript = null;
        this.bigItemConsumeScript = null;
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
    Namespace.prototype.getAcquireScript = function () {
        return this.acquireScript;
    };
    Namespace.prototype.setAcquireScript = function (acquireScript) {
        this.acquireScript = acquireScript;
        return this;
    };
    Namespace.prototype.withAcquireScript = function (acquireScript) {
        this.acquireScript = acquireScript;
        return this;
    };
    Namespace.prototype.getOverflowScript = function () {
        return this.overflowScript;
    };
    Namespace.prototype.setOverflowScript = function (overflowScript) {
        this.overflowScript = overflowScript;
        return this;
    };
    Namespace.prototype.withOverflowScript = function (overflowScript) {
        this.overflowScript = overflowScript;
        return this;
    };
    Namespace.prototype.getConsumeScript = function () {
        return this.consumeScript;
    };
    Namespace.prototype.setConsumeScript = function (consumeScript) {
        this.consumeScript = consumeScript;
        return this;
    };
    Namespace.prototype.withConsumeScript = function (consumeScript) {
        this.consumeScript = consumeScript;
        return this;
    };
    Namespace.prototype.getSimpleItemAcquireScript = function () {
        return this.simpleItemAcquireScript;
    };
    Namespace.prototype.setSimpleItemAcquireScript = function (simpleItemAcquireScript) {
        this.simpleItemAcquireScript = simpleItemAcquireScript;
        return this;
    };
    Namespace.prototype.withSimpleItemAcquireScript = function (simpleItemAcquireScript) {
        this.simpleItemAcquireScript = simpleItemAcquireScript;
        return this;
    };
    Namespace.prototype.getSimpleItemConsumeScript = function () {
        return this.simpleItemConsumeScript;
    };
    Namespace.prototype.setSimpleItemConsumeScript = function (simpleItemConsumeScript) {
        this.simpleItemConsumeScript = simpleItemConsumeScript;
        return this;
    };
    Namespace.prototype.withSimpleItemConsumeScript = function (simpleItemConsumeScript) {
        this.simpleItemConsumeScript = simpleItemConsumeScript;
        return this;
    };
    Namespace.prototype.getBigItemAcquireScript = function () {
        return this.bigItemAcquireScript;
    };
    Namespace.prototype.setBigItemAcquireScript = function (bigItemAcquireScript) {
        this.bigItemAcquireScript = bigItemAcquireScript;
        return this;
    };
    Namespace.prototype.withBigItemAcquireScript = function (bigItemAcquireScript) {
        this.bigItemAcquireScript = bigItemAcquireScript;
        return this;
    };
    Namespace.prototype.getBigItemConsumeScript = function () {
        return this.bigItemConsumeScript;
    };
    Namespace.prototype.setBigItemConsumeScript = function (bigItemConsumeScript) {
        this.bigItemConsumeScript = bigItemConsumeScript;
        return this;
    };
    Namespace.prototype.withBigItemConsumeScript = function (bigItemConsumeScript) {
        this.bigItemConsumeScript = bigItemConsumeScript;
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
            .withAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["acquireScript"]))
            .withOverflowScript(Gs2Inventory.ScriptSetting.fromDict(data["overflowScript"]))
            .withConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["consumeScript"]))
            .withSimpleItemAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["simpleItemAcquireScript"]))
            .withSimpleItemConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["simpleItemConsumeScript"]))
            .withBigItemAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["bigItemAcquireScript"]))
            .withBigItemConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["bigItemConsumeScript"]))
            .withLogSetting(Gs2Inventory.LogSetting.fromDict(data["logSetting"]))
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
            "acquireScript": (_a = this.getAcquireScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "overflowScript": (_b = this.getOverflowScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "consumeScript": (_c = this.getConsumeScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "simpleItemAcquireScript": (_d = this.getSimpleItemAcquireScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "simpleItemConsumeScript": (_e = this.getSimpleItemConsumeScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "bigItemAcquireScript": (_f = this.getBigItemAcquireScript()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "bigItemConsumeScript": (_g = this.getBigItemConsumeScript()) === null || _g === void 0 ? void 0 : _g.toDict(),
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