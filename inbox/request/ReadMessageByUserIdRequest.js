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
var ReadMessageByUserIdRequest = /** @class */ (function () {
    function ReadMessageByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.messageName = null;
        this.config = null;
        this.duplicationAvoider = null;
    }
    ReadMessageByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ReadMessageByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ReadMessageByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ReadMessageByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ReadMessageByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.getMessageName = function () {
        return this.messageName;
    };
    ReadMessageByUserIdRequest.prototype.setMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.withMessageName = function (messageName) {
        this.messageName = messageName;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    ReadMessageByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ReadMessageByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReadMessageByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ReadMessageByUserIdRequest.fromDict = function (data) {
        return new ReadMessageByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMessageName(data["messageName"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Inbox.Config.fromDict(item);
            }) : []);
    };
    ReadMessageByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "messageName": this.getMessageName(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ReadMessageByUserIdRequest;
}());
exports.default = ReadMessageByUserIdRequest;
//# sourceMappingURL=ReadMessageByUserIdRequest.js.map