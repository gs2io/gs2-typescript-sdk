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
var WaitDumpUserDataRequest = /** @class */ (function () {
    function WaitDumpUserDataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.ownerId = null;
        this.transactionId = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    WaitDumpUserDataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    WaitDumpUserDataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WaitDumpUserDataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WaitDumpUserDataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    WaitDumpUserDataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WaitDumpUserDataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WaitDumpUserDataRequest.prototype.getOwnerId = function () {
        return this.ownerId;
    };
    WaitDumpUserDataRequest.prototype.setOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    WaitDumpUserDataRequest.prototype.withOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    WaitDumpUserDataRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    WaitDumpUserDataRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    WaitDumpUserDataRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    WaitDumpUserDataRequest.prototype.getUserId = function () {
        return this.userId;
    };
    WaitDumpUserDataRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WaitDumpUserDataRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WaitDumpUserDataRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    WaitDumpUserDataRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    WaitDumpUserDataRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    WaitDumpUserDataRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    WaitDumpUserDataRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WaitDumpUserDataRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WaitDumpUserDataRequest.fromDict = function (data) {
        return new WaitDumpUserDataRequest()
            .withOwnerId(data["ownerId"])
            .withTransactionId(data["transactionId"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    WaitDumpUserDataRequest.prototype.toDict = function () {
        return {
            "ownerId": this.getOwnerId(),
            "transactionId": this.getTransactionId(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return WaitDumpUserDataRequest;
}());
exports.default = WaitDumpUserDataRequest;
//# sourceMappingURL=WaitDumpUserDataRequest.js.map