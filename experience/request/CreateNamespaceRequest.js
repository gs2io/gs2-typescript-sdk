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
var Gs2Experience = tslib_1.__importStar(require("../model"));
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.transactionSetting = null;
        this.rankCapScriptId = null;
        this.changeExperienceScript = null;
        this.changeRankScript = null;
        this.changeRankCapScript = null;
        this.overflowExperienceScript = null;
        this.logSetting = null;
    }
    CreateNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateNamespaceRequest.prototype.getName = function () {
        return this.name;
    };
    CreateNamespaceRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateNamespaceRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateNamespaceRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateNamespaceRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNamespaceRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateNamespaceRequest.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    CreateNamespaceRequest.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.getRankCapScriptId = function () {
        return this.rankCapScriptId;
    };
    CreateNamespaceRequest.prototype.setRankCapScriptId = function (rankCapScriptId) {
        this.rankCapScriptId = rankCapScriptId;
        return this;
    };
    CreateNamespaceRequest.prototype.withRankCapScriptId = function (rankCapScriptId) {
        this.rankCapScriptId = rankCapScriptId;
        return this;
    };
    CreateNamespaceRequest.prototype.getChangeExperienceScript = function () {
        return this.changeExperienceScript;
    };
    CreateNamespaceRequest.prototype.setChangeExperienceScript = function (changeExperienceScript) {
        this.changeExperienceScript = changeExperienceScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangeExperienceScript = function (changeExperienceScript) {
        this.changeExperienceScript = changeExperienceScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getChangeRankScript = function () {
        return this.changeRankScript;
    };
    CreateNamespaceRequest.prototype.setChangeRankScript = function (changeRankScript) {
        this.changeRankScript = changeRankScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangeRankScript = function (changeRankScript) {
        this.changeRankScript = changeRankScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getChangeRankCapScript = function () {
        return this.changeRankCapScript;
    };
    CreateNamespaceRequest.prototype.setChangeRankCapScript = function (changeRankCapScript) {
        this.changeRankCapScript = changeRankCapScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangeRankCapScript = function (changeRankCapScript) {
        this.changeRankCapScript = changeRankCapScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getOverflowExperienceScript = function () {
        return this.overflowExperienceScript;
    };
    CreateNamespaceRequest.prototype.setOverflowExperienceScript = function (overflowExperienceScript) {
        this.overflowExperienceScript = overflowExperienceScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withOverflowExperienceScript = function (overflowExperienceScript) {
        this.overflowExperienceScript = overflowExperienceScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    CreateNamespaceRequest.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    CreateNamespaceRequest.fromDict = function (data) {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Experience.TransactionSetting.fromDict(data["transactionSetting"]))
            .withRankCapScriptId(data["rankCapScriptId"])
            .withChangeExperienceScript(Gs2Experience.ScriptSetting.fromDict(data["changeExperienceScript"]))
            .withChangeRankScript(Gs2Experience.ScriptSetting.fromDict(data["changeRankScript"]))
            .withChangeRankCapScript(Gs2Experience.ScriptSetting.fromDict(data["changeRankCapScript"]))
            .withOverflowExperienceScript(data["overflowExperienceScript"])
            .withLogSetting(Gs2Experience.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "rankCapScriptId": this.getRankCapScriptId(),
            "changeExperienceScript": (_b = this.getChangeExperienceScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "changeRankScript": (_c = this.getChangeRankScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "changeRankCapScript": (_d = this.getChangeRankCapScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "overflowExperienceScript": this.getOverflowExperienceScript(),
            "logSetting": (_e = this.getLogSetting()) === null || _e === void 0 ? void 0 : _e.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map