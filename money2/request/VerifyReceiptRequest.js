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
var VerifyReceiptRequest = /** @class */ (function () {
    function VerifyReceiptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.contentName = null;
        this.receipt = null;
        this.duplicationAvoider = null;
    }
    VerifyReceiptRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyReceiptRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyReceiptRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyReceiptRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyReceiptRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyReceiptRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyReceiptRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyReceiptRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyReceiptRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyReceiptRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyReceiptRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyReceiptRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyReceiptRequest.prototype.getContentName = function () {
        return this.contentName;
    };
    VerifyReceiptRequest.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    VerifyReceiptRequest.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    VerifyReceiptRequest.prototype.getReceipt = function () {
        return this.receipt;
    };
    VerifyReceiptRequest.prototype.setReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    VerifyReceiptRequest.prototype.withReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    VerifyReceiptRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyReceiptRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyReceiptRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyReceiptRequest.fromDict = function (data) {
        return new VerifyReceiptRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withContentName(data["contentName"])
            .withReceipt(Gs2Money2.Receipt.fromDict(data["receipt"]));
    };
    VerifyReceiptRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "contentName": this.getContentName(),
            "receipt": (_a = this.getReceipt()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return VerifyReceiptRequest;
}());
exports.default = VerifyReceiptRequest;
//# sourceMappingURL=VerifyReceiptRequest.js.map