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
var RunTransactionRequest = /** @class */ (function () {
    function RunTransactionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.ownerId = null;
        this.namespaceName = null;
        this.userId = null;
        this.transaction = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    RunTransactionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RunTransactionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunTransactionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RunTransactionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RunTransactionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunTransactionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RunTransactionRequest.prototype.getOwnerId = function () {
        return this.ownerId;
    };
    RunTransactionRequest.prototype.setOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    RunTransactionRequest.prototype.withOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    RunTransactionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RunTransactionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RunTransactionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RunTransactionRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RunTransactionRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RunTransactionRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RunTransactionRequest.prototype.getTransaction = function () {
        return this.transaction;
    };
    RunTransactionRequest.prototype.setTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    RunTransactionRequest.prototype.withTransaction = function (transaction) {
        this.transaction = transaction;
        return this;
    };
    RunTransactionRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    RunTransactionRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RunTransactionRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RunTransactionRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RunTransactionRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RunTransactionRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RunTransactionRequest.fromDict = function (data) {
        return new RunTransactionRequest()
            .withOwnerId(data["ownerId"])
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTransaction(data["transaction"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    RunTransactionRequest.prototype.toDict = function () {
        return {
            "ownerId": this.getOwnerId(),
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "transaction": this.getTransaction(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return RunTransactionRequest;
}());
exports.default = RunTransactionRequest;
//# sourceMappingURL=RunTransactionRequest.js.map