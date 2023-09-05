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
var RevertRecordReceiptRequest = /** @class */ (function () {
    function RevertRecordReceiptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.receipt = null;
        this.duplicationAvoider = null;
    }
    RevertRecordReceiptRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RevertRecordReceiptRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RevertRecordReceiptRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RevertRecordReceiptRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RevertRecordReceiptRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RevertRecordReceiptRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RevertRecordReceiptRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RevertRecordReceiptRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RevertRecordReceiptRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RevertRecordReceiptRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RevertRecordReceiptRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RevertRecordReceiptRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RevertRecordReceiptRequest.prototype.getReceipt = function () {
        return this.receipt;
    };
    RevertRecordReceiptRequest.prototype.setReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    RevertRecordReceiptRequest.prototype.withReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    RevertRecordReceiptRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RevertRecordReceiptRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RevertRecordReceiptRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RevertRecordReceiptRequest.fromDict = function (data) {
        return new RevertRecordReceiptRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withReceipt(data["receipt"]);
    };
    RevertRecordReceiptRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "receipt": this.getReceipt(),
        };
    };
    return RevertRecordReceiptRequest;
}());
exports.default = RevertRecordReceiptRequest;
//# sourceMappingURL=RevertRecordReceiptRequest.js.map