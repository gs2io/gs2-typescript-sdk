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
import * as Gs2Formation from '../model';
var AcquireActionsToFormPropertiesRequest = /** @class */ (function () {
    function AcquireActionsToFormPropertiesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldName = null;
        this.index = null;
        this.acquireAction = null;
        this.queueNamespaceId = null;
        this.keyId = null;
        this.config = null;
    }
    AcquireActionsToFormPropertiesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getIndex = function () {
        return this.index;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getAcquireAction = function () {
        return this.acquireAction;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setAcquireAction = function (acquireAction) {
        this.acquireAction = acquireAction;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withAcquireAction = function (acquireAction) {
        this.acquireAction = acquireAction;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.getConfig = function () {
        return this.config;
    };
    AcquireActionsToFormPropertiesRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireActionsToFormPropertiesRequest.fromDict = function (data) {
        return new AcquireActionsToFormPropertiesRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldName(data["moldName"])
            .withIndex(data["index"])
            .withAcquireAction(Gs2Formation.AcquireAction.fromDict(data["acquireAction"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Formation.AcquireActionConfig.fromDict(item);
            }) : []);
    };
    AcquireActionsToFormPropertiesRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldName": this.getMoldName(),
            "index": this.getIndex(),
            "acquireAction": (_a = this.getAcquireAction()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return AcquireActionsToFormPropertiesRequest;
}());
export default AcquireActionsToFormPropertiesRequest;
//# sourceMappingURL=AcquireActionsToFormPropertiesRequest.js.map