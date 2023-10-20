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
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.transactionSetting = null;
        this.rankCapScriptId = null;
        this.changeExperienceScript = null;
        this.changeRankScript = null;
        this.changeRankCapScript = null;
        this.overflowExperienceScript = null;
        this.logSetting = null;
    }
    UpdateNamespaceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateNamespaceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateNamespaceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNamespaceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateNamespaceRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateNamespaceRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNamespaceRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateNamespaceRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateNamespaceRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNamespaceRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateNamespaceRequest.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    UpdateNamespaceRequest.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.getRankCapScriptId = function () {
        return this.rankCapScriptId;
    };
    UpdateNamespaceRequest.prototype.setRankCapScriptId = function (rankCapScriptId) {
        this.rankCapScriptId = rankCapScriptId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withRankCapScriptId = function (rankCapScriptId) {
        this.rankCapScriptId = rankCapScriptId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getChangeExperienceScript = function () {
        return this.changeExperienceScript;
    };
    UpdateNamespaceRequest.prototype.setChangeExperienceScript = function (changeExperienceScript) {
        this.changeExperienceScript = changeExperienceScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withChangeExperienceScript = function (changeExperienceScript) {
        this.changeExperienceScript = changeExperienceScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getChangeRankScript = function () {
        return this.changeRankScript;
    };
    UpdateNamespaceRequest.prototype.setChangeRankScript = function (changeRankScript) {
        this.changeRankScript = changeRankScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withChangeRankScript = function (changeRankScript) {
        this.changeRankScript = changeRankScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getChangeRankCapScript = function () {
        return this.changeRankCapScript;
    };
    UpdateNamespaceRequest.prototype.setChangeRankCapScript = function (changeRankCapScript) {
        this.changeRankCapScript = changeRankCapScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withChangeRankCapScript = function (changeRankCapScript) {
        this.changeRankCapScript = changeRankCapScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getOverflowExperienceScript = function () {
        return this.overflowExperienceScript;
    };
    UpdateNamespaceRequest.prototype.setOverflowExperienceScript = function (overflowExperienceScript) {
        this.overflowExperienceScript = overflowExperienceScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withOverflowExperienceScript = function (overflowExperienceScript) {
        this.overflowExperienceScript = overflowExperienceScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getLogSetting = function () {
        return this.logSetting;
    };
    UpdateNamespaceRequest.prototype.setLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.withLogSetting = function (logSetting) {
        this.logSetting = logSetting;
        return this;
    };
    UpdateNamespaceRequest.fromDict = function (data) {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withTransactionSetting(Gs2Experience.TransactionSetting.fromDict(data["transactionSetting"]))
            .withRankCapScriptId(data["rankCapScriptId"])
            .withChangeExperienceScript(Gs2Experience.ScriptSetting.fromDict(data["changeExperienceScript"]))
            .withChangeRankScript(Gs2Experience.ScriptSetting.fromDict(data["changeRankScript"]))
            .withChangeRankCapScript(Gs2Experience.ScriptSetting.fromDict(data["changeRankCapScript"]))
            .withOverflowExperienceScript(Gs2Experience.ScriptSetting.fromDict(data["overflowExperienceScript"]))
            .withLogSetting(Gs2Experience.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "rankCapScriptId": this.getRankCapScriptId(),
            "changeExperienceScript": (_b = this.getChangeExperienceScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "changeRankScript": (_c = this.getChangeRankScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "changeRankCapScript": (_d = this.getChangeRankCapScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "overflowExperienceScript": (_e = this.getOverflowExperienceScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "logSetting": (_f = this.getLogSetting()) === null || _f === void 0 ? void 0 : _f.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map