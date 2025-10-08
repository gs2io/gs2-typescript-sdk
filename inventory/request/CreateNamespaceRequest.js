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
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.transactionSetting = null;
        this.acquireScript = null;
        this.overflowScript = null;
        this.consumeScript = null;
        this.simpleItemAcquireScript = null;
        this.simpleItemConsumeScript = null;
        this.bigItemAcquireScript = null;
        this.bigItemConsumeScript = null;
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
    CreateNamespaceRequest.prototype.getAcquireScript = function () {
        return this.acquireScript;
    };
    CreateNamespaceRequest.prototype.setAcquireScript = function (acquireScript) {
        this.acquireScript = acquireScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withAcquireScript = function (acquireScript) {
        this.acquireScript = acquireScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getOverflowScript = function () {
        return this.overflowScript;
    };
    CreateNamespaceRequest.prototype.setOverflowScript = function (overflowScript) {
        this.overflowScript = overflowScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withOverflowScript = function (overflowScript) {
        this.overflowScript = overflowScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getConsumeScript = function () {
        return this.consumeScript;
    };
    CreateNamespaceRequest.prototype.setConsumeScript = function (consumeScript) {
        this.consumeScript = consumeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withConsumeScript = function (consumeScript) {
        this.consumeScript = consumeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getSimpleItemAcquireScript = function () {
        return this.simpleItemAcquireScript;
    };
    CreateNamespaceRequest.prototype.setSimpleItemAcquireScript = function (simpleItemAcquireScript) {
        this.simpleItemAcquireScript = simpleItemAcquireScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withSimpleItemAcquireScript = function (simpleItemAcquireScript) {
        this.simpleItemAcquireScript = simpleItemAcquireScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getSimpleItemConsumeScript = function () {
        return this.simpleItemConsumeScript;
    };
    CreateNamespaceRequest.prototype.setSimpleItemConsumeScript = function (simpleItemConsumeScript) {
        this.simpleItemConsumeScript = simpleItemConsumeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withSimpleItemConsumeScript = function (simpleItemConsumeScript) {
        this.simpleItemConsumeScript = simpleItemConsumeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getBigItemAcquireScript = function () {
        return this.bigItemAcquireScript;
    };
    CreateNamespaceRequest.prototype.setBigItemAcquireScript = function (bigItemAcquireScript) {
        this.bigItemAcquireScript = bigItemAcquireScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withBigItemAcquireScript = function (bigItemAcquireScript) {
        this.bigItemAcquireScript = bigItemAcquireScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getBigItemConsumeScript = function () {
        return this.bigItemConsumeScript;
    };
    CreateNamespaceRequest.prototype.setBigItemConsumeScript = function (bigItemConsumeScript) {
        this.bigItemConsumeScript = bigItemConsumeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withBigItemConsumeScript = function (bigItemConsumeScript) {
        this.bigItemConsumeScript = bigItemConsumeScript;
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
            .withTransactionSetting(Gs2Inventory.TransactionSetting.fromDict(data["transactionSetting"]))
            .withAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["acquireScript"]))
            .withOverflowScript(Gs2Inventory.ScriptSetting.fromDict(data["overflowScript"]))
            .withConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["consumeScript"]))
            .withSimpleItemAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["simpleItemAcquireScript"]))
            .withSimpleItemConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["simpleItemConsumeScript"]))
            .withBigItemAcquireScript(Gs2Inventory.ScriptSetting.fromDict(data["bigItemAcquireScript"]))
            .withBigItemConsumeScript(Gs2Inventory.ScriptSetting.fromDict(data["bigItemConsumeScript"]))
            .withLogSetting(Gs2Inventory.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "acquireScript": (_b = this.getAcquireScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "overflowScript": (_c = this.getOverflowScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "consumeScript": (_d = this.getConsumeScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "simpleItemAcquireScript": (_e = this.getSimpleItemAcquireScript()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "simpleItemConsumeScript": (_f = this.getSimpleItemConsumeScript()) === null || _f === void 0 ? void 0 : _f.toDict(),
            "bigItemAcquireScript": (_g = this.getBigItemAcquireScript()) === null || _g === void 0 ? void 0 : _g.toDict(),
            "bigItemConsumeScript": (_h = this.getBigItemConsumeScript()) === null || _h === void 0 ? void 0 : _h.toDict(),
            "logSetting": (_j = this.getLogSetting()) === null || _j === void 0 ? void 0 : _j.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map