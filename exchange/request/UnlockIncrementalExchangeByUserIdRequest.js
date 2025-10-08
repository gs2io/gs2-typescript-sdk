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
var UnlockIncrementalExchangeByUserIdRequest = /** @class */ (function () {
    function UnlockIncrementalExchangeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.userId = null;
        this.lockTransactionId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    UnlockIncrementalExchangeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.getLockTransactionId = function () {
        return this.lockTransactionId;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.setLockTransactionId = function (lockTransactionId) {
        this.lockTransactionId = lockTransactionId;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.withLockTransactionId = function (lockTransactionId) {
        this.lockTransactionId = lockTransactionId;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnlockIncrementalExchangeByUserIdRequest.fromDict = function (data) {
        return new UnlockIncrementalExchangeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withUserId(data["userId"])
            .withLockTransactionId(data["lockTransactionId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    UnlockIncrementalExchangeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "userId": this.getUserId(),
            "lockTransactionId": this.getLockTransactionId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return UnlockIncrementalExchangeByUserIdRequest;
}());
exports.default = UnlockIncrementalExchangeByUserIdRequest;
//# sourceMappingURL=UnlockIncrementalExchangeByUserIdRequest.js.map