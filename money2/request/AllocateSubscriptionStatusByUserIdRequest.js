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
var AllocateSubscriptionStatusByUserIdRequest = /** @class */ (function () {
    function AllocateSubscriptionStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.receipt = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AllocateSubscriptionStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.getReceipt = function () {
        return this.receipt;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.setReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.withReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AllocateSubscriptionStatusByUserIdRequest.fromDict = function (data) {
        return new AllocateSubscriptionStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withReceipt(Gs2Money2.Receipt.fromDict(data["receipt"]))
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AllocateSubscriptionStatusByUserIdRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "receipt": (_a = this.getReceipt()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AllocateSubscriptionStatusByUserIdRequest;
}());
exports.default = AllocateSubscriptionStatusByUserIdRequest;
//# sourceMappingURL=AllocateSubscriptionStatusByUserIdRequest.js.map