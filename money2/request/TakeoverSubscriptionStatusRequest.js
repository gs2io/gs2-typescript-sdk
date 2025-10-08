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
var TakeoverSubscriptionStatusRequest = /** @class */ (function () {
    function TakeoverSubscriptionStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.receipt = null;
        this.duplicationAvoider = null;
    }
    TakeoverSubscriptionStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    TakeoverSubscriptionStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    TakeoverSubscriptionStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    TakeoverSubscriptionStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    TakeoverSubscriptionStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    TakeoverSubscriptionStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    TakeoverSubscriptionStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    TakeoverSubscriptionStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    TakeoverSubscriptionStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    TakeoverSubscriptionStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    TakeoverSubscriptionStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    TakeoverSubscriptionStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    TakeoverSubscriptionStatusRequest.prototype.getReceipt = function () {
        return this.receipt;
    };
    TakeoverSubscriptionStatusRequest.prototype.setReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    TakeoverSubscriptionStatusRequest.prototype.withReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    TakeoverSubscriptionStatusRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    TakeoverSubscriptionStatusRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    TakeoverSubscriptionStatusRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    TakeoverSubscriptionStatusRequest.fromDict = function (data) {
        return new TakeoverSubscriptionStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withReceipt(data["receipt"]);
    };
    TakeoverSubscriptionStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "receipt": this.getReceipt(),
        };
    };
    return TakeoverSubscriptionStatusRequest;
}());
exports.default = TakeoverSubscriptionStatusRequest;
//# sourceMappingURL=TakeoverSubscriptionStatusRequest.js.map