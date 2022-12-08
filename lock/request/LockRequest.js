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
var LockRequest = /** @class */ (function () {
    function LockRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.propertyId = null;
        this.accessToken = null;
        this.transactionId = null;
        this.ttl = null;
        this.duplicationAvoider = null;
    }
    LockRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    LockRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    LockRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    LockRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    LockRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    LockRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    LockRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    LockRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    LockRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    LockRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    LockRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    LockRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    LockRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    LockRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    LockRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    LockRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    LockRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    LockRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    LockRequest.prototype.getTtl = function () {
        return this.ttl;
    };
    LockRequest.prototype.setTtl = function (ttl) {
        this.ttl = ttl;
        return this;
    };
    LockRequest.prototype.withTtl = function (ttl) {
        this.ttl = ttl;
        return this;
    };
    LockRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    LockRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    LockRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    LockRequest.fromDict = function (data) {
        return new LockRequest()
            .withNamespaceName(data["namespaceName"])
            .withPropertyId(data["propertyId"])
            .withAccessToken(data["accessToken"])
            .withTransactionId(data["transactionId"])
            .withTtl(data["ttl"]);
    };
    LockRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "propertyId": this.getPropertyId(),
            "accessToken": this.getAccessToken(),
            "transactionId": this.getTransactionId(),
            "ttl": this.getTtl(),
        };
    };
    return LockRequest;
}());
exports.default = LockRequest;
//# sourceMappingURL=LockRequest.js.map