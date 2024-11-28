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
var Gs2Experience = tslib_1.__importStar(require("../../experience/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:experience:{namespaceName}";
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.transactionSetting = null;
        this.rankCapScriptId = null;
        this.changeExperienceScript = null;
        this.changeRankScript = null;
        this.changeRankCapScript = null;
        this.overflowExperienceScript = null;
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
    Namespace.prototype.getRankCapScriptId = function () {
        return this.rankCapScriptId;
    };
    Namespace.prototype.setRankCapScriptId = function (rankCapScriptId) {
        this.rankCapScriptId = rankCapScriptId;
        return this;
    };
    Namespace.prototype.withRankCapScriptId = function (rankCapScriptId) {
        this.rankCapScriptId = rankCapScriptId;
        return this;
    };
    Namespace.prototype.getChangeExperienceScript = function () {
        return this.changeExperienceScript;
    };
    Namespace.prototype.setChangeExperienceScript = function (changeExperienceScript) {
        this.changeExperienceScript = changeExperienceScript;
        return this;
    };
    Namespace.prototype.withChangeExperienceScript = function (changeExperienceScript) {
        this.changeExperienceScript = changeExperienceScript;
        return this;
    };
    Namespace.prototype.getChangeRankScript = function () {
        return this.changeRankScript;
    };
    Namespace.prototype.setChangeRankScript = function (changeRankScript) {
        this.changeRankScript = changeRankScript;
        return this;
    };
    Namespace.prototype.withChangeRankScript = function (changeRankScript) {
        this.changeRankScript = changeRankScript;
        return this;
    };
    Namespace.prototype.getChangeRankCapScript = function () {
        return this.changeRankCapScript;
    };
    Namespace.prototype.setChangeRankCapScript = function (changeRankCapScript) {
        this.changeRankCapScript = changeRankCapScript;
        return this;
    };
    Namespace.prototype.withChangeRankCapScript = function (changeRankCapScript) {
        this.changeRankCapScript = changeRankCapScript;
        return this;
    };
    Namespace.prototype.getOverflowExperienceScript = function () {
        return this.overflowExperienceScript;
    };
    Namespace.prototype.setOverflowExperienceScript = function (overflowExperienceScript) {
        this.overflowExperienceScript = overflowExperienceScript;
        return this;
    };
    Namespace.prototype.withOverflowExperienceScript = function (overflowExperienceScript) {
        this.overflowExperienceScript = overflowExperienceScript;
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
            .withTransactionSetting(Gs2Experience.TransactionSetting.fromDict(data["transactionSetting"]))
            .withRankCapScriptId(data["rankCapScriptId"])
            .withChangeExperienceScript(Gs2Experience.ScriptSetting.fromDict(data["changeExperienceScript"]))
            .withChangeRankScript(Gs2Experience.ScriptSetting.fromDict(data["changeRankScript"]))
            .withChangeRankCapScript(Gs2Experience.ScriptSetting.fromDict(data["changeRankCapScript"]))
            .withOverflowExperienceScript(data["overflowExperienceScript"])
            .withLogSetting(Gs2Experience.LogSetting.fromDict(data["logSetting"]))
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
            "rankCapScriptId": this.getRankCapScriptId(),
            "changeExperienceScript": (_b = this.getChangeExperienceScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "changeRankScript": (_c = this.getChangeRankScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "changeRankCapScript": (_d = this.getChangeRankCapScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "overflowExperienceScript": this.getOverflowExperienceScript(),
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