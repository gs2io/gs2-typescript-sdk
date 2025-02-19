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
var BatchReadMessagesRequest = /** @class */ (function () {
    function BatchReadMessagesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.messageNames = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    BatchReadMessagesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    BatchReadMessagesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchReadMessagesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchReadMessagesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    BatchReadMessagesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchReadMessagesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchReadMessagesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    BatchReadMessagesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchReadMessagesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchReadMessagesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    BatchReadMessagesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    BatchReadMessagesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    BatchReadMessagesRequest.prototype.getMessageNames = function () {
        return this.messageNames;
    };
    BatchReadMessagesRequest.prototype.setMessageNames = function (messageNames) {
        this.messageNames = messageNames;
        return this;
    };
    BatchReadMessagesRequest.prototype.withMessageNames = function (messageNames) {
        this.messageNames = messageNames;
        return this;
    };
    BatchReadMessagesRequest.prototype.getConfig = function () {
        return this.config;
    };
    BatchReadMessagesRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    BatchReadMessagesRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    BatchReadMessagesRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    BatchReadMessagesRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchReadMessagesRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchReadMessagesRequest.fromDict = function (data) {
        return new BatchReadMessagesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMessageNames(data.messageNames ?
            data.messageNames.map(function (item) {
                return item;
            }) : null)
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Inbox.Config.fromDict(item);
            }) : null);
    };
    BatchReadMessagesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "messageNames": this.getMessageNames() ?
                this.getMessageNames().map(function (item) {
                    return item;
                }) : null,
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return BatchReadMessagesRequest;
}());
exports.default = BatchReadMessagesRequest;
//# sourceMappingURL=BatchReadMessagesRequest.js.map