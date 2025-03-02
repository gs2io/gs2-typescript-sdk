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
var TakeoverSubscriptionStatusByUserIdRequest = /** @class */ (function () {
    function TakeoverSubscriptionStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.receipt = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    TakeoverSubscriptionStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.getReceipt = function () {
        return this.receipt;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.setReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.withReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    TakeoverSubscriptionStatusByUserIdRequest.fromDict = function (data) {
        return new TakeoverSubscriptionStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withReceipt(Gs2Money2.Receipt.fromDict(data["receipt"]))
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    TakeoverSubscriptionStatusByUserIdRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "receipt": (_a = this.getReceipt()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return TakeoverSubscriptionStatusByUserIdRequest;
}());
exports.default = TakeoverSubscriptionStatusByUserIdRequest;
//# sourceMappingURL=TakeoverSubscriptionStatusByUserIdRequest.js.map