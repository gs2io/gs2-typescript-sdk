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
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.enableAwaitExchange = null;
        this.enableDirectExchange = null;
        this.transactionSetting = null;
        this.exchangeScript = null;
        this.incrementalExchangeScript = null;
        this.acquireAwaitScript = null;
        this.logSetting = null;
        this.queueNamespaceId = null;
        this.keyId = null;
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
    UpdateNamespaceRequest.prototype.getEnableAwaitExchange = function () {
        return this.enableAwaitExchange;
    };
    UpdateNamespaceRequest.prototype.setEnableAwaitExchange = function (enableAwaitExchange) {
        this.enableAwaitExchange = enableAwaitExchange;
        return this;
    };
    UpdateNamespaceRequest.prototype.withEnableAwaitExchange = function (enableAwaitExchange) {
        this.enableAwaitExchange = enableAwaitExchange;
        return this;
    };
    UpdateNamespaceRequest.prototype.getEnableDirectExchange = function () {
        return this.enableDirectExchange;
    };
    UpdateNamespaceRequest.prototype.setEnableDirectExchange = function (enableDirectExchange) {
        this.enableDirectExchange = enableDirectExchange;
        return this;
    };
    UpdateNamespaceRequest.prototype.withEnableDirectExchange = function (enableDirectExchange) {
        this.enableDirectExchange = enableDirectExchange;
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
    UpdateNamespaceRequest.prototype.getExchangeScript = function () {
        return this.exchangeScript;
    };
    UpdateNamespaceRequest.prototype.setExchangeScript = function (exchangeScript) {
        this.exchangeScript = exchangeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withExchangeScript = function (exchangeScript) {
        this.exchangeScript = exchangeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getIncrementalExchangeScript = function () {
        return this.incrementalExchangeScript;
    };
    UpdateNamespaceRequest.prototype.setIncrementalExchangeScript = function (incrementalExchangeScript) {
        this.incrementalExchangeScript = incrementalExchangeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withIncrementalExchangeScript = function (incrementalExchangeScript) {
        this.incrementalExchangeScript = incrementalExchangeScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAcquireAwaitScript = function () {
        return this.acquireAwaitScript;
    };
    UpdateNamespaceRequest.prototype.setAcquireAwaitScript = function (acquireAwaitScript) {
        this.acquireAwaitScript = acquireAwaitScript;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAcquireAwaitScript = function (acquireAwaitScript) {
        this.acquireAwaitScript = acquireAwaitScript;
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
    /** @deprecated */
    UpdateNamespaceRequest.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    /** @deprecated */
    UpdateNamespaceRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    UpdateNamespaceRequest.fromDict = function (data) {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withEnableAwaitExchange(data["enableAwaitExchange"])
            .withEnableDirectExchange(data["enableDirectExchange"])
            .withTransactionSetting(Gs2Exchange.TransactionSetting.fromDict(data["transactionSetting"]))
            .withExchangeScript(Gs2Exchange.ScriptSetting.fromDict(data["exchangeScript"]))
            .withIncrementalExchangeScript(Gs2Exchange.ScriptSetting.fromDict(data["incrementalExchangeScript"]))
            .withAcquireAwaitScript(Gs2Exchange.ScriptSetting.fromDict(data["acquireAwaitScript"]))
            .withLogSetting(Gs2Exchange.LogSetting.fromDict(data["logSetting"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"]);
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d, _e;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "enableAwaitExchange": this.getEnableAwaitExchange(),
            "enableDirectExchange": this.getEnableDirectExchange(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "exchangeScript": (_b = this.getExchangeScript()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "incrementalExchangeScript": (_c = this.getIncrementalExchangeScript()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "acquireAwaitScript": (_d = this.getAcquireAwaitScript()) === null || _d === void 0 ? void 0 : _d.toDict(),
            "logSetting": (_e = this.getLogSetting()) === null || _e === void 0 ? void 0 : _e.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map