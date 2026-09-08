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
var Gs2Grade = tslib_1.__importStar(require("../model"));
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.transactionSetting = null;
        this.transactionSettingV2 = null;
        this.changeGradeScript = null;
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
    CreateNamespaceRequest.prototype.getChangeGradeScript = function () {
        return this.changeGradeScript;
    };
    CreateNamespaceRequest.prototype.setChangeGradeScript = function (changeGradeScript) {
        this.changeGradeScript = changeGradeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withChangeGradeScript = function (changeGradeScript) {
        this.changeGradeScript = changeGradeScript;
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
            .withTransactionSetting(Gs2Grade.TransactionSetting.fromDict(data["transactionSetting"]))
            .withTransactionSettingV2(Gs2Grade.TransactionSettingV2.fromDict(data["transactionSettingV2"]))
            .withChangeGradeScript(Gs2Grade.ScriptSetting.fromDict(data["changeGradeScript"]))
            .withLogSetting(Gs2Grade.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "transactionSettingV2": (_b = this.getTransactionSettingV2()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "changeGradeScript": (_c = this.getChangeGradeScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "logSetting": (_d = this.getLogSetting()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map