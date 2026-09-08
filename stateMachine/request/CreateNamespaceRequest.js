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
var Gs2StateMachine = tslib_1.__importStar(require("../model"));
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.supportSpeculativeExecution = null;
        this.transactionSetting = null;
        this.transactionSettingV2 = null;
        this.startScript = null;
        this.passScript = null;
        this.errorScript = null;
        this.lowestStateMachineVersion = null;
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
    CreateNamespaceRequest.prototype.getSupportSpeculativeExecution = function () {
        return this.supportSpeculativeExecution;
    };
    CreateNamespaceRequest.prototype.setSupportSpeculativeExecution = function (supportSpeculativeExecution) {
        this.supportSpeculativeExecution = supportSpeculativeExecution;
        return this;
    };
    CreateNamespaceRequest.prototype.withSupportSpeculativeExecution = function (supportSpeculativeExecution) {
        this.supportSpeculativeExecution = supportSpeculativeExecution;
        return this;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    CreateNamespaceRequest.prototype.getTransactionSettingV2 = function () {
        return this.transactionSettingV2;
    };
    CreateNamespaceRequest.prototype.setTransactionSettingV2 = function (transactionSettingV2) {
        this.transactionSettingV2 = transactionSettingV2;
        return this;
    };
    CreateNamespaceRequest.prototype.withTransactionSettingV2 = function (transactionSettingV2) {
        this.transactionSettingV2 = transactionSettingV2;
        return this;
    };
    CreateNamespaceRequest.prototype.getStartScript = function () {
        return this.startScript;
    };
    CreateNamespaceRequest.prototype.setStartScript = function (startScript) {
        this.startScript = startScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withStartScript = function (startScript) {
        this.startScript = startScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getPassScript = function () {
        return this.passScript;
    };
    CreateNamespaceRequest.prototype.setPassScript = function (passScript) {
        this.passScript = passScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withPassScript = function (passScript) {
        this.passScript = passScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getErrorScript = function () {
        return this.errorScript;
    };
    CreateNamespaceRequest.prototype.setErrorScript = function (errorScript) {
        this.errorScript = errorScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withErrorScript = function (errorScript) {
        this.errorScript = errorScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getLowestStateMachineVersion = function () {
        return this.lowestStateMachineVersion;
    };
    CreateNamespaceRequest.prototype.setLowestStateMachineVersion = function (lowestStateMachineVersion) {
        this.lowestStateMachineVersion = lowestStateMachineVersion;
        return this;
    };
    CreateNamespaceRequest.prototype.withLowestStateMachineVersion = function (lowestStateMachineVersion) {
        this.lowestStateMachineVersion = lowestStateMachineVersion;
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
            .withSupportSpeculativeExecution(data["supportSpeculativeExecution"])
            .withTransactionSetting(Gs2StateMachine.TransactionSetting.fromDict(data["transactionSetting"]))
            .withTransactionSettingV2(Gs2StateMachine.TransactionSettingV2.fromDict(data["transactionSettingV2"]))
            .withStartScript(Gs2StateMachine.ScriptSetting.fromDict(data["startScript"]))
            .withPassScript(Gs2StateMachine.ScriptSetting.fromDict(data["passScript"]))
            .withErrorScript(Gs2StateMachine.ScriptSetting.fromDict(data["errorScript"]))
            .withLowestStateMachineVersion(data["lowestStateMachineVersion"])
            .withLogSetting(Gs2StateMachine.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "supportSpeculativeExecution": this.getSupportSpeculativeExecution(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "transactionSettingV2": (_b = this.getTransactionSettingV2()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "startScript": (_c = this.getStartScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "passScript": (_d = this.getPassScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "errorScript": (_e = this.getErrorScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "lowestStateMachineVersion": this.getLowestStateMachineVersion(),
            "logSetting": (_f = this.getLogSetting()) === null || _f === void 0 ? void 0 : _f.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map