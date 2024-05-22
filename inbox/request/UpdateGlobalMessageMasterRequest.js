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
var UpdateGlobalMessageMasterRequest = /** @class */ (function () {
    function UpdateGlobalMessageMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.globalMessageName = null;
        this.metadata = null;
        this.readAcquireActions = null;
        this.expiresTimeSpan = null;
        this.expiresAt = null;
        this.messageReceptionPeriodEventId = null;
    }
    UpdateGlobalMessageMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateGlobalMessageMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateGlobalMessageMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateGlobalMessageMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.getGlobalMessageName = function () {
        return this.globalMessageName;
    };
    UpdateGlobalMessageMasterRequest.prototype.setGlobalMessageName = function (globalMessageName) {
        this.globalMessageName = globalMessageName;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.withGlobalMessageName = function (globalMessageName) {
        this.globalMessageName = globalMessageName;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateGlobalMessageMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.getReadAcquireActions = function () {
        return this.readAcquireActions;
    };
    UpdateGlobalMessageMasterRequest.prototype.setReadAcquireActions = function (readAcquireActions) {
        this.readAcquireActions = readAcquireActions;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.withReadAcquireActions = function (readAcquireActions) {
        this.readAcquireActions = readAcquireActions;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.getExpiresTimeSpan = function () {
        return this.expiresTimeSpan;
    };
    UpdateGlobalMessageMasterRequest.prototype.setExpiresTimeSpan = function (expiresTimeSpan) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.withExpiresTimeSpan = function (expiresTimeSpan) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    UpdateGlobalMessageMasterRequest.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.getMessageReceptionPeriodEventId = function () {
        return this.messageReceptionPeriodEventId;
    };
    UpdateGlobalMessageMasterRequest.prototype.setMessageReceptionPeriodEventId = function (messageReceptionPeriodEventId) {
        this.messageReceptionPeriodEventId = messageReceptionPeriodEventId;
        return this;
    };
    UpdateGlobalMessageMasterRequest.prototype.withMessageReceptionPeriodEventId = function (messageReceptionPeriodEventId) {
        this.messageReceptionPeriodEventId = messageReceptionPeriodEventId;
        return this;
    };
    UpdateGlobalMessageMasterRequest.fromDict = function (data) {
        return new UpdateGlobalMessageMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withGlobalMessageName(data["globalMessageName"])
            .withMetadata(data["metadata"])
            .withReadAcquireActions(data.readAcquireActions ?
            data.readAcquireActions.map(function (item) {
                return Gs2Inbox.AcquireAction.fromDict(item);
            }) : [])
            .withExpiresTimeSpan(Gs2Inbox.TimeSpan.fromDict(data["expiresTimeSpan"]))
            .withExpiresAt(data["expiresAt"])
            .withMessageReceptionPeriodEventId(data["messageReceptionPeriodEventId"]);
    };
    UpdateGlobalMessageMasterRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "globalMessageName": this.getGlobalMessageName(),
            "metadata": this.getMetadata(),
            "readAcquireActions": this.getReadAcquireActions() ?
                this.getReadAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "expiresTimeSpan": (_a = this.getExpiresTimeSpan()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "expiresAt": this.getExpiresAt(),
            "messageReceptionPeriodEventId": this.getMessageReceptionPeriodEventId(),
        };
    };
    return UpdateGlobalMessageMasterRequest;
}());
exports.default = UpdateGlobalMessageMasterRequest;
//# sourceMappingURL=UpdateGlobalMessageMasterRequest.js.map