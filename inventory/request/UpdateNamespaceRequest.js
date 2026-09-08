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
var Gs2Inventory = tslib_1.__importStar(require("../model"));
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.transactionSetting = null;
        this.transactionSettingV2 = null;
        this.acquireScript = null;
        this.overflowScript = null;
        this.consumeScript = null;
        this.simpleItemAcquireScript = null;
        this.simpleItemConsumeScript = null;
        this.bigItemAcquireScript = null;
        this.bigItemConsumeScript = null;
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
    /** @deprecated */
    UpdateNamespaceRequest.prototype.getTransactionSetting = function () {
        return this.transactionSetting;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.setTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.withTransactionSetting = function (transactionSetting) {
        this.transactionSetting = transactionSetting;
        return this;
    };
    UpdateNamespaceRequest.prototype.getTransactionSettingV2 = function () {
        return this.transactionSettingV2;
    };
    UpdateNamespaceRequest.prototype.setTransactionSettingV2 = function (transactionSettingV2) {
        this.transactionSettingV2 = transactionSettingV2;
        return this;
    };
    UpdateNamespaceRequest.prototype.withTransactionSettingV2 = function (transactionSettingV2) {
        this.transactionSettingV2 = transactionSettingV2;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAcquireScript = function () {
        return this.acquireScript;
    };
    UpdateNamespaceRequest.prototype.setAcquireScript = function (acquireScript) {
        this.acquireScript = acquireScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAcquireScript = function (acquireScript) {
        this.acquireScript = acquireScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getOverflowScript = function () {
        return this.overflowScript;
    };
    UpdateNamespaceRequest.prototype.setOverflowScript = function (overflowScript) {
        this.overflowScript = overflowScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withOverflowScript = function (overflowScript) {
        this.overflowScript = overflowScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getConsumeScript = function () {
        return this.consumeScript;
    };
    UpdateNamespaceRequest.prototype.setConsumeScript = function (consumeScript) {
        this.consumeScript = consumeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withConsumeScript = function (consumeScript) {
        this.consumeScript = consumeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getSimpleItemAcquireScript = function () {
        return this.simpleItemAcquireScript;
    };
    UpdateNamespaceRequest.prototype.setSimpleItemAcquireScript = function (simpleItemAcquireScript) {
        this.simpleItemAcquireScript = simpleItemAcquireScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withSimpleItemAcquireScript = function (simpleItemAcquireScript) {
        this.simpleItemAcquireScript = simpleItemAcquireScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getSimpleItemConsumeScript = function () {
        return this.simpleItemConsumeScript;
    };
    UpdateNamespaceRequest.prototype.setSimpleItemConsumeScript = function (simpleItemConsumeScript) {
        this.simpleItemConsumeScript = simpleItemConsumeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withSimpleItemConsumeScript = function (simpleItemConsumeScript) {
        this.simpleItemConsumeScript = simpleItemConsumeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getBigItemAcquireScript = function () {
        return this.bigItemAcquireScript;
    };
    UpdateNamespaceRequest.prototype.setBigItemAcquireScript = function (bigItemAcquireScript) {
        this.bigItemAcquireScript = bigItemAcquireScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withBigItemAcquireScript = function (bigItemAcquireScript) {
        this.bigItemAcquireScript = bigItemAcquireScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getBigItemConsumeScript = function () {
        return this.bigItemConsumeScript;
    };
    UpdateNamespaceRequest.prototype.setBigItemConsumeScript = function (bigItemConsumeScript) {
        this.bigItemConsumeScript = bigItemConsumeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withBigItemConsumeScript = function (bigItemConsumeScript) {
        this.bigItemConsumeScript = bigItemConsumeScript;
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
            .withTransactionSetting(Gs2Inventory.TransactionSetting.fromDict(data["transactionSetting"]))
            .withTransactionSettingV2(Gs2Inventory.TransactionSettingV2.fromDict(data["transactionSettingV2"]))
            .withAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["acquireScript"]))
            .withOverflowScript(Gs2Inventory.ScriptSetting.fromDict(data["overflowScript"]))
            .withConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["consumeScript"]))
            .withSimpleItemAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["simpleItemAcquireScript"]))
            .withSimpleItemConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["simpleItemConsumeScript"]))
            .withBigItemAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["bigItemAcquireScript"]))
            .withBigItemConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["bigItemConsumeScript"]))
            .withLogSetting(Gs2Inventory.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "transactionSettingV2": (_b = this.getTransactionSettingV2()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "acquireScript": (_c = this.getAcquireScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "overflowScript": (_d = this.getOverflowScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "consumeScript": (_e = this.getConsumeScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "simpleItemAcquireScript": (_f = this.getSimpleItemAcquireScript()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "simpleItemConsumeScript": (_g = this.getSimpleItemConsumeScript()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "bigItemAcquireScript": (_h = this.getBigItemAcquireScript()) === null || _h === void 0 ? void 0 : _h.toDict(),
            "bigItemConsumeScript": (_j = this.getBigItemConsumeScript()) === null || _j === void 0 ? void 0 : _j.toDict(),
            "logSetting": (_k = this.getLogSetting()) === null || _k === void 0 ? void 0 : _k.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map