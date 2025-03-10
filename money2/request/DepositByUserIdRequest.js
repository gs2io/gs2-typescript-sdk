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
var Gs2Money2 = tslib_1.__importStar(require("../model"));
var DepositByUserIdRequest = /** @class */ (function () {
    function DepositByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.slot = null;
        this.depositTransactions = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DepositByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DepositByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DepositByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DepositByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DepositByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DepositByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DepositByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DepositByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DepositByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DepositByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DepositByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DepositByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DepositByUserIdRequest.prototype.getSlot = function () {
        return this.slot;
    };
    DepositByUserIdRequest.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    DepositByUserIdRequest.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    DepositByUserIdRequest.prototype.getDepositTransactions = function () {
        return this.depositTransactions;
    };
    DepositByUserIdRequest.prototype.setDepositTransactions = function (depositTransactions) {
        this.depositTransactions = depositTransactions;
        return this;
    };
    DepositByUserIdRequest.prototype.withDepositTransactions = function (depositTransactions) {
        this.depositTransactions = depositTransactions;
        return this;
    };
    DepositByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DepositByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DepositByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DepositByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DepositByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DepositByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DepositByUserIdRequest.fromDict = function (data) {
        return new DepositByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withSlot(data["slot"])
            .withDepositTransactions(data.depositTransactions ?
            data.depositTransactions.map(function (item) {
                return Gs2Money2.DepositTransaction.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DepositByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "slot": this.getSlot(),
            "depositTransactions": this.getDepositTransactions() ?
                this.getDepositTransactions().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DepositByUserIdRequest;
}());
exports.default = DepositByUserIdRequest;
//# sourceMappingURL=DepositByUserIdRequest.js.map