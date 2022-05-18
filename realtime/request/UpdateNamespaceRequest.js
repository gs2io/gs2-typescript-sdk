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
var Gs2Realtime = tslib_1.__importStar(require("../model"));
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.serverType = null;
        this.serverSpec = null;
        this.createNotification = null;
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
    UpdateNamespaceRequest.prototype.getServerType = function () {
        return this.serverType;
    };
    UpdateNamespaceRequest.prototype.setServerType = function (serverType) {
        this.serverType = serverType;
        return this;
    };
    UpdateNamespaceRequest.prototype.withServerType = function (serverType) {
        this.serverType = serverType;
        return this;
    };
    UpdateNamespaceRequest.prototype.getServerSpec = function () {
        return this.serverSpec;
    };
    UpdateNamespaceRequest.prototype.setServerSpec = function (serverSpec) {
        this.serverSpec = serverSpec;
        return this;
    };
    UpdateNamespaceRequest.prototype.withServerSpec = function (serverSpec) {
        this.serverSpec = serverSpec;
        return this;
    };
    UpdateNamespaceRequest.prototype.getCreateNotification = function () {
        return this.createNotification;
    };
    UpdateNamespaceRequest.prototype.setCreateNotification = function (createNotification) {
        this.createNotification = createNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withCreateNotification = function (createNotification) {
        this.createNotification = createNotification;
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
            .withServerType(data["serverType"])
            .withServerSpec(data["serverSpec"])
            .withCreateNotification(Gs2Realtime.NotificationSetting.fromDict(data["createNotification"]))
            .withLogSetting(Gs2Realtime.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "serverType": this.getServerType(),
            "serverSpec": this.getServerSpec(),
            "createNotification": (_a = this.getCreateNotification()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "logSetting": (_b = this.getLogSetting()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map