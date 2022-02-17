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
var Namespace = /** @class */ (function () {
    function Namespace() {
        this.namespaceId = null;
        this.name = null;
        this.description = null;
        this.experienceCapScriptId = null;
        this.changeExperienceScript = null;
        this.changeRankScript = null;
        this.changeRankCapScript = null;
        this.overflowExperienceScript = null;
        this.logSetting = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
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
    Namespace.prototype.getExperienceCapScriptId = function () {
        return this.experienceCapScriptId;
    };
    Namespace.prototype.setExperienceCapScriptId = function (experienceCapScriptId) {
        this.experienceCapScriptId = experienceCapScriptId;
        return this;
    };
    Namespace.prototype.withExperienceCapScriptId = function (experienceCapScriptId) {
        this.experienceCapScriptId = experienceCapScriptId;
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
    Namespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withExperienceCapScriptId(data["experienceCapScriptId"])
            .withChangeExperienceScript(ScriptSetting_1.default.fromDict(data["changeExperienceScript"]))
            .withChangeRankScript(ScriptSetting_1.default.fromDict(data["changeRankScript"]))
            .withChangeRankCapScript(ScriptSetting_1.default.fromDict(data["changeRankCapScript"]))
            .withOverflowExperienceScript(ScriptSetting_1.default.fromDict(data["overflowExperienceScript"]))
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
            "experienceCapScriptId": this.getExperienceCapScriptId(),
            "changeExperienceScript": (_a = this.getChangeExperienceScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "changeRankScript": (_b = this.getChangeRankScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "changeRankCapScript": (_c = this.getChangeRankCapScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "overflowExperienceScript": (_d = this.getOverflowExperienceScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "logSetting": (_e = this.getLogSetting()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Namespace;
}());
exports.default = Namespace;
//# sourceMappingURL=Namespace.js.map