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
var WithdrawRequest = /** @class */ (function () {
    function WithdrawRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.slot = null;
        this.count = null;
        this.paidOnly = null;
        this.duplicationAvoider = null;
    }
    WithdrawRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    WithdrawRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WithdrawRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WithdrawRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    WithdrawRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WithdrawRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WithdrawRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    WithdrawRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WithdrawRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WithdrawRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    WithdrawRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    WithdrawRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    WithdrawRequest.prototype.getSlot = function () {
        return this.slot;
    };
    WithdrawRequest.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    WithdrawRequest.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    WithdrawRequest.prototype.getCount = function () {
        return this.count;
    };
    WithdrawRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    WithdrawRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    WithdrawRequest.prototype.getPaidOnly = function () {
        return this.paidOnly;
    };
    WithdrawRequest.prototype.setPaidOnly = function (paidOnly) {
        this.paidOnly = paidOnly;
        return this;
    };
    WithdrawRequest.prototype.withPaidOnly = function (paidOnly) {
        this.paidOnly = paidOnly;
        return this;
    };
    WithdrawRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    WithdrawRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WithdrawRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WithdrawRequest.fromDict = function (data) {
        return new WithdrawRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withSlot(data["slot"])
            .withCount(data["count"])
            .withPaidOnly(data["paidOnly"]);
    };
    WithdrawRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "slot": this.getSlot(),
            "count": this.getCount(),
            "paidOnly": this.getPaidOnly(),
        };
    };
    return WithdrawRequest;
}());
exports.default = WithdrawRequest;
//# sourceMappingURL=WithdrawRequest.js.map