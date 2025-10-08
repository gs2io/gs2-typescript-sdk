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
var BatchReadMessagesByUserIdRequest = /** @class */ (function () {
    function BatchReadMessagesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.messageNames = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    BatchReadMessagesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    BatchReadMessagesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    BatchReadMessagesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    BatchReadMessagesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    BatchReadMessagesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.getMessageNames = function () {
        return this.messageNames;
    };
    BatchReadMessagesByUserIdRequest.prototype.setMessageNames = function (messageNames) {
        this.messageNames = messageNames;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.withMessageNames = function (messageNames) {
        this.messageNames = messageNames;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    BatchReadMessagesByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    BatchReadMessagesByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    BatchReadMessagesByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchReadMessagesByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    BatchReadMessagesByUserIdRequest.fromDict = function (data) {
        return new BatchReadMessagesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMessageNames(data.messageNames ?
            data.messageNames.map(function (item) {
                return item;
            }) : null)
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Inbox.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    BatchReadMessagesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "messageNames": this.getMessageNames() ?
                this.getMessageNames().map(function (item) {
                    return item;
                }) : null,
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return BatchReadMessagesByUserIdRequest;
}());
exports.default = BatchReadMessagesByUserIdRequest;
//# sourceMappingURL=BatchReadMessagesByUserIdRequest.js.map