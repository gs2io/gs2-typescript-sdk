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
var AcquireForceByUserIdRequest = /** @class */ (function () {
    function AcquireForceByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.awaitName = null;
        this.config = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AcquireForceByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcquireForceByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcquireForceByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcquireForceByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AcquireForceByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getAwaitName = function () {
        return this.awaitName;
    };
    AcquireForceByUserIdRequest.prototype.setAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getConfig = function () {
        return this.config;
    };
    AcquireForceByUserIdRequest.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AcquireForceByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcquireForceByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireForceByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcquireForceByUserIdRequest.fromDict = function (data) {
        return new AcquireForceByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withAwaitName(data["awaitName"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Exchange.Config.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AcquireForceByUserIdRequest.prototype.toDict = function () {
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
    return AcquireForceByUserIdRequest;
}());
exports.default = AcquireForceByUserIdRequest;
//# sourceMappingURL=AcquireForceByUserIdRequest.js.map