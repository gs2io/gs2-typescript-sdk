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
import * as Gs2Exchange from '../model';
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.enableAwaitExchange = null;
        this.enableDirectExchange = null;
        this.queueNamespaceId = null;
        this.keyId = null;
        this.exchangeScript = null;
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
    UpdateNamespaceRequest.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    UpdateNamespaceRequest.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    UpdateNamespaceRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
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
            .withEnableAwaitExchange(data["enableAwaitExchange"])
            .withEnableDirectExchange(data["enableDirectExchange"])
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withExchangeScript(Gs2Exchange.ScriptSetting.fromDict(data["exchangeScript"]))
            .withLogSetting(Gs2Exchange.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "enableAwaitExchange": this.getEnableAwaitExchange(),
            "enableDirectExchange": this.getEnableDirectExchange(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "exchangeScript": (_a = this.getExchangeScript()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "logSetting": (_b = this.getLogSetting()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
export default UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map