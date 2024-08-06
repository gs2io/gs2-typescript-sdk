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
var Gs2Log = tslib_1.__importStar(require("../model"));
var SendInGameLogByUserIdRequest = /** @class */ (function () {
    function SendInGameLogByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.tags = null;
        this.payload = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SendInGameLogByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SendInGameLogByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SendInGameLogByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SendInGameLogByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SendInGameLogByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.getTags = function () {
        return this.tags;
    };
    SendInGameLogByUserIdRequest.prototype.setTags = function (tags) {
        this.tags = tags;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.withTags = function (tags) {
        this.tags = tags;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.getPayload = function () {
        return this.payload;
    };
    SendInGameLogByUserIdRequest.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SendInGameLogByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SendInGameLogByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SendInGameLogByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SendInGameLogByUserIdRequest.fromDict = function (data) {
        return new SendInGameLogByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTags(data.tags ?
            data.tags.map(function (item) {
                return Gs2Log.InGameLogTag.fromDict(item);
            }) : [])
            .withPayload(data["payload"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SendInGameLogByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "tags": this.getTags() ?
                this.getTags().map(function (item) {
                    return item.toDict();
                }) : [],
            "payload": this.getPayload(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SendInGameLogByUserIdRequest;
}());
exports.default = SendInGameLogByUserIdRequest;
//# sourceMappingURL=SendInGameLogByUserIdRequest.js.map