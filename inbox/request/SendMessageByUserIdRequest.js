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
var SendMessageByUserIdRequest = /** @class */ (function () {
    function SendMessageByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.metadata = null;
        this.readAcquireActions = null;
        this.expiresAt = null;
        this.expiresTimeSpan = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SendMessageByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SendMessageByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendMessageByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendMessageByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SendMessageByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendMessageByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendMessageByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SendMessageByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendMessageByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendMessageByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SendMessageByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendMessageByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendMessageByUserIdRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    SendMessageByUserIdRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SendMessageByUserIdRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SendMessageByUserIdRequest.prototype.getReadAcquireActions = function () {
        return this.readAcquireActions;
    };
    SendMessageByUserIdRequest.prototype.setReadAcquireActions = function (readAcquireActions) {
        this.readAcquireActions = readAcquireActions;
        return this;
    };
    SendMessageByUserIdRequest.prototype.withReadAcquireActions = function (readAcquireActions) {
        this.readAcquireActions = readAcquireActions;
        return this;
    };
    SendMessageByUserIdRequest.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    SendMessageByUserIdRequest.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    SendMessageByUserIdRequest.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    SendMessageByUserIdRequest.prototype.getExpiresTimeSpan = function () {
        return this.expiresTimeSpan;
    };
    SendMessageByUserIdRequest.prototype.setExpiresTimeSpan = function (expiresTimeSpan) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    };
    SendMessageByUserIdRequest.prototype.withExpiresTimeSpan = function (expiresTimeSpan) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    };
    SendMessageByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SendMessageByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SendMessageByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SendMessageByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SendMessageByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SendMessageByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SendMessageByUserIdRequest.fromDict = function (data) {
        return new SendMessageByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMetadata(data["metadata"])
            .withReadAcquireActions(data.readAcquireActions ?
            data.readAcquireActions.map(function (item) {
                return Gs2Inbox.AcquireAction.fromDict(item);
            }) : [])
            .withExpiresAt(data["expiresAt"])
            .withExpiresTimeSpan(Gs2Inbox.TimeSpan.fromDict(data["expiresTimeSpan"]))
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SendMessageByUserIdRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "metadata": this.getMetadata(),
            "readAcquireActions": this.getReadAcquireActions() ?
                this.getReadAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "expiresAt": this.getExpiresAt(),
            "expiresTimeSpan": (_a = this.getExpiresTimeSpan()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SendMessageByUserIdRequest;
}());
exports.default = SendMessageByUserIdRequest;
//# sourceMappingURL=SendMessageByUserIdRequest.js.map