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
var WithdrawByUserIdRequest = /** @class */ (function () {
    function WithdrawByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.slot = null;
        this.withdrawCount = null;
        this.paidOnly = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    WithdrawByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    WithdrawByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    WithdrawByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    WithdrawByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    WithdrawByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getSlot = function () {
        return this.slot;
    };
    WithdrawByUserIdRequest.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getWithdrawCount = function () {
        return this.withdrawCount;
    };
    WithdrawByUserIdRequest.prototype.setWithdrawCount = function (withdrawCount) {
        this.withdrawCount = withdrawCount;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withWithdrawCount = function (withdrawCount) {
        this.withdrawCount = withdrawCount;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getPaidOnly = function () {
        return this.paidOnly;
    };
    WithdrawByUserIdRequest.prototype.setPaidOnly = function (paidOnly) {
        this.paidOnly = paidOnly;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withPaidOnly = function (paidOnly) {
        this.paidOnly = paidOnly;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    WithdrawByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    WithdrawByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    WithdrawByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WithdrawByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WithdrawByUserIdRequest.fromDict = function (data) {
        return new WithdrawByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withSlot(data["slot"])
            .withWithdrawCount(data["withdrawCount"])
            .withPaidOnly(data["paidOnly"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    WithdrawByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "slot": this.getSlot(),
            "withdrawCount": this.getWithdrawCount(),
            "paidOnly": this.getPaidOnly(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return WithdrawByUserIdRequest;
}());
exports.default = WithdrawByUserIdRequest;
//# sourceMappingURL=WithdrawByUserIdRequest.js.map