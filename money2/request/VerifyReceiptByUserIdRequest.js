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
var VerifyReceiptByUserIdRequest = /** @class */ (function () {
    function VerifyReceiptByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.contentName = null;
        this.receipt = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyReceiptByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyReceiptByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyReceiptByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyReceiptByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyReceiptByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.getContentName = function () {
        return this.contentName;
    };
    VerifyReceiptByUserIdRequest.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.getReceipt = function () {
        return this.receipt;
    };
    VerifyReceiptByUserIdRequest.prototype.setReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.withReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyReceiptByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyReceiptByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyReceiptByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyReceiptByUserIdRequest.fromDict = function (data) {
        return new VerifyReceiptByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withContentName(data["contentName"])
            .withReceipt(Gs2Money2.Receipt.fromDict(data["receipt"]))
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyReceiptByUserIdRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "contentName": this.getContentName(),
            "receipt": (_a = this.getReceipt()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyReceiptByUserIdRequest;
}());
exports.default = VerifyReceiptByUserIdRequest;
//# sourceMappingURL=VerifyReceiptByUserIdRequest.js.map