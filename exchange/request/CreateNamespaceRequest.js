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
var Gs2Exchange = tslib_1.__importStar(require("../model"));
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.enableAwaitExchange = null;
        this.enableDirectExchange = null;
        this.transactionSetting = null;
        this.exchangeScript = null;
        this.incrementalExchangeScript = null;
        this.logSetting = null;
        this.queueNamespaceId = null;
        this.keyId = null;
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
    CreateNamespaceRequest.prototype.getEnableAwaitExchange = function () {
        return this.enableAwaitExchange;
    };
    CreateNamespaceRequest.prototype.setEnableAwaitExchange = function (enableAwaitExchange) {
        this.enableAwaitExchange = enableAwaitExchange;
        return this;
    };
    CreateNamespaceRequest.prototype.withEnableAwaitExchange = function (enableAwaitExchange) {
        this.enableAwaitExchange = enableAwaitExchange;
        return this;
    };
    CreateNamespaceRequest.prototype.getEnableDirectExchange = function () {
        return this.enableDirectExchange;
    };
    CreateNamespaceRequest.prototype.setEnableDirectExchange = function (enableDirectExchange) {
        this.enableDirectExchange = enableDirectExchange;
        return this;
    };
    CreateNamespaceRequest.prototype.withEnableDirectExchange = function (enableDirectExchange) {
        this.enableDirectExchange = enableDirectExchange;
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
    CreateNamespaceRequest.prototype.getExchangeScript = function () {
        return this.exchangeScript;
    };
    CreateNamespaceRequest.prototype.setExchangeScript = function (exchangeScript) {
        this.exchangeScript = exchangeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withExchangeScript = function (exchangeScript) {
        this.exchangeScript = exchangeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.getIncrementalExchangeScript = function () {
        return this.incrementalExchangeScript;
    };
    CreateNamespaceRequest.prototype.setIncrementalExchangeScript = function (incrementalExchangeScript) {
        this.incrementalExchangeScript = incrementalExchangeScript;
        return this;
    };
    CreateNamespaceRequest.prototype.withIncrementalExchangeScript = function (incrementalExchangeScript) {
        this.incrementalExchangeScript = incrementalExchangeScript;
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
    /** @deprecated */
    CreateNamespaceRequest.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    /** @deprecated */
    CreateNamespaceRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    CreateNamespaceRequest.fromDict = function (data) {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withEnableAwaitExchange(data["enableAwaitExchange"])
            .withEnableDirectExchange(data["enableDirectExchange"])
            .withTransactionSetting(Gs2Exchange.TransactionSetting.fromDict(data["transactionSetting"]))
            .withExchangeScript(Gs2Exchange.ScriptSetting.fromDict(data["exchangeScript"]))
            .withIncrementalExchangeScript(Gs2Exchange.ScriptSetting.fromDict(data["incrementalExchangeScript"]))
            .withLogSetting(Gs2Exchange.LogSetting.fromDict(data["logSetting"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"]);
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "enableAwaitExchange": this.getEnableAwaitExchange(),
            "enableDirectExchange": this.getEnableDirectExchange(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "exchangeScript": (_b = this.getExchangeScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "incrementalExchangeScript": (_c = this.getIncrementalExchangeScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "logSetting": (_d = this.getLogSetting()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map