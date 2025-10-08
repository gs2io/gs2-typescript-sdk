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
var Gs2Inbox = tslib_1.__importStar(require("../model"));
var CreateGlobalMessageMasterRequest = /** @class */ (function () {
    function CreateGlobalMessageMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.metadata = null;
        this.readAcquireActions = null;
        this.expiresTimeSpan = null;
        this.expiresAt = null;
        this.messageReceptionPeriodEventId = null;
    }
    CreateGlobalMessageMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateGlobalMessageMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateGlobalMessageMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateGlobalMessageMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateGlobalMessageMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateGlobalMessageMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.getReadAcquireActions = function () {
        return this.readAcquireActions;
    };
    CreateGlobalMessageMasterRequest.prototype.setReadAcquireActions = function (readAcquireActions) {
        this.readAcquireActions = readAcquireActions;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.withReadAcquireActions = function (readAcquireActions) {
        this.readAcquireActions = readAcquireActions;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.getExpiresTimeSpan = function () {
        return this.expiresTimeSpan;
    };
    CreateGlobalMessageMasterRequest.prototype.setExpiresTimeSpan = function (expiresTimeSpan) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.withExpiresTimeSpan = function (expiresTimeSpan) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    };
    /** @deprecated */
    CreateGlobalMessageMasterRequest.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    /** @deprecated */
    CreateGlobalMessageMasterRequest.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    /** @deprecated */
    CreateGlobalMessageMasterRequest.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.getMessageReceptionPeriodEventId = function () {
        return this.messageReceptionPeriodEventId;
    };
    CreateGlobalMessageMasterRequest.prototype.setMessageReceptionPeriodEventId = function (messageReceptionPeriodEventId) {
        this.messageReceptionPeriodEventId = messageReceptionPeriodEventId;
        return this;
    };
    CreateGlobalMessageMasterRequest.prototype.withMessageReceptionPeriodEventId = function (messageReceptionPeriodEventId) {
        this.messageReceptionPeriodEventId = messageReceptionPeriodEventId;
        return this;
    };
    CreateGlobalMessageMasterRequest.fromDict = function (data) {
        return new CreateGlobalMessageMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withReadAcquireActions(data.readAcquireActions ?
            data.readAcquireActions.map(function (item) {
                return Gs2Inbox.AcquireAction.fromDict(item);
            }) : null)
            .withExpiresTimeSpan(Gs2Inbox.TimeSpan.fromDict(data["expiresTimeSpan"]))
            .withExpiresAt(data["expiresAt"])
            .withMessageReceptionPeriodEventId(data["messageReceptionPeriodEventId"]);
    };
    CreateGlobalMessageMasterRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "readAcquireActions": this.getReadAcquireActions() ?
                this.getReadAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "expiresTimeSpan": (_a = this.getExpiresTimeSpan()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "expiresAt": this.getExpiresAt(),
            "messageReceptionPeriodEventId": this.getMessageReceptionPeriodEventId(),
        };
    };
    return CreateGlobalMessageMasterRequest;
}());
exports.default = CreateGlobalMessageMasterRequest;
//# sourceMappingURL=CreateGlobalMessageMasterRequest.js.map