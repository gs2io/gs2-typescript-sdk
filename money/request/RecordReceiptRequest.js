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
var RecordReceiptRequest = /** @class */ (function () {
    function RecordReceiptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.contentsId = null;
        this.receipt = null;
    }
    RecordReceiptRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RecordReceiptRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RecordReceiptRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RecordReceiptRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RecordReceiptRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RecordReceiptRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RecordReceiptRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RecordReceiptRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RecordReceiptRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RecordReceiptRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RecordReceiptRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RecordReceiptRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RecordReceiptRequest.prototype.getContentsId = function () {
        return this.contentsId;
    };
    RecordReceiptRequest.prototype.setContentsId = function (contentsId) {
        this.contentsId = contentsId;
        return this;
    };
    RecordReceiptRequest.prototype.withContentsId = function (contentsId) {
        this.contentsId = contentsId;
        return this;
    };
    RecordReceiptRequest.prototype.getReceipt = function () {
        return this.receipt;
    };
    RecordReceiptRequest.prototype.setReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    RecordReceiptRequest.prototype.withReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    RecordReceiptRequest.fromDict = function (data) {
        return new RecordReceiptRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withContentsId(data["contentsId"])
            .withReceipt(data["receipt"]);
    };
    RecordReceiptRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "contentsId": this.getContentsId(),
            "receipt": this.getReceipt(),
        };
    };
    return RecordReceiptRequest;
}());
exports.default = RecordReceiptRequest;
//# sourceMappingURL=RecordReceiptRequest.js.map