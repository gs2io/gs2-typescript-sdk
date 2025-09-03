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
var CreateNamespaceRequest = /** @class */ (function () {
    function CreateNamespaceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.name = null;
        this.description = null;
        this.transactionSetting = null;
        this.assumeUserId = null;
        this.autoRunStampSheetNotification = null;
        this.autoRunTransactionNotification = null;
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
    CreateNamespaceRequest.prototype.getAssumeUserId = function () {
        return this.assumeUserId;
    };
    CreateNamespaceRequest.prototype.setAssumeUserId = function (assumeUserId) {
        this.assumeUserId = assumeUserId;
        return this;
    };
    CreateNamespaceRequest.prototype.withAssumeUserId = function (assumeUserId) {
        this.assumeUserId = assumeUserId;
        return this;
    };
    CreateNamespaceRequest.prototype.getAutoRunStampSheetNotification = function () {
        return this.autoRunStampSheetNotification;
    };
    CreateNamespaceRequest.prototype.setAutoRunStampSheetNotification = function (autoRunStampSheetNotification) {
        this.autoRunStampSheetNotification = autoRunStampSheetNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withAutoRunStampSheetNotification = function (autoRunStampSheetNotification) {
        this.autoRunStampSheetNotification = autoRunStampSheetNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.getAutoRunTransactionNotification = function () {
        return this.autoRunTransactionNotification;
    };
    CreateNamespaceRequest.prototype.setAutoRunTransactionNotification = function (autoRunTransactionNotification) {
        this.autoRunTransactionNotification = autoRunTransactionNotification;
        return this;
    };
    CreateNamespaceRequest.prototype.withAutoRunTransactionNotification = function (autoRunTransactionNotification) {
        this.autoRunTransactionNotification = autoRunTransactionNotification;
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
            .withTransactionSetting(Gs2Distributor.TransactionSetting.fromDict(data["transactionSetting"]))
            .withAssumeUserId(data["assumeUserId"])
            .withAutoRunStampSheetNotification(Gs2Distributor.NotificationSetting.fromDict(data["autoRunStampSheetNotification"]))
            .withAutoRunTransactionNotification(Gs2Distributor.NotificationSetting.fromDict(data["autoRunTransactionNotification"]))
            .withLogSetting(Gs2Distributor.LogSetting.fromDict(data["logSetting"]));
    };
    CreateNamespaceRequest.prototype.toDict = function () {
        var _a, _b, _c, _d;
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "transactionSetting": (_a = this.getTransactionSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "assumeUserId": this.getAssumeUserId(),
            "autoRunStampSheetNotification": (_b = this.getAutoRunStampSheetNotification()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "autoRunTransactionNotification": (_c = this.getAutoRunTransactionNotification()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "logSetting": (_d = this.getLogSetting()) === null || _d === void 0 ? void 0 : _d.toDict(),
        };
    };
    return CreateNamespaceRequest;
}());
exports.default = CreateNamespaceRequest;
//# sourceMappingURL=CreateNamespaceRequest.js.map