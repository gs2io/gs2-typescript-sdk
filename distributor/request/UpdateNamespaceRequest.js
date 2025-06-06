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
var Gs2Distributor = tslib_1.__importStar(require("../model"));
var UpdateNamespaceRequest = /** @class */ (function () {
    function UpdateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.description = null;
        this.assumeUserId = null;
        this.autoRunStampSheetNotification = null;
        this.autoRunTransactionNotification = null;
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
    UpdateNamespaceRequest.prototype.getAssumeUserId = function () {
        return this.assumeUserId;
    };
    UpdateNamespaceRequest.prototype.setAssumeUserId = function (assumeUserId) {
        this.assumeUserId = assumeUserId;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAssumeUserId = function (assumeUserId) {
        this.assumeUserId = assumeUserId;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAutoRunStampSheetNotification = function () {
        return this.autoRunStampSheetNotification;
    };
    UpdateNamespaceRequest.prototype.setAutoRunStampSheetNotification = function (autoRunStampSheetNotification) {
        this.autoRunStampSheetNotification = autoRunStampSheetNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAutoRunStampSheetNotification = function (autoRunStampSheetNotification) {
        this.autoRunStampSheetNotification = autoRunStampSheetNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.getAutoRunTransactionNotification = function () {
        return this.autoRunTransactionNotification;
    };
    UpdateNamespaceRequest.prototype.setAutoRunTransactionNotification = function (autoRunTransactionNotification) {
        this.autoRunTransactionNotification = autoRunTransactionNotification;
        return this;
    };
    UpdateNamespaceRequest.prototype.withAutoRunTransactionNotification = function (autoRunTransactionNotification) {
        this.autoRunTransactionNotification = autoRunTransactionNotification;
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
            .withAssumeUserId(data["assumeUserId"])
            .withAutoRunStampSheetNotification(Gs2Distributor.NotificationSetting.fromDict(data["autoRunStampSheetNotification"]))
            .withAutoRunTransactionNotification(Gs2Distributor.NotificationSetting.fromDict(data["autoRunTransactionNotification"]))
            .withLogSetting(Gs2Distributor.LogSetting.fromDict(data["logSetting"]));
    };
    UpdateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "assumeUserId": this.getAssumeUserId(),
            "autoRunStampSheetNotification": (_a = this.getAutoRunStampSheetNotification()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "autoRunTransactionNotification": (_b = this.getAutoRunTransactionNotification()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "logSetting": (_c = this.getLogSetting()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return UpdateNamespaceRequest;
}());
exports.default = UpdateNamespaceRequest;
//# sourceMappingURL=UpdateNamespaceRequest.js.map