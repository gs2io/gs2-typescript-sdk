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
var grnFormat = "grn:gs2:{region}:{ownerId}:script:{namespaceName}:script:{scriptName}";
var Script = /** @class */ (function () {
    function Script() {
        this.scriptId = null;
        this.name = null;
        this.description = null;
        this.script = null;
        this.disableStringNumberToNumber = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Script.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{scriptName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Script.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{scriptName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Script.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{scriptName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Script.getScriptName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{scriptName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Script.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getScriptName(grn) == null || this.getScriptName(grn) === '') {
            return false;
        }
        return true;
    };
    Script.createGrn = function (region, ownerId, namespaceName, scriptName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{scriptName}', scriptName !== null && scriptName !== void 0 ? scriptName : '');
    };
    Script.prototype.getScriptId = function () {
        return this.scriptId;
    };
    Script.prototype.setScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    Script.prototype.withScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    Script.prototype.getName = function () {
        return this.name;
    };
    Script.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Script.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Script.prototype.getDescription = function () {
        return this.description;
    };
    Script.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    Script.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    Script.prototype.getScript = function () {
        return this.script;
    };
    Script.prototype.setScript = function (script) {
        this.script = script;
        return this;
    };
    Script.prototype.withScript = function (script) {
        this.script = script;
        return this;
    };
    Script.prototype.getDisableStringNumberToNumber = function () {
        return this.disableStringNumberToNumber;
    };
    Script.prototype.setDisableStringNumberToNumber = function (disableStringNumberToNumber) {
        this.disableStringNumberToNumber = disableStringNumberToNumber;
        return this;
    };
    Script.prototype.withDisableStringNumberToNumber = function (disableStringNumberToNumber) {
        this.disableStringNumberToNumber = disableStringNumberToNumber;
        return this;
    };
    Script.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Script.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Script.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Script.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Script.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Script.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Script.prototype.getRevision = function () {
        return this.revision;
    };
    Script.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Script.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Script.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Script()
            .withScriptId(data["scriptId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withScript(data["script"])
            .withDisableStringNumberToNumber(data["disableStringNumberToNumber"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Script.prototype.toDict = function () {
        return {
            "scriptId": this.getScriptId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "script": this.getScript(),
            "disableStringNumberToNumber": this.getDisableStringNumberToNumber(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Script;
}());
exports.default = Script;
//# sourceMappingURL=Script.js.map