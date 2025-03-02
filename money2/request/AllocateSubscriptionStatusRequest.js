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
var AllocateSubscriptionStatusRequest = /** @class */ (function () {
    function AllocateSubscriptionStatusRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.receipt = null;
        this.duplicationAvoider = null;
    }
    AllocateSubscriptionStatusRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AllocateSubscriptionStatusRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AllocateSubscriptionStatusRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AllocateSubscriptionStatusRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AllocateSubscriptionStatusRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AllocateSubscriptionStatusRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AllocateSubscriptionStatusRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AllocateSubscriptionStatusRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AllocateSubscriptionStatusRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AllocateSubscriptionStatusRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    AllocateSubscriptionStatusRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AllocateSubscriptionStatusRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AllocateSubscriptionStatusRequest.prototype.getReceipt = function () {
        return this.receipt;
    };
    AllocateSubscriptionStatusRequest.prototype.setReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    AllocateSubscriptionStatusRequest.prototype.withReceipt = function (receipt) {
        this.receipt = receipt;
        return this;
    };
    AllocateSubscriptionStatusRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AllocateSubscriptionStatusRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AllocateSubscriptionStatusRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AllocateSubscriptionStatusRequest.fromDict = function (data) {
        return new AllocateSubscriptionStatusRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withReceipt(data["receipt"]);
    };
    AllocateSubscriptionStatusRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "receipt": this.getReceipt(),
        };
    };
    return AllocateSubscriptionStatusRequest;
}());
exports.default = AllocateSubscriptionStatusRequest;
//# sourceMappingURL=AllocateSubscriptionStatusRequest.js.map