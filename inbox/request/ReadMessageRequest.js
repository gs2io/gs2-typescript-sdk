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
var ReadMessageRequest = /** @class */ (function () {
    function ReadMessageRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.messageName = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    ReadMessageRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReadMessageRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReadMessageRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReadMessageRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReadMessageRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReadMessageRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReadMessageRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReadMessageRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReadMessageRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReadMessageRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    ReadMessageRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReadMessageRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    ReadMessageRequest.prototype.getMessageName = function () {
        return this.messageName;
    };
    ReadMessageRequest.prototype.setMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    ReadMessageRequest.prototype.withMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    ReadMessageRequest.prototype.getConfig = function () {
        return this.config;
    };
    ReadMessageRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    ReadMessageRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    ReadMessageRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReadMessageRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReadMessageRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReadMessageRequest.fromDict = function (data) {
        return new ReadMessageRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMessageName(data["messageName"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Inbox.Config.fromDict(item);
            }) : []);
    };
    ReadMessageRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "messageName": this.getMessageName(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ReadMessageRequest;
}());
exports.default = ReadMessageRequest;
//# sourceMappingURL=ReadMessageRequest.js.map