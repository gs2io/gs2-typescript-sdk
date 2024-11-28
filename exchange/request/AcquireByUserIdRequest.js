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
var Gs2Exchange = tslib_1.__importStar(require("../model"));
var AcquireByUserIdRequest = /** @class */ (function () {
    function AcquireByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.awaitName = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AcquireByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcquireByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AcquireByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireByUserIdRequest.prototype.getAwaitName = function () {
        return this.awaitName;
    };
    AcquireByUserIdRequest.prototype.setAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    AcquireByUserIdRequest.prototype.withAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    AcquireByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    AcquireByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AcquireByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcquireByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcquireByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcquireByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireByUserIdRequest.fromDict = function (data) {
        return new AcquireByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withAwaitName(data["awaitName"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Exchange.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AcquireByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "awaitName": this.getAwaitName(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AcquireByUserIdRequest;
}());
exports.default = AcquireByUserIdRequest;
//# sourceMappingURL=AcquireByUserIdRequest.js.map